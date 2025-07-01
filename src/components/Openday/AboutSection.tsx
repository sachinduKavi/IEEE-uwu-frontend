
import { Card, CardContent } from "../ui/card";
import { Users, Award, Calendar } from "lucide-react";
import { motion, useInView, easeInOut } from "framer-motion";
import { useRef } from "react";

export default function AboutSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.1 });

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: easeInOut,
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

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-6"
                        variants={containerVariants}
                    >
                        {[
                            { icon: <Users className="w-8 h-8 text-blue-600" />, title: "500+ Members", desc: "Active student and faculty members" },
                            { icon: <Award className="w-8 h-8 text-blue-600" />, title: "50+ Projects", desc: "Innovative research and development" },
                            { icon: <Calendar className="w-8 h-8 text-blue-600" />, title: "25+ Events", desc: "Annual workshops and seminars" }
                        ].map((item, index) => (
                            <motion.div key={index} variants={cardVariants}>
                                <Card className="border border-blue-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 group">
                                    <CardContent className="p-8 text-center">
                                        <motion.div
                                            className="w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
                                            whileHover={{ rotate: 5, scale: 1.1 }}
                                        >
                                            {item.icon}
                                        </motion.div>
                                        <h3 className="text-xl font-semibold text-blue-900 mb-3">{item.title}</h3>
                                        <p className="text-gray-600">{item.desc}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
