import { useContext } from "react";
import Header from "../../components/Client/Home/Header";
import { AuthContext } from "../../context/AuthContext";

export default function Home() {
    const { user } = useContext(AuthContext);

    function test() {
        return console.log(user);
    }

    return (
        <div className={`min-h-screen transition-colors duration-300 bg-white`}>
            <Header />
            {test()
            }
        </div>
    )
}