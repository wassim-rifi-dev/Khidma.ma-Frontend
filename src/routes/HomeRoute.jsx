import { Navigate } from "react-router-dom";
import Home from "../pages/Client/Home";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function HomeRoute({isDark , toogleDark}) {
    const {user} = useContext(AuthContext);
    const token = localStorage.getItem("token");

    if (!token) {
        return <Navigate to={'/login'} replace />
    }

    if (user.role === 'client') {
        return <Home isDark={isDark} toogleDark={toogleDark} />
    }

    return <Navigate to="/login" replace />;
}