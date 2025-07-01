import { useState } from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaGamepad } from 'react-icons/fa';

const GameSection = () => {
    const [showGame, setShowGame] = useState(false);

    const toggleGame = () => {
        setShowGame(!showGame);
    };

    return (
        <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    {/* Text Content */}
                    <div className="w-full md:w-1/2 space-y-6">
                        <h3 className="text-3xl font-bold text-blue-900">WHO WE ARE</h3>
                        <p className="text-gray-700 leading-relaxed">
                            IEEE Uva Wellassa University Student Branch is a group of passionate and dedicated students who
                            are committed to promoting technology and engineering among the student community. The group is
                            affiliated with the IEEE, which is the world's largest technical professional organization
                            dedicated to advancing technology for the benefit of humanity.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            The event will feature a variety of activities, including technical talks, demonstrations that
                            showcase the latest advancements in technology and engineering. The event is aimed at students,
                            professionals, and the general public who are interested in learning more about IEEE and the
                            latest developments in technology.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Overall, the IEEE Open Day 2024 organized by IEEE Uva Wellassa University Student Branch
                            promises to be an exciting and informative event that will provide attendees with a unique
                            opportunity to learn more about IEEE, its activities, and the latest trends in technology.
                        </p>

                        <div className="flex flex-col space-y-4">
                            <h6 className="text-lg font-semibold text-blue-800">Connect with Us</h6>
                            <div className="flex space-x-4">
                                <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">
                                    <FaFacebook size={24} />
                                </a>
                                <a href="#" className="text-pink-600 hover:text-pink-800 transition-colors">
                                    <FaInstagram size={24} />
                                </a>
                                <a href="#" className="text-blue-700 hover:text-blue-900 transition-colors">
                                    <FaLinkedin size={24} />
                                </a>
                            </div>

                            <button
                                onClick={toggleGame}
                                className="mt-4 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors w-fit"
                            >
                                <FaGamepad /> {showGame ? 'Hide Game' : 'View Our Tech Game'}
                            </button>
                        </div>
                    </div>

                    {/* Image or Game Content */}
                    <div className="w-full md:w-1/2">
                        {showGame ? (
                            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                                <h4 className="text-xl font-bold text-blue-900 mb-4">IEEE Tech Challenge</h4>
                                <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                                    <div className="text-center p-6">
                                        <p className="text-gray-600 mb-4">Experience our interactive technology game!</p>
                                        <button
                                            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg transition-colors"
                                            onClick={() => window.open('https://example.com/ieee-game', '_blank')}
                                        >
                                            Play Now
                                        </button>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-500 mt-4">
                                    *Game will open in a new tab. Requires modern browser.
                                </p>
                            </div>
                        ) : (
                            <img
                                src="/images/overview-img.jpg"
                                alt="IEEE Uva Wellassa University"
                                className="w-full rounded-xl shadow-lg object-cover"
                            />
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GameSection;