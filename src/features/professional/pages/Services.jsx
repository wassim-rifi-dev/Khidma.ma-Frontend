import AllServices from "../components/Services/AllServices";
import ProfessionalFooter from "../components/Home/ProfessionalFooter";
import ProfessionalLayout from "../components/Shared/ProfessionalLayout";

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
