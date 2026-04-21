import { useEffect, useState } from "react";
import ProfessionalCard from "./cards/ProfessionalCard";
import { getTopProfessionals } from "../../../services/ProfessionalServices";

export default function TopProfessional() {
    const [professionals, setProfessionals] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchTopProfessionals() {
            try {
                const response = await getTopProfessionals();
                setProfessionals(response.data.professionals ?? []);
            } catch (error) {
                console.error("Error fetching top professionals:", error);
                setProfessionals([]);
            } finally {
                setIsLoading(false);
            }
        }

        fetchTopProfessionals();
    }, []);

    return (
        <div className="w-full mx-auto px-4 sm:px-6 md:px-10 lg:px-16 py-16 font-sans">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
                <div className="lg:col-span-4 space-y-8 text-center lg:text-left">
                    <div>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] mb-4">
                            Top Professionals
                        </h2>

                        <p className="text-gray-500 text-base sm:text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
                            Meet our highest-rated experts chosen directly from the latest professionals in our network.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-center p-4 bg-white rounded-2xl border border-gray-50 shadow-sm">
                            <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mr-4 shrink-0">
                                <svg className="w-6 h-6 text-[#FF7A1A]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                                </svg>
                            </div>

                            <div className="text-left">
                                <h4 className="font-bold text-[#111827]">
                                    Identity Verified
                                </h4>
                                <p className="text-sm text-gray-400">
                                    Background checks completed
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center p-4 bg-white rounded-2xl border border-gray-50 shadow-sm">
                            <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mr-4 shrink-0">
                                <svg className="w-6 h-6 text-[#FF7A1A]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"/>
                                </svg>
                            </div>

                            <div className="text-left">
                                <h4 className="font-bold text-[#111827]">
                                    Secure Escrow
                                </h4>
                                <p className="text-sm text-gray-400">
                                    Pay only when satisfied
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {isLoading ? (
                        <div className="sm:col-span-2 rounded-[30px] bg-white p-8 text-center text-sm text-slate-500 shadow-sm">
                            Loading top professionals...
                        </div>
                    ) : professionals.length === 0 ? (
                        <div className="sm:col-span-2 rounded-[30px] bg-white p-8 text-center text-sm text-slate-500 shadow-sm">
                            No professionals available right now.
                        </div>
                    ) : (
                        professionals.map((professional) => (
                            <ProfessionalCard key={professional.id} professional={professional} />
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}
