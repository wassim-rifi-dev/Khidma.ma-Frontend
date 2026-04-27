import { useContext } from "react";
import { AuthContext } from "../features/auth/authContext";
import { Navigate } from "react-router-dom";
import LoadingScreen from "../components/ui/LoadingScreen";

export default function RoleRoutes({ allowedRole, children }) {

    const { user, loading } = useContext(AuthContext);
    const token = localStorage.getItem("token");

    if (loading) {
        return (
            <LoadingScreen
                title="Checking permissions"
                subtitle="We are confirming your role and unlocking the right pages."
            />
        );
    }

    if (!token || !user) {
        return <Navigate to="/login" replace />;
    }

    if (!allowedRole.includes(user.role)) {
        return <Navigate to="/unauthorized" replace />
    }

    return children;
}
