import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

export default function RoleRoutes({ allowedRole , children }) {
    const { user } = useContext(AuthContext);

    if (!user) {
        return <Navigate to={'/login'} replace />
    }

    if (!allowedRole.includes(user.role)) {
        return <Navigate to={'/unauthorized'} replace />
    }

    return  children;
}