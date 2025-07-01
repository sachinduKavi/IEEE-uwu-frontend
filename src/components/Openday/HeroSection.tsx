import { Calendar, MapPin, Users } from "lucide-react";
import headerBg from '../../assets/images/HeadSectionOpenDay.jpg';
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

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

    return (
        <section
            ref={ref}
            className="relative py-20 text-white overflow-hidden h-screen flex items-center"
            style={{ minHeight: '100vh' }}
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
                            className="text-4xl md:text-5xl font-bold mb-2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            <span className="block text-blue-200">WELCOME TO</span>
                            <motion.span
                                className="block text-5xl md:text-7xl bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent mt-2"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.4, type: "spring" }}
                            >
                                IEEE OPEN DAY 2025
                            </motion.span>
                        </motion.h2>
                    </motion.div>

                    <motion.p
                        className="text-xl md:text-2xl mb-8 text-blue-100"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                    >
                        Join us for an exciting day of innovation, technology, and networking
                    </motion.p>

                    <motion.div
                        className="flex flex-wrap justify-center gap-6 mb-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                    >
                        {[
                            { icon: <Calendar className="w-5 h-5" />, text: "July 6, 2025" },
                            { icon: <MapPin className="w-5 h-5" />, text: "Uva Wellassa University" },
                            { icon: <Users className="w-5 h-5" />, text: "200+ Attendees" }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                className="flex items-center space-x-2 bg-blue-800/70 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-600/50"
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

                    {/* Scroll indicator */}
                    <motion.div
                        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
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