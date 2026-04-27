import ProfilePreviewContent from "../components/Profile/ProfilePreviewContent";
import ProfessionalLayout from "../components/Shared/ProfessionalLayout";
import useProfessionalProfilePreview from "../hooks/useProfessionalProfilePreview";

export default function ProfilePreview() {
    const { user, professional, isLoading, error } = useProfessionalProfilePreview();

    return (
        <ProfessionalLayout contentClassName="pt-24" title="Profile preview">
            <ProfilePreviewContent
                user={user}
                professional={professional}
                isLoading={isLoading}
                error={error}
            />
        </ProfessionalLayout>
    );
}
