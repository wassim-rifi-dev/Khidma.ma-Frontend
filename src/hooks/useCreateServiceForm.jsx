import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createProfessionalService } from "../services/ServiceServices";

export default function useCreateServiceForm() {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        title: "",
        city: "",
        category: "",
        description: "",
        price_min: "",
        price_max: "",
        hasStartingPrice: true,
        coverImage: null,
        galleryImages: [],
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState("");

    function handleChange(e) {
        const { name, value, type, checked } = e.target;

        setForm((currentForm) => ({
            ...currentForm,
            [name]: type === "checkbox" ? checked : value,
            ...(name === "hasStartingPrice" && !checked ? { price_max: "" } : {}),
        }));
    }

    function handleCoverImageChange(event) {
        const file = event.target.files?.[0] || null;

        setForm({ ...form, coverImage: file });
    }

    function handleGalleryImagesChange(event) {
        const files = Array.from(event.target.files || []).slice(0, 4);

        setForm({ ...form , galleryImages: files });
    }

    function removeCoverImage() {
        setForm({ ...form, coverImage: null });
    }

    function removeGalleryImage(indexToRemove) {
        setForm({ ...form, galleryImages: form.galleryImages.filter((_, index) => index !== indexToRemove) });
    }

    async function handleSubmit(event) {
        event.preventDefault();
        setIsSubmitting(true);
        setSubmitError("");

        try {
            const normalizedMinPrice = form.price_min.trim() ? Number(form.price_min) : null;
            const normalizedMaxPrice = form.hasStartingPrice
                ? (form.price_max.trim() ? Number(form.price_max) : normalizedMinPrice)
                : normalizedMinPrice;

            const formData = new FormData();
            formData.append("title", form.title.trim());
            formData.append("city", form.city.trim());
            formData.append("description", form.description.trim());

            if (normalizedMinPrice !== null) {
                formData.append("price_min", String(normalizedMinPrice));
            }

            if (normalizedMaxPrice !== null) {
                formData.append("price_max", String(normalizedMaxPrice));
            }

            if (form.coverImage) {
                formData.append("cover_image", form.coverImage);
            }

            form.galleryImages.forEach((image) => {
                if (image) {
                    formData.append("gallery_images[]", image);
                }
            });

            await createProfessionalService(formData);

            navigate("/professional/services");
        } catch (error) {
            const validationErrors = error?.errors ? Object.values(error.errors).flat() : [];
            setSubmitError(validationErrors[0] || error?.message || "Unable to create service.");
        } finally {
            setIsSubmitting(false);
        }
    }

    return {
        form,
        isSubmitting,
        submitError,
        handleChange,
        handleCoverImageChange,
        handleGalleryImagesChange,
        removeCoverImage,
        removeGalleryImage,
        handleSubmit,
    };
}
