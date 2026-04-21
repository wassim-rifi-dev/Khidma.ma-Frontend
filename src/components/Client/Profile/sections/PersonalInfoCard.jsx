import { useContext } from "react";
import { FiUser } from "react-icons/fi";
import { AuthContext } from "../../../../context/AuthContext";

export default function PersonalInfoCard() {
    const { user } = useContext(AuthContext);

    const details = [
        { label: "Full Name", value: user.name },
        { label: "Email Address", value: user.email },
        { label: "Phone Number", value: `+212 ${user.phone.startsWith('0') ? user.phone.slice(1) : user.phone}` }
    ];

    return (
        <section className="rounded-[28px] bg-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.08)]">
            <div className="mb-7 flex items-center justify-between">
                <h2 className="text-lg font-semibold text-slate-900">Personal Information</h2>
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-50 text-orange-500">
                    <FiUser className="h-4 w-4" />
                </span>
            </div>

            <div className="space-y-6">
                {details.map((item) => (
                    <div key={item.label}>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                            {item.label}
                        </p>
                        <p className="mt-1.5 text-[15px] font-medium text-slate-800">
                            {item.value}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
