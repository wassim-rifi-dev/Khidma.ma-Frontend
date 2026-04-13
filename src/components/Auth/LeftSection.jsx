export default function LeftSection() {
    return (
        <div class="relative hidden md:flex md:w-1/2 h-screen overflow-hidden text-white">
            <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=1000"
                class="absolute inset-0 w-full h-full object-cover"
            />

            <div class="absolute inset-0 bg-linear-to-b from-white/40 via-orange-300/60 to-[#F97316]"></div>

            <div class="relative z-10 flex flex-col justify-center px-10 lg:px-16 max-w-md">

                <p class="text-xl font-bold mb-6">
                    Khidma<span class="text-[#FF781F]">.ma</span>
                </p>

                <h1 class="text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
                    Welcome <br/>
                    Back to <br/>
                    Khidma.ma
                </h1>

                <p class="text-white/90 text-sm leading-relaxed mb-10">
                    Access your professional services dashboard and manage your requests
                    seamlessly. Connect with top-tier talent or grow your business today.
                </p>

                <div class="flex items-center gap-4">

                    <div class="flex -space-x-3">
                        <img class="w-10 h-10 rounded-full border-2 border-white object-cover"
                            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100"/>

                        <img class="w-10 h-10 rounded-full border-2 border-white object-cover"
                            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100"/>

                        <img class="w-10 h-10 rounded-full border-2 border-white object-cover"
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100"/>
                    </div>

                    <span class="text-sm text-white/90">
                        Join 10k+ professionals
                    </span>
                </div>
            </div>
        </div>
    )
}