import GetStartedSteps from "./GetStartedSteps";
import ProfessionalFooter from "./ProfessionalFooter";
import ProfessionalHomePanels from "./ProfessionalHomePanels";
import WelcomeCard from "./WelcomeCard";
import ProfessionalStateCard from "../Shared/ProfessionalStateCard";

export default function ProfessionalHomeContent({
    user,
    professional,
    services,
    isLoading,
    error,
    completedSteps,
    hasPhoto,
    hasDescription,
    hasServices,
}) {
    return (
        <>
            {isLoading ? (
                <ProfessionalStateCard>Loading dashboard...</ProfessionalStateCard>
            ) : null}

            {!isLoading && error ? (
                <ProfessionalStateCard tone="error">{error}</ProfessionalStateCard>
            ) : null}

            {!isLoading && !error ? (
                <>
                    <WelcomeCard user={user} />
                    <GetStartedSteps
                        professional={professional}
                        hasPhoto={hasPhoto}
                        hasDescription={hasDescription}
                        hasServices={hasServices}
                        completedSteps={completedSteps}
                    />
                    <ProfessionalHomePanels
                        user={user}
                        professional={professional}
                        services={services}
                        hasPhoto={hasPhoto}
                        hasDescription={hasDescription}
                    />
                </>
            ) : null}

            <ProfessionalFooter />
        </>
    );
}
