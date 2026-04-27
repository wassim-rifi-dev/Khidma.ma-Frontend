import EditProfessionalProfileForm from "../components/EditProfile/EditProfessionalProfileForm";
import ProfessionalLayout from "../components/Shared/ProfessionalLayout";

export default function EditProfile() {
    return (
        <ProfessionalLayout title="Edit professional profile">
            <EditProfessionalProfileForm />
        </ProfessionalLayout>
    );
}
