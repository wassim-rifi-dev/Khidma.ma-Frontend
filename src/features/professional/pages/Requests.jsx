import RequestsSection from "../components/Requests";
import ProfessionalFooter from "../components/Home/ProfessionalFooter";
import ProfessionalLayout from "../components/Shared/ProfessionalLayout";

export default function Requests() {
    return (
        <ProfessionalLayout contentClassName="pt-24" title="Manage requests">
            <RequestsSection />
            <ProfessionalFooter />
        </ProfessionalLayout>
    );
}
