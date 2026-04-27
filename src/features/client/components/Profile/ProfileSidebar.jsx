import PersonalInfoCard from "./sections/PersonalInfoCard";
import AccountSettingsCard from "./sections/AccountSettingsCard";

export default function ProfileSidebar() {
    return (
        <div className="flex flex-col gap-5">
            <PersonalInfoCard />
            <AccountSettingsCard />
        </div>
    );
}
