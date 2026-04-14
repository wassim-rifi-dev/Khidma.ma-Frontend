// import { useDarkMode } from "./hooks/useDarkMode";
// import Landing from "./pages/Landing";

import Register from "./pages/Auth/Register";
import AuthProvider from "./context/AuthProvider";
import AppRoutes from "./routes/AppRoutes";
import { BrowserRouter } from "react-router-dom";

export default function App() {
    // const {dark , changeMode} = useDarkMode();
    return (
        // <Landing isDark={dark} toogleDark={changeMode} />
        <AuthProvider>
            <BrowserRouter>
                <AppRoutes />
            </BrowserRouter>
        </AuthProvider>
    )
}