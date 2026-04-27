import ProfessionalFooter from "../components/Home/ProfessionalFooter";
import ServiceDetailsSection from "../components/Services/Show";
import ProfessionalLayout from "../components/Shared/ProfessionalLayout";

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
