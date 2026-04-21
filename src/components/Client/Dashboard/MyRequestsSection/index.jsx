import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as requestServices from "../../../../services/RequestServices";
import RequestCard from "./RequestCard";

const showcaseImages = [
    {
        src: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4",
        alt: "Electrician",
        className: "w-full h-40 sm:h-56 lg:h-64 object-cover rounded-2xl shadow-sm",
    },
    {
        src: "https://images.unsplash.com/photo-1581578731548-c64695cc6952",
        alt: "Cleaning",
        className: "w-full h-36 sm:h-48 lg:h-56 object-cover rounded-2xl shadow-sm",
    },
    {
        src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
        alt: "Room",
        className: "w-full h-32 sm:h-40 lg:h-48 object-cover rounded-2xl shadow-sm",
    },
    {
        src: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc",
        alt: "Carpenter",
        className: "w-full h-44 sm:h-56 lg:h-72 object-cover rounded-2xl shadow-sm",
    },
];

function EmptyRequestsState() {
    return (
        <div className="rounded-2xl bg-white p-4 text-sm text-slate-500 shadow-sm border border-gray-50">
            You have no requests yet. Your latest bookings will show up here.
        </div>
    );
}

export default function MyRequestsSection() {
    const [requests, setRequests] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchRequests() {
            try {
                const response = await requestServices.getLastThreeClientRequest();
                const requests = response.data.requests ?? [];
                setRequests(requests);
            } catch (error) {
                console.error("Error fetching client requests:", error);
                setRequests([]);
            } finally {
                setIsLoading(false);
            }
        }

        fetchRequests();
    }, []);

    return (
        <div className="min-h-screen p-4 sm:p-6 lg:p-8 flex items-center justify-center">
            <div className="w-full flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
                <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                    <div className="flex flex-col gap-4">
                        {showcaseImages.slice(0, 2).map((image) => (
                            <img
                                key={image.src}
                                src={image.src}
                                alt={image.alt}
                                className={image.className}
                            />
                        ))}
                    </div>

                    <div className="flex flex-col gap-4">
                        {showcaseImages.slice(2).map((image) => (
                            <img
                                key={image.src}
                                src={image.src}
                                alt={image.alt}
                                className={image.className}
                            />
                        ))}
                    </div>
                </div>

                <div className="w-full sm:max-w-105 lg:max-w-87.5 bg-[#f8f9fa] rounded-2xl p-4 sm:p-5 shadow-sm border border-gray-100">
                    <div className="flex justify-between items-center mb-4 px-1">
                        <h2 className="text-lg sm:text-xl font-bold text-gray-900 tracking-tight">
                            My Requests
                        </h2>

                        <Link
                            to="/profile"
                            className="text-[#ff7e5f] font-semibold text-xs sm:text-sm hover:underline"
                        >
                            See all
                        </Link>
                    </div>

                    <div className="flex flex-col gap-3">
                        {isLoading ? (
                            <div className="rounded-2xl bg-white p-4 text-sm text-slate-500 shadow-sm border border-gray-50">
                                Loading your requests...
                            </div>
                        ) : requests.length === 0 ? (
                            <EmptyRequestsState />
                        ) : (
                            requests.map((request) => (
                                <RequestCard key={request.id} request={request} />
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
