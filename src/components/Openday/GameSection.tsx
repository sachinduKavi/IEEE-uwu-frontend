import { useState, useEffect } from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaGamepad, FaTrophy, FaRedo } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const TechGameSection = () => {
    const [gameState, setGameState] = useState('menu'); // menu, playing, finished
    const [score, setScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(30);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [isCorrect, setIsCorrect] = useState(null);

    const questions = [
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
    };

    const restartGame = () => {
        startGame();
    };

    const handleAnswer = (index) => {
        if (selectedAnswer !== null) return; // Prevent multiple selections

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

    const getAnswerClass = (index:number) => {
        if (selectedAnswer === null) return '';
        if (index === questions[currentQuestion].correct) return 'bg-green-500 text-white';
        if (index === selectedAnswer && !isCorrect) return 'bg-red-500 text-white';
        return 'bg-gray-200';
    };

    return (
        <section id="game" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-blue-900 mb-4">IEEE Tech Challenge</h2>
                        <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                            Test your knowledge about IEEE and technology in this interactive quiz game!
                        </p>
                    </div>

                    <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
                        <AnimatePresence mode="wait">
                            {gameState === 'menu' && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="p-8 text-center"
                                >
                                    <div className="mb-8">
                                        <div className="w-40 h-40 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-6">
                                            <FaGamepad className="text-blue-600 text-6xl" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-800 mb-2">Ready for the Challenge?</h3>
                                        <p className="text-gray-600 mb-6">
                                            Answer 5 questions about IEEE and technology. You have 30 seconds!
                                        </p>
                                    </div>
                                    <button
                                        onClick={startGame}
                                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all transform hover:scale-105 shadow-lg"
                                    >
                                        Start Game
                                    </button>
                                </motion.div>
                            )}

                            {gameState === 'playing' && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="p-6 md:p-8"
                                >
                                    <div className="flex justify-between items-center mb-6">
                                        <div className="text-lg font-semibold text-blue-700">
                                            Question {currentQuestion + 1}/{questions.length}
                                        </div>
                                        <div className="flex items-center space-x-4">
                                            <div className="bg-blue-100 px-4 py-2 rounded-full text-blue-800 font-bold">
                                                Score: {score}
                                            </div>
                                            <div className="bg-red-100 px-4 py-2 rounded-full text-red-800 font-bold">
                                                Time: {timeLeft}s
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mb-8">
                                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-blue-600 transition-all duration-300"
                                                style={{ width: `${((currentQuestion) / questions.length) * 100}%` }}
                                            ></div>
                                        </div>
                                    </div>

                                    <div className="mb-8">
                                        <h3 className="text-xl font-bold text-gray-800 mb-6">
                                            {questions[currentQuestion].question}
                                        </h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {questions[currentQuestion].answers.map((answer, index) => (
                                                <motion.button
                                                    key={index}
                                                    whileHover={{ scale: selectedAnswer === null ? 1.03 : 1 }}
                                                    whileTap={{ scale: selectedAnswer === null ? 0.98 : 1 }}
                                                    onClick={() => handleAnswer(index)}
                                                    className={`p-4 rounded-xl text-left transition-all ${getAnswerClass(index)} ${
                                                        selectedAnswer === null ? 'hover:bg-blue-100 cursor-pointer' : 'cursor-default'
                                                    }`}
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
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="p-8 text-center"
                                >
                                    <div className="mb-8">
                                        <div className="w-40 h-40 mx-auto bg-yellow-100 rounded-full flex items-center justify-center mb-6">
                                            <FaTrophy className="text-yellow-600 text-6xl" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-800 mb-2">Game Completed!</h3>
                                        <p className="text-gray-600 mb-2">
                                            Your final score is: <span className="text-blue-600 font-bold text-2xl">{score}</span>
                                        </p>
                                        <p className="text-gray-500 mb-6">
                                            You answered {score / 10} out of {questions.length} questions correctly
                                        </p>
                                    </div>
                                    <div className="flex justify-center space-x-4">
                                        <button
                                            onClick={restartGame}
                                            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full flex items-center space-x-2 transition-all transform hover:scale-105 shadow-lg"
                                        >
                                            <FaRedo /> <span>Play Again</span>
                                        </button>
                                        <a
                                            href="#about"
                                            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-6 rounded-full transition-all transform hover:scale-105 shadow-lg"
                                        >
                                            Learn More About IEEE
                                        </a>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <div className="mt-12 text-center">
                        <h4 className="text-xl font-semibold text-gray-800 mb-4">Share your score!</h4>
                        <div className="flex justify-center space-x-6">
                            <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">
                                <FaFacebook size={28} />
                            </a>
                            <a href="#" className="text-pink-600 hover:text-pink-800 transition-colors">
                                <FaInstagram size={28} />
                            </a>
                            <a href="#" className="text-blue-700 hover:text-blue-900 transition-colors">
                                <FaLinkedin size={28} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechGameSection;