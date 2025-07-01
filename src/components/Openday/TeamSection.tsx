import type { Team } from "../../types/types";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef } from "react";

const teams: Team[] = [
    {
        name: "Project Chair",
        members: [
            { name: "Dr. Sarah Johnson", role: "Faculty Advisor", image: "/placeholder.svg?height=200&width=200" },
        ],
    },
    {
        name: "Program Team",
        members: [
            { name: "Chathura Dilshan", role: "Lead Developer", image: "/placeholder.svg?height=200&width=200" },
            { name: "Michael Kim", role: "Frontend Developer", image: "/placeholder.svg?height=200&width=200" },
            { name: "Priya Patel", role: "UI/UX Designer", image: "/placeholder.svg?height=200&width=200" },
        ],
    },
    {
        name: "Finance Team",
        members: [
            { name: "David Wilson", role: "Finance Head", image: "/placeholder.svg?height=200&width=200" },
            { name: "Lisa Zhang", role: "Budget Analyst", image: "/placeholder.svg?height=200&width=200" },
        ],
    },
    {
        name: "Design Team",
        members: [
            { name: "Sofia Martinez", role: "Creative Director", image: "/placeholder.svg?height=200&width=200" },
            { name: "James Thompson", role: "Graphic Designer", image: "/placeholder.svg?height=200&width=200" },
            { name: "Aisha Kumar", role: "Brand Designer", image: "/placeholder.svg?height=200&width=200" },
        ],
    },
    {
        name: "Logistics Team",
        members: [
            { name: "Ryan O'Connor", role: "Logistics Coordinator", image: "/placeholder.svg?height=200&width=200" },
            { name: "Maya Singh", role: "Venue Manager", image: "/placeholder.svg?height=200&width=200" },
            { name: "Carlos Mendez", role: "Equipment Manager", image: "/placeholder.svg?height=200&width=200" },
        ],
    },
    {
        name: "Program Team",
        members: [
            { name: "Jennifer Lee", role: "Program Director", image: "/placeholder.svg?height=200&width=200" },
            { name: "Ahmed Hassan", role: "Speaker Coordinator", image: "/placeholder.svg?height=200&width=200" },
            { name: "Rachel Green", role: "Workshop Coordinator", image: "/placeholder.svg?height=200&width=200" },
        ],
    },
];

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
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">Organizing Committee</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-8"></div>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Our dedicated team of professionals and students working together to deliver an exceptional IEEE Open Day
                        experience.
                    </p>
                </div>

                {/* Leadership Section */}
                <section className="mb-20 bg-white rounded-xl shadow-lg p-8 max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-bold text-blue-900 mb-4">Leadership</h3>
                        <div className="w-16 h-0.5 bg-blue-600 mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 gap-8">
                        {leadershipTeam?.members.map((member, index) => (
                            <div key={index} className="flex flex-col md:flex-row items-center gap-8">
                                <div className="w-full md:w-1/3 aspect-square max-w-xs relative rounded-xl overflow-hidden shadow-md">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
                                </div>
                                <div className="w-full md:w-2/3">
                                    <h4 className="text-2xl md:text-3xl font-bold text-blue-900 mb-2">{member.name}</h4>
                                    <p className="text-blue-600 font-semibold text-lg md:text-xl mb-4">{member.role}</p>
                                    <div className="w-16 h-0.5 bg-blue-400 mb-4"></div>
                                    <p className="text-gray-600 leading-relaxed text-lg">
                                        Leading the IEEE Open Day initiative with extensive experience in technology and education.
                                        Dr. Johnson brings over 15 years of academic leadership and a passion for student development.
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Department Teams Section */}
                <section>
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-bold text-blue-900 mb-4">Department Teams</h3>
                        <div className="w-16 h-0.5 bg-blue-600 mx-auto mb-8"></div>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Meet the talented teams working behind the scenes to make this event a success.
                        </p>
                    </div>

                    <div className="relative">
                        {/* Slider Navigation Arrows */}
                        <button
                            onClick={prevSlide}
                            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-blue-600 hover:bg-blue-50 transition-colors duration-200"
                            aria-label="Previous team"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-blue-600 hover:bg-blue-50 transition-colors duration-200"
                            aria-label="Next team"
                        >
                            <ChevronRight size={24} />
                        </button>

                        {/* Slider Container */}
                        <div
                            ref={sliderRef}
                            className="overflow-hidden"
                        >
                            <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                                {departmentTeams.map((team) => (
                                    <div key={team.name} className="w-full flex-shrink-0 px-4">
                                        <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                                            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6">
                                                <div className="flex items-center justify-between">
                                                    <h3 className="text-2xl font-bold text-white">{team.name}</h3>
                                                    <Badge className="bg-blue-500 hover:bg-blue-400 text-white border-0">
                                                        {team.members.length} Members
                                                    </Badge>
                                                </div>
                                            </div>

                                            <CardContent className="p-6">
                                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                                    {team.members.map((member, memberIndex) => (
                                                        <div
                                                            key={memberIndex}
                                                            className="flex flex-col items-center text-center p-4 rounded-lg bg-gray-50 hover:bg-blue-50 transition-colors duration-200"
                                                        >
                                                            <div className="relative w-24 h-24 overflow-hidden rounded-full border-2 border-blue-200 mb-4">
                                                                <img
                                                                    src={member.image}
                                                                    alt={member.name}
                                                                    className="w-full h-full object-cover"
                                                                />
                                                            </div>
                                                            <h4 className="text-lg font-semibold text-blue-900">{member.name}</h4>
                                                            <p className="text-blue-600 font-medium text-sm">{member.role}</p>
                                                            <div className="mt-3 flex space-x-2">
                                                                {[1, 2, 3].map((i) => (
                                                                    <div key={i} className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    ))}
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
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${activeIndex === index ? 'bg-blue-600 w-6' : 'bg-blue-300'}`}
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