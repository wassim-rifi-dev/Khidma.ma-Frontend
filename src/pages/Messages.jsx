import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import ClientMessages from "./Messages/ClientMessages";
import ProfessionalMessages from "./Messages/ProfessionalMessages";

export default function Messages() {
    const { user } = useContext(AuthContext);

    if (!user) {
        return null;
    }

    if (user.role === "admin") {
        return <Navigate to="/admin/dashboard" replace />;
    }

    if (user.role === "professional") {
        return <ProfessionalMessages />;
    }

    return <ClientMessages />;
}
