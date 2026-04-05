import { IoLanguage } from "react-icons/io5";
import { MdOutlineDarkMode } from "react-icons/md";
import logoLight from '../../assets/logoLight.svg';

export default function Header() {
    return (
        <header>
            <div>
                <img src={logoLight} alt="Logo"/>
            </div>

            <nav>
                <a href="#">Accueil</a>
                <a href="#">Services</a>
                <a href="#">Comment ça fonctionne</a>
            </nav>

            <div>
                <div>
                    <button>
                        <IoLanguage />
                    </button>
                    <button>
                        <MdOutlineDarkMode />
                    </button>
                </div>
                <div>
                    <a href="#">Connexion</a>
                    <a href="#">Inscription</a>
                </div>
            </div>
        </header>
    )
}