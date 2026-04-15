import Footer from "../../components/Auth/Layouts/Footer"
import Header from "../../components/Auth/Layouts/Header"
import RegisterForm from "../../components/Auth/Register/RigisterForm"

export default function Register() {
    return (
        <div className="flex flex-col">
            <Header />
            <main className="flex flex-col gap-5">
                <RegisterForm />
            </main>
            <Footer />
        </div>
    )
}