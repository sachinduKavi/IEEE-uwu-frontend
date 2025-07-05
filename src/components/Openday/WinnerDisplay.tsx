import { motion } from "framer-motion";
import { FaShareAlt } from "react-icons/fa";
import { IoSparkles } from "react-icons/io5";
import { useState } from "react";
import img1 from '../../assets/images/cs.jpg'
import img2 from '../../assets/images/cs.jpg'
import img3 from '../../assets/images/cs.jpg'

const WinnersDisplay = () => {
    const [enlargedImage, setEnlargedImage] = useState(null);

    const winners = [
        {
            id: 1,
            teamName: "Pixel Pioneers",
            generatedImage: img1,
        },
        {
            id: 2,
            teamName: "Creative Coders",
            generatedImage: img2,
        },
        {
            id: 3,
            teamName: "Digital Dreamers",
            generatedImage: img3,
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                when: "beforeChildren"
            }
        }
    };

    const itemVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10
            }
        },
        hover: {
            y: -10,
            transition: { duration: 0.2 }
        }
    };

    const handleImageClick = (imageUrl) => {
        setEnlargedImage(imageUrl);
    };

    const closeEnlargedImage = () => {
        setEnlargedImage(null);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-20 px-4 -mt-10">
            {/* Enlarged Image Modal */}
            {enlargedImage && (
                <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4" onClick={closeEnlargedImage}>
                    <div className="relative max-w-4xl w-full">
                        <button
                            className="absolute -top-12 right-0 text-white text-3xl hover:text-gray-300 transition"
                            onClick={closeEnlargedImage}
                        >
                            &times;
                        </button>
                        <img
                            src={enlargedImage}
                            alt="Enlarged winning entry"
                            className="w-full h-auto max-h-[80vh] object-contain rounded-lg border-4 border-gray-700"
                        />
                    </div>
                </div>
            )}

            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center justify-center bg-gray-700/80 px-6 py-2 rounded-full mb-4 border border-gray-600">
                        <IoSparkles className="text-gray-300 mr-2" />
                        <span className="text-gray-300 font-medium tracking-wider">IEEE GAMING CREATORS CHALLENGE 2023</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-mono tracking-tight">
                        <span className="text-gray-300">WINNERS </span>
                        <span className="text-white">SHOWCASE</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Celebrating the most creative teams in our AI-powered image generation battle
                    </p>
                </motion.div>

                {/* Winners Podium */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end mb-16"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    {/* 2nd Place */}
                    <motion.div
                        className="flex flex-col items-center"
                        variants={itemVariants}
                        whileHover="hover"
                    >
                        <div className="relative w-full max-w-xs">
                            <div className="bg-gradient-to-b from-gray-700 to-gray-800 h-72 rounded-t-xl shadow-2xl flex flex-col items-center justify-end pb-8 border-t border-x border-gray-600">
                                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gray-600 w-12 h-12 rounded-full flex items-center justify-center shadow-lg border-2 border-gray-500">
                                    <span className="text-white font-bold text-xl">2</span>
                                </div>
                                <div
                                    className="w-full px-4 mb-4 cursor-pointer group"
                                    onClick={() => handleImageClick(winners[1].generatedImage)}
                                >
                                    <div className="relative overflow-hidden rounded-lg border-2 border-gray-600 group-hover:border-gray-400 transition-all duration-300">
                                        <img
                                            src={winners[1].generatedImage}
                                            alt={winners[1].teamName}
                                            className=" w-full h-40 object-cover transform group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                                            <FaShareAlt className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-2xl" />
                                        </div>
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-gray-100 mb-2">{winners[1].teamName}</h3>
                            </div>
                            <div className="bg-gradient-to-b from-gray-800 to-gray-900 h-16 rounded-b-xl flex items-center justify-center border-b border-x border-gray-600">
                                <span className="text-gray-300 font-bold tracking-wider">SILVER TIER</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* 1st Place */}
                    <motion.div
                        className="flex flex-col items-center"
                        variants={itemVariants}
                        whileHover="hover"
                    >
                        <div className="relative w-full max-w-xs">
                            <div className="bg-gradient-to-b from-gray-600 to-gray-700 h-80 rounded-t-xl shadow-2xl flex flex-col items-center justify-end pb-8 border-t border-x border-gray-500">
                                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-500 w-16 h-16 rounded-full flex items-center justify-center shadow-xl border-2 border-gray-400">
                                    <span className="text-white font-bold text-2xl">1</span>
                                </div>
                                <div
                                    className="w-full px-4 mb-4 cursor-pointer group"
                                    onClick={() => handleImageClick(winners[0].generatedImage)}
                                >
                                    <div className="relative overflow-hidden rounded-lg border-2 border-gray-500 group-hover:border-gray-300 transition-all duration-300">
                                        <img
                                            src={winners[0].generatedImage}
                                            alt={winners[0].teamName}
                                            className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                                            <FaShareAlt className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-2xl" />
                                        </div>
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">{winners[0].teamName}</h3>
                            </div>
                            <div className="bg-gradient-to-b from-gray-700 to-gray-800 h-20 rounded-b-xl flex items-center justify-center border-b border-x border-gray-500">
                                <span className="text-white font-bold text-lg tracking-wider">PLATINUM TIER</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* 3rd Place */}
                    <motion.div
                        className="flex flex-col items-center"
                        variants={itemVariants}
                        whileHover="hover"
                    >
                        <div className="relative w-full max-w-xs">
                            <div className="bg-gradient-to-b from-gray-800 to-gray-900 h-64 rounded-t-xl shadow-2xl flex flex-col items-center justify-end pb-8 border-t border-x border-gray-700">
                                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gray-700 w-12 h-12 rounded-full flex items-center justify-center shadow-lg border-2 border-gray-600">
                                    <span className="text-white font-bold text-xl">3</span>
                                </div>
                                <div
                                    className="w-full px-4 mb-4 cursor-pointer group"
                                    onClick={() => handleImageClick(winners[2].generatedImage)}
                                >
                                    <div className="mt-5 relative overflow-hidden rounded-lg border-2 border-gray-700 group-hover:border-gray-500 transition-all duration-300">
                                        <img
                                            src={winners[2].generatedImage}
                                            alt={winners[2].teamName}
                                            className="w-full h-36 object-cover transform group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                                            <FaShareAlt className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-2xl" />
                                        </div>
                                    </div>
                                </div>
                                <h3 className="text-lg font-bold text-gray-100 mb-2">{winners[2].teamName}</h3>
                            </div>
                            <div className="bg-gradient-to-b from-gray-900 to-gray-950 h-14 rounded-b-xl flex items-center justify-center border-b border-x border-gray-700">
                                <span className="text-gray-400 font-bold tracking-wider">BRONZE TIER</span>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

            </div>
        </div>
    );
};

export default WinnersDisplay;