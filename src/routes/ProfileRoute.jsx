import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../features/auth/authContext";
import Profile from "../features/client/pages/Profile";
import LoadingScreen from "../components/ui/LoadingScreen";

export default function ProfileRoute() {
    const token = localStorage.getItem("token");
    const { loading } = useContext(AuthContext);

    if (!token) {
        return <Navigate to="/login" replace />;
    }

    if (loading) {
        return (
            <LoadingScreen
                title="Loading your profile"
                subtitle="We are opening the right profile for your account."
            />
        );
    }

    return <Profile />;
}
