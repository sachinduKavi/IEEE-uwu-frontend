import { useState, useEffect, useRef } from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaGamepad, FaTrophy, FaRedo } from 'react-icons/fa';
import { motion, AnimatePresence, useInView,easeOut } from 'framer-motion';

type GameState = 'menu' | 'playing' | 'finished';
type Question = {
    question: string;
    answers: string[];
    correct: number;
};

const TechGameSection = () => {
    const [gameState, setGameState] = useState<GameState>('menu');
    const [score, setScore] = useState<number>(0);
    const [timeLeft, setTimeLeft] = useState<number>(30);
    const [currentQuestion, setCurrentQuestion] = useState<number>(0);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const sectionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

    const questions: Question[] = [
        {
            question: "What does IEEE stand for?",
            answers: [
                "Institute of Electrical and Electronics Engineers",
                "International Electrical Engineering Exchange",
                "Institute of Electronic Equipment Engineers",
                "International Engineering Education Exchange"
            ],
            correct: 0
        },
        {
            question: "Which year was IEEE founded?",
            answers: [
                "1963",
                "1950",
                "1972",
                "1985"
            ],
            correct: 0
        },
        {
            question: "What is the most widely used IEEE standard?",
            answers: [
                "IEEE 802 (Wi-Fi/Ethernet)",
                "IEEE 1394 (FireWire)",
                "IEEE 754 (Floating Point)",
                "IEEE 1149 (JTAG)"
            ],
            correct: 0
        },
        {
            question: "Which IEEE society focuses on computer science?",
            answers: [
                "Computer Society",
                "Robotics Society",
                "Data Science Society",
                "Information Society"
            ],
            correct: 0
        },
        {
            question: "What color is the IEEE logo?",
            answers: [
                "Blue",
                "Red",
                "Green",
                "Black"
            ],
            correct: 0
        }
    ];

    useEffect(() => {
        if (gameState === 'playing' && timeLeft > 0) {
            const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
            return () => clearTimeout(timer);
        } else if (gameState === 'playing' && timeLeft === 0) {
            setGameState('finished');
        }
    }, [timeLeft, gameState]);

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

    const containerVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1.5,
                ease: easeOut
            }
        }
    };

    return (
        <section
            id="game"
            className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100"
            ref={sectionRef}
        >
            <div className="container mx-auto px-4">
                <motion.div
                    className="max-w-4xl mx-auto"
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={containerVariants}
                >
                    <div className="text-center mb-12">
                        <motion.h2
                            className="text-4xl font-bold text-blue-900 mb-4"
                            whileHover={{ scale: 1.02 }}
                        >
                            IEEE Tech Challenge
                        </motion.h2>
                        <motion.p
                            className="text-xl text-gray-700 max-w-2xl mx-auto"
                            whileHover={{ scale: 1.01 }}
                        >
                            Test your knowledge about IEEE and technology in this interactive quiz game!
                        </motion.p>
                    </div>

                    <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
                        <AnimatePresence mode="wait">
                            {gameState === 'menu' && (
                                <motion.div
                                    key="menu"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                    className="p-8 text-center"
                                >
                                    <motion.div
                                        className="mb-8"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.2 }}
                                    >
                                        <motion.div
                                            className="w-40 h-40 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-6"
                                            whileHover={{ rotate: 5 }}
                                        >
                                            <FaGamepad className="text-blue-600 text-6xl" />
                                        </motion.div>
                                        <h3 className="text-2xl font-bold text-gray-800 mb-2">Ready for the Challenge?</h3>
                                        <p className="text-gray-600 mb-6">
                                            Answer {questions.length} questions about IEEE and technology. You have 30 seconds!
                                        </p>
                                    </motion.div>
                                    <motion.button
                                        onClick={startGame}
                                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all shadow-lg"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        Start Game
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
                                    className="p-6 md:p-8"
                                >
                                    <div className="flex justify-between items-center mb-6">
                                        <div className="text-lg font-semibold text-blue-700">
                                            Question {currentQuestion + 1}/{questions.length}
                                        </div>
                                        <div className="flex items-center space-x-4">
                                            <motion.div
                                                className="bg-blue-100 px-4 py-2 rounded-full text-blue-800 font-bold"
                                                animate={{ scale: [1, 1.05, 1] }}
                                                transition={{ repeat: Infinity, duration: 2 }}
                                            >
                                                Score: {score}
                                            </motion.div>
                                            <motion.div
                                                className="bg-red-100 px-4 py-2 rounded-full text-red-800 font-bold"
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

                                    <div className="mb-8">
                                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                                            <motion.div
                                                className="h-full bg-blue-600"
                                                initial={{ width: 0 }}
                                                animate={{
                                                    width: `${((currentQuestion) / questions.length) * 100}%`,
                                                    transition: { duration: 0.5 }
                                                }}
                                            ></motion.div>
                                        </div>
                                    </div>

                                    <div className="mb-8">
                                        <motion.h3
                                            className="text-xl font-bold text-gray-800 mb-6"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 0.1 }}
                                        >
                                            {questions[currentQuestion].question}
                                        </motion.h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {questions[currentQuestion].answers.map((answer, index) => (
                                                <motion.button
                                                    key={index}
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{
                                                        opacity: 1,
                                                        y: 0,
                                                        transition: { delay: 0.2 + index * 0.1 }
                                                    }}
                                                    whileHover={{ scale: selectedAnswer === null ? 1.03 : 1 }}
                                                    whileTap={{ scale: selectedAnswer === null ? 0.98 : 1 }}
                                                    onClick={() => handleAnswer(index)}
                                                    className={`p-4 rounded-xl text-left transition-all ${getAnswerClass(index)} ${
                                                        selectedAnswer === null ? 'hover:bg-blue-100 cursor-pointer' : 'cursor-default'
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
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0 }}
                                            className={`text-center font-bold text-lg ${
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
                                    className="p-8 text-center"
                                >
                                    <motion.div
                                        className="mb-8"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ staggerChildren: 0.1 }}
                                    >
                                        <motion.div
                                            className="w-40 h-40 mx-auto bg-yellow-100 rounded-full flex items-center justify-center mb-6"
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ type: "spring", stiffness: 300 }}
                                        >
                                            <FaTrophy className="text-yellow-600 text-6xl" />
                                        </motion.div>
                                        <motion.h3
                                            className="text-2xl font-bold text-gray-800 mb-2"
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.2 }}
                                        >
                                            Game Completed!
                                        </motion.h3>
                                        <motion.p
                                            className="text-gray-600 mb-2"
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.3 }}
                                        >
                                            Your final score is: <span className="text-blue-600 font-bold text-2xl">{score}</span>
                                        </motion.p>
                                        <motion.p
                                            className="text-gray-500 mb-6"
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.4 }}
                                        >
                                            You answered {score / 10} out of {questions.length} questions correctly
                                        </motion.p>
                                    </motion.div>
                                    <motion.div
                                        className="flex justify-center space-x-4"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.5 }}
                                    >
                                        <motion.button
                                            onClick={restartGame}
                                            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full flex items-center space-x-2 shadow-lg"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <FaRedo /> <span>Play Again</span>
                                        </motion.button>
                                        <motion.a
                                            href="#about"
                                            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-6 rounded-full shadow-lg"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            Learn More About IEEE
                                        </motion.a>
                                    </motion.div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <motion.div
                        className="mt-12 text-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                    >
                        <h4 className="text-xl font-semibold text-gray-800 mb-4">Share your score!</h4>
                        <div className="flex justify-center space-x-6">
                            {[
                                { icon: <FaFacebook size={28} />, color: "text-blue-600 hover:text-blue-800" },
                                { icon: <FaInstagram size={28} />, color: "text-pink-600 hover:text-pink-800" },
                                { icon: <FaLinkedin size={28} />, color: "text-blue-700 hover:text-blue-900" }
                            ].map((social, index) => (
                                <motion.a
                                    key={index}
                                    href="#"
                                    className={`${social.color} transition-colors`}
                                    whileHover={{ y: -3 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default TechGameSection;