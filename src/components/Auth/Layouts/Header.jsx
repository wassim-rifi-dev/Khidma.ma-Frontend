import { Link, useLocation } from 'react-router-dom';
import logoLight from '../../../assets/logoLight.svg';

export default function Header() {
    const location = useLocation();

    return (
        <header className="bg-white py-4 px-6 md:px-12 flex justify-between items-center w-full shadow-sm">

            <Link to={'/'}>
                <img src={logoLight} alt="Logo" className="h-12 w-auto" />
            </Link>

            <div className="flex items-center space-x-6 text-sm md:text-base font-medium">
                {
                    location.pathname === '/register' ?
                        <Link to={'/login'} className="text-[#FF7900] hover:text-orange-600 transition-colors duration-200">
                            Sign In
                        </Link> :
                        <Link to={'/register'} className="text-[#FF7900] hover:text-orange-600 transition-colors duration-200">
                            Register
                        </Link>
                }
                <a href="#" className="text-gray-500 hover:text-gray-800 transition-colors duration-200">
                    Support
                </a>
            </div>

        </header>
    )
}
