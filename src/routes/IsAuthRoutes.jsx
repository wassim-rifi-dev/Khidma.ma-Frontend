import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export default function IsAuthRoute({ children }) {
    const token = localStorage.getItem("token");
    const { loading } = useContext(AuthContext);

    if (!token) {
        return <Navigate to={'/login'} replace />
    }

    if (loading) return <div>Loading...</div>;

    return children;
}