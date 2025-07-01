import { useState } from 'react';
import backgroundImg from '../../assets/images/gallerySection.jpg';


const GallerySection = () => {
    const [isGalleryOpen, setIsGalleryOpen] = useState(false);

    // Sample gallery data for the event
    const eventImages = [
        { id: 1, src: '/images/event1.jpg', alt: 'Event moment 1' },
        { id: 2, src: '/images/event2.jpg', alt: 'Event moment 2' },
        { id: 3, src: '/images/event3.jpg', alt: 'Event moment 3' },
        { id: 4, src: '/images/event4.jpg', alt: 'Event moment 4' },
        { id: 5, src: '/images/event5.jpg', alt: 'Event moment 5' },
        { id: 6, src: '/images/event6.jpg', alt: 'Event moment 6' },
    ];

    const openGallery = () => {
        setIsGalleryOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeGallery = () => {
        setIsGalleryOpen(false);
        document.body.style.overflow = 'auto';
    };

    return (
        <section
            id="venue"
            className="relative py-16 bg-gray-900  mb-10 "
            style={{
                backgroundImage: `url(${backgroundImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed",
                backgroundRepeat: "no-repeat"
            }}
        >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/80"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row items-center">
                    {/* Gallery Intro - Left Side */}
                    <div className="w-full md:w-1/2 mb-12 md:mb-0 md:pr-8">
                        <h2 className="text-3xl font-bold text-white mb-6">Event Gallery</h2>
                        <div className="mb-6 overflow-hidden rounded-lg shadow-lg">
                            <img
                                src="/images/speakers-img3.jpg"
                                alt="Event highlight"
                                className="w-full h-auto transition-transform duration-300 hover:scale-105"
                            />
                        </div>
                        <p className="text-gray-200 mb-6">
                            Relive the memorable moments from our event. Browse through our collection of photos capturing the energy and excitement.
                        </p>
                        <button
                            onClick={openGallery}
                            className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            View Event Gallery
                        </button>
                    </div>

                    {/* Right Side - Optional content or more images */}
                    <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
                        {eventImages.slice(0, 4).map((image) => (
                            <div key={image.id} className="overflow-hidden rounded-lg shadow-md">
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Full Gallery Modal */}
            {isGalleryOpen && (
                <div className="fixed inset-0 z-50 bg-black bg-opacity-90 overflow-y-auto">
                    <div className="container mx-auto px-4 py-16 relative">
                        <button
                            onClick={closeGallery}
                            className="fixed top-4 right-4 text-white hover:text-gray-300 z-50"
                        >
                            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <h2 className="text-3xl font-bold text-white mb-8 text-center">Event Gallery</h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {eventImages.map((image) => (
                                <div key={image.id} className="group relative overflow-hidden rounded-lg shadow-xl">
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                        className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                        <p className="text-white text-sm">{image.alt}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default GallerySection;