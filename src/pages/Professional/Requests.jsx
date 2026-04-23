import RequestsHeader from "../../components/Professional/Requests/RequestsHeader";
import RequestsList from "../../components/Professional/Requests/RequestsList";
import ProfessionalFooter from "../../components/Professional/Home/ProfessionalFooter";
import ProfessionalLayout from "../../components/Professional/Shared/ProfessionalLayout";

export default function Requests() {
    return (
        <ProfessionalLayout contentClassName="pt-24" title="Manage requests">
            <RequestsHeader />
            <RequestsList />
            <ProfessionalFooter />
        </ProfessionalLayout>
    );
}
