import { useEffect, useState } from "react";
import {
    FiChevronDown,
    FiMapPin,
    FiSearch,
    FiSliders,
    FiTool,
} from "react-icons/fi";
import { getAllServices } from "../../../../services/ServiceServices";
import { getAllCategories } from "../../../../services/CategoryServices";
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
    const [allServices, setAllServices] = useState([]);
    const [categoryOptions, setCategoryOptions] = useState([]);
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
        async function fetchInitialServices() {
            try {
                const [servicesResponse, categoriesResponse] = await Promise.all([
                    getAllServices(maxVisibleServices),
                    getAllCategories(),
                ]);
                const servicesPayload = servicesResponse.data.services;
                const categoriesPayload = categoriesResponse.data.categories ?? [];
                setAllServices(servicesPayload.data ?? []);
                setCategoryOptions(
                    categoriesPayload
                        .map((category) => category.name)
                        .filter(Boolean)
                );
            } catch (error) {
                console.error("Error fetching services:", error);
                setAllServices([]);
                setCategoryOptions([]);
            } finally {
                setIsLoading(false);
            }
        }

        fetchInitialServices();
    }, []);

    async function handleLoadMore() {
        setIsLoadingMore(true);
        setVisibleCount(allServices.length);
        setIsLoadingMore(false);
    }

    function handleFilterChange(event) {
        const { name, value } = event.target;
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

    const cityOptions = [...new Set(allServices.map((service) => service.city).filter(Boolean))];

    const filteredServices = allServices.filter((service) => {
        const matchesQuery = filters.query.trim()
            ? [service.title, service.description, service.category?.name]
                .filter(Boolean)
                .some((value) => value.toLowerCase().includes(filters.query.trim().toLowerCase()))
            : true;
        const matchesCategory = filters.category
            ? service.category?.name?.toLowerCase().includes(filters.category.toLowerCase())
            : true;
        const matchesCity = filters.city
            ? service.city?.toLowerCase().includes(filters.city.toLowerCase())
            : true;

        return matchesQuery && matchesCategory && matchesCity;
    });

    const sortedServices = [...filteredServices].sort((firstService, secondService) => {
        if (filters.sort === "Top Rated") {
            return Number(secondService.rating || 0) - Number(firstService.rating || 0);
        }

        if (filters.sort === "Price: Low to High") {
            return Number(firstService.price_min || 0) - Number(secondService.price_min || 0);
        }

        if (filters.sort === "Price: High to Low") {
            return Number(secondService.price_min || 0) - Number(firstService.price_min || 0);
        }

        if (filters.sort === "Newest") {
            return new Date(secondService.created_at) - new Date(firstService.created_at);
        }

        return 0;
    });

    const hasActiveFilters = Boolean(
        filters.query || filters.category || filters.city || filters.sort
    );
    const servicesToRender = hasActiveFilters
        ? sortedServices
        : allServices.slice(0, visibleCount);
    const canLoadMore = !hasActiveFilters && visibleCount < allServices.length;

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
                    ) : servicesToRender.length === 0 ? (
                        <ServicesState message="No services match your search." />
                    ) : (
                        servicesToRender.map((service, index) => (
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
