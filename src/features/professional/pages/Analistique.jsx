import AnalyticsSection from "../components/Analistique";
import ProfessionalFooter from "../components/Home/ProfessionalFooter";
import ProfessionalLayout from "../components/Shared/ProfessionalLayout";

export default function Analistique() {
    return (
        <ProfessionalLayout title="Analytics overview">
            <AnalyticsSection />
            <ProfessionalFooter />
        </ProfessionalLayout>
    );
}
