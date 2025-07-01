import { Card, CardContent } from "../ui/card";
import { Users, Award, Calendar } from "lucide-react";

export default function AboutSection() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
                        WHO<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400"> WE ARE</span>
                    </h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-8 rounded-full"></div>
                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                        The IEEE Uva Wellassa University Student Branch is a passionate group of students dedicated to promoting
                        technology and engineering. Affiliated with IEEE, the world's largest technical organization, we strive
                        to advance innovation for the benefit of humanity.
                    </p>
                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-12">
                        Join us for an exciting event featuring technical talks, live demonstrations, and the latest advancements
                        in technology. Open to students, professionals, and the public, this is your chance to explore IEEE’s
                        activities and emerging tech trends!
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Card className="border border-blue-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 group">
                            <CardContent className="p-8 text-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <Users className="w-8 h-8 text-blue-600" />
                                </div>
                                <h3 className="text-xl font-semibold text-blue-900 mb-3">500+ Members</h3>
                                <p className="text-gray-600">Active student and faculty members</p>
                            </CardContent>
                        </Card>
                        <Card className="border border-blue-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 group">
                            <CardContent className="p-8 text-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <Award className="w-8 h-8 text-blue-600" />
                                </div>
                                <h3 className="text-xl font-semibold text-blue-900 mb-3">50+ Projects</h3>
                                <p className="text-gray-600">Innovative research and development</p>
                            </CardContent>
                        </Card>
                        <Card className="border border-blue-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 group">
                            <CardContent className="p-8 text-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <Calendar className="w-8 h-8 text-blue-600" />
                                </div>
                                <h3 className="text-xl font-semibold text-blue-900 mb-3">25+ Events</h3>
                                <p className="text-gray-600">Annual workshops and seminars</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}