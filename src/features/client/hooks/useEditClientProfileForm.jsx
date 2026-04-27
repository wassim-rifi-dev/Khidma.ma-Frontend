import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../auth/authContext";
import defaultProfile from "../../../assets/Profile/default_profile.jpg";
import { updateInfo } from "../../../shared/services/userProfileServices";
import { useNavigate } from "react-router-dom";
import getUserPhotoUrl from "../../../shared/utils/getUserPhotoUrl";

const defaultImage = defaultProfile;
const maxImageSize = 2 * 1024 * 1024;

export default function useEditClientProfileForm() {
    const { user, setUser } = useContext(AuthContext);
    const [form, setForm] = useState({
        first_name: "",
        last_name: "",
        username: "",
        email: "",
        phone: "",
    });
    const [imagePreview, setImagePreview] = useState(defaultImage);
    const [selectedImage, setSelectedImage] = useState(null);
    const [removePhoto, setRemovePhoto] = useState(false);
    const [uploadError, setUploadError] = useState("");
    const [submitError, setSubmitError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [fileInputKey, setFileInputKey] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        setForm({
            first_name: user?.first_name || "",
            last_name: user?.last_name || "",
            username: user?.username || "",
            email: user?.email || "",
            phone: user?.phone ? `+212 ${user.phone.startsWith("0") ? user.phone.slice(1) : user.phone}` : "",
        });

        setImagePreview(getUserPhotoUrl(user?.photo) || defaultImage);

        setSelectedImage(null);
        setRemovePhoto(false);
        setUploadError("");
    }, [user]);

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
        setRemovePhoto(Boolean(user?.photo));
        setImagePreview(defaultImage);
        setUploadError("");
        setFileInputKey((currentKey) => currentKey + 1);
    }

    async function handleSubmit(event) {
        event.preventDefault();
        setSubmitError("");
        setIsSubmitting(true);

        try {
            const formData = new FormData();
            formData.append("_method", "PUT");
            formData.append("first_name", form.first_name.trim());
            formData.append("last_name", form.last_name.trim());
            formData.append("username", form.username.trim());
            formData.append("email", form.email.trim());
            formData.append("phone", form.phone.replace(/^\+212\s*/, "0").trim());
            formData.append("remove_photo", removePhoto ? "1" : "0");

            if (selectedImage) {
                formData.append("photo", selectedImage);
            }

            const response = await updateInfo(formData);
            setUser(response.data.user);
            setSelectedImage(null);
            setRemovePhoto(false);
            setFileInputKey((currentKey) => currentKey + 1);
            navigate('/profile');
        } catch (error) {
            const validationErrors = error.errors ? Object.values(error.errors).flat() : [];
            setSubmitError(validationErrors[0] || error.message || "Failed to update profile.");
            console.error("Error updating profile:", error);
        } finally {
            setIsSubmitting(false);
        }
    }

    return {
        form,
        fileInputKey,
        imagePreview,
        uploadError,
        submitError,
        isSubmitting,
        handleChange,
        handleImageChange,
        removeImage,
        handleSubmit,
    };
}
