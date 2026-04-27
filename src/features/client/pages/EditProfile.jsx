import EditProfileForm from "../components/EditProfile/EditProfileForm";
import ClientLayout from "../components/Shared/ClientLayout";

export default function EditProfile({isDark , toogleDark}) {
    return (
        <ClientLayout
            isDark={isDark}
            toogleDark={toogleDark}
            mainClassName="mt-18 flex items-center justify-center bg-[#F6F6F7]"
        >
                <EditProfileForm />
        </ClientLayout>
    )
}
