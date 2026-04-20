import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function IsAuthRoute({ children }) {
    const token = localStorage.getItem("token");

    if (!token) {
        return <Navigate to={'/login'} replace />
    }

    return children;
}