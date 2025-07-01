import { useState, useRef } from 'react';
import { FaLink, FaCopy, FaCheck, FaArrowRight } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { motion, useInView,easeOut } from "framer-motion";

const QuizAccessPanel = () => {
    const [isCopied, setIsCopied] = useState(false);
    const isDisabled= useRef<boolean>(true);
    const quizUrl = `${window.location.origin}/quiz`;
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const copyToClipboard = () => {
        navigator.clipboard.writeText(quizUrl);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
    };

    const containerVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: easeOut,
                when: "beforeChildren",
                staggerChildren: 0.2
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
        <div
            ref={ref}
            className="my-20 min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4"
        >
            <motion.div
                className="w-full max-w-md bg-white rounded-xl shadow-2xl overflow-hidden"
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={containerVariants}
            >
                <div className="p-8 text-center">
                    <motion.div
                        className="w-20 h-20 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-6"
                        variants={itemVariants}
                        whileHover={{ rotate: 5 }}
                    >
                        <FaLink className="text-blue-600 text-3xl" />
                    </motion.div>

                    <motion.h2
                        className="text-2xl font-bold text-gray-800 mb-2"
                        variants={itemVariants}
                    >
                        Access Your Quiz
                    </motion.h2>

                    <motion.p
                        className="text-gray-600 mb-6"
                        variants={itemVariants}
                    >
                        Use the button below to view the quiz or copy the URL to share
                    </motion.p>

                    <motion.div
                        className="mb-6"
                        variants={itemVariants}
                    >
                        <div className="relative">
                            <input
                                type="text"
                                value={quizUrl}
                                readOnly
                                className="w-full p-3 pr-12 border border-gray-300 rounded-lg bg-gray-50 text-sm text-gray-700 truncate"
                            />
                            <motion.button
                                onClick={copyToClipboard}
                                className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 text-gray-500 hover:text-blue-600 transition"
                                title="Copy to clipboard"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                {isCopied ? <FaCheck className="text-green-500" /> : <FaCopy />}
                            </motion.button>
                        </div>
                        {isCopied && (
                            <motion.p
                                className="text-green-500 text-sm mt-1"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                            >
                                Copied to clipboard!
                            </motion.p>
                        )}
                    </motion.div>

                    <motion.div
                        className="flex flex-col space-y-3"
                        variants={itemVariants}
                    >
                        <motion.div
                            whileHover={!isDisabled ? { scale: 1.05 } : {}}
                            whileTap={!isDisabled ? { scale: 0.95 } : {}}
                        >
                            <Link
                                to={isDisabled ? '#' : '/quiz'}
                                className={`flex items-center justify-center space-x-2 font-medium py-3 px-6 rounded-lg transition-all ${
                                    isDisabled
                                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                        : 'bg-blue-600 hover:bg-blue-700 text-white transform hover:scale-105'
                                }`}
                                onClick={(e) => isDisabled && e.preventDefault()}
                            >
                                <span>View Quiz Now</span>
                                <FaArrowRight />
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>

                <motion.div
                    className="bg-gray-50 px-6 py-4 border-t border-gray-200"
                    variants={itemVariants}
                >
                    <p className="text-xs text-gray-500 text-center">
                        By accessing this quiz, you agree to our Terms of Service
                    </p>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default QuizAccessPanel;