import { useEffect, useState } from "react";

export function useDarkMode() {
    const [dark , toogleDark] = useState(() => {
        return JSON.parse(localStorage.getItem('dark') || false);
    });

    useEffect(() => {
        localStorage.setItem('dark' , dark);
    } , [dark])

    function changeMode() {
        toogleDark(!dark);
    }

    return {dark , changeMode}
}