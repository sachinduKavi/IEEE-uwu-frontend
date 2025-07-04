import { Calendar, MapPin, Users } from "lucide-react";
import headerBg from '../../assets/images/HeadSectionOpenDay.jpg';
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "../ui/button"; // Make sure to import your Button component

export default function HeroSection() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    // Create parallax effects for different elements
    const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
    const opacityBg = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);

    const handleRegisterClick = () => {
        window.open("https://lu.ma/nk0m4r6x", "_blank");
    };

    return (
        <section
            ref={ref}
            className="relative py-16 md:py-20 text-white overflow-hidden h-[70vh] md:h-[100vh] flex items-center"
        >
            {/* Background with parallax effect */}
            <motion.div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url(${headerBg})`,
                    backgroundAttachment: 'fixed',
                    y: yBg,
                    opacity: opacityBg
                }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-950/61 via-blue-950/10 to-blue-900/80"></div>
            <div className="absolute inset-0 bg-black/61"></div>

            {/* Content */}
            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    className="text-center max-w-4xl mx-auto"
                    style={{ y: yText }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.h2
                            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            <span className="block text-blue-200 text-lg sm:text-xl md:text-2xl">WELCOME TO</span>
                            <motion.span
                                className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent mt-1 sm:mt-2"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.4, type: "spring" }}
                            >
                                IEEE OPEN DAY 2025
                            </motion.span>
                        </motion.h2>
                    </motion.div>

                    <motion.p
                        className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-blue-100 px-4 sm:px-0"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                    >
                        Join us for an exciting day of innovation, technology, and networking
                    </motion.p>

                    <motion.div
                        className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8 px-2 sm:px-0"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                    >
                        {[
                            { icon: <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />, text: "July 6, 2025" },
                            { icon: <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />, text: "Technology Lecture Hall - 1" },
                            { icon: <Users className="w-4 h-4 sm:w-5 sm:h-5" />, text: "200+ Attendees" }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                className="flex items-center space-x-1 sm:space-x-2 bg-blue-800/70 backdrop-blur-sm px-3 py-1 sm:px-4 sm:py-2 rounded-full border border-blue-600/50 text-sm sm:text-base"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    delay: 0.9 + index * 0.1,
                                    type: "spring",
                                    stiffness: 300
                                }}
                                whileHover={{ scale: 1.05 }}
                            >
                                {item.icon}
                                <span>{item.text}</span>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Register Now Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2, type: "spring" }}
                        className="mt-6"
                    >
                        <Button
                            size="lg"
                            className="cursor-pointer mt-10 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500
                                       text-white font-semibold px-8 py-6 text-lg rounded-b-md  shadow-lg
                                       transform hover:scale-105 transition-all duration-200 border border-blue-400
                                       focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50 hover:shadow-blue-500/30
                                       relative overflow-hidden group"
                            onClick={handleRegisterClick}
                        >
                            <span className="relative z-10">Register Now</span>
                            <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 opacity-0
                                          group-hover:opacity-100 transition-opacity duration-300 rounded-full"></span>
                        </Button>
                    </motion.div>

                    {/* Scroll indicator - only shown on larger screens */}
                    <motion.div
                        className="hidden sm:block absolute bottom-10 left-1/2 transform -translate-x-1/2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.5 }}
                    >
                        <motion.div
                            animate={{
                                y: [0, 10, 0],
                                opacity: [0.6, 1, 0.6]
                            }}
                            transition={{
                                repeat: Infinity,
                                duration: 2
                            }}
                            className="flex flex-col items-center"
                        >
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}