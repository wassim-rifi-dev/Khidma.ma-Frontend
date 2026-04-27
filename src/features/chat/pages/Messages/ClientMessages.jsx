import MessagesWorkspace from "../../components/MessagesWorkspace";
import ClientLayout from "../../../client/components/Shared/ClientLayout";
import { useSearchParams } from "react-router-dom";

export default function ClientMessages() {
    const [searchParams] = useSearchParams();
    const preferredChatId = Number(searchParams.get("chat")) || null;

    return (
        <ClientLayout
            includeFooter={false}
            className="min-h-screen bg-[#f6f8fc] transition-colors duration-300"
            mainClassName="min-h-screen box-border px-4 pb-6 pt-24 sm:px-6 lg:h-screen lg:overflow-hidden lg:px-8"
        >
            <MessagesWorkspace variant="client" preferredChatId={preferredChatId} />
        </ClientLayout>
    );
}
