import { useContext, useState } from "react"
import { AuthContext } from "../context/AuthContext";

export function useLoginForm() {
    const {register} = useContext(AuthContext);

    const [form , setForm] = useState({
        email: '',
        password: '',
    });

    function handleChange(e) {
        const f = { ...form, [e.target.name]: e.target.value };

        console.log(f);
        

        setForm(f);
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