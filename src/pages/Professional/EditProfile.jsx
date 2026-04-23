import EditProfessionalProfileForm from "../../components/Professional/EditProfile/EditProfessionalProfileForm";
import ProfessionalLayout from "../../components/Professional/Shared/ProfessionalLayout";

export default function EditProfile() {
    return (
        <ProfessionalLayout title="Edit professional profile">
            <EditProfessionalProfileForm />
        </ProfessionalLayout>
    );
}
