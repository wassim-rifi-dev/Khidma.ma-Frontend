import { FaArrowRightLong } from "react-icons/fa6";
import { MdPlumbing } from "react-icons/md";

export default function PopularServices() {
    return (
        <section>
            <div>
                <div>
                    <h2>Popular Services</h2>
                    <p>Get your home tasks handled by experts</p>
                </div>
                <div>
                    <a href="#">
                        View all services
                        <FaArrowRightLong />
                    </a>
                </div>
            </div>
            <div>
                <div>
                    <div>
                        <MdPlumbing />
                    </div>
                    <h4>
                        Plumbing
                    </h4>
                    <p>
                        Leaky pipes & taps
                    </p>
                </div>
            </div>
        </section>
    )
}