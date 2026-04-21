import { useState } from "react";
import Button from "./Button";
import Chat from "./Chat";

export default function Index() {
    const [isOpen , toogleOpen] = useState(false);
    return (
        <div className="relative hidden md:block">
            <Chat isOpen={isOpen} />
            <Button toogleOpen={toogleOpen} isOpen={isOpen} />
        </div>
    )
}