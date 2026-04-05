import { useEffect, useState } from "react";

export function useDarkMode() {
    const [dark , toogleDark] = useState(() => {
        return localStorage.getItem('dark') || false;
    });

    useEffect(() => {
        localStorage.setItem('dark' , dark);
    } , [dark])

    function changeMode() {
        toogleDark(!dark);
        localStorage.setItem('dark' , dark);
    }

    return {dark , changeMode}
}