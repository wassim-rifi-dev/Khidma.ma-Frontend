import LeftSection from "../../components/Auth/LeftSection"
import RegisterForm from "../../components/Auth/Register/RightSection"

export default function Register() {
    return (
        <div className="flex  items-center">
            <LeftSection />
            <RegisterForm />
        </div>
    )
}