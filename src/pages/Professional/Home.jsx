import { useContext } from "react";
import Header from "../../components/Professional/Shared/Header";
import SideBar from "../../components/Professional/Shared/SideBar";
import { AuthContext } from "../../context/AuthContext";
import WelcomeCard from "../../components/Professional/Home/WelcomeCard";

export default function Home() {
    const { user } = useContext(AuthContext);

    return (
        <main className="min-h-screen bg-[#f6f8fc]">
            <SideBar />
            <Header withSidebar />

            <section className="ml-60 px-8 pb-8 pt-28 lg:px-12">
                <WelcomeCard user={user} />
            </section>
        </main>
    );
}
