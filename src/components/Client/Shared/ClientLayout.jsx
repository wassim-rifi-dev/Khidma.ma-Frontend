import ClientHeader from "./ClientHeader";
import Footer from "../../Landing/Footer";
import ChatFlow from "../../Chat";

export default function ClientLayout({
    children,
    isDark,
    toogleDark,
    className = "min-h-screen bg-white transition-colors duration-300",
    mainClassName = "mt-18",
    includeFooter = true,
}) {
    return (
        <div className={className}>
            <ChatFlow />
            <ClientHeader isDark={isDark} toogleDark={toogleDark} />

            <main className={mainClassName}>
                {children}
            </main>

            {includeFooter ? <Footer /> : null}
        </div>
    );
}
