import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Play } from "lucide-react";
import introVideo from '../../../src/assets/open day/intro-video.mp4'; // Recommended: Rename file without spaces

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
        <section className="py-20 bg-white" ref={ref}>
            <div className="container mx-auto px-4">
                <motion.div
                    className="max-w-4xl mx-auto text-center"
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={containerVariants}
                >
                    <motion.h2
                        className="text-4xl md:text-5xl font-bold text-blue-900 mb-6"
                        variants={cardVariants}
                    >
                        WHO <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">WE ARE</span>
                    </motion.h2>

                    <motion.div
                        className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-8 rounded-full"
                        variants={cardVariants}
                    />

                    <motion.p
                        className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6"
                        variants={cardVariants}
                    >
                        The IEEE Uva Wellassa University Student Branch is a passionate group of students dedicated to promoting
                        technology and engineering. Affiliated with IEEE, the world's largest technical organization, we strive
                        to advance innovation for the benefit of humanity.
                    </motion.p>

                    <motion.p
                        className="text-lg md:text-xl text-gray-700 leading-relaxed mb-12"
                        variants={cardVariants}
                    >
                        Join us for an exciting event featuring technical talks, live demonstrations, and the latest advancements
                        in technology. Open to students, professionals, and the public, this is your chance to explore IEEE's
                        activities and emerging tech trends!
                    </motion.p>

                    {/* Video Section */}
                    <motion.div
                        className="mt-16"
                        variants={cardVariants}
                    >
                        <div className="relative group">
                            {/* Video Container with Gradient Border */}
                            <div className="relative rounded-xl overflow-hidden shadow-2xl">
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
                                        </div>
                                    )}

                                    {/* Actual Video Element */}
                                    <video
                                        ref={videoRef}
                                        className="w-full h-full object-cover"
                                        autoPlay  // Add this for autoplay
                                        muted     // Required for autoplay in most browsers
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