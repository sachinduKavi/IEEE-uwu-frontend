import { useState } from 'react';
import { FaLink, FaCopy, FaCheck, FaArrowRight } from 'react-icons/fa';

const QuizAccessPanel = () => {
    const [isCopied, setIsCopied] = useState(false);

    // This would be your actual quiz URL in production
    const quizUrl = `${window.location.origin}/quiz`;

    const copyToClipboard = () => {
        navigator.clipboard.writeText(quizUrl);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
    };



    return (
        <div className="my-20 min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-white rounded-xl shadow-2xl overflow-hidden">
                <div className="p-8 text-center">
                    <div className="w-20 h-20 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-6">
                        <FaLink className="text-blue-600 text-3xl" />
                    </div>

                    <h2 className="text-2xl font-bold text-gray-800 mb-2">Access Your Quiz</h2>
                    <p className="text-gray-600 mb-6">Use the button below to view the quiz or copy the URL to share</p>

                    <div className="mb-6">
                        <div className="relative">
                            <input
                                type="text"
                                value={quizUrl}
                                readOnly
                                className="w-full p-3 pr-12 border border-gray-300 rounded-lg bg-gray-50 text-sm text-gray-700 truncate"
                            />
                            <button
                                onClick={copyToClipboard}
                                className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 text-gray-500 hover:text-blue-600 transition"
                                title="Copy to clipboard"
                            >
                                {isCopied ? <FaCheck className="text-green-500" /> : <FaCopy />}
                            </button>
                        </div>
                        {isCopied && (
                            <p className="text-green-500 text-sm mt-1">Copied to clipboard!</p>
                        )}
                    </div>

                    <div className="flex flex-col space-y-3">
                        <button
                            onClick={() => setShowQuiz(true)}
                            className="flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all transform hover:scale-105"
                        >
                            <span>View Quiz Now</span>
                            <FaArrowRight />
                        </button>

                        <button className="text-blue-600 hover:text-blue-800 text-sm font-medium transition">
                            Learn more about this quiz
                        </button>
                    </div>
                </div>

                <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
                    <p className="text-xs text-gray-500 text-center">
                        By accessing this quiz, you agree to our Terms of Service
                    </p>
                </div>
            </div>
        </div>
    );
};

export default QuizAccessPanel;