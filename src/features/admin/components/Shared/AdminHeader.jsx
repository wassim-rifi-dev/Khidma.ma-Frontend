import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FiBarChart2, FiBell, FiBriefcase, FiGrid, FiLayers, FiLogOut, FiMenu, FiSearch, FiShield, FiUser, FiUsers, FiBookmark } from "react-icons/fi";
import { AuthContext } from "../../../auth/authContext";

const navItems = [
    { label: "Dashboard", path: "/admin/dashboard", icon: FiGrid },
    { label: "Users", path: "/admin/users", icon: FiUsers },
    { label: "Professionals", path: "/admin/professionals", icon: FiBriefcase },
    { label: "Services", path: "/admin/services", icon: FiLayers },
    { label: "Categories", path: "/admin/categories", icon: FiBookmark },
    { label: "Analytics", path: "/admin/analytics", icon: FiBarChart2 },
];

export default function AdminHeader({ title = "Admin dashboard" }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const { logout, setUser } = useContext(AuthContext);

    async function handleLogout() {
        try {
            await logout();
        } catch {
            localStorage.removeItem("token");
            setUser(null);
        } finally {
            navigate("/login");
        }
    }

    return (
        <header className="fixed left-0 right-0 top-0 z-30 border-b-2 border-[#E2E8F0] bg-white shadow-lg lg:left-60">
            <div className="flex items-center justify-between gap-6 px-5 py-4 md:px-10">
                <div className="min-w-0 lg:hidden">
                    <p className="truncate text-sm font-semibold text-slate-900">{title}</p>
                    <p className="text-xs text-slate-400">Admin Workspace</p>
                </div>

                <div className="hidden min-w-0 items-center gap-6 lg:flex">
                    <div>
                        <p className="text-sm font-medium text-slate-400">Admin Workspace</p>
                        <h1 className="text-xl font-semibold text-slate-900">{title}</h1>
                    </div>

                    <label className="flex h-11 w-80 items-center gap-3 rounded-full border border-slate-200 bg-slate-50 px-4 text-slate-400 transition focus-within:border-orange-300 focus-within:bg-white focus-within:ring-4 focus-within:ring-orange-100">
                        <FiSearch className="h-5 w-5 shrink-0" />
                        <input
                            type="text"
                            placeholder="Search users, services, requests..."
                            className="w-full bg-transparent text-sm font-medium text-slate-700 outline-none placeholder:text-slate-400"
                        />
                    </label>
                </div>

                <div className="flex items-center gap-3">
                    <button className="relative text-slate-500 transition hover:text-[#F97415]">
                        <FiBell className="h-6 w-6" />
                        <span className="absolute right-0 top-0 block h-2 w-2 rounded-full bg-orange-500 ring-2 ring-white" />
                    </button>

                    <div className="hidden h-8 border-l border-[#E2E8F0] md:block" />

                    <div className="flex items-center gap-3">
                        <div className="hidden text-right md:block">
                            <p className="text-base font-bold leading-tight text-gray-900">Admin Team</p>
                            <p className="text-sm font-medium text-slate-500">Full access</p>
                        </div>
                        <div className="relative">
                            <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-orange-400 bg-slate-100 text-[#F97415]">
                                <FiUser className="h-5 w-5" />
                            </div>
                            <span className="absolute -bottom-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-white bg-emerald-400">
                                <FiShield className="h-2.5 w-2.5 text-white" />
                            </span>
                        </div>
                    </div>

                    <button
                        type="button"
                        onClick={() => setMenuOpen((current) => !current)}
                        className="rounded-full p-2 text-slate-600 transition hover:bg-slate-100 hover:text-[#F97415] lg:hidden"
                        aria-label="Toggle admin navigation"
                    >
                        <FiMenu className="h-5 w-5" />
                    </button>
                </div>
            </div>

            {menuOpen ? (
                <div className="border-t border-slate-100 bg-white px-5 py-4 lg:hidden">
                    <nav className="grid gap-2">
                        {navItems.map(({ label, path, icon: Icon }) => {
                            const active = pathname === path || pathname.startsWith(`${path}/`);

                            return (
                                <Link
                                    key={label}
                                    to={path}
                                    onClick={() => setMenuOpen(false)}
                                    className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition-colors ${
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

                    <button
                        type="button"
                        onClick={handleLogout}
                        className="mt-3 flex w-full items-center gap-3 rounded-2xl border border-slate-200 px-4 py-3 text-sm font-medium text-slate-600 transition-colors hover:border-red-100 hover:bg-red-50 hover:text-red-600"
                    >
                        <FiLogOut className="h-5 w-5 shrink-0" />
                        <span>Logout</span>
                    </button>
                </div>
            ) : null}
        </header>
    );
}
