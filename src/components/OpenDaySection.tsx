import { FaCalendarAlt, FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

const OpenDaySection = () => {
    return (
        <section id="openday" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-blue-900 mb-4">IEEE University Open Day</h2>
                        <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                            Discover our programs, meet faculty, and explore campus facilities!
                        </p>
                    </div>

                    <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
                        <div className="p-8 md:p-12">
                            <div className="grid md:grid-cols-2 gap-8 mb-8">
                                <div className="flex items-start space-x-4">
                                    <div className="bg-blue-100 p-3 rounded-full">
                                        <FaCalendarAlt className="text-blue-600 text-xl" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-gray-800">Date & Time</h3>
                                        <p className="text-gray-600">June 15, 2024<br />9:00 AM - 4:00 PM</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="bg-blue-100 p-3 rounded-full">
                                        <FaMapMarkerAlt className="text-blue-600 text-xl" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-gray-800">Location</h3>
                                        <p className="text-gray-600">Main Campus<br />Engineering Building, Room 101</p>
                                    </div>
                                </div>
                            </div>

                            <div className="text-center">
                                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                                    Ready to join us for this exciting event?
                                </h3>
                                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                                    Register now to secure your spot and get all the details about our Open Day activities,
                                    campus tours, and program presentations.
                                </p>

                                <motion.a
                                    href="/openDay" // Link to your registration page
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all shadow-lg"
                                >
                                    Register Now <FaArrowRight className="ml-2" />
                                </motion.a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default OpenDaySection;