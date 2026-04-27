import { useParams } from "react-router-dom";
import ProfessionalProfile from "../components/Professionals/ProfessionalProfile";
import useProfessionalProfile from "../../professional/hooks/useProfessionalProfile";
import ClientLayout from "../components/Shared/ClientLayout";

export default function Professional({isDark , toogleDark}) {
    const { professionalId } = useParams();
    const { profile, isLoading, error } = useProfessionalProfile(professionalId);

    return (
        <ClientLayout isDark={isDark} toogleDark={toogleDark}>
            <ProfessionalProfile profile={profile} isLoading={isLoading} error={error} />
        </ClientLayout>
    )
}
