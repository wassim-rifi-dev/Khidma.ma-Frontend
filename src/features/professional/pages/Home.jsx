import ProfessionalHomeContent from "../components/Home/ProfessionalHomeContent";
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
            <ProfessionalHomeContent
                user={user}
                professional={professional}
                services={services}
                isLoading={isLoading}
                error={error}
                completedSteps={completedSteps}
                hasPhoto={hasPhoto}
                hasDescription={hasDescription}
                hasServices={hasServices}
            />
        </ProfessionalLayout>
    );
}

