import type { Team } from "../../types/types";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import chathutra from '../../assets/open day/Program Team/Program Team/Chathura Dilshan (IIT)-Program Team.jpg'
import dahami from '../../assets/open day/Program Team/Program Team/Dahami Tharushika.jpg'
import ishan from '../../assets/open day/Program Team/Program Team/Ishan(program Team).jpeg'
import navod from '../../assets/open day/Program Team/Program Team/Navod Teshan (CST)(Program Team).jpg'
import sajan from '../../assets/open day/WebTeam/WebTeam/Sajan Gunasekara.jpg'
import ishini from '../../assets/open day/WebTeam/WebTeam/Ishini Dewamiththa.jpeg'
import ramesha from '../../assets/open day/WebTeam/WebTeam/Ramesha Deshan.jpg'
import inuka from '../../assets/open day/WebTeam/WebTeam/Inuka.jpg'
import nisal from '../../assets/open day/Finance Team/Finance Team/Nisal Image.jpg'
import hirusha from '../../assets/open day/Finance Team/Finance Team/Hirusha suhan.png'
import lenmini from '../../assets/open day/Finance Team/Finance Team/Lenmini Somaratne.jpg'
import naveen from '../../assets/open day/Finance Team/Finance Team/Naveen_.jpg'
import nethmi from '../../assets/open day/Finance Team/Finance Team/Nethmi Bandara (Finance Team) .jpg'
import duvindu from '../../assets/open day/Finance Team/Finance Team/Duvindu Weerathunga_.jpg'
import heshani from '../../assets/open day/Design Team/Design Team/M.G.Heshani Samarasinghe -IIT.jpg'
import pamithi from '../../assets/open day/Design Team/Design Team/Pamithi Wijekulathilake-CST.jpg'
import tharushi from '../../assets/open day/Design Team/Design Team/U.V.T.Senara.jpg'
import thimira from '../../assets/open day/Design Team/Design Team/U.K. Thimira Theekshana - CST.jpg'
import banuka from '../../assets/open day/LogesticTeam/LogesticTeam/Bhanuka Parakrama.jpg'
import ominidu from '../../assets/open day/LogesticTeam/LogesticTeam/Omindu Sandew.jpg'
import nilesh from '../../assets/open day/LogesticTeam/LogesticTeam/Nilesh theekshana iit.jpg'
import wasana from '../../assets/open day/Secretary Team/Secretary Team/Wasana Nilakshi.jpg'
import sameesha from '../../assets/open day/Secretary Team/Secretary Team/Sameesha Pasanya.jpeg'
import chamudi from '../../assets/open day/Secretary Team/Secretary Team/D.K. Chamudi Dewmini.jpg'
import gihan from '../../assets/open day/project chair.jpeg'

const teams: Team[] = [
    {
        name: "Project Chair",
        members: [
            { name: "Gihan Lahiru Bimsara", role: "Project Chair", image: gihan  },
        ],
    },
    {
        name: "Program Team",
        members: [
            { name: "Chathura Dilshan", role: "Member", image: chathutra },
            { name: "Dahami Tharushika", role: "Member", image: dahami },
            { name: "Ishan Lakshitha", role: "Team Lead", image: ishan },
            { name: "Navod Teshan", role: "Member", image: navod },
            { name: "Sachinthaka Ravimal", role: "Member", image: navod },
        ],
    },
    {
        name: "Web Team",
        members: [
            { name: "Sajan Gunasekara", role: "Team Lead", image: sajan },
            { name: "Ishini Dewamiththa", role: "Member", image: ishini },
            { name: "Ramesha Deshan", role: "Member", image: ramesha },
            { name: "Inuka Kavinda", role: "Member", image: inuka },
            { name: "Sanjeewa Liyanage", role: "Member", image: inuka },
        ],
    },
    {
        name: "Finance Team",
        members: [
            { name: "Nisal Sawinda", role: "Team Lead", image: nisal },
            { name: "Hirusha Suhan", role: "Member", image: hirusha },
            { name: "Lenmini Navodya", role: "Member", image: lenmini },
            { name: "Naveen Madawa", role: "Member", image: naveen },
            { name: "Nethmi Mahesika", role: "Member", image: nethmi },
            { name: "Duvindu Kavithika", role: "Member", image: duvindu},
        ],
    },
    {
        name: "Design Team",
        members: [
            { name: "Pubudu Harshana", role: "Team Lead", image: "/placeholder.svg?height=200&width=200" },
            { name: "Heshani Madhushika", role: "Member", image: heshani },
            { name: "Pamithi Wijekulathilake", role: "Member", image: pamithi },
            { name: "Tharushi Senara ", role: "Member", image: tharushi },
            { name: "Thimira Theekshana ", role: "Member", image: thimira },
        ],
    },
    {
        name: "Logistic Team",
        members: [
            { name: "Lahiru Gajaweera", role: "Team Lead", image: "/placeholder.svg?height=200&width=200" },
            { name: "Bhanuka Parakrama ", role: "Member", image: banuka },
            { name: "Omindu Sandew", role: "Member", image: ominidu },
            { name: "Nilesh Theekshana", role: "Member", image: nilesh },
            { name: "Anusara Umadi", role: "Member", image: nilesh },
            { name: "Pabasara Chandupa ", role: "Member", image: nilesh },
        ],
    },
    {
        name: "Secretary Team",
        members: [
            { name: "Wasana Nilakshi", role: "Team Lead", image: wasana },
            { name: "Sameesha Pasanya ", role: "Member", image: sameesha },
            { name: "Dehani Siyapathi ", role: "Member", image: ominidu },
            { name: "Nilesh Theekshana", role: "Member", image: nilesh },
            { name: "Chamudi Dewmini", role: "Member", image: chamudi },
            { name: "Sandaruwi Athukorala", role: "Member", image: chamudi },
        ],
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
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

const slideVariants = {
    enter: (direction: number) => {
        return {
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        };
    },
    center: {
        x: 0,
        opacity: 1
    },
    exit: (direction: number) => {
        return {
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        };
    }
};

export default function TeamSection() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const sliderRef = useRef<HTMLDivElement>(null);
    const departmentTeams = teams.filter((team) => team.name !== "Project Chair");
    const leadershipTeam = teams.find((team) => team.name === "Project Chair");

    const nextSlide = () => {
        setDirection(1);
        setActiveIndex((prev) => (prev === departmentTeams.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setDirection(-1);
        setActiveIndex((prev) => (prev === 0 ? departmentTeams.length - 1 : prev - 1));
    };

    const goToSlide = (index: number) => {
        setDirection(index > activeIndex ? 1 : -1);
        setActiveIndex(index);
    };

    return (
        <motion.section
            className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.5}}
        >
            <div className="container mx-auto px-4">
                <motion.div
                    className="text-center mb-16"
                    initial={{y: -20, opacity: 0}}
                    whileInView={{y: 0, opacity: 1}}
                    transition={{duration: 0.5, delay: 0.2}}
                    viewport={{once: true, margin: "-100px"}}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">Organizing Committee</h2>
                    <motion.div
                        className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-8"
                        initial={{scaleX: 0}}
                        whileInView={{scaleX: 1}}
                        transition={{duration: 0.8, delay: 0.4}}
                        viewport={{once: true}}
                    />
                    <motion.p
                        className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1}}
                        transition={{duration: 0.5, delay: 0.6}}
                        viewport={{once: true}}
                    >
                        Our dedicated team of professionals and students working together to deliver an exceptional IEEE
                        Open Day experience.
                    </motion.p>
                </motion.div>

                {/* Leadership Section */}
                <motion.section
                    className="mb-20 bg-white rounded-xl shadow-lg p-8 max-w-6xl mx-auto"
                    initial={{opacity: 0, y: 50}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.6}}
                    viewport={{once: true, margin: "-100px"}}
                >
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-bold text-blue-900 mb-4">Leadership</h3>
                        <motion.div
                            className="w-16 h-0.5 bg-blue-600 mx-auto"
                            initial={{scaleX: 0}}
                            whileInView={{scaleX: 1}}
                            transition={{duration: 0.8}}
                            viewport={{once: true}}
                        />
                    </div>

                    <motion.div
                        className="grid grid-cols-1 gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true, margin: "-50px"}}
                    >
                        {leadershipTeam?.members.map((member, index) => (
                            <motion.div
                                key={index}
                                className="flex flex-col md:flex-row items-center gap-8"
                                variants={itemVariants}
                            >
                                <motion.div
                                    className="w-full md:w-1/3 aspect-square max-w-xs relative rounded-xl overflow-hidden shadow-md"
                                    whileHover={{scale: 1.02}}
                                    whileInView={{scale: [0.95, 1], opacity: [0, 1]}}
                                    transition={{type: "spring", stiffness: 400, damping: 10}}
                                    viewport={{once: true}}
                                >
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover"
                                    />
                                    <div
                                        className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
                                </motion.div>
                                <div className="w-full md:w-2/3">
                                    <motion.h4
                                        className="text-2xl md:text-3xl font-bold text-blue-900 mb-2"
                                        initial={{x: -20, opacity: 0}}
                                        whileInView={{x: 0, opacity: 1}}
                                        transition={{delay: 0.2}}
                                        viewport={{once: true}}
                                    >
                                        {member.name}
                                    </motion.h4>
                                    <motion.p
                                        className="text-blue-600 font-semibold text-lg md:text-xl mb-4"
                                        initial={{x: -20, opacity: 0}}
                                        whileInView={{x: 0, opacity: 1}}
                                        transition={{delay: 0.3}}
                                        viewport={{once: true}}
                                    >
                                        {member.role}
                                    </motion.p>
                                    <motion.div
                                        className="w-16 h-0.5 bg-blue-400 mb-4"
                                        initial={{scaleX: 0}}
                                        whileInView={{scaleX: 1}}
                                        transition={{duration: 0.8, delay: 0.4}}
                                        viewport={{once: true}}
                                    />
                                    <motion.p
                                        className="text-gray-600 leading-relaxed text-lg"
                                        initial={{opacity: 0}}
                                        whileInView={{opacity: 1}}
                                        transition={{delay: 0.5}}
                                        viewport={{once: true}}
                                    >
                                        Leading the IEEE Open Day initiative with extensive experience in technology and
                                        education.
                                        Dr. Johnson brings over 15 years of academic leadership and a passion for
                                        student development.
                                    </motion.p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.section>

                {/* Department Teams Section */}
                <motion.section
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    transition={{duration: 0.5}}
                    viewport={{once: true, margin: "-100px"}}
                >
                    <motion.div
                        className="text-center mb-12"
                        initial={{y: 20, opacity: 0}}
                        whileInView={{y: 0, opacity: 1}}
                        transition={{duration: 0.5}}
                        viewport={{once: true}}
                    >
                        <h3 className="text-3xl font-bold text-blue-900 mb-4">Department Teams</h3>
                        <motion.div
                            className="w-16 h-0.5 bg-blue-600 mx-auto mb-8"
                            initial={{scaleX: 0}}
                            whileInView={{scaleX: 1}}
                            transition={{duration: 0.8}}
                            viewport={{once: true}}
                        />
                        <motion.p
                            className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
                            initial={{opacity: 0}}
                            whileInView={{opacity: 1}}
                            transition={{delay: 0.3}}
                            viewport={{once: true}}
                        >
                            Meet the talented teams working behind the scenes to make this event a success.
                        </motion.p>
                    </motion.div>

                    <motion.div
                        className="relative"
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1}}
                        transition={{duration: 0.5, delay: 0.3}}
                        viewport={{once: true}}
                    >
                        {/* Slider Navigation Arrows */}
                        <motion.button
                            onClick={prevSlide}
                            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-blue-600 hover:bg-blue-50 transition-colors duration-200"
                            aria-label="Previous team"
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 0.9}}
                        >
                            <ChevronLeft size={24}/>
                        </motion.button>
                        <motion.button
                            onClick={nextSlide}
                            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-blue-600 hover:bg-blue-50 transition-colors duration-200"
                            aria-label="Next team"
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 0.9}}
                        >
                            <ChevronRight size={24}/>
                        </motion.button>

                        {/* Fixed Slider Container */}
                        <div ref={sliderRef} className="overflow-hidden relative w-full">
                            <AnimatePresence custom={direction} mode="wait">
                                <motion.div
                                    key={activeIndex}
                                    custom={direction}
                                    variants={slideVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{
                                        x: {type: "spring", stiffness: 300, damping: 30},
                                        opacity: {duration: 0.2}
                                    }}
                                    className="w-full"
                                >
                                    <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden mx-4">
                                        <motion.div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6">
                                            <div className="flex items-center justify-between">
                                                <h3 className="text-2xl font-bold text-white">{departmentTeams[activeIndex].name}</h3>
                                                <Badge className="bg-blue-500 hover:bg-blue-400 text-white border-0">
                                                    {departmentTeams[activeIndex].members.length} Members
                                                </Badge>
                                            </div>
                                        </motion.div>

                                        <CardContent className="p-6">
                                            <div className="flex flex-col items-center">
                                                {/* Team Leads */}
                                                <div className="mb-8 w-full">
                                                    <h4 className="text-lg font-semibold text-blue-900 mb-6 text-center">Team Leads</h4>
                                                    <div className="flex flex-wrap justify-center gap-6">
                                                        {departmentTeams[activeIndex].members
                                                            .filter(member => member.role.toLowerCase().includes('lead'))
                                                            .map((member, memberIndex) => (
                                                                <motion.div
                                                                    key={`lead-${memberIndex}`}
                                                                    className="flex flex-col items-center text-center p-6 rounded-lg bg-gray-50 hover:bg-blue-50 transition-colors duration-200 w-48"
                                                                    initial={{opacity: 0, y: 20}}
                                                                    animate={{opacity: 1, y: 0}}
                                                                    transition={{delay: memberIndex * 0.1}}
                                                                >
                                                                    <div className="relative w-32 h-32 overflow-hidden rounded-full border-4 border-blue-200 mb-4">
                                                                        <img
                                                                            src={member.image}
                                                                            alt={member.name}
                                                                            className="w-full h-full object-cover"
                                                                        />
                                                                    </div>
                                                                    <h4 className="text-lg font-semibold text-blue-900">{member.name}</h4>
                                                                    <p className="text-blue-600 font-medium text-sm">{member.role}</p>
                                                                </motion.div>
                                                            ))}
                                                    </div>
                                                </div>

                                                {/* Members */}
                                                <div className="w-full">
                                                    <h4 className="text-lg font-semibold text-blue-900 mb-6 text-center">Members</h4>
                                                    <div className="flex flex-wrap justify-center gap-4">
                                                        {departmentTeams[activeIndex].members
                                                            .filter(member => !member.role.toLowerCase().includes('lead'))
                                                            .map((member, memberIndex) => (
                                                                <motion.div
                                                                    key={`member-${memberIndex}`}
                                                                    className="flex flex-col items-center text-center p-4 rounded-lg bg-gray-50 hover:bg-blue-50 transition-colors duration-200 w-40"
                                                                    initial={{opacity: 0, y: 20}}
                                                                    animate={{opacity: 1, y: 0}}
                                                                    transition={{delay: memberIndex * 0.1}}
                                                                >
                                                                    <div className="relative w-24 h-24 overflow-hidden rounded-full border-2 border-blue-200 mb-3">
                                                                        <img
                                                                            src={member.image}
                                                                            alt={member.name}
                                                                            className="w-full h-full object-cover"
                                                                        />
                                                                    </div>
                                                                    <h4 className="font-semibold text-blue-900">{member.name}</h4>
                                                                    <p className="text-blue-600 font-medium text-xs">{member.role}</p>
                                                                </motion.div>
                                                            ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Slider Indicators */}
                        <div className="flex justify-center mt-8 space-x-2">
                            {departmentTeams.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToSlide(index)}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${activeIndex === index ? 'bg-blue-600 w-6' : 'bg-blue-300'}`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    </motion.div>
                </motion.section>
            </div>
        </motion.section>
    );
}