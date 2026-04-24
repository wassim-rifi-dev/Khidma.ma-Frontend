import MessagesWorkspace from "../../components/Chat/MessagesWorkspace";
import ClientLayout from "../../components/Client/Shared/ClientLayout";

export default function ClientMessages() {
    return (
        <ClientLayout
            includeFooter={false}
            className="min-h-screen bg-[#f6f8fc] transition-colors duration-300"
            mainClassName="mt-18 px-4 py-6 sm:px-6 lg:px-8"
        >
            <MessagesWorkspace variant="client" />
        </ClientLayout>
    );
}
