import {
    FiUsers,
    FiBriefcase,
    FiClipboard,
    FiLayers,
} from "react-icons/fi";

export const statCardsConfig = [
    {
        key: "total_users",
        label: "Total users",
        accent: "from-sky-500 to-cyan-400",
        icon: FiUsers,
    },
    {
        key: "active_professionals",
        label: "Active professionals",
        accent: "from-emerald-500 to-lime-400",
        icon: FiBriefcase,
    },
    {
        key: "open_requests",
        label: "Open requests",
        accent: "from-amber-500 to-orange-400",
        icon: FiClipboard,
    },
    {
        key: "published_services",
        label: "Published services",
        accent: "from-violet-500 to-fuchsia-400",
        icon: FiLayers,
    },
];