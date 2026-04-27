import WelcomeCard from "../components/Home/WelcomeCard";
import GetStartedSteps from "../components/Home/GetStartedSteps";
import ProfessionalHomePanels from "../components/Home/ProfessionalHomePanels";
import ProfessionalFooter from "../components/Home/ProfessionalFooter";
import ProfessionalLayout from "../components/Shared/ProfessionalLayout";
import useProfessionalHome from "../hooks/useProfessionalHome";

export default function Home() {
    const {
        user,
        professional,
        services,
        isLoading,
        error,
        completedSteps,
        hasPhoto,
        hasDescription,
        hasServices,
    } = useProfessionalHome();

    return (
        <ProfessionalLayout title="Professional dashboard">
            {isLoading ? (
                <div className="rounded-2xl bg-white p-8 text-sm font-medium text-slate-500 shadow-sm">
                    Loading dashboard...
                </div>
            ) : null}

            {!isLoading && error ? (
                <div className="rounded-2xl bg-white p-8 text-sm font-medium text-slate-500 shadow-sm">
                    {error}
                </div>
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
        </ProfessionalLayout>
    );
}

