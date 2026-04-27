import ProfessionalFooter from "../components/Home/ProfessionalFooter";
import RequestDetailsContent from "../components/Requests/RequestDetailsContent";
import ProfessionalLayout from "../components/Shared/ProfessionalLayout";

export default function RequestDetails() {
    return (
        <ProfessionalLayout contentClassName="pt-24" title="Request details">
            <RequestDetailsContent />
            <ProfessionalFooter />
        </ProfessionalLayout>
    );
}
