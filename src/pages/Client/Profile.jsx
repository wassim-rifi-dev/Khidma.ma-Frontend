import Header from "../../components/Client/Home/Header";
import Footer from "../../components/Landing/Footer";

export default function Home({isDark , toogleDark}) {
    return (
        <div className={`min-h-screen transition-colors duration-300 bg-white`}>
            <Header isDark={isDark} toogleDark={toogleDark} />

            <main className="mt-18">
                
            </main>

            <Footer />
        </div>
    )
}