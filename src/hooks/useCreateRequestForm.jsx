import { useState } from "react";
import { createRequest } from "../services/RequestServices";

export default function useCreateRequestForm(serviceId, onSuccess) {
    const [form, setForm] = useState({
        message: "",
        preferred_date: "",
        preferred_time: "",
        address: "",
        price: "",
    });

    function handleChange(event) {
        setForm({ ...form, [event.target.name]: event.target.value });
    }

    async function handleSubmit(event) {
        event.preventDefault();

        try {
            const response = await createRequest(serviceId, form);

            setForm({
                message: "",
                preferred_date: "",
                preferred_time: "",
                address: "",
                price: "",
            });

            if (onSuccess) {
                onSuccess(response);
            }
        } catch (err) {
            console.error("Error : ", err);
        }
    }

    return { form, handleChange, handleSubmit };
}
