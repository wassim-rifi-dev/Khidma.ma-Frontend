import { useContext, useState } from "react"
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export function useLoginForm() {
    const {login} = useContext(AuthContext);
    const navigate = useNavigate();

    const [form , setForm] = useState({
        email: '',
        password: '',
    });

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            await login(form);

            navigate('/home');
        } catch (err) {
            console.error("Error : " , err);
        }
    }

    return {form , handleChange , handleSubmit}
}