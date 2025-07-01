import { useState } from "react";
import type { GalleryImage } from "../../types/types";
import { X } from "lucide-react";

const galleryImages: GalleryImage[] = [
    { src: "/placeholder.svg?height=300&width=400", caption: "IEEE Workshop 2024" },
    { src: "/placeholder.svg?height=300&width=400", caption: "Student Presentations" },
    { src: "/placeholder.svg?height=300&width=400", caption: "Networking Session" },
    { src: "/placeholder.svg?height=300&width=400", caption: "Technical Exhibition" },
    { src: "/placeholder.svg?height=300&width=400", caption: "Award Ceremony" },
    { src: "/placeholder.svg?height=300&width=400", caption: "Team Building Activities" },
    { src: "/placeholder.svg?height=300&width=400", caption: "Guest Speaker Session" },
    { src: "/placeholder.svg?height=300&width=400", caption: "Innovation Showcase" },
    { src: "/placeholder.svg?height=300&width=400", caption: "Student Projects" },
];

export default function GallerySection() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const openModal = (index: number) => {
        setCurrentImageIndex(index);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const navigateImage = (direction: 'prev' | 'next') => {
        if (direction === 'prev') {
            setCurrentImageIndex(prev => (prev === 0 ? galleryImages.length - 1 : prev - 1));
        } else {
            setCurrentImageIndex(prev => (prev === galleryImages.length - 1 ? 0 : prev + 1));
        }
    };

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-8">
                        Event <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Gallery</span>
                    </h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-8 rounded-full"></div>
                    <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                        Take a look at some memorable moments from our previous IEEE events and activities.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {galleryImages.map((image, index) => (
                        <div
                            key={index}
                            className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                            onClick={() => openModal(index)}
                        >
                            <div className="aspect-[4/3] bg-gray-100 relative">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                    <h4 className="text-lg font-semibold">{image.caption}</h4>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Modal */}
                {isModalOpen && (
                    <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
                        <button
                            onClick={closeModal}
                            className="absolute top-6 right-6 text-white hover:text-blue-300 transition-colors"
                            aria-label="Close modal"
                        >
                            <X className="w-8 h-8" />
                        </button>

                        <div className="relative max-w-4xl w-full">
                            <button
                                onClick={() => navigateImage('prev')}
                                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full z-10 transition-all"
                                aria-label="Previous image"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>

                            <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
                                <div className="aspect-video bg-gray-800 flex items-center justify-center relative">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="animate-pulse text-gray-500">Loading image...</div>
                                    </div>
                                </div>
                                <div className="p-4 bg-white">
                                    <h3 className="text-xl font-bold text-gray-900">
                                        {galleryImages[currentImageIndex].caption}
                                    </h3>
                                    <p className="text-gray-600">
                                        {currentImageIndex + 1} of {galleryImages.length}
                                    </p>
                                </div>
                            </div>

                            <button
                                onClick={() => navigateImage('next')}
                                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full z-10 transition-all"
                                aria-label="Next image"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}