import { useContext, useState } from "react"
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export function useLoginForm() {
    const {login} = useContext(AuthContext);
    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState("");

    const [form , setForm] = useState({
        email: '',
        password: '',
    });

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setIsSubmitting(true);
        setError("");

        try {
            await login(form);

            navigate('/home');
        } catch (err) {
            console.error("Error : " , err);
            const validationErrors = err?.errors ? Object.values(err.errors).flat() : [];
            setError(validationErrors[0] || err?.message || "Unable to log in.");
        } finally {
            setIsSubmitting(false);
        }
    }

    return {form , handleChange , handleSubmit, isSubmitting, error}
}
