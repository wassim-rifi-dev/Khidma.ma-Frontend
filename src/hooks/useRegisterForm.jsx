import { useContext, useState } from "react"
import { AuthContext } from "../context/AuthContext";

export function useRegisterForm() {
    const {register} = useContext(AuthContext);

    const [form , setForm] = useState({
        name: '',
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

        try {
            await register(form);

            window.location.href = '/home';
        } catch (err) {
            console.error("Error : " , err);
        }
    }

    return {form , handleChange , handleSubmit}
}