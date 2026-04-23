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

    function handleChange(event) {
        const { name, value, type, checked } = event.target;

        setForm((current) => {
            const nextValue = type === "checkbox" ? checked : value;

            return {
                ...current,
                [name]: nextValue,
                ...(name === "hasStartingPrice" && !checked ? { price_max: "" } : {}),
            };
        });
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
