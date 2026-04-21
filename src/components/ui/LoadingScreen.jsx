import logoLight from "../../assets/logoLight.svg";

export default function LoadingScreen({
    title = "Preparing your workspace",
    subtitle = "We are checking your session and loading the right experience.",
}) {
    return (
        <div className="flex min-h-screen items-center justify-center bg-[#F8F9FA] px-6">
            <div className="flex w-full max-w-sm flex-col items-center text-center">
                <img src={logoLight} alt="Khidma" className="h-10 w-auto" />

                <div className="mt-8 h-12 w-12 animate-spin rounded-full border-4 border-slate-200 border-t-orange-500" />

                <h1 className="mt-6 text-xl font-semibold text-slate-900">
                    {title}
                </h1>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                    {subtitle}
                </p>
            </div>
        </div>
    );
}
