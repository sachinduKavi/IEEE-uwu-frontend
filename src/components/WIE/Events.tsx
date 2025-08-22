import { useState, useRef, useEffect } from "react";

export default function WIEEventsTimeline() {
    const [activeEvent, setActiveEvent] = useState(0);
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

    const events = [
        {
            title: "WIE Nexus",
            tagline: "Introduction to Women in Engineering",
            description: "An educational initiative introducing students to the role of WIE within IEEE, covering IEEE's mission, WIE's contributions, and benefits of joining.",
            icon: "🚀",
            color: "bg-purple-500",
            participants: "",
            date: "2024"
        },
        {
            title: "ZeroCyBull Webinar",
            tagline: "Tackling Cyberbullying Through Industry Collaboration",
            description: "Hosted with DirectFN, this webinar attracted 120 participants and offered insights into cyberbullying's psychological impact, prevention techniques, and support resources.",
            icon: "🛡️",
            color: "bg-blue-500",
            participants: "120 participants",
            date: "2024"
        },
        {
            title: "WIE Ruwathi Yuwathiya",
            tagline: "Empowering Female Designers in the Age of AI",
            description: "A design competition focusing on AI-generated nature and landscapes with 25 participants, judged through public voting and expert evaluation.",
            icon: "🎨",
            color: "bg-pink-500",
            participants: "25 participants",
            date: "2024"
        },
        {
            title: "Pixel Perfect",
            tagline: "A UI/UX Webinar Shaping Future Designers",
            description: "An in-depth exploration of UI/UX design covering foundational concepts, prototyping techniques, and career opportunities with over 170 participants.",
            icon: "✨",
            color: "bg-teal-500",
            participants: "170+ participants",
            date: "Jun 2024"
        },
        {
            title: "WomenWrit Competition",
            tagline: "Empowering Women's Creativity and Innovation",
            description: "An annual article writing contest celebrating women's contributions with the theme 'Women Shaping a Bold Future in 2050'.",
            icon: "✍️",
            color: "bg-amber-500",
            participants: "",
            date: "2024"
        },
        {
            title: "SheShine",
            tagline: "Celebrating Women's Voices and Visions",
            description: "An inspiring event featuring industry experts sharing insights on career development, leadership, and overcoming challenges in tech.",
            icon: "🌟",
            color: "bg-rose-500",
            participants: "45 attendees",
            date: "2024"
        },
        {
            title: "Bug Hunt",
            tagline: "Mastering Software Testing",
            description: "A webinar focused on software testing essentials, methodologies, and industry best practices led by Mr. Kapila Senevirathna.",
            icon: "🐞",
            color: "bg-green-500",
            participants: "",
            date: "2024"
        },
        {
            title: "IEEE Open Day 2024",
            tagline: "Showcasing IEEE Membership Benefits",
            description: "A day of activities including workshops, networking, and training emphasizing IEEE's impact on personal and professional development.",
            icon: "🎪",
            color: "bg-indigo-500",
            participants: "",
            date: "Aug 2024"
        },
        {
            title: "Industry Visit",
            tagline: "Exploring Tech Innovations and Career Paths",
            description: "A visit to WSO2 providing firsthand experience with industry trends and interaction with professionals.",
            icon: "🏢",
            color: "bg-cyan-500",
            participants: "",
            date: "2024"
        },
        {
            title: "Rode To Role",
            tagline: "Career Guidance Session",
            description: "Focused on the role of a Business Analyst, led by Ms. Thashini Kamalka from SimCentric Technologies.",
            icon: "🧭",
            color: "bg-orange-500",
            participants: "",
            date: "2024"
        },
        {
            title: "WiSTEM",
            tagline: "Awareness Session on STEM Careers & Gender Equality",
            description: "Inspiring Advanced Level students to explore STEM careers while promoting gender equality at Viharamahadevi Girls' High School.",
            icon: "🔬",
            color: "bg-red-500",
            participants: "",
            date: "2024"
        },
        {
            title: "SHECODERess",
            tagline: "Empowering Women in Tech Through Coding & Design",
            description: "A 06-hour hackathon featuring algorithmic challenges for females and design challenges for all undergraduates.",
            icon: "💻",
            color: "bg-violet-500",
            participants: "",
            date: "2024"
        },
        {
            title: "CIRCUSTYLE",
            tagline: "Where Circuits Meet Couture",
            description: "An inter-university competition merging fashion design and technology to create wearable garments enhanced with electronics.",
            icon: "👗",
            color: "bg-fuchsia-500",
            participants: "",
            date: "2024"
        }
    ];

    return (
        <section ref={sectionRef} className="py-20 lg:py-28 bg-gradient-to-br from-[#1a103c] to-[#2d0f32] text-white overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Events & Initiatives</span>
                    </h2>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                        Exploring innovative programs that empower women in engineering and technology
                    </p>
                    <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-6"></div>
                </div>

                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Event Selector - Circular Navigation */}
                    <div className="lg:w-1/3 relative">
                        <div className="sticky top-28">
                            <div className="relative h-80 w-80 mx-auto">
                                {events.map((event, index) => {
                                    const angle = (index * 360) / events.length;
                                    const radian = (angle * Math.PI) / 180;
                                    const radius = 120;
                                    const x = radius * Math.cos(radian);
                                    const y = radius * Math.sin(radian);

                                    return (
                                        <button
                                            key={index}
                                            onClick={() => setActiveEvent(index)}
                                            className={`absolute w-16 h-16 rounded-full flex items-center justify-center text-2xl transition-all duration-500 transform ${
                                                activeEvent === index
                                                    ? 'scale-125 border-2 border-white shadow-lg z-10'
                                                    : 'scale-100 opacity-80 hover:opacity-100'
                                            } ${event.color}`}
                                            style={{
                                                left: `calc(50% + ${x}px - 2rem)`,
                                                top: `calc(50% + ${y}px - 2rem)`,
                                                transform: `translate(-50%, -50%) ${activeEvent === index ? 'scale(1.25)' : 'scale(1)'}`,
                                                transitionDelay: `${index * 30}ms`
                                            }}
                                        >
                                            {event.icon}
                                        </button>
                                    );
                                })}

                                {/* Center display */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex flex-col items-center justify-center text-center p-4 shadow-xl">
                                        <span className="text-white text-sm font-bold">{events[activeEvent].date}</span>
                                        <span className="text-white text-3xl mt-1">{events[activeEvent].icon}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="text-center mt-8">
                                <h3 className="text-2xl font-bold text-purple-300">{events[activeEvent].title}</h3>
                                <p className="text-gray-300">{events[activeEvent].tagline}</p>
                            </div>
                        </div>
                    </div>

                    {/* Event Details */}
                    <div className="lg:w-2/3">
                        <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30 h-full">
                            <div className="flex items-start mb-6">
                                <div className={`w-14 h-14 rounded-full flex items-center justify-center text-2xl mr-4 ${events[activeEvent].color}`}>
                                    {events[activeEvent].icon}
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold">{events[activeEvent].title}</h3>
                                    <p className="text-purple-300">{events[activeEvent].tagline}</p>
                                    {events[activeEvent].participants && (
                                        <div className="mt-2 inline-flex items-center bg-white/10 px-3 py-1 rounded-full text-sm">
                                            👥 {events[activeEvent].participants}
                                        </div>
                                    )}
                                </div>
                            </div>

                            <p className="text-gray-200 text-lg leading-relaxed mb-6">
                                {events[activeEvent].description}
                            </p>

                            <div className="flex space-x-4">
                                <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-full text-sm transition-colors">
                                    Learn More
                                </button>
                                <button className="px-4 py-2 border border-purple-500 text-purple-300 hover:bg-purple-500/10 rounded-full text-sm transition-colors">
                                    View Gallery
                                </button>
                            </div>
                        </div>

                        {/* Navigation Controls */}
                        <div className="flex justify-center mt-8 space-x-4">
                            <button
                                onClick={() => setActiveEvent(activeEvent === 0 ? events.length - 1 : activeEvent - 1)}
                                className="w-12 h-12 rounded-full bg-purple-700 hover:bg-purple-600 flex items-center justify-center transition-colors"
                            >
                                ←
                            </button>
                            <button
                                onClick={() => setActiveEvent(activeEvent === events.length - 1 ? 0 : activeEvent + 1)}
                                className="w-12 h-12 rounded-full bg-purple-700 hover:bg-purple-600 flex items-center justify-center transition-colors"
                            >
                                →
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}