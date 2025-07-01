import type {Team} from "../../types/types";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";

const teams: Team[] = [
    {
        name: "Project Chair",
        members: [
            { name: "Dr. Sarah Johnson", role: "Faculty Advisor", image: "/placeholder.svg?height=200&width=200" },
            { name: "Alex Chen", role: "Student Chair", image: "/placeholder.svg?height=200&width=200" },
        ],
    },
    {
        name: "Web Team",
        members: [
            { name: "Emma Rodriguez", role: "Lead Developer", image: "/placeholder.svg?height=200&width=200" },
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

                {/* Project Leadership */}
                <div className="mb-16">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-bold text-blue-900 mb-4">Executive Leadership</h3>
                        <div className="w-16 h-0.5 bg-blue-600 mx-auto"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {teams
                            .find((team) => team.name === "Project Chair")
                            ?.members.map((member, index) => (
                                <Card
                                    key={index}
                                    className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                                >
                                    <CardContent className="p-0">
                                        <div className="flex flex-col md:flex-row">
                                            <div className="md:w-1/3 relative">
                                                <div className="aspect-square relative overflow-hidden">
                                                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
                                                </div>
                                            </div>
                                            <div className="md:w-2/3 p-8 flex flex-col justify-center">
                                                <h4 className="text-2xl font-bold text-blue-900 mb-2">{member.name}</h4>
                                                <p className="text-blue-600 font-semibold text-lg mb-4">{member.role}</p>
                                                <div className="w-12 h-0.5 bg-blue-400 mb-4"></div>
                                                <p className="text-gray-600 leading-relaxed">
                                                    Leading the IEEE Open Day initiative with extensive experience in technology and education.
                                                </p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                    </div>
                </div>

                {/* Department Teams */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {teams
                        .filter((team) => team.name !== "Project Chair")
                        .map((team) => (
                            <Card
                                key={team.name}
                                className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                            >
                                <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-2xl font-bold text-white">{team.name}</h3>
                                        <Badge className="bg-blue-500 hover:bg-blue-400 text-white border-0">
                                            {team.members.length} Members
                                        </Badge>
                                    </div>
                                </div>

                                <CardContent className="p-6">
                                    <div className="space-y-6">
                                        {team.members.map((member, index) => (
                                            <div
                                                key={index}
                                                className="flex items-center space-x-4 p-4 rounded-lg bg-gray-50 hover:bg-blue-50 transition-colors duration-200"
                                            >
                                                <div className="relative w-16 h-16 overflow-hidden rounded-full border-2 border-blue-200 flex-shrink-0"></div>
                                                <div className="flex-grow min-w-0">
                                                    <h4 className="text-lg font-semibold text-blue-900 truncate">{member.name}</h4>
                                                    <p className="text-blue-600 font-medium text-sm">{member.role}</p>
                                                </div>
                                                <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                </div>

                {/* Team Statistics */}
                <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div className="space-y-2">
                            <div className="text-3xl font-bold text-blue-900">
                                {teams.reduce((total, team) => total + team.members.length, 0)}
                            </div>
                            <div className="text-gray-600 font-medium">Total Members</div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-3xl font-bold text-blue-900">{teams.length - 1}</div>
                            <div className="text-gray-600 font-medium">Departments</div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-3xl font-bold text-blue-900">100+</div>
                            <div className="text-gray-600 font-medium">Hours Planned</div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-3xl font-bold text-blue-900">1</div>
                            <div className="text-gray-600 font-medium">Shared Vision</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}