import Footer from "../components/Layouts/Footer";
import Header from "../components/Layouts/Header";
import LoginForm from "../components/Login/LoginForm";

export default function Login() {
    return (
        <div className="flex flex-col min-h-screen bg-[#F8F9FA]">
            <Header />

            <main className="flex flex-col items-center justify-center flex-1 gap-5 py-10">
                <LoginForm />
            </main>

            <Footer />
        </div>
    )
}
