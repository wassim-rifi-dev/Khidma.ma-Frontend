import RequestsSection from "../../components/Professional/Requests";
import ProfessionalFooter from "../../components/Professional/Home/ProfessionalFooter";
import ProfessionalLayout from "../../components/Professional/Shared/ProfessionalLayout";

export default function Requests() {
    return (
        <ProfessionalLayout contentClassName="pt-24" title="Manage requests">
            <RequestsSection />
            <ProfessionalFooter />
        </ProfessionalLayout>
    );
}
