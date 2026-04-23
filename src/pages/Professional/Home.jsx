import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import WelcomeCard from "../../components/Professional/Home/WelcomeCard";
import GetStartedSteps from "../../components/Professional/Home/GetStartedSteps";
import ProfessionalHomePanels from "../../components/Professional/Home/ProfessionalHomePanels";
import ProfessionalFooter from "../../components/Professional/Home/ProfessionalFooter";
import ProfessionalLayout from "../../components/Professional/Shared/ProfessionalLayout";

export default function Home() {
    const { user } = useContext(AuthContext);

    return (
        <ProfessionalLayout title="Professional dashboard">
            <WelcomeCard user={user} />
            <GetStartedSteps />
            <ProfessionalHomePanels />
            <ProfessionalFooter />
        </ProfessionalLayout>
    );
}
