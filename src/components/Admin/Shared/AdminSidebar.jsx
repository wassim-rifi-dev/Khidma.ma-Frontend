import { Link, useLocation } from "react-router-dom";
import {
    FiAlertCircle,
    FiBarChart2,
    FiBriefcase,
    FiClipboard,
    FiGrid,
    FiLayers,
    FiMessageSquare,
    FiUsers,
} from "react-icons/fi";
import logoLight from "../../../assets/logoLight.svg";

const navItems = [
    { label: "Dashboard", path: "/admin/dashboard", icon: FiGrid },
    { label: "Users", path: "/admin/users", icon: FiUsers },
    { label: "Professionals", path: "/admin/professionals", icon: FiBriefcase },
    { label: "Services", path: "/admin/services", icon: FiLayers },
    { label: "Requests", path: "/admin/requests", icon: FiClipboard },
    { label: "Reports", path: "/admin/reports", icon: FiAlertCircle },
    { label: "Messages", path: "/admin/messages", icon: FiMessageSquare },
    { label: "Analytics", path: "/admin/analytics", icon: FiBarChart2 },
];

export default function AdminSidebar() {
    const { pathname } = useLocation();

    return (
        <aside className="fixed left-0 top-0 z-40 hidden h-screen w-60 shrink-0 border-r border-slate-200 bg-white lg:flex lg:flex-col">
            <div className="px-6 pb-8 pt-6">
                <img src={logoLight} alt="Khidma" className="h-[72px] w-auto" />
                <p className="mt-1.5 text-xs leading-tight text-slate-400">Admin Workspace</p>
            </div>

            <nav className="mt-1 flex-1 space-y-1 px-3">
                {navItems.map(({ label, path, icon: Icon }) => {
                    const active = pathname === path || pathname.startsWith(`${path}/`);

                    return (
                        <Link
                            key={label}
                            to={path}
                            className={`flex h-12 items-center gap-3.5 rounded-2xl px-4 text-sm font-medium transition-colors ${
                                active
                                    ? "bg-orange-50 text-[#F97415]"
                                    : "text-slate-600 hover:bg-orange-50 hover:text-[#F97415]"
                            }`}
                        >
                            <Icon className="h-5 w-5 shrink-0" />
                            <span>{label}</span>
                        </Link>
                    );
                })}
            </nav>

            <div className="mt-auto px-5 pb-6 pt-6">
                <div className="rounded-[26px] border border-slate-200 bg-slate-50 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#F97415]">Today</p>
                    <h3 className="mt-3 text-base font-semibold text-slate-900">12 reviews need moderation</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-500">
                    Keep an eye on reports, delayed requests, and newly published services.
                    </p>
                </div>
            </div>
        </aside>
    );
}
