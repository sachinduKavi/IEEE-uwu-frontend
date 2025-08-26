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
            image: "/award1.jpg", // Replace with actual image paths
            gradient: "from-yellow-500 to-amber-600",
            techIcon: "💻"
        },
        {
            title: "Best Industry Collaborative Project",
            subtitle: "Award Winner",
            icon: "🤝",
            description: "Celebrating exceptional industry-academia partnership",
            image: "/award2.jpg", // Replace with actual image paths
            gradient: "from-purple-600 to-indigo-700",
            techIcon: "🚀"
        },
        {
            title: "Finalist for Outstanding Affinity Group",
            subtitle: "Award Recognition",
            icon: "⭐",
            description: "Acknowledged among the top performing affinity groups",
            image: "/award3.jpg", // Replace with actual image paths
            gradient: "from-blue-500 to-cyan-600",
            techIcon: "✨"
        }
    ];

    return (
        <section ref={sectionRef} className="py-20 lg:py-28 bg-gradient-to-br from-[#0f0825] to-[#1e1130] text-white overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center bg-gradient-to-r from-purple-600 to-pink-600 p-2 rounded-full mb-6">
                        <span className="text-2xl">🏆</span>
                    </div>
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
                            className={`relative group overflow-hidden rounded-2xl border border-purple-500/20 bg-gradient-to-b from-[#1a103c]/50 to-[#2d0f32]/50 backdrop-blur-sm transition-all duration-700 ease-out transform hover:-translate-y-2 ${
                                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                            }`}
                            style={{ transitionDelay: `${index * 150}ms` }}
                        >
                            {/* Tech pattern background */}
                            <div className="absolute inset-0 opacity-10">
                                <div className="absolute top-0 left-0 w-full h-full pattern-circuit-board pattern-blue-500 pattern-opacity-20 pattern-size-16"></div>
                            </div>

                            {/* Image container */}
                            <div className="relative h-48 overflow-hidden">
                                <div className="w-full h-full bg-gradient-to-br from-purple-900 to-pink-800 flex items-center justify-center">
                                    <div className="text-6xl opacity-70">{award.icon}</div>
                                </div>

                                {/* Tech badge */}
                                <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-black/70 backdrop-blur-sm flex items-center justify-center border border-purple-400/30">
                                    <span className="text-xl">{award.techIcon}</span>
                                </div>

                                {/* Gradient overlay */}
                                <div className="absolute inset-0 opacity-10">
                                    <div className="absolute top-0 left-0 w-full h-full pattern-hexagon pattern-purple-500 pattern-opacity-20 pattern-size-8"></div>
                                </div>
                            </div>

                            {/* Award content */}
                            <div className="p-6 relative z-10">
                                <div className="flex items-start justify-between mb-4">
                                    <h3 className="text-xl font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                                        {award.title}
                                    </h3>
                                    <div className="text-2xl ml-4">{award.icon}</div>
                                </div>

                                <p className="text-purple-300 font-semibold text-sm mb-3">{award.subtitle}</p>
                                <p className="text-gray-300 text-sm leading-relaxed">{award.description}</p>

                                {/* Tech-inspired divider */}
                                <div className="my-4 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>

                                {/* Stats / Additional info */}
                                <div className="flex justify-between items-center text-xs text-gray-400">
                                    <span>IEEE WIE</span>
                                    <span>2023-2024</span>
                                </div>
                            </div>

                            {/* Hover effect elements */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl opacity-0 group-hover:opacity-10 blur-md transition-opacity duration-300"></div>
                            <div className="absolute inset-0 border border-purple-500/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                    ))}
                </div>

                {/* Celebration elements */}
                <div className={`text-center mt-16 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="inline-flex items-center justify-center bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-full px-6 py-3 border border-purple-500/30">
                        <span className="text-2xl mr-3">🚀</span>
                        <span className="text-purple-200 font-semibold">Proudly celebrating our achievements</span>
                        <span className="text-2xl ml-3">🌟</span>
                    </div>
                </div>
            </div>

            {/* Add circuit board pattern CSS */}
            <style tsx>{`
                .pattern-hexagon {
                    background-image:
                            linear-gradient(30deg, currentColor 12%, transparent 12.5%, transparent 87%, currentColor 87.5%, currentColor),
                            linear-gradient(150deg, currentColor 12%, transparent 12.5%, transparent 87%, currentColor 87.5%, currentColor),
                            linear-gradient(30deg, currentColor 12%, transparent 12.5%, transparent 87%, currentColor 87.5%, currentColor),
                            linear-gradient(150deg, currentColor 12%, transparent 12.5%, transparent 87%, currentColor 87.5%, currentColor),
                            linear-gradient(60deg, currentColor 25%, transparent 25.5%, transparent 75%, currentColor 75%, currentColor),
                            linear-gradient(60deg, currentColor 25%, transparent 25.5%, transparent 75%, currentColor 75%, currentColor);
                    background-size: 20px 35px;
                    background-position: 0 0, 0 0, 10px 18px, 10px 18px, 0 0, 10px 18px;
                }
            `}</style>
        </section>
    );
}