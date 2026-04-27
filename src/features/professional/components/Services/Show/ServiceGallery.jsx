import { useState } from "react";
import { FiImage } from "react-icons/fi";

export default function ServiceGallery({ images }) {
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const selectedImage = images[selectedImageIndex] || images[0];

    if (!selectedImage) {
        return null;
    }

    return (
        <article className="mt-6 rounded-2xl bg-white p-7 shadow-sm">
            <div className="mb-5 flex items-center justify-between gap-4">
                <div>
                    <h2 className="text-2xl font-bold text-slate-900">Service photos</h2>
                    <p className="mt-1 text-sm font-medium text-slate-500">Portfolio images clients can see before requesting.</p>
                </div>
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-orange-50 text-orange-500">
                    <FiImage className="h-5 w-5" />
                </span>
            </div>

            <div className="space-y-4">
                <figure className="overflow-hidden rounded-[22px] bg-slate-100">
                    <img
                        src={selectedImage.src}
                        alt={selectedImage.title}
                        className="h-86 w-full object-cover"
                    />
                </figure>

                <div className="grid gap-4 sm:grid-cols-3">
                    {images.map((image, index) => (
                        <button
                            key={`${image.title}-${index}`}
                            type="button"
                            onClick={() => setSelectedImageIndex(index)}
                            className={`group overflow-hidden rounded-2xl border bg-slate-100 text-left shadow-sm ring-2 transition hover:ring-orange-300 ${
                                selectedImageIndex === index
                                    ? "border-orange-200 ring-orange-300"
                                    : "border-slate-100 ring-transparent"
                            }`}
                            title={image.title}
                        >
                            <img
                                src={image.src}
                                alt={image.title}
                                className="h-24 w-full object-cover transition duration-300 group-hover:scale-105"
                            />
                        </button>
                    ))}
                </div>
            </div>
        </article>
    );
}

