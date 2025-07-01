import { FaCalendarAlt, FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router';

const OpenDaySection = () => {
    // Animation variants
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
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10
            }
        }
    };

    const MotionLink = motion(Link);


    return (
        <motion.section
            id="openday"
            className="my-10 py-20 bg-gradient-to-br from-blue-50 to-indigo-100"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
        >
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        className="text-center mb-12"
                        variants={itemVariants}
                    >
                        <motion.h2
                            className="text-4xl font-bold text-blue-900 mb-4"
                            initial={{ y: -30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ type: "spring", stiffness: 100 }}
                            viewport={{ once: true }}
                        >
                            IEEE University Open Day
                        </motion.h2>
                        <motion.p
                            className="text-xl text-gray-700 max-w-2xl mx-auto"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            Discover our programs, meet faculty, and explore campus facilities!
                        </motion.p>
                    </motion.div>

                    <motion.div
                        className="bg-white rounded-xl shadow-2xl overflow-hidden"
                        initial={{ scale: 0.95, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="p-8 md:p-12">
                            <motion.div
                                className="grid md:grid-cols-2 gap-8 mb-8"
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                <motion.div
                                    className="flex items-start space-x-4"
                                    variants={itemVariants}
                                >
                                    <motion.div
                                        className="bg-blue-100 p-3 rounded-full"
                                        whileHover={{ rotate: 10 }}
                                        transition={{ type: "spring" }}
                                    >
                                        <FaCalendarAlt className="text-blue-600 text-xl" />
                                    </motion.div>
                                    <div>
                                        <h3 className="font-bold text-lg text-gray-800">Date & Time</h3>
                                        <p className="text-gray-600">June 15, 2024<br />9:00 AM - 4:00 PM</p>
                                    </div>
                                </motion.div>
                                <motion.div
                                    className="flex items-start space-x-4"
                                    variants={itemVariants}
                                >
                                    <motion.div
                                        className="bg-blue-100 p-3 rounded-full"
                                        whileHover={{ rotate: 10 }}
                                        transition={{ type: "spring" }}
                                    >
                                        <FaMapMarkerAlt className="text-blue-600 text-xl" />
                                    </motion.div>
                                    <div>
                                        <h3 className="font-bold text-lg text-gray-800">Location</h3>
                                        <p className="text-gray-600">Main Campus<br />Engineering Building, Room 101</p>
                                    </div>
                                </motion.div>
                            </motion.div>

                            <motion.div
                                className="text-center"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                viewport={{ once: true }}
                            >
                                <motion.h3
                                    className="text-2xl font-bold text-gray-800 mb-6"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                    viewport={{ once: true }}
                                >
                                    Ready to join us for this exciting event?
                                </motion.h3>
                                <motion.p
                                    className="text-gray-600 mb-8 max-w-2xl mx-auto"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ delay: 0.6 }}
                                    viewport={{ once: true }}
                                >
                                    Register now to secure your spot and get all the details about our Open Day activities,
                                    campus tours, and program presentations.
                                </motion.p>

                               <MotionLink
  to="/openDay"
  whileHover={{
    scale: 1.05,
    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)"
  }}
  whileTap={{ scale: 0.98 }}
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.7 }}
  viewport={{ once: true }}
  className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all shadow-lg"
>
  Register Now <FaArrowRight className="ml-2" />
</MotionLink>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

export default OpenDaySection;