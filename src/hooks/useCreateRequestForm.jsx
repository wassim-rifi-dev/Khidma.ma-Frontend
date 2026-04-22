import { useState } from "react";
import { createRequest } from "../services/RequestServices";

export default function useCreateRequestForm(serviceId) {
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
            await createRequest(serviceId, form);
        } catch (err) {
            console.error("Error : ", err);
        }
    }

    return { form, handleChange, handleSubmit };
}
