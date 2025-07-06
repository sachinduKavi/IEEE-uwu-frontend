import {useState, useRef} from 'react';
import {
    FaUpload, FaExternalLinkAlt, FaCheck, FaCopy, FaLock, FaGamepad
} from 'react-icons/fa';
import {motion, useInView, easeOut} from "framer-motion";
import qr from '../../assets/images/ieeeQr.jpg'

const InteractiveTechPanel = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true, margin: "-100px"});
    const [password, setPassword] = useState("");
    const [showQuizUrl, setShowQuizUrl] = useState(false);
    const [passwordError, setPasswordError] = useState("");
    const [isCopied, setIsCopied] = useState(false);
    const quizUrl = "https://create.kahoot.it/";
    const gameUrl = "https://drive.google.com/drive/folders/13JjbHm_tWQYHrSWjvSRb8SEQ82rt0Qy8?usp=sharing";
    const correctPassword = "ieeeopenday";

    const handlePasswordSubmit = () => {
        if (password === correctPassword) {
            setShowQuizUrl(true);
            setPasswordError("");
        } else {
            setPasswordError("Incorrect password");
        }
    };

    const copyToClipboard = (url: string) => {
        navigator.clipboard.writeText(url);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
    };

    // Animation variants
    const containerVariants = {
        hidden: {opacity: 0, y: 40},
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
        hidden: {opacity: 0, y: 20},
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
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 pb-10 min-h-screen">
            {/* Header Section */}
            <div className="container mx-auto px-4 py-8">
                <motion.div
                    className="max-w-4xl mx-auto text-center"
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={containerVariants}
                >
                    <motion.div variants={itemVariants}>
                        <motion.h2
                            className="text-3xl md:text-4xl font-bold text-blue-900 mb-3"
                            whileHover={{scale: 1.02}}
                        >
                            IEEE TECH CHALLENGE 2025
                        </motion.h2>
                        <motion.p
                            className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto"
                            whileHover={{scale: 1.01}}
                        >
                            Join the ultimate test of your IEEE knowledge and technical expertise!
                        </motion.p>
                    </motion.div>
                </motion.div>
            </div>

            {/* Main Content */}
            <div
                ref={ref}
                className="container mx-auto px-4 mt-5"
            >
                <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Left Panel - Game Upload (Simple Button) */}
                    <motion.div
                        className="bg-white rounded-xl shadow-xl overflow-hidden h-full"
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        variants={containerVariants}
                    >
                        <div className="p-6 md:p-8 text-center h-full flex flex-col">
                            <motion.div
                                className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-4"
                                variants={itemVariants}
                                whileHover={{rotate: 5}}
                            >
                                <FaGamepad className="text-blue-600 text-2xl"/>
                            </motion.div>

                            <motion.h2
                                className="text-xl font-bold text-gray-800 mb-2"
                                variants={itemVariants}
                            >
                                GAME CREATORS CHALLENGE
                            </motion.h2>

                            <motion.p
                                className="text-gray-600 mb-6 flex-grow"
                                variants={itemVariants}
                            >
                                Upload your game creations to compete with other participants.
                            </motion.p>

                            <motion.div variants={itemVariants}>
                                <motion.a
                                    href={gameUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg shadow-md flex items-center justify-center space-x-2 mx-auto"
                                    whileHover={{scale: 1.03}}
                                    whileTap={{scale: 0.97}}
                                >
                                    <FaUpload />
                                    <span>Upload Your Game</span>
                                </motion.a>
                            </motion.div>
                        </div>

                        <motion.div
                            className="bg-gray-50 px-4 py-3 border-t border-gray-200"
                            variants={itemVariants}
                        >
                            <p className="text-xs text-gray-500 text-center">
                                Submissions will be judged by our panel of experts
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Right Panel - Quiz Access (With Password) */}
                    <motion.div
                        className="bg-white rounded-xl shadow-xl overflow-hidden h-full"
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        variants={containerVariants}
                    >
                        <div className="p-6 md:p-8 text-center h-full flex flex-col">
                            <motion.div
                                className="w-16 h-16 mx-auto bg-indigo-100 rounded-full flex items-center justify-center mb-4"
                                variants={itemVariants}
                                whileHover={{rotate: 5}}
                            >
                                <FaLock className="text-indigo-600 text-2xl"/>
                            </motion.div>

                            <motion.h2
                                className="text-xl font-bold text-gray-800 mb-2"
                                variants={itemVariants}
                            >
                                KNOWLEDGE CHALLENGE
                            </motion.h2>

                            <motion.p
                                className="text-gray-600 mb-6 flex-grow"
                                variants={itemVariants}
                            >
                                Test your IEEE knowledge with our exclusive quiz
                            </motion.p>

                            {!showQuizUrl ? (
                                <motion.div
                                    className="flex flex-col space-y-4"
                                    variants={itemVariants}
                                >
                                    <div className="relative">
                                        <input
                                            type="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            placeholder="Enter password"
                                            className="w-full p-2 border border-gray-300 rounded-lg text-gray-700"
                                        />
                                        {passwordError && (
                                            <motion.p
                                                className="text-red-500 text-xs mt-1"
                                                initial={{opacity: 0, y: -10}}
                                                animate={{opacity: 1, y: 0}}
                                            >
                                                {passwordError}
                                            </motion.p>
                                        )}
                                    </div>

                                    <motion.button
                                        onClick={handlePasswordSubmit}
                                        className="cursor-pointer bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded-lg shadow-md"
                                        whileHover={{scale: 1.03}}
                                        whileTap={{scale: 0.97}}
                                    >
                                        Unlock Quiz
                                    </motion.button>
                                </motion.div>
                            ) : (
                                <motion.div
                                    className="flex flex-col items-center space-y-4"
                                    initial={{opacity: 0}}
                                    animate={{opacity: 1}}
                                    transition={{duration: 0.3}}
                                >
                                    <div className="p-4 bg-white rounded-lg border border-gray-200">
                                        <img
                                            src={qr}
                                            alt="Quiz QR Code"
                                            className="w-48 h-48 object-contain"
                                        />
                                    </div>
                                    
                                    {isCopied && (
                                        <motion.p
                                            className="text-green-500 text-xs"
                                            initial={{opacity: 0}}
                                            animate={{opacity: 1}}
                                        >
                                            Copied to clipboard!
                                        </motion.p>
                                    )}
                                    <motion.p className="text-sm text-gray-500">
                                        Scan the QR code or copy the link to access the quiz
                                    </motion.p>
                                </motion.div>
                            )}
                        </div>

                        <motion.div
                            className="bg-gray-50 px-4 py-3 border-t border-gray-200"
                            variants={itemVariants}
                        >
                            <p className="text-xs text-gray-500 text-center">
                                Top scorers will be featured on our leaderboard
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default InteractiveTechPanel;