import defaultProfile from "../../../assets/Profile/default_profile.jpg";
import getUserPhotoUrl from "../../../utils/getUserPhotoUrl";

export default function WelcomeCard({ user }) {
    return (
        <div className="relative flex min-h-70 w-full items-center justify-between overflow-hidden rounded-[30px] border border-slate-100 bg-white px-14 py-14 shadow-[0_22px_55px_rgba(15,23,42,0.07)]">
            <div className="pointer-events-none absolute right-0 top-0 h-full w-[42%] bg-linear-to-l from-orange-50 via-orange-50/55 to-transparent" />

            <div className="relative z-10 max-w-4xl">
                <h2 className="mb-6 text-3xl font-bold text-slate-950">
                    Welcome to {user.name} 👋
                </h2>
                <p className="max-w-3xl text-xl leading-9 text-slate-600">
                    Let's set up your profile and start getting clients. Follow the steps below to make your services visible to thousands of potential customers.
                </p>
            </div>

            <div className="relative z-10 shrink-0">
                <div className="h-52 w-52 overflow-hidden rounded-full border-[7px] border-white bg-slate-100 shadow-[0_20px_40px_rgba(15,23,42,0.13)]">
                    <img
                        src={ getUserPhotoUrl(user.photo) || defaultProfile }
                        alt={`${user.name} profile`}
                        className="h-full w-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
}
