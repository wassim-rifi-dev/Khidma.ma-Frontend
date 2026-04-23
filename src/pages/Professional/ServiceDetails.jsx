import ProfessionalFooter from "../../components/Professional/Home/ProfessionalFooter";
import ServiceDetailsSection from "../../components/Professional/Services/Show";
import ProfessionalLayout from "../../components/Professional/Shared/ProfessionalLayout";

export default function ServiceDetails() {
    return (
        <ProfessionalLayout title="Service details" contentClassName="pt-24">
            <div className="mx-auto max-w-7xl">
                <ServiceDetailsSection />

                <ProfessionalFooter />
            </div>
        </ProfessionalLayout>
    );
}
