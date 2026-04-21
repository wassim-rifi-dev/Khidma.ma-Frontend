import EditProfileForm from "../../components/Client/EditProfile/EditProfileForm";
import Header from "../../components/Client/Shared/ClientHeader";
import Footer from "../../components/Landing/Footer";

export default function EditProfile({isDark , toogleDark}) {
    return (
        <div className={`min-h-screen transition-colors duration-300 bg-white`}>
            <Header isDark={isDark} toogleDark={toogleDark} />

            <main className="mt-18 flex items-center justify-center bg-[#F6F6F7]">
                <EditProfileForm />
            </main>

            <Footer />
        </div>
    )
}
