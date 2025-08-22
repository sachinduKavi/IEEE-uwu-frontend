import { useState, useRef, useEffect } from "react";

export default function WIEAwardsHorizontal() {
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
            year: "2023"
        },
        {
            title: "Best Industry Collaborative Project",
            subtitle: "Award Winner",
            icon: "🤝",
            year: "2022"
        },
        {
            title: "Finalist for Outstanding Affinity Group",
            subtitle: "Award Recognition",
            icon: "⭐",
            year: "2021"
        }
    ];

    return (
        <section ref={sectionRef} className="py-20 lg:py-28 bg-gradient-to-br from-[#1a103c] to-[#2d0f32] text-white overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                        Honored <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Awards</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-6"></div>
                </div>

                {/* Horizontal Scrolling Awards */}
                <div className="flex overflow-x-auto pb-8 hide-scrollbar">
                    <div className="flex space-x-8 min-w-max">
                        {awards.map((award, index) => (
                            <div
                                key={index}
                                className={`w-80 flex-shrink-0 bg-gradient-to-br from-purple-900/30 to-purple-700/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30 transition-all duration-700 ease-out transform hover:scale-105 ${
                                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                                }`}
                                style={{ transitionDelay: `${index * 200}ms` }}
                            >
                                <div className="text-5xl mb-6">{award.icon}</div>
                                <div className="text-sm text-purple-300 mb-2">{award.year}</div>
                                <h3 className="text-xl font-bold mb-2">{award.title}</h3>
                                <p className="text-purple-200">{award.subtitle}</p>

                                {/* Shine effect on hover */}
                                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Decorative elements */}
                <div className={`flex justify-center mt-12 space-x-2 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    {["🌟", "✨", "🌟", "✨", "🌟"].map((star, index) => (
                        <span key={index} className="text-2xl animate-pulse" style={{ animationDelay: `${index * 0.2}s` }}>
              {star}
            </span>
                    ))}
                </div>
            </div>

            <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
        </section>
    );
}