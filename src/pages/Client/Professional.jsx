import { useParams } from "react-router-dom";
import Header from "../../components/Client/Shared/ClientHeader";
import ProfessionalProfile from "../../components/Client/Professionals/ProfessionalProfile";
import Footer from "../../components/Landing/Footer";
import useProfessionalProfile from "../../hooks/useProfessionalProfile";

export default function Professional({isDark , toogleDark}) {
    const { professionalId } = useParams();
    const { profile, isLoading, error } = useProfessionalProfile(professionalId);

    return (
        <div className={`min-h-screen transition-colors duration-300 bg-white`}>
            <Header isDark={isDark} toogleDark={toogleDark} />

            <main className="mt-18">
                <ProfessionalProfile profile={profile} isLoading={isLoading} error={error} />
            </main>

            <Footer />
        </div>
    )
}
