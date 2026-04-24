import MessagesWorkspace from "../../components/Chat/MessagesWorkspace";
import ClientLayout from "../../components/Client/Shared/ClientLayout";
import { useSearchParams } from "react-router-dom";

export default function ClientMessages() {
    const [searchParams] = useSearchParams();
    const preferredChatId = Number(searchParams.get("chat")) || null;

    return (
        <ClientLayout
            includeFooter={false}
            className="min-h-screen bg-[#f6f8fc] transition-colors duration-300"
            mainClassName="mt-18 h-[calc(100dvh-4.5rem)] overflow-hidden px-4 py-6 sm:px-6 lg:px-8"
        >
            <MessagesWorkspace variant="client" preferredChatId={preferredChatId} />
        </ClientLayout>
    );
}
