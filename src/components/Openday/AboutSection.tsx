import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Play } from "lucide-react";
import introVideo from '../../../src/assets/open day/intro-video.mp4';

export default function AboutSection() {
    const ref = useRef(null);
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const isInView = useInView(ref, { once: false, amount: 0.1 });

    const handlePlayVideo = () => {
        setIsPlaying(true);
        videoRef.current.play().catch(error => {
            console.error("Video play failed:", error);
            setIsPlaying(false);
        });
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeInOut",
            }
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    return (
        <section className="pb-12 md:pb-20 pt-8 md:pt-10 bg-white" ref={ref}>
            <div className="container mx-auto px-4 sm:px-6">
                <motion.div
                    className="max-w-4xl mx-auto text-center"
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={containerVariants}
                >
                    <motion.h2
                        className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-4 md:mb-6"
                        variants={cardVariants}
                    >
                        WHO <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">WE ARE</span>
                    </motion.h2>

                    <motion.div
                        className="w-20 sm:w-24 h-1.5 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-6 md:mb-8 rounded-full"
                        variants={cardVariants}
                    />

                    <motion.p
                        className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-4 sm:mb-6"
                        variants={cardVariants}
                    >
                        IEEE Uva Wellassa University Student Branch is a passionate group of students dedicated to promoting
                        technology and engineering. Affiliated with IEEE, the world's largest technical organization, we strive
                        to advance innovation for the benefit of humanity.
                    </motion.p>

                    <motion.p
                        className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-8 sm:mb-12"
                        variants={cardVariants}
                    >
                        Join us for the official welcome and induction of new members into the Student Branch, which is
                        designed to offer participants a comprehensive introduction to the Institute of Electrical and
                        Electronics Engineers (IEEE), including its global structure, available opportunities, insights
                        into the professional and personal development avenues offered, and the transformative impact of
                        volunteerism.
                    </motion.p>

                    {/* Video Section */}
                    <motion.div
                        className="mt-10 sm:mt-16"
                        variants={cardVariants}
                    >
                        <div className="relative group">
                            {/* Video Container with Gradient Border */}
                            <div className="relative rounded-xl overflow-hidden shadow-lg sm:shadow-2xl">
                                {/* Gradient Border Effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-300 rounded-xl opacity-75 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-md group-hover:blur-lg"></div>

                                {/* Video Player */}
                                <div className="relative rounded-xl overflow-hidden aspect-video bg-gray-900">
                                    {/* Play Button Overlay (shown when not playing) */}
                                    {!isPlaying && (
                                        <div
                                            className="absolute inset-0 flex items-center justify-center cursor-pointer z-10"
                                            onClick={handlePlayVideo}
                                        >
                                            <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 group-hover:scale-110 transition-transform">
                                                <Play className="w-8 h-8 text-white" fill="white" />
                                            </div>
                                        </div>
                                    )}

                                    {/* Actual Video Element */}
                                    <video
                                        ref={videoRef}
                                        className="w-full h-full object-cover"
                                        autoPlay
                                        muted
                                        playsInline
                                        loop
                                        controls={isPlaying}
                                    >
                                        <source src={introVideo} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}