import { useContext, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import defaultProfile from "../assets/Profile/default_profile.jpg";
import { getAllCategories } from "../services/CategoryServices";
import {
    getMyProfessionalProfile,
    updateProfessionalProfile,
} from "../services/ProfessionalServices";
import { updateInfo } from "../services/userProfileServices";
import getUserPhotoUrl from "../utils/getUserPhotoUrl";

const maxImageSize = 2 * 1024 * 1024;

export default function useEditProfessionalProfileForm() {
    const { setUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const [form, setForm] = useState({
        first_name: "",
        last_name: "",
        username: "",
        email: "",
        phone: "",
        city: "",
        description: "",
        category_id: "",
    });
    const [categories, setCategories] = useState([]);
    const [professional, setProfessional] = useState(null);
    const [imagePreview, setImagePreview] = useState(defaultProfile);
    const [selectedImage, setSelectedImage] = useState(null);
    const [removePhoto, setRemovePhoto] = useState(false);
    const [uploadError, setUploadError] = useState("");
    const [submitError, setSubmitError] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [fileInputKey, setFileInputKey] = useState(0);

    useEffect(() => {
        let isMounted = true;

        async function fetchData() {
            setIsLoading(true);
            setSubmitError("");

            try {
                const [profileResponse, categoriesResponse] = await Promise.all([
                    getMyProfessionalProfile(),
                    getAllCategories(),
                ]);

                if (!isMounted) {
                    return;
                }

                const user = profileResponse?.data?.user || null;
                const nextProfessional = profileResponse?.data?.professional || null;
                const nextCategories = categoriesResponse?.data?.categories || [];

                setProfessional(nextProfessional);
                setCategories(nextCategories);
                setForm({
                    first_name: user?.first_name || "",
                    last_name: user?.last_name || "",
                    username: user?.username || "",
                    email: user?.email || "",
                    phone: user?.phone ? `+212 ${user.phone.startsWith("0") ? user.phone.slice(1) : user.phone}` : "",
                    city: nextProfessional?.city || "",
                    description: nextProfessional?.description || "",
                    category_id: String(
                        nextProfessional?.categorie_id ||
                        nextProfessional?.category?.id ||
                        "",
                    ),
                });
                setImagePreview(getUserPhotoUrl(user?.photo) || defaultProfile);
                setSelectedImage(null);
                setRemovePhoto(false);
                setUploadError("");
            } catch (error) {
                if (isMounted) {
                    setSubmitError(error?.message || "Unable to load your professional profile.");
                }
            } finally {
                if (isMounted) {
                    setIsLoading(false);
                }
            }
        }

        fetchData();

        return () => {
            isMounted = false;
        };
    }, []);

    const categoryName = useMemo(() => {
        return categories.find((category) => String(category.id) === String(form.category_id))?.name || "";
    }, [categories, form.category_id]);

    function handleChange(event) {
        const { name, value } = event.target;
        setForm((currentForm) => ({
            ...currentForm,
            [name]: value,
        }));
    }

    function handleImageChange(event) {
        const file = event.target.files?.[0];

        if (!file) {
            return;
        }

        if (!file.type.startsWith("image/")) {
            setUploadError("Please choose a valid image file.");
            event.target.value = "";
            return;
        }

        if (file.size > maxImageSize) {
            setUploadError("Image size must be 2MB or less.");
            event.target.value = "";
            return;
        }

        setUploadError("");
        setSelectedImage(file);
        setRemovePhoto(false);
        setImagePreview(URL.createObjectURL(file));
    }

    function removeImage() {
        setSelectedImage(null);
        setRemovePhoto(Boolean(imagePreview && imagePreview !== defaultProfile));
        setImagePreview(defaultProfile);
        setUploadError("");
        setFileInputKey((currentKey) => currentKey + 1);
    }

    async function handleSubmit(event) {
        event.preventDefault();
        setSubmitError("");
        setIsSubmitting(true);

        try {
            const userFormData = new FormData();
            userFormData.append("_method", "PUT");
            userFormData.append("first_name", form.first_name.trim());
            userFormData.append("last_name", form.last_name.trim());
            userFormData.append("username", form.username.trim());
            userFormData.append("email", form.email.trim());
            userFormData.append("phone", form.phone.replace(/^\+212\s*/, "0").trim());
            userFormData.append("remove_photo", removePhoto ? "1" : "0");

            if (selectedImage) {
                userFormData.append("photo", selectedImage);
            }

            const [userResponse, professionalResponse] = await Promise.all([
                updateInfo(userFormData),
                updateProfessionalProfile({
                    city: form.city.trim(),
                    description: form.description.trim(),
                }),
            ]);

            setUser(userResponse.data.user);
            setProfessional(professionalResponse.data.professional);
            setSelectedImage(null);
            setRemovePhoto(false);
            setFileInputKey((currentKey) => currentKey + 1);
            navigate("/professional/profile");
        } catch (error) {
            const validationErrors = error?.errors ? Object.values(error.errors).flat() : [];
            setSubmitError(validationErrors[0] || error?.message || "Failed to update professional profile.");
        } finally {
            setIsSubmitting(false);
        }
    }

    return {
        form,
        professional,
        categories,
        categoryName,
        imagePreview,
        fileInputKey,
        uploadError,
        submitError,
        isLoading,
        isSubmitting,
        handleChange,
        handleImageChange,
        removeImage,
        handleSubmit,
    };
}
