import { useState } from "react";

export default function useCreateServiceForm() {
    const [form, setForm] = useState({
        title: "",
        city: "",
        category: "",
        description: "",
        price_min: "",
        price_max: "",
    });

    function handleChange(event) {
        const { name, value } = event.target;

        setForm((current) => ({
            ...current,
            [name]: value,
        }));
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    return {
        form,
        setForm,
        handleChange,
        handleSubmit,
    };
}
