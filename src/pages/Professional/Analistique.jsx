import AnalyticsSection from "../../components/Professional/Analistique";
import ProfessionalFooter from "../../components/Professional/Home/ProfessionalFooter";
import ProfessionalLayout from "../../components/Professional/Shared/ProfessionalLayout";

export default function Analistique() {
    return (
        <ProfessionalLayout title="Analytics overview">
            <AnalyticsSection />
            <ProfessionalFooter />
        </ProfessionalLayout>
    );
}
