import { Link } from "react-router-dom";

export default function ProfessionalFooter() {
    return (
        <footer className="mt-10 border-t border-slate-200 py-6">
            <div className="flex flex-col gap-3 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
                <p>© 2026 Khidma.ma. Professional dashboard.</p>

                <div className="flex items-center gap-5">
                    <Link to="/professional/home" className="transition hover:text-[#F97415]">
                        Home
                    </Link>
                    <Link to="/professional/profile" className="transition hover:text-[#F97415]">
                        Profile
                    </Link>
                    <a href="mailto:contact@khidma.ma" className="transition hover:text-[#F97415]">
                        Support
                    </a>
                </div>
            </div>
        </footer>
    );
}
