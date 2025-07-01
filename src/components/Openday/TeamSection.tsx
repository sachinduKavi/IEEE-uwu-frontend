import type {Team} from "../../types/types";
import {Card, CardContent} from "../ui/card";
import {Badge} from "../ui/badge";
import {ChevronLeft, ChevronRight} from "lucide-react";
import {useState, useRef} from "react";
import {motion} from "framer-motion";
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
            {name: "Gihan Lahiru Bimsara", role: "Project Chair", image: gihan},
        ],
    },
    {
        name: "Program Team",
        members: [
            {name: "Chathura Dilshan", role: "Member", image: chathutra},
            {name: "Dahami Tharushika", role: "Member", image: dahami},
            {name: "Ishan Lakshitha", role: "Team Lead", image: ishan},
            {name: "Navod Teshan", role: "Member", image: navod},
            {name: "Sachinthaka Ravimal", role: "Member", image: ''},
        ],
    },
    {
        name: "Web Team",
        members: [
            {name: "Sajan Gunasekara", role: "Team Lead", image: sajan},
            {name: "Ishini Dewamiththa", role: "Member", image: ishini},
            {name: "Ramesha Deshan", role: "Member", image: ramesha},
            {name: "Inuka Kavinda", role: "Member", image: inuka},
            {name: "Sanjeewa Liyanage", role: "Member", image: ''},
        ],
    },
    {
        name: "Finance Team",
        members: [
            {name: "Nisal Sawinda", role: "Team Lead", image: nisal},
            {name: "Hirusha Suhan", role: "Member", image: hirusha},
            {name: "Lenmini Navodya", role: "Member", image: lenmini},
            {name: "Naveen Madawa", role: "Member", image: naveen},
            {name: "Duvindu Kavithika", role: "Member", image: duvindu},
        ],
    },
    {
        name: "Design Team",
        members: [
            {name: "Pubudu Harshana", role: "Team Lead", image: ''},
            {name: "Heshani Madhushika", role: "Member", image: heshani},
            {name: "Pamithi Wijekulathilake", role: "Member", image: pamithi},
            {name: "Tharushi Senara ", role: "Member", image: tharushi},
            {name: "Thimira Theekshana ", role: "Member", image: thimira},
        ],
    },
    {
        name: "Logistic Team",
        members: [
            {name: "Lahiru Gajaweera", role: "Team Lead", image: ''},
            {name: "Bhanuka Parakrama ", role: "Member", image: banuka},
            {name: "Omindu Sandew", role: "Member", image: ominidu},
            {name: "Nilesh Theekshana", role: "Member", image: nilesh},
            {name: "Anusara Umadi", role: "Member", image: ''},
            {name: "Pabasara Chandupa ", role: "Member", image: ''},
        ],
    },
    {
        name: "Secretary Team",
        members: [
            {name: "Wasana Nilakshi", role: "Team Lead", image: wasana},
            {name: "Sameesha Pasanya ", role: "Member", image: sameesha},
            {name: "Dehani Siyapathi ", role: "Member", image: ''},
            {name: "Nilesh Theekshana", role: "Member", image: nilesh},
            {name: "Chamudi Dewmini", role: "Member", image: chamudi},
            {name: "Sandaruwi Athukorala", role: "Member", image: ''},
        ],
    },
];

const containerVariants = {
    hidden: {opacity: 0},
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            when: "beforeChildren"
        }
    }
};

const itemVariants = {
    hidden: {y: 20, opacity: 0},
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

export default function TeamSection() {
    const [activeIndex, setActiveIndex] = useState(0);
    const sliderRef = useRef<HTMLDivElement>(null);
    const departmentTeams = teams.filter((team) => team.name !== "Project Chair");
    const leadershipTeam = teams.find((team) => team.name === "Project Chair");

    const nextSlide = () => {
        setActiveIndex((prev) => (prev === departmentTeams.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setActiveIndex((prev) => (prev === 0 ? departmentTeams.length - 1 : prev - 1));
    };

    const goToSlide = (index: number) => {
        setActiveIndex(index);
    };

    return (
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
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
                        Meet the talented teams working behind the scenes to make this event a success.

                    </motion.p>
                </motion.div>
                {/* Leadership Section with Framer Motion */}
                <motion.section
                    className="mb-20 bg-white rounded-xl shadow-lg p-8 max-w-6xl mx-auto"
                    initial={{opacity: 0, y: 50}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.6}}
                    viewport={{once: true, margin: "-100px"}}
                >
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
                                className="flex flex-col md:flex-row items-center md:items-start gap-8"
                                variants={itemVariants}
                            >
                                <motion.div
                                    className="w-full md:w-1/3 aspect-square max-w-xs relative rounded-xl overflow-hidden shadow-md mt-0"
                                    whileHover={{scale: 1.02}}
                                    whileInView={{scale: [0.95, 1], opacity: [0, 1]}}
                                    transition={{type: "spring", stiffness: 400, damping: 10}}
                                    viewport={{once: true}}
                                >
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover object-top"
                                    />
                                    <div
                                        className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
                                </motion.div>
                                <div className="w-full md:w-2/3 my-auto text-center md:text-left">

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
                                        className="w-16 h-0.5 bg-blue-400 mb-4 mx-auto md:mx-0"
                                        initial={{scaleX: 0}}
                                        whileInView={{scaleX: 1}}
                                        transition={{duration: 0.8, delay: 0.4}}
                                        viewport={{once: true}}
                                    />

                                    <motion.p
                                        className="text-gray-600 leading-relaxed text-base sm:text-lg"
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ delay: 0.5 }}
                                        viewport={{ once: true }}
                                    >
                                        A motivated leader with a strong passion for technology and education, Gihan Lahiru Bimsara spearheads
                                        the IEEE Open Day initiative, fostering innovation and collaboration. His leadership ensures the smooth
                                        execution of projects, empowering participants and promoting technological engagement.
                                    </motion.p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.section>

                {/* Department Teams Section - Simplified without Framer Motion */}
                <section>
                    <div className="relative">
                        <button
                            onClick={prevSlide}
                            className="hover:cursor-pointer absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-blue-600 hover:bg-blue-50 transition-colors duration-200"
                            aria-label="Previous team"
                        >
                            <ChevronLeft size={24}/>
                        </button>
                        <button
                            onClick={nextSlide}
                            className="hover:cursor-pointer absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-blue-600 hover:bg-blue-50 transition-colors duration-200"
                            aria-label="Next team"
                        >
                            <ChevronRight size={24}/>
                        </button>

                        {/* Slider Container */}
                        <div ref={sliderRef} className="overflow-hidden relative w-full">
                            <div className="whitespace-nowrap transition-transform duration-300 ease-in-out" style={{
                                transform: `translateX(-${activeIndex * 100}%)`
                            }}>
                                {departmentTeams.map((team, index) => (
                                    <div key={index} className="inline-block w-full px-4">
                                        <Card
                                            className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                                            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4">
                                                <div className="flex items-center justify-between">
                                                    <h3 className="text-2xl font-bold text-white">{team.name}</h3>
                                                    <Badge
                                                        className="bg-blue-500 hover:bg-blue-400 text-white border-0">
                                                        {team.members.length} Members
                                                    </Badge>
                                                </div>
                                            </div>

                                            <CardContent className="p-6">
                                                <div className="flex flex-col md:flex-row gap-8">
                                                    {/* Team Leads - Left Side */}
                                                    <div className="w-full md:w-1/3">
                                                        <h4 className="text-lg font-semibold text-blue-900 mb-6 text-center md:text-left">
                                                            Team Leads
                                                        </h4>
                                                        <div className="space-y-6">
                                                            {team.members
                                                                .filter(member => member.role.toLowerCase().includes('lead'))
                                                                .map((member, memberIndex) => (
                                                                    <div
                                                                        key={`lead-${memberIndex}`}
                                                                        className="flex flex-col items-center md:items-start text-center md:text-left p-6 rounded-lg bg-gray-50 hover:bg-blue-50 transition-colors duration-200"
                                                                    >
                                                                        <div
                                                                            className="mx-auto relative w-32 h-32 overflow-hidden rounded-full border-4 border-blue-200 mb-4">
                                                                            <img
                                                                                src={member.image}
                                                                                alt={member.name}
                                                                                className="w-full h-full object-cover"
                                                                                onError={(e) => {
                                                                                    (e.target as HTMLImageElement).src = '/placeholder.svg';
                                                                                }}
                                                                            />
                                                                        </div>
                                                                        <div className="text-center w-full">
                                                                            <h4 className="mx-auto font-semibold text-blue-900 text-sm ">{member.name}</h4>
                                                                            <p className="mx-auto text-blue-600 font-medium text-xs">{member.role}</p>
                                                                        </div>
                                                                    </div>
                                                                ))}
                                                        </div>
                                                    </div>

                                                    {/* Members - Right Side */}
                                                    <div className="w-full md:w-2/3">
                                                        <h4 className="text-lg font-semibold text-blue-900 mb-6 text-center md:text-left">
                                                            Members
                                                        </h4>
                                                        <div
                                                            className="mt-11 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                                                            {team.members
                                                                .filter(member => !member.role.toLowerCase().includes('lead'))
                                                                .map((member, memberIndex) => (
                                                                    <div
                                                                        key={`member-${memberIndex}`}
                                                                        className="flex flex-col items-center text-center p-4 rounded-lg bg-gray-50 hover:bg-blue-50 transition-colors duration-200"
                                                                    >
                                                                        <div
                                                                            className="relative w-20 h-20 sm:w-24 sm:h-24 overflow-hidden rounded-full border-2 border-blue-200 mb-3">
                                                                            <img
                                                                                src={member.image}
                                                                                alt={member.name}
                                                                                className="w-full h-full object-cover"
                                                                                onError={(e) => {
                                                                                    (e.target as HTMLImageElement).src = '/placeholder.svg';
                                                                                }}
                                                                            />
                                                                        </div>
                                                                        <h4 className="font-semibold text-blue-900 text-xs ">
                                                                            {member.name}
                                                                        </h4>
                                                                        <p className="text-blue-600 font-medium text-xs">{member.role}</p>
                                                                    </div>
                                                                ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Slider Indicators */}
                        <div className="flex justify-center mt-8 space-x-2">
                            {departmentTeams.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToSlide(index)}
                                    className={`hover:cursor-pointer w-3 h-3 rounded-full transition-all duration-300 ${activeIndex === index ? 'bg-blue-600 w-6' : 'bg-blue-300'}`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </section>
    );
}