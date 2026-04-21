import { FiMail, FiPhone, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";
import ProfileInputField from "./ProfileInputField";

const nameFields = [
    { label: "First Name", value: "John" },
    { label: "Last Name", value: "Doe" },
];

export default function PersonalInfoSection({ inputBaseClass }) {
    return (
        <div className="pt-8">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-800">
                Personal Information
            </h2>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
                {nameFields.map((field) => (
                    <ProfileInputField
                        key={field.label}
                        label={field.label}
                        defaultValue={field.value}
                        icon={FiUser}
                        inputClassName={inputBaseClass}
                    />
                ))}
            </div>

            <div className="mt-5">
                <ProfileInputField
                    label="Username"
                    defaultValue="johnwaterson"
                    icon={FiUser}
                    inputClassName={inputBaseClass}
                />
            </div>

            <div className="mt-5">
                <ProfileInputField
                    label="Email Address"
                    defaultValue="john@example.com"
                    icon={FiMail}
                    inputClassName={inputBaseClass}
                />
            </div>

            <div className="mt-5 border-b border-slate-200 pb-7">
                <ProfileInputField
                    label="Phone Number"
                    defaultValue="+212 600 000000"
                    icon={FiPhone}
                    inputClassName={inputBaseClass}
                />
            </div>

            <div className="mt-7 flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-end">
                <Link
                    to="/profile"
                    className="px-3 py-2 text-sm font-medium text-slate-500 transition hover:text-slate-700"
                >
                    Cancel
                </Link>
                <button
                    type="button"
                    className="rounded-2xl bg-orange-500 px-8 py-3 text-base font-semibold text-white shadow-[0_12px_30px_rgba(249,115,22,0.28)] transition hover:bg-orange-600"
                >
                    Save Changes
                </button>
            </div>
        </div>
    );
}
