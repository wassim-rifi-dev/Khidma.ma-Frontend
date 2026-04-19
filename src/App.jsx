import AuthProvider from "./context/AuthProvider";
import AppRoutes from "./routes/AppRoutes";
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