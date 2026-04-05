import { useState } from "react";

export function useDarkMode() {
    const [dark , toogleDark] = useState(() => {
        localStorage.getItem('dark');
    });

    function changeMode() {
        toogleDark(!dark);
        localStorage.setItem('dark' , dark);
    }

    return {dark , changeMode}
}