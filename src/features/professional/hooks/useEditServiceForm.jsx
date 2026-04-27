import { useEffect, useMemo, useState } from "react";

function normalizePrice(value) {
    if (value === null || value === undefined || value === "") {
        return "";
    }

    return String(value);
}

export default function useEditServiceForm(service, onSave) {
    const [form, setForm] = useState({
        title: "",
        city: "",
        description: "",
        price_min: "",
        price_max: "",
        hasStartingPrice: true,
    });

    useEffect(() => {
        if (!service) {
            return;
        }

        setForm({
            title: service.title || "",
            city: service.city || "",
            description: service.description || "",
            price_min: normalizePrice(service.price_min),
            price_max: normalizePrice(service.price_max),
            hasStartingPrice: Boolean(service.price_max),
        });
    }, [service]);

    const isValid = useMemo(() => {
        return form.title.trim() && form.city.trim() && form.price_min.trim();
    }, [form]);

    function handleChange(event) {
        const { name, value, type, checked } = event.target;

        setForm((current) => ({
            ...current,
            [name]: type === "checkbox" ? checked : value,
            ...(name === "hasStartingPrice" && !checked ? { price_max: "" } : {}),
        }));
    }

    function handleSubmit(event) {
        event.preventDefault();

        if (!isValid || !service) {
            return;
        }

        onSave?.(service.id, {
            ...service,
            title: form.title.trim(),
            city: form.city.trim(),
            description: form.description.trim(),
            price_min: form.price_min.trim() ? Number(form.price_min) : null,
            price_max: form.hasStartingPrice && form.price_max.trim() ? Number(form.price_max) : null,
        });
    }

    return {
        form,
        isValid,
        handleChange,
        handleSubmit,
    };
}
