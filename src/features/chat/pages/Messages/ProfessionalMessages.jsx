import MessagesWorkspace from "../../components/MessagesWorkspace";
import ProfessionalLayout from "../../../professional/components/Shared/ProfessionalLayout";
import { useSearchParams } from "react-router-dom";

export default function ProfessionalMessages() {
    const [searchParams] = useSearchParams();
    const preferredChatId = Number(searchParams.get("chat")) || null;

    return (
        <ProfessionalLayout title="Messages" contentClassName="min-h-screen box-border pt-24 pb-6 lg:h-screen lg:overflow-hidden">
            <MessagesWorkspace variant="professional" preferredChatId={preferredChatId} />
        </ProfessionalLayout>
    );
}
