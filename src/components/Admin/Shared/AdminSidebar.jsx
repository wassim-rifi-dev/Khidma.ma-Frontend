import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
    FiBarChart2,
    FiBriefcase,
    FiBookmark,
    FiGrid,
    FiLayers,
    FiLogOut,
    FiUsers,
} from "react-icons/fi";
import logoLight from "../../../assets/logoLight.svg";
import { AuthContext } from "../../../context/AuthContext";

const navItems = [
    { label: "Dashboard", path: "/admin/dashboard", icon: FiGrid },
    { label: "Users", path: "/admin/users", icon: FiUsers },
    { label: "Professionals", path: "/admin/professionals", icon: FiBriefcase },
    { label: "Services", path: "/admin/services", icon: FiLayers },
    { label: "Categories", path: "/admin/categories", icon: FiBookmark },
    { label: "Analytics", path: "/admin/analytics", icon: FiBarChart2 },
];

export default function AdminSidebar() {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const { logout, setUser } = useContext(AuthContext);
    const [isLoggingOut, setIsLoggingOut] = useState(false);

    async function handleLogout() {
        setIsLoggingOut(true);

        try {
            await logout();
        } catch {
            localStorage.removeItem("token");
            setUser(null);
        } finally {
            setIsLoggingOut(false);
            navigate("/login");
        }
    }

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
                <button
                    type="button"
                    onClick={handleLogout}
                    disabled={isLoggingOut}
                    className="mb-4 flex h-12 w-full items-center gap-3.5 rounded-2xl border border-slate-200 px-4 text-sm font-medium text-slate-600 transition-colors hover:border-red-100 hover:bg-red-50 hover:text-red-600 disabled:cursor-not-allowed disabled:opacity-60"
                >
                    <FiLogOut className="h-5 w-5 shrink-0" />
                    <span>{isLoggingOut ? "Logging out..." : "Logout"}</span>
                </button>
            </div>
        </aside>
    );
}
