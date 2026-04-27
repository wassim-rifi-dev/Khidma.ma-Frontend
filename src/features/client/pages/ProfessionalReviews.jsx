import { useParams } from "react-router-dom";
import ClientLayout from "../components/Shared/ClientLayout";
import ProfessionalReviewsList from "../components/Professionals/ProfessionalReviewsList";
import useProfessionalProfile from "../../professional/hooks/useProfessionalProfile";

export default function ProfessionalReviews({ isDark, toogleDark }) {
    const { professionalId } = useParams();
    const { profile, isLoading, error } = useProfessionalProfile(professionalId);

    return (
        <ClientLayout isDark={isDark} toogleDark={toogleDark}>
            <ProfessionalReviewsList profile={profile} isLoading={isLoading} error={error} />
        </ClientLayout>
    );
}
