import { useContext, useEffect, useMemo, useState } from "react";
import { AuthContext } from "../../auth/authContext";
import {
    deleteUser,
    getAllUser,
    updateUserStatus,
} from "../services/usersServices";
import {
    buildAdminUsersSummaryCards,
    formatAdminUsers,
} from "../../../shared/utils/Helpers/admin/Users";

export default function useAdminUsers() {
    const { user: currentUser } = useContext(AuthContext);
    const [allUsers, setAllUsers] = useState([]);
    const [activeFilter, setActiveFilter] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");
    const [loading, setLoading] = useState(true);
    const [feedback, setFeedback] = useState(null);
    const [pendingAction, setPendingAction] = useState(null);

    useEffect(() => {
        async function fetchUsers() {
            try {
                setLoading(true);
                setFeedback(null);

                const usersResponse = await getAllUser();

                setAllUsers(usersResponse?.data?.users ?? []);
            } catch (error) {
                console.error("Error fetching admin users:", error);
                setFeedback({
                    type: "error",
                    message: error?.message || "Unable to load users right now.",
                });
            } finally {
                setLoading(false);
            }
        }

        fetchUsers();
    }, []);

    const users = useMemo(() => {
        const normalizedQuery = searchQuery.trim().toLowerCase();

        return formatAdminUsers(allUsers)
            .map((user) => ({
                ...user,
                canToggleStatus: user.id !== currentUser?.id,
                canDelete: user.id !== currentUser?.id,
            }))
            .filter((user) => {
                if (activeFilter === "active" && !user.isActive) {
                    return false;
                }

                if (activeFilter === "suspended" && user.isActive) {
                    return false;
                }

                if (!normalizedQuery) {
                    return true;
                }

                return [
                    user.name,
                    user.username,
                    user.email,
                    user.role,
                ]
                    .filter(Boolean)
                    .some((value) => value.toLowerCase().includes(normalizedQuery));
            });
    }, [activeFilter, allUsers, currentUser?.id, searchQuery]);

    const summaryCards = useMemo(
        () => buildAdminUsersSummaryCards(allUsers),
        [allUsers]
    );

    async function toggleUserStatus(userId, nextIsActive) {
        const targetUser = allUsers.find((user) => user?.id === userId);

        if (!targetUser) {
            return;
        }

        try {
            setPendingAction({ userId, type: "status" });
            setFeedback(null);

            const response = await updateUserStatus(userId, { is_active: nextIsActive });
            const updatedUser = response?.data?.user;

            setAllUsers((currentUsers) =>
                currentUsers.map((user) => (user?.id === userId ? updatedUser : user))
            );
            setFeedback({
                type: "success",
                message: response?.message || "User status updated successfully.",
            });
        } catch (error) {
            setFeedback({
                type: "error",
                message: error?.message || "Unable to update user status.",
            });
        } finally {
            setPendingAction(null);
        }
    }

    async function removeUser(userId) {
        const targetUser = allUsers.find((user) => user?.id === userId);

        if (!targetUser) {
            return;
        }

        try {
            setPendingAction({ userId, type: "delete" });
            setFeedback(null);

            const response = await deleteUser(userId);

            setAllUsers((currentUsers) =>
                currentUsers.filter((user) => user?.id !== userId)
            );
            setFeedback({
                type: "success",
                message: response?.message || "User deleted successfully.",
            });
        } catch (error) {
            setFeedback({
                type: "error",
                message: error?.message || "Unable to delete user.",
            });
        } finally {
            setPendingAction(null);
        }
    }

    return {
        activeFilter,
        feedback,
        loading,
        pendingAction,
        removeUser,
        searchQuery,
        setActiveFilter,
        setSearchQuery,
        summaryCards,
        toggleUserStatus,
        users,
    };
}
