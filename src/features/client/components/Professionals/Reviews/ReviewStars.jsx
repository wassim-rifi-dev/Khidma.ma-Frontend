import { FiStar } from "react-icons/fi";

export default function ReviewStars({ rating }) {
    return (
        <div className="flex items-center gap-1 text-orange-400">
            {Array.from({ length: 5 }).map((_, index) => (
                <FiStar
                    key={index}
                    className={`h-4 w-4 ${index < rating ? "fill-current" : ""}`}
                />
            ))}
        </div>
    );
}
