import { useContext, useState } from "react"
import { AuthContext } from "../authContext";
import { useNavigate } from "react-router-dom";

export function useRegisterForm() {
    const {register} = useContext(AuthContext);
    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState("");

    const [form , setForm] = useState({
        first_name: '',
        last_name: '',
        username: '',
        email: '',
        phone: '',
        role: '',
        password: '',
        password_confirmation: '',
        category: '',
        city: '',
        description: ''
    });

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setIsSubmitting(true);
        setError("");

        try {
            await register(form);

            navigate('/home');
        } catch (err) {
            console.error("Error : " , err);
            const validationErrors = err?.errors ? Object.values(err.errors).flat() : [];
            setError(validationErrors[0] || err?.message || "Unable to create your account.");
        } finally {
            setIsSubmitting(false);
        }
    }

    return {form , handleChange , handleSubmit, isSubmitting, error}
}
