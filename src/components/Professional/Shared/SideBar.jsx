import { FiBarChart2, FiGrid, FiSettings, FiStar, FiTool } from "react-icons/fi";

const navItems = [
    { label: "Overview", icon: FiGrid },
    { label: "My Services", icon: FiTool, active: true },
    { label: "Client Reviews", icon: FiStar },
    { label: "Analytics", icon: FiBarChart2 },
    { label: "Settings", icon: FiSettings },
];

export default function SideBar() {
    return (
        <aside className="flex h-screen w-26 shrink-0 flex-col overflow-y-auto border-r border-slate-200 bg-white">
            <div className="px-3 pb-5 pt-5">
                <h1 className="text-[18px] font-bold leading-none text-[#A34E0D]">Khadamni</h1>
                <p className="mt-1 text-[10px] leading-tight text-slate-400">Modern Craftsman</p>
            </div>

            <nav className="mt-1 space-y-1">
                {navItems.map(({ label, icon: Icon, active }) => (
                    <a
                        key={label}
                        href="#"
                        className={`flex h-8 items-center gap-2 px-3 text-[9px] font-medium transition-colors ${
                            active
                                ? "bg-slate-50 text-[#A34E0D]"
                                : "text-slate-600 hover:bg-slate-50 hover:text-[#A34E0D]"
                        }`}
                    >
                        <Icon className="h-3 w-3 shrink-0" />
                        <span className="truncate">{label}</span>
                    </a>
                ))}
            </nav>
        </aside>
    )
}
