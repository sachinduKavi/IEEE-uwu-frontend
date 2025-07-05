import {useState, useRef, useEffect} from 'react';
import {
    FaLink,FaBan, FaUpload, FaExternalLinkAlt, FaCheck, FaCopy, FaLock
} from 'react-icons/fa';
import {motion, useInView,easeOut} from "framer-motion";

type GameState = 'menu' | 'playing' | 'finished';

const InteractiveTechPanel = () => {

    const [gameState, setGameState] = useState<GameState>('menu');
    const [timeLeft, setTimeLeft] = useState<number>(30);
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true, margin: "-100px"});
    const [password, setPassword] = useState("");
    const [showUrl, setShowUrl] = useState(false);
    const [passwordError, setPasswordError] = useState("");
    const [isCopied, setIsCopied] = useState(false);
    const quizUrl = "https://your-quiz-url.com"; // Replace with your actual URL
    const correctPassword = "ieee2025"; // Set your password here

    const handlePasswordSubmit = () => {
        if (password === correctPassword) {
            setShowUrl(true);
            setPasswordError("");
        } else {
            setPasswordError("Incorrect password");
        }
    };

    // Game timer effect
    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (gameState === 'playing' && timeLeft > 0) {
            timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
        } else if (gameState === 'playing' && timeLeft === 0) {
            setGameState('finished');
        }
        return () => clearTimeout(timer);
    }, [timeLeft, gameState]);

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

    const isDisabled = false;
    const copyToClipboard = () => {
        navigator.clipboard.writeText(quizUrl);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
    };
    return (
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 pb-10">
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
                    {/* Left Panel - Quiz Access */}
                    <motion.div
                        className="bg-white rounded-xl shadow-xl overflow-hidden"
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        variants={containerVariants}
                    >
                        <div className="p-6 md:p-8 text-center">
                            <motion.div
                                className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-4"
                                variants={itemVariants}
                                whileHover={{rotate: 5}}
                            >
                                <FaLink className="text-blue-600 text-2xl"/>
                            </motion.div>

                            <motion.h2
                                className="text-xl font-bold text-gray-800 mb-2"
                                variants={itemVariants}
                            >
                                IEEE GAMING CREATORS CHALLENGE
                            </motion.h2>

                            <motion.p
                                className="text-gray-600 mb-6"
                                variants={itemVariants}
                            >
                                Join our exclusive gaming competition.
                            </motion.p>

                            <motion.div
                                className="flex flex-col space-y-3"
                                variants={itemVariants}
                            >
                                {/* Access Game Button */}
                                <motion.div
                                    whileHover={{scale: 1.03}}
                                    whileTap={{scale: 0.97}}
                                >
                                    <a
                                        href="https://game-website.com"  // Replace with actual game URL
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`flex items-center justify-center space-x-2 font-medium py-2 px-4 rounded-lg transition-all
                     ${isDisabled ? 'bg-gray-400 text-gray-600 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 text-white cursor-pointer'}`}
                                        title={isDisabled ? "Game access will be available soon" : ""}
                                    >
                                        <span>Access The Game</span>
                                        {isDisabled ? (
                                            <FaBan className="text-gray-600"/>
                                        ) : (
                                            <FaExternalLinkAlt/>  // Using external link icon for website
                                        )}
                                    </a>
                                </motion.div>

                                {/* Upload Game Works Button */}
                                <motion.div
                                    whileHover={{scale: 1.03}}
                                    whileTap={{scale: 0.97}}
                                >
                                    <a
                                        href="https://drive.google.com/drive/folders/13JjbHm_tWQYHrSWjvSRb8SEQ82rt0Qy8?usp=sharing"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`flex items-center justify-center space-x-2 font-medium py-2 px-4 rounded-lg transition-all
                     ${isDisabled ? 'bg-gray-400 text-gray-600 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700 text-white cursor-pointer'}`}
                                        title={isDisabled ? "Upload will be available soon" : ""}
                                    >
                                        <span>Upload Your Works</span>
                                        {isDisabled ? (
                                            <FaBan className="text-gray-600"/>
                                        ) : (
                                            <FaUpload/>  // Using upload icon
                                        )}
                                    </a>
                                </motion.div>
                            </motion.div>
                        </div>

                        <motion.div
                            className="bg-gray-50 px-4 py-3 border-t border-gray-200"
                            variants={itemVariants}
                        >
                            <p className="text-xs text-gray-500 text-center">
                                By participating, you agree to the IEEE Tech Challenge terms
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Right Panel - Interactive Game */}
                    <motion.div
                        className="bg-white rounded-xl shadow-xl overflow-hidden"
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        variants={containerVariants}
                    >
                        <div className="p-6 md:p-8 text-center">
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
                                IEEE GAMING CREATORS CHALLENGE
                            </motion.h2>

                            <motion.p
                                className="text-gray-600 mb-6"
                                variants={itemVariants}
                            >
                                Enter pass code to access the quiz
                            </motion.p>

                            {!showUrl ? (
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
                                        Submit
                                    </motion.button>
                                </motion.div>
                            ) : (
                                <motion.div
                                    className="flex flex-col space-y-4"
                                    initial={{opacity: 0}}
                                    animate={{opacity: 1}}
                                    transition={{duration: 0.3}}
                                >
                                    <div className="relative">
                                        <input
                                            type="text"
                                            value={quizUrl}
                                            readOnly
                                            className="w-full p-2 pr-10 border border-gray-300 rounded-lg bg-gray-50 text-gray-700"
                                        />
                                        <motion.button
                                            onClick={copyToClipboard}
                                            className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 text-gray-500 hover:text-blue-600"
                                            whileHover={{scale: 1.1}}
                                            whileTap={{scale: 0.9}}
                                        >
                                            {isCopied ? <FaCheck className="text-green-500"/> : <FaCopy/>}
                                        </motion.button>
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
                                    <motion.a
                                        href={quizUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-lg shadow-md flex items-center justify-center space-x-2"
                                        whileHover={{scale: 1.03}}
                                        whileTap={{scale: 0.97}}
                                    >
                                        <FaExternalLinkAlt />
                                        <span>Open Quiz</span>
                                    </motion.a>
                                </motion.div>
                            )}
                        </div>

                        <motion.div
                            className="bg-gray-50 px-4 py-3 border-t border-gray-200"
                            variants={itemVariants}
                        >
                            <p className="text-xs text-gray-500 text-center">
                                By participating, you agree to the IEEE Tech Challenge terms
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default InteractiveTechPanel;