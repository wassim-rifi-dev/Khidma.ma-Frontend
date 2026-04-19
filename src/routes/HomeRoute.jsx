import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import Home from "../pages/Client/Home";

export default function HomeRoute() {
    const { user } = useContext(AuthContext);

    if (!user) {
        return <Navigate to={'/login'} replace />
    }

    if (user.role === 'client') {
        return <Home />
    }

    return <Navigate to="/login" replace />;
}