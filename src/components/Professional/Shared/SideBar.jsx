import { FiBarChart2, FiGrid, FiPlus, FiSettings, FiStar, FiTool } from "react-icons/fi";
import logoLight from "../../../assets/logoLight.svg";

const navItems = [
    { label: "Overview", icon: FiGrid },
    { label: "My Services", icon: FiTool, active: true },
    { label: "Client Reviews", icon: FiStar },
    { label: "Analytics", icon: FiBarChart2 },
    { label: "Settings", icon: FiSettings },
];

export default function SideBar() {
    return (
        <aside className="flex h-screen w-60 shrink-0 flex-col overflow-y-auto border-r border-slate-200 bg-white">
            <div className="px-6 pb-8 pt-6">
                <img src={logoLight} alt="Khadamni" className="h-[72px] w-auto" />
                <p className="mt-1.5 text-xs leading-tight text-slate-400">Modern Craftsman</p>
            </div>

            <nav className="mt-1 space-y-1">
                {navItems.map(({ label, icon: Icon, active }) => (
                    <a
                        key={label}
                        href="#"
                        className={`flex h-12 items-center gap-3.5 px-6 text-base font-medium transition-colors ${
                            active
                                ? "bg-slate-50 text-[#A34E0D]"
                                : "text-slate-600 hover:bg-slate-50 hover:text-[#A34E0D]"
                        }`}
                    >
                        <Icon className="h-5 w-5 shrink-0" />
                        <span className="truncate">{label}</span>
                    </a>
                ))}
            </nav>

            <div className="mt-auto px-5 pb-6 pt-6">
                <button
                    type="button"
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-orange-500 px-5 py-3.5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(249,115,22,0.28)] transition hover:bg-orange-600"
                >
                    <FiPlus className="h-5 w-5" />
                    Create Service
                </button>
            </div>
        </aside>
    )
}
