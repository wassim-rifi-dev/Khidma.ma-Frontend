import MessagesWorkspace from "../../components/Chat/MessagesWorkspace";
import ProfessionalLayout from "../../components/Professional/Shared/ProfessionalLayout";
import { useSearchParams } from "react-router-dom";

export default function ProfessionalMessages() {
    const [searchParams] = useSearchParams();
    const preferredChatId = Number(searchParams.get("chat")) || null;

    return (
        <ProfessionalLayout title="Messages" contentClassName="h-screen overflow-hidden box-border pt-24 pb-6">
            <MessagesWorkspace variant="professional" preferredChatId={preferredChatId} />
        </ProfessionalLayout>
    );
}
