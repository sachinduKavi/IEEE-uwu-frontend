import {useRef, useState} from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import backgroundImg from '../../assets/images/gallerySection.jpg';

const GallerySection = () => {
    const [isGalleryOpen, setIsGalleryOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });

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
        setSelectedImage(null);
        document.body.style.overflow = 'auto';
    };

    const openImage = (image) => {
        setSelectedImage(image);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    return (
        <section
            id="venue"
            className="relative py-16 bg-gray-900 mb-10"
            style={{
                backgroundImage: `url(${backgroundImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed",
                backgroundRepeat: "no-repeat"
            }}
            ref={ref}
        >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/80"></div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    className="flex flex-col md:flex-row items-center"
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={containerVariants}
                >
                    {/* Gallery Intro - Left Side */}
                    <motion.div
                        className="w-full md:w-1/2 mb-12 md:mb-0 md:pr-8"
                        variants={itemVariants}
                    >
                        <h2 className="text-3xl font-bold text-white mb-6">Event Gallery</h2>
                        <motion.div
                            className="mb-6 overflow-hidden rounded-lg shadow-lg"
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <img
                                src="/images/speakers-img3.jpg"
                                alt="Event highlight"
                                className="w-full h-auto transition-transform duration-300 hover:scale-105"
                            />
                        </motion.div>
                        <p className="text-gray-200 mb-6">
                            Relive the memorable moments from our event. Browse through our collection of photos capturing the energy and excitement.
                        </p>
                        <motion.button
                            onClick={openGallery}
                            className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            View Event Gallery
                        </motion.button>
                    </motion.div>

                    {/* Right Side - Grid of images */}
                    <motion.div
                        className="w-full md:w-1/2 grid grid-cols-2 gap-4"
                        variants={containerVariants}
                    >
                        {eventImages.slice(0, 4).map((image, index) => (
                            <motion.div
                                key={image.id}
                                className="overflow-hidden rounded-lg shadow-md"
                                variants={itemVariants}
                                custom={index}
                                whileHover={{ scale: 1.05 }}
                            >
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300 cursor-pointer"
                                    onClick={() => openImage(image)}
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>

            {/* Full Gallery Modal */}
            <AnimatePresence>
                {isGalleryOpen && (
                    <motion.div
                        className="fixed inset-0 z-50 bg-black bg-opacity-90 overflow-y-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="container mx-auto px-4 py-16 relative">
                            <motion.button
                                onClick={closeGallery}
                                className="fixed top-4 right-4 text-white hover:text-gray-300 z-50"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </motion.button>

                            <h2 className="text-3xl font-bold text-white mb-8 text-center">Event Gallery</h2>

                            <motion.div
                                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                            >
                                {eventImages.map((image) => (
                                    <motion.div
                                        key={image.id}
                                        className="group relative overflow-hidden rounded-lg shadow-xl cursor-pointer"
                                        whileHover={{ scale: 1.02 }}
                                        onClick={() => openImage(image)}
                                        layoutId={`image-${image.id}`}
                                    >
                                        <img
                                            src={image.src}
                                            alt={image.alt}
                                            className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                            <p className="text-white text-sm">{image.alt}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Single Image View Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        className="fixed inset-0 z-50 bg-black bg-opacity-95 flex items-center justify-center p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeGallery}
                    >
                        <motion.button
                            className="absolute top-4 right-4 text-white hover:text-gray-300 z-50"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelectedImage(null);
                            }}
                        >
                            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </motion.button>

                        <motion.div
                            className="max-w-4xl w-full"
                            layoutId={`image-${selectedImage.id}`}
                        >
                            <img
                                src={selectedImage.src}
                                alt={selectedImage.alt}
                                className="w-full h-auto max-h-[80vh] object-contain"
                            />
                            <p className="text-white text-center mt-4">{selectedImage.alt}</p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default GallerySection;