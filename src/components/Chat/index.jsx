import { useState } from "react";
import { useLocation } from "react-router-dom";
import Button from "./Button";
import Chat from "./Chat";

export default function Index() {
    const [isOpen , toogleOpen] = useState(false);
    const { pathname } = useLocation();

    if (pathname === "/messages") {
        return null;
    }

    return (
        <div className="relative hidden md:block">
            <Chat isOpen={isOpen} />
            <Button toogleOpen={toogleOpen} isOpen={isOpen} />
        </div>
    )
}
