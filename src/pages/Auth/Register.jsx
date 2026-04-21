import Footer from "../../components/Auth/Layouts/Footer"
import Header from "../../components/Auth/Layouts/Header"
import RegisterForm from "../../components/Auth/Register/RigisterForm"

export default function Register() {
    return (
        <div className="flex flex-col min-h-screen bg-[#F8F9FA]">
            <Header />

            <main className="flex flex-col items-center justify-center flex-1 gap-5 py-10">
                <RegisterForm />
            </main>

            <Footer />
        </div>
    )
}
