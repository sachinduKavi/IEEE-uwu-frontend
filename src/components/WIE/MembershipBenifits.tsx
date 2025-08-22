import { useState, useRef, useEffect } from "react";

export default function WIEMembershipBenefits() {
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

    const benefits = [
        {
            icon: "🤝",
            title: "Networking Opportunities",
            description: "Connect with professionals, academics, and students worldwide."
        },
        {
            icon: "🎓",
            title: "Scholarships and Grants",
            description: "Eligible for exclusive IEEE and WIE funding, including travel grants and conference sponsorships."
        },
        {
            icon: "👩‍💼",
            title: "Leadership Development",
            description: "Organize and lead events, enhance teamwork and communication skills."
        },
        {
            icon: "💡",
            title: "Technical & Soft Skills Development",
            description: "Attend workshops, webinars, and competitions that build both technical and professional expertise."
        },
        {
            icon: "📰",
            title: "Access to WIE Publications",
            description: "Stay informed with WIE newsletters, journals, and insights from global women leaders."
        },
        {
            icon: "🌍",
            title: "Global Recognition",
            description: "Be a part of an internationally recognized community that celebrates your achievements and contributions."
        }
    ];

    return (
        <section id="membership" ref={sectionRef} className="py-20 lg:py-28 bg-gradient-to-br from-[#f8f5ff] to-[#f0ebff] text-gray-800 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                        WIE <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-800">Membership Benefits</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Joining WIE opens the door to a world of opportunities for women in engineering
                    </p>
                    <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-6"></div>
                </div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className={`bg-white p-6 rounded-2xl shadow-lg border border-purple-100 transition-all duration-500 ease-out transform hover:-translate-y-2 hover:shadow-xl ${
                                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                            }`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <div className="text-4xl mb-4">{benefit.icon}</div>
                            <h3 className="text-xl font-bold mb-3 text-purple-800">{benefit.title}</h3>
                            <p className="text-gray-600">{benefit.description}</p>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className={`text-center mt-16 transition-all duration-700 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    <h3 className="text-2xl font-semibold mb-6 text-purple-800">Ready to Join Our Community?</h3>
                    <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-purple-800 text-white font-semibold rounded-full hover:from-purple-700 hover:to-purple-900 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-200">
                        Become a Member Today
                    </button>
                </div>
            </div>
        </section>
    );
}