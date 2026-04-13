export default function LeftSection() {
    return (
        <div class="relative w-full max-w-md h-200 overflow-hidden rounded-4xl shadow-2xl font-sans">
            <img 
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=1000" 
                alt="Professional cleaner" 
                class="absolute inset-0 w-full h-full object-cover object-center"
            />

            <div class="absolute inset-0 bg-linear-to-b from-orange-400/70 via-orange-500/90 to-[#EA580C]"></div>

            <div class="relative z-10 h-full flex flex-col justify-center p-10 md:p-12 text-white">
                <p class="text-2xl font-black flex items-center gap-1">
                    Khidma<span class="text-[#FF781F]">.ma</span>
                </p>

                <h1 class="text-4xl md:text-5xl font-extrabold mb-6 leading-[1.1] tracking-tight">
                    Join<br />
                    Khidma.ma<br />
                    Today
                </h1>

                <p class="text-white/90 text-base mb-10 leading-relaxed max-w-sm">
                    Create your account to offer your services, connect with thousands of local customers, and grow your business seamlessly.
                </p>

                <div class="flex items-center gap-4">
                    <div class="flex -space-x-3">
                        <img class="w-11 h-11 rounded-full border-2 border-orange-500 object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100" alt="User 1"/>

                        <img class="w-11 h-11 rounded-full border-2 border-orange-500 object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100" alt="User 2"/>

                        <img class="w-11 h-11 rounded-full border-2 border-orange-500 object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100" alt="User 3"/>
                    </div>

                    <span class="text-sm font-medium text-white/90">Join 10k+ professionals</span>
                </div>
            </div>
        </div>
    )
}