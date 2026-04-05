import { PiSealCheckBold } from "react-icons/pi";
import { IoSearch } from "react-icons/io5";
import { MdOutlineLocationOn } from "react-icons/md";

export default function Hero({isDark}) {
    return (
        <section className={`flex items-center justify-between py-16 px-2 md:px-6 lg:px-12 ${
            isDark ? 'bg-[#0F172A]' : 'bg-white'
        }`}>
            {/* Left Side */}
            <div>
                <div>
                    <PiSealCheckBold />
                    Des professionnels locaux vérifiés à votre service
                </div>
                <h1>
                    Trouvez les meilleurs 
                    <span> professionnels </span>
                    près de chez vous
                </h1>
                <p>
                    Réservez des plombiers, électriciens, menuisiers et bien plus en quelques clics. La manière la plus simple de faire avancer vos projets au Maroc.
                </p>
                <div>
                    <div>
                        <IoSearch />
                        <select>
                            <option selected disabled>Select Service</option>
                        </select>
                    </div>
                    <div>
                        <MdOutlineLocationOn />
                        <select>
                            <option selected disabled>Select Service</option>
                        </select>
                    </div>
                    <div>
                        <a href="/register">Find a professionnal</a>
                    </div>
                </div>
            </div>
            {/* Right Side */}
            <div>
                <img src="" alt="" />
                <div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </section>
    )
}