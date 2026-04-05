import { useDarkMode } from "./hooks/useDarkMode";
import Landing from "./pages/Landing";

export default function App() {
    const {dark , changeMode} = useDarkMode();
    return (
        <Landing isDark={dark} toogleDark={changeMode} />
    )
}