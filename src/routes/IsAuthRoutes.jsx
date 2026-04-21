import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import LoadingScreen from "../components/ui/LoadingScreen";

export default function IsAuthRoute({ children }) {
    const token = localStorage.getItem("token");
    const { loading } = useContext(AuthContext);

    if (!token) {
        return <Navigate to={'/login'} replace />
    }

    if (loading) {
        return (
            <LoadingScreen
                title="Loading your account"
                subtitle="We are validating your token and preparing your dashboard."
            />
        );
    }

    return children;
}
