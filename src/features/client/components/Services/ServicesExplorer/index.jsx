import { useEffect, useState } from "react";
import {
    FiChevronDown,
    FiMapPin,
    FiSearch,
    FiSliders,
    FiTool,
} from "react-icons/fi";
import { getAllServices } from "../../../../services/services/ServiceServices";
import { getAllCategories } from "../../../../../shared/services/CategoryServices";
import getStorageUrl from "../../../../../shared/utils/getStorageUrl";
import SearchBox from "./SearchBox";
import ServiceCard from "./ServiceCard";
import ServicesState from "./ServicesState";

const initialVisibleServices = 3;
const loadMoreStep = 6;
const fallbackImages = [
    "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80",
];

export default function ServicesExplorer() {
    const [services, setServices] = useState([]);
    const [categoryOptions, setCategoryOptions] = useState([]);
    const [cityOptions, setCityOptions] = useState([]);
    const [totalServices, setTotalServices] = useState(0);
    const [visibleCount, setVisibleCount] = useState(initialVisibleServices);
    const [isLoading, setIsLoading] = useState(true);
    const [isLoadingMore, setIsLoadingMore] = useState(false);
    const [filters, setFilters] = useState({
        query: "",
        category: "",
        city: "",
        sort: "",
    });
    const sortOptions = [
        "Top Rated",
        "Price: Low to High",
        "Price: High to Low",
        "Newest",
    ];

    useEffect(() => {
        async function fetchCategories() {
            try {
                const categoriesResponse = await getAllCategories();
                const categoriesPayload = categoriesResponse.data.categories ?? [];

                setCategoryOptions(
                    categoriesPayload
                        .map((category) => category.name)
                        .filter(Boolean)
                );
            } catch (error) {
                console.error("Error fetching categories:", error);
                setCategoryOptions([]);
            }
        }

        fetchCategories();
    }, []);

    useEffect(() => {
        let isMounted = true;
        const timeoutId = setTimeout(async () => {
            setIsLoading(true);

            try {
                const servicesResponse = await getAllServices(visibleCount, filters);
                const servicesPayload = servicesResponse.data.services;

                if (isMounted) {
                    setServices(servicesPayload.data ?? []);
                    setTotalServices(servicesPayload.total ?? 0);
                    setCityOptions(servicesResponse.data.cities ?? []);
                }
            } catch (error) {
                console.error("Error fetching services:", error);

                if (isMounted) {
                    setServices([]);
                    setTotalServices(0);
                    setCityOptions([]);
                }
            } finally {
                if (isMounted) {
                    setIsLoading(false);
                    setIsLoadingMore(false);
                }
            }
        }, 300);

        return () => {
            isMounted = false;
            clearTimeout(timeoutId);
        };
    }, [filters, visibleCount]);

    function handleLoadMore() {
        setIsLoadingMore(true);
        setVisibleCount((currentCount) => currentCount + loadMoreStep);
    }

    function handleFilterChange(event) {
        const { name, value } = event.target;

        setVisibleCount(initialVisibleServices);
        setFilters((currentFilters) => ({
            ...currentFilters,
            [name]: value,
        }));
    }

    function handleClearFilters() {
        setFilters({
            query: "",
            category: "",
            city: "",
            sort: "",
        });
        setVisibleCount(initialVisibleServices);
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
                    <div className="grid gap-3 xl:grid-cols-[1.2fr_0.9fr_0.9fr_0.9fr_auto]">
                        <SearchBox
                            icon={FiSearch}
                            name="query"
                            value={filters.query}
                            onChange={handleFilterChange}
                            placeholder="What service do you need?"
                        />
                        <SearchBox
                            icon={FiTool}
                            name="category"
                            value={filters.category}
                            onChange={handleFilterChange}
                            placeholder="Choose category"
                            options={categoryOptions}
                            hasChevron
                        />
                        <SearchBox
                            icon={FiMapPin}
                            name="city"
                            value={filters.city}
                            onChange={handleFilterChange}
                            placeholder="Choose city"
                            options={cityOptions}
                            hasChevron
                        />
                        <SearchBox
                            icon={FiSliders}
                            name="sort"
                            value={filters.sort}
                            onChange={handleFilterChange}
                            placeholder="Sort by"
                            options={sortOptions}
                            hasChevron
                        />
                        <button
                            type="button"
                            onClick={handleClearFilters}
                            className="h-14 rounded-2xl bg-orange-500 px-8 text-base font-semibold text-white shadow-[0_12px_30px_rgba(249,115,22,0.28)] transition hover:bg-orange-600"
                        >
                            Clear Filters
                        </button>
                    </div>
                </div>

                <div className="mt-10 grid gap-7 lg:grid-cols-2 xl:grid-cols-3">
                    {isLoading ? (
                        <ServicesState message="Loading services..." />
                    ) : services.length === 0 ? (
                        <ServicesState message="No services match your search." />
                    ) : (
                        services.map((service, index) => (
                            <ServiceCard
                                key={service.id}
                                service={service}
                                image={getStorageUrl(service.images?.[0]?.image_url) || fallbackImages[index % fallbackImages.length]}
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
