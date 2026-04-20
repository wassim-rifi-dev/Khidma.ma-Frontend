import { useContext, useState } from "react"
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export function useLoginForm() {
    const {user , login} = useContext(AuthContext);
    const navigate = useNavigate();

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
            await login(form);

            switch (user.role) {
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