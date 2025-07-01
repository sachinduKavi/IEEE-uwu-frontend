import { useState, useRef, useEffect } from 'react';
import { FaLink, FaCopy, FaCheck, FaArrowRight, FaGamepad, FaTrophy, FaRedo, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { motion, useInView, AnimatePresence, easeOut } from "framer-motion";

type GameState = 'menu' | 'playing' | 'finished';
type Question = {
    question: string;
    answers: string[];
    correct: number;
};

const InteractiveTechPanel = () => {
    // Quiz panel states
    const [isCopied, setIsCopied] = useState(false);
    const quizUrl = `https://ieee-quiz.com/tech-challenge-2023`;

    // Game states
    const [gameState, setGameState] = useState<GameState>('menu');
    const [score, setScore] = useState<number>(0);
    const [timeLeft, setTimeLeft] = useState<number>(30);
    const [currentQuestion, setCurrentQuestion] = useState<number>(0);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const questions: Question[] = [
        {
            question: "What is the primary purpose of IEEE?",
            answers: [
                "Advancing technology for humanity",
                "Creating internet standards",
                "Developing consumer electronics",
                "Certifying engineers"
            ],
            correct: 0
        },
        {
            question: "Which IEEE standard is used for Wi-Fi?",
            answers: [
                "IEEE 802.11",
                "IEEE 1394",
                "IEEE 754",
                "IEEE 1149"
            ],
            correct: 0
        },
        {
            question: "What year was IEEE founded?",
            answers: [
                "1963",
                "1950",
                "1972",
                "1985"
            ],
            correct: 0
        },
        {
            question: "Which famous inventor was involved in IEEE's founding?",
            answers: [
                "Thomas Edison",
                "Nikola Tesla",
                "Alexander Graham Bell",
                "Michael Faraday"
            ],
            correct: 2
        },
        {
            question: "What does the IEEE logo represent?",
            answers: [
                "A stylized diamond",
                "An abstract circuit",
                "The Greek letter Sigma",
                "An electromagnetic wave"
            ],
            correct: 0
        }
    ];

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

    // Quiz panel functions
    const copyToClipboard = () => {
        navigator.clipboard.writeText(quizUrl);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
    };

    // Game functions
    const startGame = () => {
        setGameState('playing');
        setScore(0);
        setTimeLeft(30);
        setCurrentQuestion(0);
        setSelectedAnswer(null);
        setIsCorrect(null);
    };

    const restartGame = () => {
        startGame();
    };

    const handleAnswer = (index: number) => {
        if (selectedAnswer !== null) return;

        setSelectedAnswer(index);
        const correct = index === questions[currentQuestion].correct;
        setIsCorrect(correct);

        if (correct) {
            setScore(score + 10);
        }

        setTimeout(() => {
            if (currentQuestion < questions.length - 1) {
                setCurrentQuestion(currentQuestion + 1);
                setSelectedAnswer(null);
                setIsCorrect(null);
            } else {
                setGameState('finished');
            }
        }, 1500);
    };

    const getAnswerClass = (index: number) => {
        if (selectedAnswer === null) return '';
        if (index === questions[currentQuestion].correct) return 'bg-green-500 text-white';
        if (index === selectedAnswer && !isCorrect) return 'bg-red-500 text-white';
        return 'bg-gray-200';
    };

    // Animation variants
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
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
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
                            whileHover={{ scale: 1.02 }}
                        >
                            IEEE Tech Challenge 2023
                        </motion.h2>
                        <motion.p
                            className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto"
                            whileHover={{ scale: 1.01 }}
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
                                whileHover={{ rotate: 5 }}
                            >
                                <FaLink className="text-blue-600 text-2xl" />
                            </motion.div>

                            <motion.h2
                                className="text-xl font-bold text-gray-800 mb-2"
                                variants={itemVariants}
                            >
                                IEEE Tech Challenge
                            </motion.h2>

                            <motion.p
                                className="text-gray-600 mb-4"
                                variants={itemVariants}
                            >
                                Join our exclusive tech quiz competition.
                            </motion.p>

                            <motion.div
                                className="mb-4"
                                variants={itemVariants}
                            >
                                <div className="relative">
                                    <input
                                        type="text"
                                        value={quizUrl}
                                        readOnly
                                        className="w-full p-2 pr-10 border border-gray-300 rounded-lg bg-gray-50 text-sm text-gray-700 truncate"
                                    />
                                    <motion.button
                                        onClick={copyToClipboard}
                                        className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 text-gray-500 hover:text-blue-600 transition"
                                        title="Copy to clipboard"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        {isCopied ? <FaCheck className="text-green-500" /> : <FaCopy />}
                                    </motion.button>
                                </div>
                                {isCopied && (
                                    <motion.p
                                        className="text-green-500 text-xs mt-1"
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                    >
                                        Copied to clipboard!
                                    </motion.p>
                                )}
                            </motion.div>

                            <motion.div
                                className="flex flex-col space-y-2"
                                variants={itemVariants}
                            >
                                <motion.div
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.97 }}
                                >
                                    <Link
                                        to={'/quiz'}
                                        className="flex items-center justify-center space-x-2 font-medium py-2 px-4 rounded-lg transition-all bg-blue-600 hover:bg-blue-700 text-white"
                                    >
                                        <span>Access Your Quiz</span>
                                        <FaArrowRight />
                                    </Link>
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
                        <AnimatePresence mode="wait">
                            {gameState === 'menu' && (
                                <motion.div
                                    key="menu"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                    className="p-6 md:p-8 text-center h-full flex flex-col justify-center"
                                >
                                    <motion.div
                                        className="mb-6"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.2 }}
                                    >
                                        <motion.div
                                            className="w-16 h-16 mx-auto bg-indigo-100 rounded-full flex items-center justify-center mb-4"
                                            whileHover={{ rotate: 5 }}
                                        >
                                            <FaGamepad className="text-indigo-600 text-2xl" />
                                        </motion.div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-2">Try Our Demo Quiz</h3>
                                        <p className="text-gray-600 mb-4">
                                            Test your IEEE knowledge with {questions.length} quick questions.
                                        </p>
                                    </motion.div>
                                    <motion.button
                                        onClick={startGame}
                                        className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded-lg shadow-md mx-auto"
                                        whileHover={{ scale: 1.03 }}
                                        whileTap={{ scale: 0.97 }}
                                    >
                                        Start Demo
                                    </motion.button>
                                </motion.div>
                            )}

                            {gameState === 'playing' && (
                                <motion.div
                                    key="playing"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="p-4 md:p-6 h-full flex flex-col"
                                >
                                    <div className="flex justify-between items-center mb-3">
                                        <div className="text-xs font-semibold text-indigo-700">
                                            Question {currentQuestion + 1}/{questions.length}
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <motion.div
                                                className="bg-indigo-100 px-2 py-1 rounded-full text-indigo-800 font-bold text-xs"
                                                animate={{ scale: [1, 1.05, 1] }}
                                                transition={{ repeat: Infinity, duration: 2 }}
                                            >
                                                Score: {score}
                                            </motion.div>
                                            <motion.div
                                                className="bg-red-100 px-2 py-1 rounded-full text-red-800 font-bold text-xs"
                                                animate={{
                                                    scale: timeLeft <= 10 ? [1, 1.1, 1] : 1,
                                                    backgroundColor: timeLeft <= 10 ? "#fee2e2" : "#fecaca"
                                                }}
                                                transition={{ repeat: timeLeft <= 10 ? Infinity : 0, duration: 0.5 }}
                                            >
                                                Time: {timeLeft}s
                                            </motion.div>
                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                                            <motion.div
                                                className="h-full bg-indigo-600"
                                                initial={{ width: 0 }}
                                                animate={{
                                                    width: `${((currentQuestion) / questions.length) * 100}%`,
                                                    transition: { duration: 0.5 }
                                                }}
                                            ></motion.div>
                                        </div>
                                    </div>

                                    <div className="flex-grow flex flex-col justify-center">
                                        <motion.h3
                                            className="text-md font-bold text-gray-800 mb-3 text-center"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 0.1 }}
                                        >
                                            {questions[currentQuestion].question}
                                        </motion.h3>
                                        <div className="grid grid-cols-1 gap-2">
                                            {questions[currentQuestion].answers.map((answer, index) => (
                                                <motion.button
                                                    key={index}
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{
                                                        opacity: 1,
                                                        y: 0,
                                                        transition: { delay: 0.2 + index * 0.1 }
                                                    }}
                                                    whileHover={{ scale: selectedAnswer === null ? 1.02 : 1 }}
                                                    whileTap={{ scale: selectedAnswer === null ? 0.98 : 1 }}
                                                    onClick={() => handleAnswer(index)}
                                                    className={`p-2 text-sm rounded-lg text-left transition-all ${getAnswerClass(index)} ${
                                                        selectedAnswer === null ? 'hover:bg-indigo-100 cursor-pointer' : 'cursor-default'
                                                    }`}
                                                    disabled={selectedAnswer !== null}
                                                >
                                                    {answer}
                                                </motion.button>
                                            ))}
                                        </div>
                                    </div>

                                    {isCorrect !== null && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0 }}
                                            className={`text-center font-bold text-sm mt-3 ${
                                                isCorrect ? 'text-green-600' : 'text-red-600'
                                            }`}
                                        >
                                            {isCorrect ? 'Correct! 🎉' : 'Oops! Not quite right.'}
                                        </motion.div>
                                    )}
                                </motion.div>
                            )}

                            {gameState === 'finished' && (
                                <motion.div
                                    key="finished"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.4 }}
                                    className="p-6 md:p-8 text-center h-full flex flex-col justify-center"
                                >
                                    <motion.div
                                        className="mb-4"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ staggerChildren: 0.1 }}
                                    >
                                        <motion.div
                                            className="w-16 h-16 mx-auto bg-yellow-100 rounded-full flex items-center justify-center mb-3"
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ type: "spring", stiffness: 300 }}
                                        >
                                            <FaTrophy className="text-yellow-600 text-2xl" />
                                        </motion.div>
                                        <motion.h3
                                            className="text-lg font-bold text-gray-800 mb-1"
                                            initial={{ opacity: 0, y: 5 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.2 }}
                                        >
                                            Demo Completed!
                                        </motion.h3>
                                        <motion.p
                                            className="text-gray-600"
                                            initial={{ opacity: 0, y: 5 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.3 }}
                                        >
                                            Your score: <span className="text-indigo-600 font-bold text-lg">{score}</span>
                                        </motion.p>
                                        <motion.p
                                            className="text-gray-500 mb-3 text-xs"
                                            initial={{ opacity: 0, y: 5 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.4 }}
                                        >
                                            You answered {score / 10} of {questions.length} correctly
                                        </motion.p>
                                    </motion.div>
                                    <motion.div
                                        className="flex flex-col space-y-2"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.5 }}
                                    >
                                        <motion.button
                                            onClick={restartGame}
                                            className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg flex items-center justify-center space-x-2 shadow-sm"
                                            whileHover={{ scale: 1.03 }}
                                            whileTap={{ scale: 0.97 }}
                                        >
                                            <FaRedo /> <span>Try Again</span>
                                        </motion.button>
                                        <motion.a
                                            href="#"
                                            className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-lg shadow-sm"
                                            whileHover={{ scale: 1.03 }}
                                            whileTap={{ scale: 0.97 }}
                                        >
                                            Join Full Challenge
                                        </motion.a>
                                    </motion.div>

                                    <motion.div
                                        className="mt-4"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.6 }}
                                    >
                                        <h4 className="text-xs font-semibold text-gray-700 mb-1">Share your score!</h4>
                                        <div className="flex justify-center space-x-3">
                                            {[
                                                { icon: <FaFacebook size={16} />, color: "text-blue-600 hover:text-blue-800" },
                                                { icon: <FaInstagram size={16} />, color: "text-pink-600 hover:text-pink-800" },
                                                { icon: <FaLinkedin size={16} />, color: "text-blue-700 hover:text-blue-900" }
                                            ].map((social, index) => (
                                                <motion.a
                                                    key={index}
                                                    href="#"
                                                    className={`${social.color} transition-colors`}
                                                    whileHover={{ y: -2 }}
                                                    whileTap={{ scale: 0.9 }}
                                                >
                                                    {social.icon}
                                                </motion.a>
                                            ))}
                                        </div>
                                    </motion.div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default InteractiveTechPanel;