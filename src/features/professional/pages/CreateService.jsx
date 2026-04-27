import CreateServiceForm from "../components/Services/Create/CreateServiceForm";
import ProfessionalLayout from "../components/Shared/ProfessionalLayout";

export default function CreateService() {
    return (
        <ProfessionalLayout title="Create service">
            <CreateServiceForm />
        </ProfessionalLayout>
    );
}
