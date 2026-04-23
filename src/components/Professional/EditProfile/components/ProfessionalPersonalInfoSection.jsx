import { FiMail, FiPhone, FiUser } from "react-icons/fi";
import ProfessionalProfileInputField from "./ProfessionalProfileInputField";

export default function ProfessionalPersonalInfoSection({
    form,
    onChange,
    isLoading,
}) {
    const personalFields = [
        { label: "First Name", name: "first_name", value: form.first_name, icon: FiUser },
        { label: "Last Name", name: "last_name", value: form.last_name, icon: FiUser },
    ];

    const accountFields = [
        { label: "Username", name: "username", value: form.username, icon: FiUser },
        { label: "Email Address", name: "email", value: form.email, icon: FiMail, type: "email" },
        { label: "Phone Number", name: "phone", value: form.phone, icon: FiPhone },
    ];

    return (
        <div className="border-b border-slate-200 py-8">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-800">
                Personal Information
            </h2>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
                {personalFields.map((field) => (
                    <ProfessionalProfileInputField
                        key={field.name}
                        {...field}
                        onChange={onChange}
                        disabled={isLoading}
                    />
                ))}
            </div>

            <div className="mt-5 space-y-5">
                {accountFields.map((field) => (
                    <ProfessionalProfileInputField
                        key={field.name}
                        {...field}
                        onChange={onChange}
                        disabled={isLoading}
                    />
                ))}
            </div>
        </div>
    );
}
