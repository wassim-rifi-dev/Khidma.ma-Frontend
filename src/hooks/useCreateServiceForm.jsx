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
        coverImage: null,
        galleryImages: [],
    });

    function handleChange(e) {
        setForm({ ...form,  [e.target.name]: e.target.value});
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

    return {
        form,
        handleChange,
        handleCoverImageChange,
        handleGalleryImagesChange,
        removeCoverImage,
        removeGalleryImage,
    };
}
