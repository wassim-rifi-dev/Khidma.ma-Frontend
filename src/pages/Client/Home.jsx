import { useContext, useEffect } from "react";
// import Header from "../../components/Client/Home/Header";
import { AuthContext } from "../../context/AuthContext";

export default function Home() {
    const { user } = useContext(AuthContext);

    useEffect(() => {
            console.log(user);
        }, [user]);

    return (
        <div className={`min-h-screen transition-colors duration-300 bg-white`}>
            {/* <Header /> */}
        </div>
    )
}