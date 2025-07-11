import { useRef, useState } from 'react';
import { motion, AnimatePresence, useInView,easeOut } from 'framer-motion';
import backgroundImg from '../../assets/images/gallerySection.jpg';
import img1 from '../../assets/open day/gallery/gallery8.jpg';
import img2 from '../../assets/open day/gallery/gallery4.jpg';
import img3 from '../../assets/open day/gallery/gallery10.jpg';
import img4 from '../../assets/open day/gallery/gallery1.jpg';
import img5 from '../../assets/open day/gallery/gallery17.jpg';
import img6 from '../../assets/open day/gallery/gallery11.jpg';
import img7 from '../../assets/open day/gallery/gallery20.jpg';
import img8 from '../../assets/open day/gallery/gallery9.jpg';
import img9 from '../../assets/open day/gallery/gallery12.jpg';
import img10 from '../../assets/open day/gallery/gallery13.jpg';
import img11 from '../../assets/open day/gallery/gallery14.jpg';
import img12 from '../../assets/open day/gallery/gallery15.jpg';
import img13 from '../../assets/open day/gallery/gallery1.jpg';

interface GalleryImage {
    id: number;
    src: string;
    alt: string;
}

const GallerySection = () => {
    const [isGalleryOpen, setIsGalleryOpen] = useState<boolean>(false);
    const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
    const ref = useRef<HTMLElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });

    // Sample gallery data for the event
    const eventImages: GalleryImage[] = [
        { id: 1, src: img1, alt: 'Event moment 1' },
        { id: 2, src: img2, alt: 'Event moment 2' },
        { id: 3, src: img3, alt: 'Event moment 3' },
        { id: 4, src: img4, alt: 'Event moment 4' },
        { id: 5, src: img5, alt: 'Event moment 5' },
        { id: 6, src: img6, alt: 'Event moment 6' },
        { id: 7, src: img7, alt: 'Event moment 7' },
        { id: 8, src: img8, alt: 'Event moment 8' },
        { id: 9, src: img9, alt: 'Event moment 9' },
        { id: 10, src: img10, alt: 'Event moment 10' },
        { id: 11, src: img11, alt: 'Event moment 11' },
        { id: 12, src: img12, alt: 'Event moment 12' },
        { id: 13, src: img13, alt: 'Event moment 13' },
    ];

    const openGallery = (): void => {
        setIsGalleryOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeGallery = (): void => {
        setIsGalleryOpen(false);
        setSelectedImage(null);
        document.body.style.overflow = 'auto';
    };

    const openImage = (image: GalleryImage): void => {
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
                ease: easeOut
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
                                src={img6}
                                alt="Event highlight"
                                className="w-full h-auto transition-transform duration-300 hover:scale-105"
                            />
                        </motion.div>
                        <p className="text-gray-200 mb-6">
                            Relive the memorable moments from our event. Browse through our collection of photos capturing the energy and excitement.
                        </p>
                        <motion.button
                            onClick={openGallery}
                            className="cursor-pointer px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
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