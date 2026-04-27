import RecentRequestsCard from "./sections/RecentRequestsCard";
import ProfileStats from "./sections/ProfileStats";

export default function ProfileContent() {
    return (
        <div className="flex flex-col gap-5">
            <ProfileStats />
            <RecentRequestsCard />
        </div>
    );
}
