import Main from "../../components/Client/EditProfile/Main";
import Header from "../../components/Client/Home/Header";
import Footer from "../../components/Landing/Footer";

export default function EditProfile({isDark , toogleDark}) {
    return (
        <div className={`min-h-screen transition-colors duration-300 bg-white`}>
            <Header isDark={isDark} toogleDark={toogleDark} />

            <main className="mt-18 flex items-center justify-center bg-[#F6F6F7]">
                <Main />
            </main>

            <Footer />
        </div>
    )
}
