export default function SocialSection() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button
                type="button"
                className="flex items-center justify-center gap-3 py-4 border border-slate-300 rounded-full text-slate-700 font-semibold hover:bg-slate-50 transition"
            >
                <img
                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                    alt="google"
                    className="w-5 h-5"
                />
                    Google
            </button>

            <button
                type="button"
                className="flex items-center justify-center gap-3 py-4 border border-slate-300 rounded-full text-slate-700 font-semibold hover:bg-slate-50 transition"
            >
                <img
                    src="https://www.svgrepo.com/show/475647/facebook-color.svg"
                    alt="facebook"
                    className="w-5 h-5"
                />
                    Facebook
            </button>
        </div>
    )
}