import MessagesWorkspace from "../../components/Chat/MessagesWorkspace";
import ProfessionalLayout from "../../components/Professional/Shared/ProfessionalLayout";

export default function ProfessionalMessages() {
    return (
        <ProfessionalLayout title="Messages" contentClassName="pt-24 pb-6">
            <MessagesWorkspace variant="professional" />
        </ProfessionalLayout>
    );
}
