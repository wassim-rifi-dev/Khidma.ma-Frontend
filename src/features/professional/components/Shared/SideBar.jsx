import { Link, useLocation } from "react-router-dom";
import { FiBarChart2, FiBriefcase, FiClipboard, FiHome, FiMessageSquare, FiPlus } from "react-icons/fi";
import logoLight from "../../../../assets/logoLight.svg";

const navItems = [
    { label: "Home", path: "/professional/home", icon: FiHome },
    { label: "Services", path: "/professional/services", icon: FiBriefcase },
    { label: "Requests", path: "/professional/requests", icon: FiClipboard },
    { label: "Messages", path: "/messages", icon: FiMessageSquare },
    { label: "Analistique", path: "/professional/analistique", icon: FiBarChart2 },
];

export default function SideBar() {
    const { pathname } = useLocation();

    return (
        <aside className="fixed left-0 top-0 z-50 flex h-screen w-60 shrink-0 flex-col overflow-y-auto border-r border-slate-200 bg-white">
            <div className="px-6 pb-8 pt-6">
                <img src={logoLight} alt="Khadamni" className="h-[72px] w-auto" />
                <p className="mt-1.5 text-xs leading-tight text-slate-400">Modern Craftsman</p>
            </div>

            <nav className="mt-1 space-y-1">
                {navItems.map(({ label, path, icon: Icon }) => {
                    const active = pathname === path || pathname.startsWith(`${path}/`);

                    return (
                    <Link
                        key={label}
                        to={path}
                        className={`flex h-12 items-center gap-3.5 px-6 text-base font-medium transition-colors ${
                            active
                                ? "bg-orange-50 text-[#F97415]"
                                : "text-slate-600 hover:bg-orange-50 hover:text-[#F97415]"
                        }`}
                    >
                        <Icon className="h-5 w-5 shrink-0" />
                        <span className="truncate">{label}</span>
                    </Link>
                    );
                })}
            </nav>

            <div className="mt-auto px-5 pb-6 pt-6">
                <Link
                    to="/client/home"
                    className="mb-3 flex w-full items-center gap-3 rounded-2xl border border-sky-100 bg-sky-50 px-4 py-3.5 text-left text-sm font-semibold text-slate-700 transition hover:bg-sky-100"
                >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-sky-500 shadow-sm">
                        <FiHome className="h-5 w-5" />
                    </span>
                    <span>
                        <span className="block leading-tight">Client Home</span>
                        <span className="text-[11px] font-medium text-slate-400">Browse as client</span>
                    </span>
                </Link>

                <Link
                    to="/professional/services/create"
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-orange-500 px-5 py-3.5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(249,115,22,0.28)] transition hover:bg-orange-600"
                >
                    <FiPlus className="h-5 w-5" />
                    Create Service
                </Link>
            </div>
        </aside>
    )
}
