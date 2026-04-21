import { useEffect, useState } from "react";
import {
    FiChevronDown,
    FiMapPin,
    FiSearch,
    FiTool,
} from "react-icons/fi";
import { getAllServices } from "../../../../services/ServiceServices";
import SearchBox from "./SearchBox";
import ServiceCard from "./ServiceCard";
import ServicesState from "./ServicesState";

const initialVisibleServices = 6;
const maxVisibleServices = 50;
const fallbackImages = [
    "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80",
];

export default function ServicesExplorer() {
    const [services, setServices] = useState([]);
    const [totalServices, setTotalServices] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [isLoadingMore, setIsLoadingMore] = useState(false);

    useEffect(() => {
        async function fetchInitialServices() {
            try {
                const response = await getAllServices(initialVisibleServices);
                const servicesPayload = response.data.services;
                setServices(servicesPayload.data ?? []);
                setTotalServices(servicesPayload.total ?? 0);
            } catch (error) {
                console.error("Error fetching services:", error);
                setServices([]);
                setTotalServices(0);
            } finally {
                setIsLoading(false);
            }
        }

        fetchInitialServices();
    }, []);

    async function handleLoadMore() {
        setIsLoadingMore(true);

        try {
            const response = await getAllServices(maxVisibleServices);
            const servicesPayload = response.data.services;
            setServices(servicesPayload.data ?? []);
            setTotalServices(servicesPayload.total ?? 0);
        } catch (error) {
            console.error("Error loading more services:", error);
        } finally {
            setIsLoadingMore(false);
        }
    }

    const canLoadMore = services.length < totalServices;

    return (
        <section className="min-h-screen bg-[#f6f8fc] px-4 py-10 sm:px-6 lg:px-8">
            <div className="mx-auto w-full max-w-7xl">
                <div className="max-w-2xl">
                    <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
                        Explore Services
                    </h1>
                    <p className="mt-4 text-lg leading-8 text-slate-500">
                        Find the right professional for your needs. From skilled
                        tradesmen to creative freelancers, discover top talent ready
                        to help.
                    </p>
                </div>

                <div className="mt-10 rounded-[28px] bg-white p-3 shadow-[0_24px_60px_rgba(15,23,42,0.08)]">
                    <div className="grid gap-3 xl:grid-cols-[1.2fr_0.9fr_0.9fr_auto]">
                        <SearchBox
                            icon={FiSearch}
                            placeholder="What service do you need?"
                        />
                        <SearchBox
                            icon={FiTool}
                            value="What service do you need?"
                            hasChevron
                        />
                        <SearchBox
                            icon={FiMapPin}
                            value="Casablanca"
                            hasChevron
                        />
                        <button className="h-14 rounded-2xl bg-orange-500 px-8 text-base font-semibold text-white shadow-[0_12px_30px_rgba(249,115,22,0.28)] transition hover:bg-orange-600">
                            Search
                        </button>
                    </div>
                </div>

                <div className="mt-10 grid gap-7 lg:grid-cols-2 xl:grid-cols-3">
                    {isLoading ? (
                        <ServicesState message="Loading services..." />
                    ) : services.length === 0 ? (
                        <ServicesState message="No services available right now." />
                    ) : (
                        services.map((service, index) => (
                            <ServiceCard
                                key={service.id}
                                service={service}
                                image={service.image || fallbackImages[index % fallbackImages.length]}
                                iconIndex={index}
                            />
                        ))
                    )}
                </div>

                {canLoadMore ? (
                    <div className="mt-12 flex justify-center">
                        <button
                            type="button"
                            onClick={handleLoadMore}
                            disabled={isLoadingMore}
                            className="inline-flex items-center gap-2 rounded-full bg-[#dbe6fb] px-7 py-3 text-sm font-semibold text-slate-500 transition hover:bg-[#cfdcf7] disabled:cursor-not-allowed disabled:opacity-70"
                        >
                            {isLoadingMore ? "Loading..." : "Load More Services"}
                            <FiChevronDown className="h-4 w-4" />
                        </button>
                    </div>
                ) : null}
            </div>
        </section>
    );
}
