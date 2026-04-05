import { IoLanguage } from "react-icons/io5";
import { MdOutlineDarkMode , MdMenu } from "react-icons/md";
import logoLight from '../../assets/logoLight.svg';
import { useState } from "react";

export default function Header() {
    const [menuOpen , toggleMenu] = useState(false);
    return (
        <header className="relative z-50">
            <div className="flex items-center justify-between px-5 md:px-10 h-18 bg-white border-b-2 border-[#E2E8F0] shadow-lg">

                <img src={logoLight} alt="Logo" className="h-14 w-auto" />

                <nav className="hidden md:flex items-center gap-8 text-[#475569] font-bold text-[15px]">
                    <a href="#" className="hover:text-black transition">Accueil</a>
                    <a href="#" className="hover:text-black transition">Services</a>
                    <a href="#" className="hover:text-black transition whitespace-nowrap">Comment ça fonctionne</a>
                </nav>

                <div className="hidden md:flex items-center gap-6">
                    <div className="flex items-center gap-5 text-[#0F172A] text-[20px]">
                        <button className="hover:text-[#FF781F] transition">
                            <IoLanguage />
                        </button>
                        <button className="hover:text-[#FF781F] transition">
                            <MdOutlineDarkMode />
                        </button>
                    </div>

                    <div className="w-px h-8 bg-gray-300" />

                    <div className="flex items-center gap-4">
                        <a href="/login" className="text-[#475569] font-semibold hover:text-black transition">
                            Connexion
                        </a>
                        <a href="/register" className="bg-[#FF781F] text-white px-6 py-2.5 rounded-full font-bold hover:bg-[#e66a1a] transition">
                            Inscription
                        </a>
                    </div>
                </div>

                <button className="md:hidden text-[#0F172A] p-1" onClick={() => toggleMenu(!menuOpen)}>
                    <MdMenu size={26} />
                </button>
            </div>

            {menuOpen && (
                <div className="md:hidden bg-white border-b-2 border-[#E2E8F0] shadow-lg px-6 py-4 flex flex-col">
                    <nav className="flex flex-col text-[#475569] font-bold">
                        <a href="#" className="py-3 border-b border-[#F1F5F9] hover:text-black transition">Accueil</a>
                        <a href="#" className="py-3 border-b border-[#F1F5F9] hover:text-black transition">Services</a>
                        <a href="#" className="py-3 hover:text-black transition">Comment ça fonctionne</a>
                    </nav>

                    <div className="flex items-center justify-between mt-5 pt-4 border-t border-[#E2E8F0]">
                        <div className="flex items-center gap-4 text-[#0F172A] text-[20px]">
                            <button>
                                <IoLanguage />
                            </button>
                            <button>
                                <MdOutlineDarkMode />
                            </button>
                        </div>

                        <div className="flex items-center gap-3">
                            <a href="/login" className="text-[#475569] font-semibold hover:text-black transition">
                                Connexion
                            </a>
                            <a href="/register" className="bg-[#FF781F] text-white px-5 py-2 rounded-full font-bold hover:bg-[#e66a1a] transition">
                                Inscription
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </header>
    )
}