import EditProfileForm from "../../components/Client/EditProfile/EditProfileForm";
import ClientLayout from "../../components/Client/Shared/ClientLayout";

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
