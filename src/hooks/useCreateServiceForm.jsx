import { useState } from "react";

export default function useCreateServiceForm() {
    const [form, setForm] = useState({
        title: "",
        city: "",
        category: "",
        description: "",
        price_min: "",
        price_max: "",
        hasStartingPrice: true,
    });

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value});
    }

    return {
        form,
        handleChange,
    };
}
