import { IoLanguage } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineDarkMode, MdOutlineLightMode, MdMenu } from "react-icons/md";
import { FiBriefcase, FiUser, FiSettings, FiLogOut } from "react-icons/fi";
import logoLight from '../../../../assets/logoLight.svg';
import logoDark from '../../../../assets/logoDark.svg';
import { useContext, useState, useRef, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../auth/authContext";
import defaultProfile from "../../../../assets/Profile/default_profile.jpg";
import getUserPhotoUrl from "../../../../shared/utils/getUserPhotoUrl";

export default function Header({ isDark, toogleDark }) {
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
        logout();
        navigate("/login");
    };

    const photoUrl = getUserPhotoUrl(user.photo);
    const isProfessional = user.role === "professional";
    const navLinkClass = ({ isActive }) => `relative px-1 py-2 transition-colors duration-200 outline-none ${
        isDark
            ? `${isActive ? 'text-orange-300' : 'hover:text-orange-300 focus-visible:text-orange-300'}`
            : `${isActive ? 'text-[#F97415]' : 'hover:text-[#F97415] focus-visible:text-[#F97415]'}`
    } after:absolute after:bottom-1.5 after:left-1/2 after:h-0.5 after:-translate-x-1/2 after:rounded-full after:bg-[#F97415] after:transition-all after:duration-200 ${
        isActive ? 'after:w-5' : 'after:w-0 hover:after:w-5 focus-visible:after:w-5'
    }`;
    const mobileNavLinkClass = ({ isActive }) => `border-b px-0 py-3 transition-colors duration-200 outline-none ${
        isDark
            ? `border-[#334155]/50 ${isActive ? 'text-orange-300' : 'hover:text-orange-300 focus-visible:text-orange-300'}`
            : `border-[#F1F5F9] ${isActive ? 'text-[#F97415]' : 'hover:text-[#F97415] focus-visible:text-[#F97415]'}`
    }`;

    return (
        <header className="fixed top-0 left-0 w-full z-50">
            <div className={`flex items-center justify-between px-5 md:px-10 h-18 border-b-2 shadow-lg ${
                isDark
                    ? 'bg-[#0F172A] border-[#334155]/50'
                    : 'bg-white border-[#E2E8F0]'
            }`}>
                <Link to={'/client/home'}>
                    {isDark
                        ? <img src={logoDark} alt="Logo" className="h-14 w-auto" />
                        : <img src={logoLight} alt="Logo" className="h-14 w-auto" />
                    }
                </Link>

                <nav className={`hidden md:flex items-center gap-8 font-bold text-[15px] ${
                    isDark ? 'text-white' : 'text-[#475569]'
                }`}>
                    <NavLink to={'/client/home'} className={navLinkClass}>Home</NavLink>
                    <NavLink to={'/services'} className={navLinkClass}>Services</NavLink>
                    <NavLink to={'/messages'} className={navLinkClass}>Messages</NavLink>
                    {isProfessional && (
                        <Link
                            to="/professional/home"
                            className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold transition-colors outline-none focus-visible:ring-4 ${
                                isDark
                                    ? 'bg-orange-500/10 text-orange-300 hover:bg-orange-500/15 focus-visible:ring-orange-400/20'
                                    : 'bg-orange-50 text-orange-600 hover:bg-orange-100 focus-visible:ring-orange-100'
                            }`}
                        >
                            <FiBriefcase size={16} />
                            Professional Dashboard
                        </Link>
                    )}
                </nav>

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
                                    {user.first_name}
                                </p>
                                <p className="text-sm text-slate-500 font-medium">
                                    {user.role?.charAt(0).toUpperCase() + user.role?.slice(1)}
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
                                            {user.first_name} {user.last_name}
                                        </p>
                                        <p className="text-xs text-slate-400 mt-0.5">{user.email}</p>
                                        <span className="inline-block mt-1 text-[11px] font-semibold bg-orange-100 text-orange-600 px-2 py-0.5 rounded-full">
                                            {user.role?.charAt(0).toUpperCase() + user.role?.slice(1)}
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
                                    {isProfessional && (
                                        <Link
                                            to="/professional/home"
                                            onClick={() => setDropdownOpen(false)}
                                            className={`mx-2 my-1 flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold transition-colors ${
                                                isDark
                                                    ? 'bg-orange-500/10 text-orange-300 hover:bg-orange-500/15'
                                                    : 'bg-orange-50 text-orange-600 hover:bg-orange-100'
                                            }`}
                                        >
                                            <span className={`flex h-9 w-9 items-center justify-center rounded-full ${
                                                isDark ? 'bg-orange-400/15' : 'bg-white'
                                            }`}>
                                                <FiBriefcase size={17} className="text-[#FF781F]" />
                                            </span>
                                            <span>
                                                <span className="block leading-tight">Professional Dashboard</span>
                                                <span className={`text-[11px] font-medium ${isDark ? 'text-orange-200/80' : 'text-orange-500/80'}`}>
                                                    Manage services
                                                </span>
                                            </span>
                                        </Link>
                                    )}
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
                        <NavLink to={'/client/home'} className={mobileNavLinkClass}>Accueil</NavLink>
                        <NavLink to={'/services'} className={mobileNavLinkClass}>Services</NavLink>
                        <NavLink to={'/messages'} className={mobileNavLinkClass}>Messages</NavLink>
                        {isProfessional && (
                            <Link to={'/professional/home'} className={`my-3 flex items-center gap-3 rounded-2xl px-4 py-3 transition-colors outline-none focus-visible:ring-4 ${
                                isDark ? 'bg-orange-500/10 text-orange-300 hover:bg-orange-500/15 focus-visible:ring-orange-400/20' : 'bg-orange-50 text-orange-600 hover:bg-orange-100 focus-visible:ring-orange-100'
                            }`}>
                                <FiBriefcase size={18} />
                                <span className="font-bold">Professional Dashboard</span>
                            </Link>
                        )}
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
