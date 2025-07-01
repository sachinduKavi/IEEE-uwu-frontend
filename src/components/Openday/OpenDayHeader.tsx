import { useState } from "react"
import { Button } from "../ui/Button.tsx"
import { Card, CardContent } from "../ui/card"
import { Badge } from "../ui/badge"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Calendar, Users, Award } from "lucide-react"
// import Image from "next/image"

interface TeamMember {
    name: string;
    role: string;
    image: string;
}

interface Team {
    name: string;
    members: TeamMember[];
}

interface GalleryImage {
    src: string;
    caption: string;
}

export default function IEEEOpenDay() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null)

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
    ]

    const galleryImages: GalleryImage[] = [
        { src: "/placeholder.svg?height=300&width=400", caption: "IEEE Workshop 2024" },
        { src: "/placeholder.svg?height=300&width=400", caption: "Student Presentations" },
        { src: "/placeholder.svg?height=300&width=400", caption: "Networking Session" },
        { src: "/placeholder.svg?height=300&width=400", caption: "Technical Exhibition" },
        { src: "/placeholder.svg?height=300&width=400", caption: "Award Ceremony" },
        { src: "/placeholder.svg?height=300&width=400", caption: "Team Building Activities" },
        { src: "/placeholder.svg?height=300&width=400", caption: "Guest Speaker Session" },
        { src: "/placeholder.svg?height=300&width=400", caption: "Innovation Showcase" },
        { src: "/placeholder.svg?height=300&width=400", caption: "Student Projects" },
    ]

    const handleRegisterClick = () => {
        window.open("https://forms.google.com/register", "_blank")
    }

    return (
        <div className="min-h-screen w-screen bg-gradient-to-br from-blue-50 to-blue-100">
            {/* Header Section */}
            <header className="sticky top-0 z-50 bg-gradient-to-r from-blue-900 to-blue-800 shadow-lg">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                                <Award className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h1 className="text-2xl md:text-3xl font-bold text-white">IEEE Society Open Day 2025</h1>
                                <p className="text-blue-200 text-sm">University of Technology</p>
                            </div>
                        </div>
                        <Button
                            size="lg"
                            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
                            onClick={handleRegisterClick}
                        >
                            Register Now
                        </Button>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center max-w-4xl mx-auto">
                        <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent">
                            Welcome to IEEE Open Day
                        </h2>
                        <p className="text-xl md:text-2xl mb-8 text-blue-100">
                            Join us for an exciting day of innovation, technology, and networking
                        </p>
                        <div className="flex flex-wrap justify-center gap-6 mb-8">
                            <div className="flex items-center space-x-2 bg-blue-800 bg-opacity-50 px-4 py-2 rounded-full">
                                <Calendar className="w-5 h-5" />
                                <span>March 15, 2025</span>
                            </div>
                            <div className="flex items-center space-x-2 bg-blue-800 bg-opacity-50 px-4 py-2 rounded-full">
                                <MapPin className="w-5 h-5" />
                                <span>Main Auditorium</span>
                            </div>
                            <div className="flex items-center space-x-2 bg-blue-800 bg-opacity-50 px-4 py-2 rounded-full">
                                <Users className="w-5 h-5" />
                                <span>500+ Attendees</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Us Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-8">About IEEE Society</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-8"></div>
                        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                            The IEEE Society at University of Technology is a vibrant community of students, faculty, and
                            professionals dedicated to advancing technology for humanity. We foster innovation, provide professional
                            development opportunities, and create a platform for knowledge sharing among our members.
                        </p>
                        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-12">
                            Our Open Day is an annual celebration where we showcase cutting-edge projects, host inspiring speakers,
                            and provide networking opportunities for students and industry professionals. Join us to explore the
                            future of technology and connect with like-minded innovators.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <Card className="border-blue-200 hover:shadow-lg transition-shadow duration-300">
                                <CardContent className="p-6 text-center">
                                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Users className="w-8 h-8 text-blue-600" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-blue-900 mb-2">500+ Members</h3>
                                    <p className="text-gray-600">Active student and faculty members</p>
                                </CardContent>
                            </Card>
                            <Card className="border-blue-200 hover:shadow-lg transition-shadow duration-300">
                                <CardContent className="p-6 text-center">
                                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Award className="w-8 h-8 text-blue-600" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-blue-900 mb-2">50+ Projects</h3>
                                    <p className="text-gray-600">Innovative research and development</p>
                                </CardContent>
                            </Card>
                            <Card className="border-blue-200 hover:shadow-lg transition-shadow duration-300">
                                <CardContent className="p-6 text-center">
                                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Calendar className="w-8 h-8 text-blue-600" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-blue-900 mb-2">25+ Events</h3>
                                    <p className="text-gray-600">Annual workshops and seminars</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Organizing Committee Section */}
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
                                                        {/*<Image*/}
                                                        {/*    src={member.image}*/}
                                                        {/*    alt={member.name}*/}
                                                        {/*    fill*/}
                                                        {/*    className="object-cover"*/}
                                                        {/*/>*/}
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
                                                    <div className="relative w-16 h-16 overflow-hidden rounded-full border-2 border-blue-200 flex-shrink-0">
                                                        {/*<Image*/}
                                                        {/*    src={member.image}*/}
                                                        {/*    alt={member.name}*/}
                                                        {/*    fill*/}
                                                        {/*    className="object-cover"*/}
                                                        {/*/>*/}
                                                    </div>
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

            {/* Gallery Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-8">Event Gallery</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-8"></div>
                        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                            Take a look at some memorable moments from our previous IEEE events and activities.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {galleryImages.map((image, index) => (
                            <div
                                key={index}
                                className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                                onClick={() => setSelectedImage(image.src)}
                            >
                                <div className="aspect-[4/3] relative">
                                    {/*<Image*/}
                                    {/*    src={image.src}*/}
                                    {/*    alt={image.caption}*/}
                                    {/*    fill*/}
                                    {/*    className="object-cover group-hover:scale-110 transition-transform duration-500"*/}
                                    {/*/>*/}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                        <h4 className="text-lg font-semibold">{image.caption}</h4>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="relative max-w-4xl max-h-full">
                        {/*<Image*/}
                        {/*    src={selectedImage}*/}
                        {/*    alt="Gallery image"*/}
                        {/*    width={800}*/}
                        {/*    height={600}*/}
                        {/*    className="max-w-full max-h-full object-contain"*/}
                        {/*/>*/}
                        <button
                            className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300"
                            onClick={(e) => {
                                e.stopPropagation()
                                setSelectedImage(null)
                            }}
                        >
                            ×
                        </button>
                    </div>
                </div>
            )}

            {/* Footer */}
            <footer className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-12">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <h3 className="text-2xl font-bold mb-4">IEEE Society</h3>
                            <p className="text-blue-200 mb-4">University of Technology</p>
                            <p className="text-blue-200 text-sm">
                                Advancing technology for humanity through innovation, education, and professional development.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-xl font-semibold mb-4">Contact Information</h4>
                            <div className="space-y-2 text-blue-200">
                                <div className="flex items-center space-x-2">
                                    <Mail className="w-4 h-4" />
                                    <span>ieee@university.edu</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <MapPin className="w-4 h-4" />
                                    <span>Engineering Building, Room 301</span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
                            <div className="flex space-x-4">
                                <a
                                    href="#"
                                    className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
                                    aria-label="Facebook"
                                >
                                    <Facebook className="w-5 h-5" />
                                </a>
                                <a
                                    href="#"
                                    className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
                                    aria-label="Instagram"
                                >
                                    <Instagram className="w-5 h-5" />
                                </a>
                                <a
                                    href="#"
                                    className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
                                    aria-label="LinkedIn"
                                >
                                    <Linkedin className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-blue-700 mt-8 pt-8 text-center">
                        <p className="text-blue-200">© 2025 IEEE Society - University of Technology. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}