import { Card, CardContent } from "../ui/card";
import { Users, Award, Calendar } from "lucide-react";

export default function AboutSection() {
    return (
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
    )
}