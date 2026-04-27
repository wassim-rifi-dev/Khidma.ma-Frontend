import { useState } from "react";
import { createRequest } from "../../services/services/RequestServices";

export default function useCreateRequestForm(serviceId, onSuccess) {
    const [form, setForm] = useState({
        message: "",
        preferred_date: "",
        preferred_time: "",
        address: "",
        price: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState("");

    function handleChange(event) {
        setForm({ ...form, [event.target.name]: event.target.value });
    }

    async function handleSubmit(event) {
        event.preventDefault();
        setSubmitError("");
        setIsSubmitting(true);

        try {
            const response = await createRequest(serviceId, form);

            window.dispatchEvent(new Event("client-request-created"));

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
            const validationErrors = err?.errors ? Object.values(err.errors).flat() : [];
            setSubmitError(validationErrors[0] || err?.message || "Failed to send your request.");
            console.error("Error : ", err);
        } finally {
            setIsSubmitting(false);
        }
    }

    return { form, isSubmitting, submitError, handleChange, handleSubmit };
}
