import ProfessionalFooter from "../../components/Professional/Home/ProfessionalFooter";
import RequestDetailsContent from "../../components/Professional/Requests/RequestDetailsContent";
import ProfessionalLayout from "../../components/Professional/Shared/ProfessionalLayout";

export default function RequestDetails() {
    return (
        <ProfessionalLayout contentClassName="pt-24" title="Request details">
            <RequestDetailsContent />
            <ProfessionalFooter />
        </ProfessionalLayout>
    );
}
