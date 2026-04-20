import { useContext, useState } from "react"
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export function useRegisterForm() {
    const {register} = useContext(AuthContext);
    const navigate = useNavigate();

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

        console.log({ ...form, [e.target.name]: e.target.value });
    }

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            await register(form);

            switch (form.role) {
                case 'client':
                    navigate('/client/home');
                    break;
                case 'professionale':
                    navigate('professional/home');
                    break;
            }
        } catch (err) {
            console.error("Error : " , err);
        }
    }

    return {form , handleChange , handleSubmit}
}