import AuthProvider from "../features/auth/authContext";
import AppRoutes from "./routes";
import { BrowserRouter } from "react-router-dom";

export default function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <AppRoutes />
            </BrowserRouter>
        </AuthProvider>
    )
}