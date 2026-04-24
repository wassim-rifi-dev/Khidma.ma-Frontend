import { useEffect, useMemo, useState } from "react";
import {
    getAllProfessional,
    updateVerifyProfessionalStatus,
} from "../../services/admin/professionalsServices";
import {
    buildProfessionalsSummaryCards,
    formatAdminProfessionals,
} from "../../utils/Helpers/admin/Professionals";

export default function useAdminProfessionals() {
    const [allProfessionals, setAllProfessionals] = useState([]);
    const [activeFilter, setActiveFilter] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");
    const [feedback, setFeedback] = useState(null);
    const [loading, setLoading] = useState(true);
    const [pendingProfessionalId, setPendingProfessionalId] = useState(null);

    useEffect(() => {
        async function fetchProfessionalsSummary() {
            try {
                setLoading(true);
                setFeedback(null);

                const response = await getAllProfessional();
                const professionals = response?.data?.professionals ?? [];

                setAllProfessionals(professionals);
            } catch (error) {
                console.error("Error fetching admin professionals summary:", error);
                setFeedback({
                    type: "error",
                    message: error?.message || "Unable to load professionals right now.",
                });
            } finally {
                setLoading(false);
            }
        }

        fetchProfessionalsSummary();
    }, []);

    const professionals = useMemo(() => {
        const normalizedQuery = searchQuery.trim().toLowerCase();

        return formatAdminProfessionals(allProfessionals).filter((professional) => {
            if (activeFilter === "verified" && !professional.isVerified) {
                return false;
            }

            if (activeFilter === "pending" && professional.isVerified) {
                return false;
            }

            if (!normalizedQuery) {
                return true;
            }

            return [
                professional.name,
                professional.username,
                professional.specialty,
                professional.city,
                professional.status,
            ]
                .filter(Boolean)
                .some((value) => value.toLowerCase().includes(normalizedQuery));
        });
    }, [activeFilter, allProfessionals, searchQuery]);

    const summaryCards = useMemo(
        () => buildProfessionalsSummaryCards(allProfessionals),
        [allProfessionals]
    );

    async function toggleVerification(professionalId, nextIsVerified) {
        const targetProfessional = allProfessionals.find((professional) => professional?.id === professionalId);

        if (!targetProfessional) {
            return;
        }

        try {
            setPendingProfessionalId(professionalId);
            setFeedback(null);

            const response = await updateVerifyProfessionalStatus(professionalId, {
                is_verified: nextIsVerified,
            });
            const updatedProfessional = response?.data?.professional;

            setAllProfessionals((currentProfessionals) =>
                currentProfessionals.map((professional) =>
                    professional?.id === professionalId ? updatedProfessional : professional
                )
            );
            setFeedback({
                type: "success",
                message: response?.message || "Professional verification updated successfully.",
            });
        } catch (error) {
            setFeedback({
                type: "error",
                message: error?.message || "Unable to update professional verification.",
            });
        } finally {
            setPendingProfessionalId(null);
        }
    }

    return {
        activeFilter,
        feedback,
        loading,
        pendingProfessionalId,
        professionals,
        searchQuery,
        setActiveFilter,
        setSearchQuery,
        summaryCards,
        toggleVerification,
    };
}
