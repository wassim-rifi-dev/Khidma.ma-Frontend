import { IoLanguage } from "react-icons/io5";
import { MdOutlineDarkMode , MdOutlineLightMode , MdMenu } from "react-icons/md";
import logoLight from '../../assets/logoLight.svg';
import logoDark from '../../assets/logoDark.svg';
import { useState } from "react";

export default function Header({isDark , toogleDark}) {
    const [menuOpen , toggleMenu] = useState(false);
    return (
        <header className="relative z-50">
            <div className={`flex items-center justify-between px-5 md:px-10 h-18 border-b-2 shadow-lg ${
                isDark ? 
                    'bg-[#0F172A] border-[#334155]/50' :
                    'bg-white border-[#E2E8F0]'
                }
            `}>
                {isDark ? 
                    <img src={logoDark} alt="Logo" className="h-14 w-auto" /> :
                    <img src={logoLight} alt="Logo" className="h-14 w-auto" />
                }

                <nav className={`hidden md:flex items-center gap-8 font-bold text-[15px] ${
                    isDark ? 'text-white' : 'text-[#475569]'
                }`}>
                    <a href="#" className={`transition-colors ${
                        isDark ? 'hover:text-[#FF781F]' : 'hover:text-black'
                    }`}>
                        Accueil
                    </a>
                    
                    <a href="#" className={`transition-colors ${
                        isDark ? 'hover:text-[#FF781F]' : 'hover:text-black'
                    }`}>
                        Services
                    </a>
                    
                    <a href="#" className={`transition-colors whitespace-nowrap ${
                        isDark ? 'hover:text-[#FF781F]' : 'hover:text-black'
                    }`}>
                        Comment ça fonctionne
                    </a>
                </nav>

                <div className="hidden md:flex items-center gap-6">
                    <div className={`flex items-center gap-5 text-[20px] ${
                        isDark ? 'text-white' : 'text-[#0F172A]'
                    }`}>
                        <button className="transition hover:text-[#FF781F]">
                            <IoLanguage />
                        </button>
                        <button className="transition hover:text-[#FF781F]" onClick={() => toogleDark()}>
                            {isDark ?
                                <MdOutlineLightMode /> :
                                <MdOutlineDarkMode />
                            }
                        </button>
                    </div>

                    <div className={`w-px h-8 ${isDark ? 'bg-[#334155]' : 'bg-gray-300'}`} />

                    <div className="flex items-center gap-4">
                        <a href="/login" className={`font-semibold transition-colors ${
                            isDark ? 'text-white hover:text-[#FF781F]' : 'text-[#475569] hover:text-black'
                        }`}>
                            Connexion
                        </a>
                        <a href="/register" className="bg-[#FF781F] text-white px-6 py-2.5 rounded-full font-bold hover:bg-[#e66a1a] transition">
                            Inscription
                        </a>
                    </div>
                </div>

                <button className={`md:hidden p-1 transition ${
                    isDark ? 'text-white hover:text-[#FF781F]' : 'text-[#0F172A] hover:text-black'
                }`} onClick={() => toggleMenu(!menuOpen)}>
                    <MdMenu size={26} />
                </button>
            </div>

            {menuOpen && (
                <div className={`md:hidden shadow-lg px-6 py-4 flex flex-col border-b-2 ${
                    isDark ? 'bg-[#0F172A] border-[#334155]/50' : 'bg-white border-[#E2E8F0]'
                }`}>
                    <nav className={`flex flex-col font-bold ${
                        isDark ? 'text-white' : 'text-[#475569]'
                    }`}>
                        <a href="#" className={`py-3 border-b transition-colors ${
                            isDark ? 'border-[#334155]/50 hover:text-[#FF781F]' : 'border-[#F1F5F9] hover:text-black'
                        }`}>
                            Accueil
                        </a>
                        <a href="#" className={`py-3 border-b transition-colors ${
                            isDark ? 'border-[#334155]/50 hover:text-[#FF781F]' : 'border-[#F1F5F9] hover:text-black'
                        }`}>
                            Services
                        </a>
                        <a href="#" className={`py-3 transition-colors ${
                            isDark ? 'hover:text-[#FF781F]' : 'hover:text-black'
                        }`}>
                            Comment ça fonctionne
                        </a>
                    </nav>

                    <div className={`flex items-center justify-between mt-5 pt-4 border-t ${
                        isDark ? 'border-[#334155]/50' : 'border-[#E2E8F0]'
                    }`}>
                        <div className={`flex items-center gap-4 text-[20px] ${
                            isDark ? 'text-white' : 'text-[#0F172A]'
                        }`}>
                            <button className="hover:text-[#FF781F] transition">
                                <IoLanguage />
                            </button>
                            <button className="hover:text-[#FF781F] transition" onClick={() => toogleDark()}>
                                {isDark ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
                            </button>
                        </div>

                        <div className="flex items-center gap-3">
                            <a href="/login" className={`font-semibold transition-colors ${
                                isDark ? 'text-white hover:text-[#FF781F]' : 'text-[#475569] hover:text-black'
                            }`}>
                                Connexion
                            </a>
                            <a href="/register" className="bg-[#FF781F] text-white px-5 py-2 rounded-full font-bold hover:bg-[#e66a1a] transition text-center">
                                Inscription
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </header>
    )
}