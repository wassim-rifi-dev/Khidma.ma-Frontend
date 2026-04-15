export default function Footer() {
    return (
        <footer class="bg-white py-12 px-6 border-t border-gray-100">
            <div class="max-w-7xl mx-auto flex flex-col items-center">

                <div class="flex flex-wrap justify-center gap-8 mb-10">
                    <div class="flex items-center space-x-2 text-gray-400 font-bold text-xs tracking-widest uppercase">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        <span>Secure Data</span>
                    </div>

                    <div class="flex items-center space-x-2 text-gray-400 font-bold text-xs tracking-widest uppercase">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                        <span>Nationwide Support</span>
                    </div>
                </div>

                <div class="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 text-sm text-slate-400">
                    <p>&copy; 2024 Khidma.ma. All rights reserved.</p>

                    <div class="flex space-x-6">
                        <a href="#" class="hover:underline">Terms of Service</a>
                        <a href="#" class="hover:underline">Privacy Policy</a>
                        <a href="#" class="hover:underline">Help Center</a>
                    </div>
                </div>

            </div>
        </footer>
    )
}