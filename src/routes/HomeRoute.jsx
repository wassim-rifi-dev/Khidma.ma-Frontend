import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import ClientHome from "../pages/Client/Home";
import LoadingScreen from "../components/ui/LoadingScreen";

export default function HomeRoute({isDark , toogleDark}) {
    const {loading} = useContext(AuthContext);
    const token = localStorage.getItem("token");

    if (!token) {
        return <Navigate to={'/login'} replace />
    }

    if (loading) {
        return (
            <LoadingScreen
                title="Loading your workspace"
                subtitle="We are preparing the right home page for your account."
            />
        );
    }

    return <ClientHome isDark={isDark} toogleDark={toogleDark} />;
}
