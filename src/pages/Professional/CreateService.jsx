import CreateServiceForm from "../../components/Professional/Services/Create/CreateServiceForm";
import ProfessionalLayout from "../../components/Professional/Shared/ProfessionalLayout";

export default function CreateService() {
    return (
        <ProfessionalLayout title="Create service">
            <CreateServiceForm />
        </ProfessionalLayout>
    );
}
