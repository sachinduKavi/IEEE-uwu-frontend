import { useState, useRef, useEffect } from "react";

export default function WIEAwards() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const awards = [
        {
            title: "Outstanding Affinity Group",
            subtitle: "Student Branch Category",
            icon: "🏆",
            description: "Recognized for excellence in activities and member engagement",
            gradient: "from-yellow-400 to-yellow-600"
        },
        {
            title: "Best Industry Collaborative Project",
            subtitle: "Award Winner",
            icon: "🤝",
            description: "Celebrating exceptional industry-academia partnership",
            gradient: "from-purple-500 to-purple-700"
        },
        {
            title: "Finalist for Outstanding Affinity Group",
            subtitle: "Award Recognition",
            icon: "⭐",
            description: "Acknowledged among the top performing affinity groups",
            gradient: "from-blue-500 to-blue-700"
        }
    ];

    return (
        <section ref={sectionRef} className="py-20 lg:py-28 bg-gradient-to-br from-[#1a103c] to-[#2d0f32] text-white overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Awards & Recognition</span>
                    </h2>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                        Celebrating excellence and achievement in empowering women in engineering
                    </p>
                    <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-6"></div>
                </div>

                {/* Awards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {awards.map((award, index) => (
                        <div
                            key={index}
                            className={`relative group overflow-hidden rounded-2xl p-8 bg-gradient-to-br ${award.gradient} transition-all duration-700 ease-out transform hover:scale-105 ${
                                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                            }`}
                            style={{ transitionDelay: `${index * 150}ms` }}
                        >
                            {/* Shine effect */}
                            <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            {/* Icon */}
                            <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                                {award.icon}
                            </div>

                            {/* Award content */}
                            <h3 className="text-xl font-bold mb-2">{award.title}</h3>
                            <p className="text-white/90 font-semibold mb-4">{award.subtitle}</p>
                            <p className="text-white/80">{award.description}</p>

                            {/* Decorative elements */}
                            <div className="absolute -right-4 -bottom-4 w-20 h-20 rounded-full bg-white/10"></div>
                            <div className="absolute -left-4 -top-4 w-16 h-16 rounded-full bg-white/10"></div>
                        </div>
                    ))}
                </div>

                {/* Celebration elements */}
                <div className={`text-center mt-16 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="inline-flex items-center justify-center bg-white/5 backdrop-blur-sm rounded-full px-6 py-3 border border-white/10">
                        <span className="text-2xl mr-2">🎉</span>
                        <span className="text-purple-200 font-semibold">Proudly celebrating our achievements</span>
                        <span className="text-2xl ml-2">🎉</span>
                    </div>
                </div>
            </div>
        </section>
    );
}