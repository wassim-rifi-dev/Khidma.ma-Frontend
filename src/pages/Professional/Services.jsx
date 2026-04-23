import AllServices from "../../components/Professional/Services/AllServices";
import ProfessionalFooter from "../../components/Professional/Home/ProfessionalFooter";
import ProfessionalLayout from "../../components/Professional/Shared/ProfessionalLayout";

export default function Services() {
    return (
        <ProfessionalLayout title="Manage services">
            <div className="mx-auto max-w-7xl">
                <AllServices />

                <ProfessionalFooter />
            </div>
        </ProfessionalLayout>
    );
}
