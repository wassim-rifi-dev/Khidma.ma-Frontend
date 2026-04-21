import PersonelInfo from "./Left/PersonelInfo";
import ProfileSetting from "./Left/ProfileSetting";

export default function LeftSide() {
    return (
        <div className="flex flex-col gap-4">
            <PersonelInfo />
            <ProfileSetting />
        </div>
    )
}