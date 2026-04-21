import ProfileSidebar from "./ProfileSidebar";
import ProfileContent from "./ProfileContent";

export default function ProfileOverview() {
    return (
        <div className="grid gap-6 lg:grid-cols-[280px_minmax(0,1fr)] xl:grid-cols-[300px_minmax(0,1fr)]">
            <ProfileSidebar />
            <ProfileContent />
        </div>
    );
}
