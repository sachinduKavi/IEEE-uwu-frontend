import { Calendar, MapPin, Users } from "lucide-react";
import headerBg from '../../assets/images/HeadSectionOpenDay.jpg';

export default function HeroSection() {
    return (
        <section className="relative py-20 text-white overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url(${headerBg})`,
                    backgroundAttachment: 'fixed'
                }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950/40 to-blue-900/80"></div>
            <div className="absolute inset-0 bg-black/30"></div>

            {/* Content */}
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-4xl mx-auto">
                    <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent">
                        Welcome to IEEE Open Day
                    </h2>
                    <p className="text-xl md:text-2xl mb-8 text-blue-100">
                        Join us for an exciting day of innovation, technology, and networking
                    </p>
                    <div className="flex flex-wrap justify-center gap-6 mb-8">
                        <div className="flex items-center space-x-2 bg-blue-800/70 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-600/50">
                            <Calendar className="w-5 h-5" />
                            <span>March 15, 2025</span>
                        </div>
                        <div className="flex items-center space-x-2 bg-blue-800/70 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-600/50">
                            <MapPin className="w-5 h-5" />
                            <span>Main Auditorium</span>
                        </div>
                        <div className="flex items-center space-x-2 bg-blue-800/70 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-600/50">
                            <Users className="w-5 h-5" />
                            <span>500+ Attendees</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}