import Footer from "../../components/Auth/Layouts/Footer"
import Header from "../../components/Auth/Layouts/Header"
import StepRole from "../../components/Auth/Register/Steps/StepRole"

export default function Register() {
    return (
        <div className="flex flex-col">
            <Header />
            <main className="flex flex-col gap-5">
                <StepRole />
            </main>
            <Footer />
        </div>
    )
}