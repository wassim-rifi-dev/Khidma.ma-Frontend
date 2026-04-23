import CreateServiceForm from "../../components/Professional/Services/Create/CreateServiceForm";
import ProfessionalLayout from "../../components/Professional/Shared/ProfessionalLayout";
import useCreateServiceForm from "../../hooks/useCreateServiceForm";

export default function CreateService() {
    const {form , handleChange} = useCreateServiceForm();

    return (
        <ProfessionalLayout title="Create service">
            <CreateServiceForm form={form} handleChange={handleChange}  />
        </ProfessionalLayout>
    );
}
