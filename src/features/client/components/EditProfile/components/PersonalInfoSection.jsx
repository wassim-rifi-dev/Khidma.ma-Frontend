import { FiMail, FiPhone, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";
import ProfileInputField from "./ProfileInputField";

export default function PersonalInfoSection({
    form,
    onChange,
    submitError,
    isSubmitting,
}) {
    const personalFields = [
        { label: "First Name", name: "first_name", value: form.first_name },
        { label: "Last Name", name: "last_name", value: form.last_name },
    ];

    const otherFields = [
        { label: "Username", name: "username", value: form.username },
        { label: "Email Address", name: "email", value: form.email },
        { label: "Phone Number", name: "phone", value: form.phone },
    ]

    return (
        <div className="pt-8">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-800">
                Personal Information
            </h2>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
                {personalFields.map((field) => (
                    <ProfileInputField
                        key={field.label}
                        label={field.label}
                        name={field.name}
                        value={field.value}
                        onChange={onChange}
                        icon={FiUser}
                    />
                ))}
            </div>

            {
                otherFields.map((field) => (
                    <div className="mt-5">
                        <ProfileInputField
                            key={field.label}
                            label={field.label}
                            name={field.name}
                            value={field.value}
                            onChange={onChange}
                            icon={FiUser}
                        />
            </div>
                ))
            }

            {submitError ? (
                <p className="mt-5 text-sm font-medium text-red-500">{submitError}</p>
            ) : null}

            <div className="mt-7 flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-end">
                <Link
                    to="/profile"
                    className="px-3 py-2 text-sm font-medium text-slate-500 transition hover:text-slate-700"
                >
                    Cancel
                </Link>
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="rounded-2xl bg-orange-500 px-8 py-3 text-base font-semibold text-white shadow-[0_12px_30px_rgba(249,115,22,0.28)] transition hover:bg-orange-600"
                >
                    {isSubmitting ? "Saving..." : "Save Changes"}
                </button>
            </div>
        </div>
    );
}
