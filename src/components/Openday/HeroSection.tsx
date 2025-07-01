import { Calendar, MapPin, Users } from "lucide-react";
import headerBg from '../../assets/images/HeadSectionOpenDay.jpg';
import { motion } from "framer-motion";

export default function HeroSection() {
    return (
        <section className="relative py-20 text-white overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url(${headerBg})`,
                    backgroundAttachment: 'fixed'
                }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-950/61 via-blue-950/10 to-blue-900/80"></div>
            <div className="absolute inset-0 bg-black/61"></div>

            {/* Content */}
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.h2
                            className="text-4xl md:text-5xl font-bold mb-2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            <span className="block text-blue-200">WELCOME TO</span>
                            <span className="block text-5xl md:text-7xl bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent mt-2">
                                IEEE OPEN DAY 2025
                            </span>
                        </motion.h2>
                    </motion.div>

                    <motion.p
                        className="text-xl md:text-2xl mb-8 text-blue-100"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        Join us for an exciting day of innovation, technology, and networking
                    </motion.p>

                    <motion.div
                        className="flex flex-wrap justify-center gap-6 mb-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                    >
                        <motion.div
                            className="flex items-center space-x-2 bg-blue-800/70 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-600/50"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <Calendar className="w-5 h-5" />
                            <span>March 15, 2025</span>
                        </motion.div>
                        <motion.div
                            className="flex items-center space-x-2 bg-blue-800/70 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-600/50"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
                        >
                            <MapPin className="w-5 h-5" />
                            <span>Main Auditorium</span>
                        </motion.div>
                        <motion.div
                            className="flex items-center space-x-2 bg-blue-800/70 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-600/50"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
                        >
                            <Users className="w-5 h-5" />
                            <span>500+ Attendees</span>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}