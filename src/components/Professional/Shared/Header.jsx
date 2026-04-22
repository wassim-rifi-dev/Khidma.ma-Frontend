import { IoLanguage } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineDarkMode, MdOutlineLightMode, MdMenu } from "react-icons/md";
import { FiLogOut, FiSearch, FiSettings, FiUser } from "react-icons/fi";
import { useContext, useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import defaultProfile from "../../../assets/Profile/default_profile.jpg";
import getUserPhotoUrl from "../../../utils/getUserPhotoUrl";

export default function Header({ isDark = false, toogleDark = () => {}, withSidebar = false }) {
    const [menuOpen, toggleMenu] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const { user , logout } = useContext(AuthContext);
    const dropdownRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleLogout = () => {
        logout?.();
        navigate("/login");
    };

    const safeUser = user || {
        first_name: "Ahmed",
        last_name: "M.",
        email: "ahmed@example.com",
        role: "professional",
        photo: null,
    };
    const photoUrl = getUserPhotoUrl(safeUser.photo);

    return (
        <header className={`fixed top-0 z-50 ${withSidebar ? "left-60 right-0" : "left-0 w-full"}`}>
            <div className={`flex items-center px-5 md:px-10 h-18 border-b-2 shadow-lg ${
                isDark
                    ? 'bg-[#0F172A] border-[#334155]/50'
                    : 'bg-white border-[#E2E8F0]'
            } justify-between`}>
                {withSidebar && (
                    <div className="hidden min-w-0 items-center gap-6 lg:flex">
                        <div>
                            <p className="text-sm font-medium text-slate-400">Professional Workspace</p>
                            <h1 className="text-xl font-semibold text-slate-900">Manage your services</h1>
                        </div>

                        <label className="flex h-11 w-80 items-center gap-3 rounded-full border border-slate-200 bg-slate-50 px-4 text-slate-400 transition focus-within:border-orange-300 focus-within:bg-white focus-within:ring-4 focus-within:ring-orange-100">
                            <FiSearch className="h-5 w-5 shrink-0" />
                            <input
                                type="text"
                                placeholder="Search requests, services..."
                                className="w-full bg-transparent text-sm font-medium text-slate-700 outline-none placeholder:text-slate-400"
                            />
                        </label>
                    </div>
                )}

                <div className="flex items-center gap-3 md:gap-6">

                    <div className="hidden md:flex items-center space-x-5 text-gray-600">
                        <button className="relative transition hover:text-[#FF781F]">
                            <IoMdNotificationsOutline size={24} />
                            <span className="absolute top-0 right-0 block w-2 h-2 bg-orange-500 rounded-full ring-2 ring-white"></span>
                        </button>
                        <button className="transition hover:text-[#FF781F]">
                            <IoLanguage size={24} />
                        </button>
                        <button className="transition hover:text-[#FF781F]" onClick={() => toogleDark()}>
                            {isDark ? <MdOutlineLightMode size={24} /> : <MdOutlineDarkMode size={24} />}
                        </button>
                    </div>

                    <button className="relative md:hidden transition hover:text-[#FF781F] text-gray-600">
                        <IoMdNotificationsOutline size={22} />
                        <span className="absolute top-0 right-0 block w-2 h-2 bg-orange-500 rounded-full ring-2 ring-white"></span>
                    </button>

                    <div className={`hidden md:block h-8 border-l ${isDark ? 'border-[#334155]' : 'border-[#E2E8F0]'}`}></div>

                    <div className="relative" ref={dropdownRef}>
                        <button
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                            className="flex items-center gap-3 group"
                        >
                            <div className="text-right hidden md:block">
                                <p className={`text-base font-bold leading-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                    {safeUser.first_name}
                                </p>
                                <p className="text-sm text-slate-500 font-medium">
                                    {safeUser.role?.charAt(0).toUpperCase() + safeUser.role?.slice(1)}
                                </p>
                            </div>
                            <div className="relative">
                                {
                                    photoUrl ? 
                                        <img
                                            className="w-9 h-9 md:w-11 md:h-11 rounded-full object-cover border-2 border-orange-400 transition group-hover:border-[#FF781F]"
                                            src={photoUrl}
                                            alt="Avatar"
                                        /> : 
                                        <img
                                            className="w-9 h-9 md:w-11 md:h-11 rounded-full object-cover border-2 border-orange-400 transition group-hover:border-[#FF781F]"
                                            src={defaultProfile}
                                            alt="Avatar"
                                        />
                                }
                                <span className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 md:w-3.5 md:h-3.5 rounded-full border-2 ${isDark ? 'border-[#0F172A]' : 'border-white'} bg-green-400`}></span>
                            </div>
                        </button>

                        {dropdownOpen && (
                            <div className={`absolute right-0 mt-3 w-60 rounded-2xl shadow-xl border overflow-hidden z-50 ${
                                isDark
                                    ? 'bg-[#1E293B] border-[#334155]'
                                    : 'bg-white border-[#E2E8F0]'
                            }`}>
                                <div className={`px-4 py-4 flex items-center gap-3 border-b ${
                                    isDark ? 'border-[#334155]' : 'border-[#F1F5F9]'
                                }`}>
                                    {
                                    photoUrl ? 
                                        <img
                                            className="w-9 h-9 md:w-11 md:h-11 rounded-full object-cover border-2 border-orange-400 transition group-hover:border-[#FF781F]"
                                            src={photoUrl}
                                            alt="Avatar"
                                        /> : 
                                        <img
                                            className="w-9 h-9 md:w-11 md:h-11 rounded-full object-cover border-2 border-orange-400 transition group-hover:border-[#FF781F]"
                                            src={defaultProfile}
                                            alt="Avatar"
                                        />
                                    }
                                    <div>
                                        <p className={`font-bold text-sm ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                            {safeUser.first_name} {safeUser.last_name}
                                        </p>
                                        <p className="text-xs text-slate-400 mt-0.5">{safeUser.email}</p>
                                        <span className="inline-block mt-1 text-[11px] font-semibold bg-orange-100 text-orange-600 px-2 py-0.5 rounded-full">
                                            {safeUser.role?.charAt(0).toUpperCase() + safeUser.role?.slice(1)}
                                        </span>
                                    </div>
                                </div>

                                <div className="py-2">
                                    <Link
                                        to="/profile"
                                        onClick={() => setDropdownOpen(false)}
                                        className={`flex items-center gap-3 px-4 py-2.5 text-sm font-medium transition-colors ${
                                            isDark
                                                ? 'text-slate-300 hover:bg-[#334155] hover:text-white'
                                                : 'text-[#475569] hover:bg-[#F8FAFC] hover:text-gray-900'
                                        }`}
                                    >
                                        <FiUser size={16} className="text-[#FF781F]" />
                                        Mon Profil
                                    </Link>
                                    <Link
                                        to="/settings"
                                        onClick={() => setDropdownOpen(false)}
                                        className={`flex items-center gap-3 px-4 py-2.5 text-sm font-medium transition-colors ${
                                            isDark
                                                ? 'text-slate-300 hover:bg-[#334155] hover:text-white'
                                                : 'text-[#475569] hover:bg-[#F8FAFC] hover:text-gray-900'
                                        }`}
                                    >
                                        <FiSettings size={16} className="text-[#FF781F]" />
                                        Paramètres
                                    </Link>
                                </div>

                                <div className={`border-t py-2 ${isDark ? 'border-[#334155]' : 'border-[#F1F5F9]'}`}>
                                    <button
                                        onClick={handleLogout}
                                        className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium transition-colors ${
                                            isDark
                                                ? 'text-red-400 hover:bg-red-500/10 hover:text-red-300'
                                                : 'text-red-500 hover:bg-red-50 hover:text-red-600'
                                        }`}
                                    >
                                        <FiLogOut size={16} />
                                        Déconnexion
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>

                    <button className={`md:hidden p-1 transition ${
                        isDark ? 'text-white hover:text-[#FF781F]' : 'text-[#0F172A] hover:text-black'
                    }`} onClick={() => toggleMenu(!menuOpen)}>
                        <MdMenu size={26} />
                    </button>
                </div>
            </div>

            {menuOpen && (
                <div className={`absolute top-full left-0 w-full md:hidden shadow-xl px-6 py-4 flex flex-col border-b-2 ${
                    isDark ? 'bg-[#0F172A] border-[#334155]/50' : 'bg-white border-[#E2E8F0]'
                }`}>
                    <nav className={`flex flex-col font-bold ${isDark ? 'text-white' : 'text-[#475569]'}`}>
                        <Link to={'/home'} className={`py-3 border-b transition-colors ${isDark ? 'border-[#334155]/50 hover:text-[#FF781F]' : 'border-[#F1F5F9] hover:text-black'}`}>Accueil</Link>
                        <Link to={'/services'} className={`py-3 border-b transition-colors ${isDark ? 'border-[#334155]/50 hover:text-[#FF781F]' : 'border-[#F1F5F9] hover:text-black'}`}>Services</Link>
                        <Link to={'/messages'} className={`py-3 border-b transition-colors ${isDark ? 'border-[#334155]/50 hover:text-[#FF781F]' : 'border-[#F1F5F9] hover:text-black'}`}>Messages</Link>
                    </nav>

                    <div className={`flex items-center justify-between mt-4 pt-4 border-t ${isDark ? 'border-[#334155]/50' : 'border-[#E2E8F0]'}`}>
                        <div className={`flex items-center gap-5 text-[20px] ${isDark ? 'text-white' : 'text-[#0F172A]'}`}>
                            <button className="hover:text-[#FF781F] transition">
                                <IoLanguage />
                            </button>
                            <button className="hover:text-[#FF781F] transition" onClick={() => toogleDark()}>
                                {isDark ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
                            </button>
                        </div>

                        <button
                            onClick={handleLogout}
                            className="flex items-center gap-2 text-sm font-semibold text-red-500 hover:text-red-600 transition"
                        >
                            <FiLogOut size={16} />
                            Déconnexion
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
}
