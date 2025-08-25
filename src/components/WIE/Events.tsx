import { useState, useRef, useEffect } from "react";

// Define the Event type
interface Event {
    title: string;
    tagline: string;
    description: string;
    icon: string;
    color: string;
    participants: string;
    date: string;
}

export default function WIEEventsTimeline() {
    const [activeEvent, setActiveEvent] = useState<number>(0);
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const sectionRef = useRef<HTMLElement>(null);

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

    const events: Event[] = [
        {
            title: "WIE Nexus",
            tagline: "Introduction to Women in Engineering",
            description: "“Women in Engineering (WIE) Nexus” is an educational initiative introducing students to the role of WIE within IEEE. The session covered IEEE’s mission, WIE’s contributions, and the benefits of joining WIE, such as access to exclusive events, volunteering opportunities, and a supportive network. The session concluded with an interactive quiz, reinforcing key points and encouraging future involvement.",
            icon: "🚀",
            color: "bg-purple-500",
            participants: "",
            date: "2024"
        },
        {
            title: "ZeroCyBull Webinar",
            tagline: "Tackling Cyberbullying Through Industry Collaboration",
            description: "The WIE Affinity Group, in partnership with DirectFN, hosted the \"ZeroCyBull\" webinar on tackling cyberbullying, attracting 120 participants from various universities. The event offered insights into the psychological impact of cyberbullying, prevention techniques, and support resources. This collaboration highlighted the value of industry-academic partnerships in addressing modern challenges, raising awareness about digital safety, and equipping participants with tools for responsible online behavior.",
            icon: "🛡️",
            color: "bg-blue-500",
            participants: "120 participants",
            date: "2024"
        },
        {
            title: "WIE Ruwathi Yuwathiya",
            tagline: "Empowering Female Designers in the Age of AI",
            description: "The \"WIE Ruwathi Yuwathiya\" Design Competition empowers female designers by addressing gender disparities in the creative arts. This year's theme focused on AI-generated nature and landscapes. The competition featured 25 participants and was judged through public voting and expert evaluation.Two winners were selected by a distinguished panel and awarded cash prizes, highlighting their exceptional talent and the transformative potential of AI in design.",
            icon: "🎨",
            color: "bg-pink-500",
            participants: "25 participants",
            date: "2024"
        },
        {
            title: "Pixel Perfect",
            tagline: "A UI/UX Webinar Shaping Future Designers",
            description: "\"Pixel Perfect,\" a UI/UX webinar organized by the IEEE WIE Affinity Group on June 28, 2024, offered an in-depth exploration of UI/UX design, covering foundational concepts, prototyping techniques, and career opportunities. Supported by Exe.lk, the event featured expert speakers and attracted over 170 undergraduate students from across Sri Lanka.Participants were challenged to develop a prototype for a Travel Booking App, with the winning design recognized for its innovation, underscoring the value of hands-on learning in shaping future designers.",
            icon: "✨",
            color: "bg-teal-500",
            participants: "170+ participants",
            date: "Jun 2024"
        },
        {
            title: "WomenWrit Competition",
            tagline: "Empowering Women's Creativity and Innovation",
            description: "The WomenWrit Competition, organized by the WIE Affinity Group, is an annual article writing contest celebrating women's contributions in engineering and beyond. Focused on this year's theme, \"Women Shaping a Bold Future in 2050,\" the competition encouraged students to explore topics like technological leadership, economic empowerment, and healthcare advancements. It provided a platform for intellectual discourse, with winners receiving cash prizes and certificates for their outstanding contributions.",
            icon: "✍️",
            color: "bg-amber-500",
            participants: "",
            date: "2024"
        },
        {
            title: "SheShine",
            tagline: "Celebrating Women's Voices and Visions",
            description: "SheShine is an inspiring event organized to empower and celebrate women in technology and engineering. Hosted by the IEEE Women in Engineering (WIE) affinity group at Uva Wellassa University, the event provides a platform for aspiring female professionals to connect, learn, and grow.  This session featured industry experts, including Ms. Thrividya Liyanarachchi, a past secretary of the IEEE UWU Student Branch, who shared valuable insights on career development, leadership, and overcoming challenges in the tech industry. With 45 attendees, SheShine fostered meaningful discussions, networking opportunities, and motivation for young women to excel in their respective fields.",
            icon: "🌟",
            color: "bg-rose-500",
            participants: "45 attendees",
            date: "2024"
        },
        {
            title: "Bug Hunt",
            tagline: "Mastering Software Testing",
            description: "The \"Bug Hunt\" webinar, held in collaboration with Exactpro and led by Mr. Kapila Senevirathna, focused on software testing essentials. Participants gained a comprehensive understanding of testing methodologies, industry best practices, and emerging trends.The session emphasized the critical role of testing in the development lifecycle, equipping students with valuable skills and insights to excel in this field. The event was highly engaging, with active participant interaction.",
            icon: "🐞",
            color: "bg-green-500",
            participants: "",
            date: "2024"
        },
        {
            title: "IEEE Open Day 2024",
            tagline: "Showcasing IEEE Membership Benefits",
            description: "IEEE Open Day 2024, held on August 3 by the IEEE Uva Wellassa University Student Branch in collaboration with WIE, showcased the benefits of IEEE membership through a day of activities, including workshops, networking, and training.  The event emphasized the impact of IEEE on personal and professional development, motivating students to excel and contribute to the community by highlighting the career paths using a career guidance map.  Students were informed about various career opportunities and engaged in interactive sessions where they asked questions about IEEE and WIE. Gifts were also distributed to participants, making the experience both informative and rewarding.",
            icon: "🎪",
            color: "bg-indigo-500",
            participants: "",
            date: "Aug 2024"
        },
        {
            title: "Industry Visit",
            tagline: "Exploring Tech Innovations and Career Paths",
            description: "The industry Visit provides a unique opportunity for undergraduate students of Uva Wellassa University to gain firsthand experience and exposure to the latest industry trends and practices. Hosted at WSO2, a leading technology company. the visit allows participants to Interact directly with industry professionals, learning about the innovative technologies and strategies driving the sector. Students will gain a deeper understanding of the various roles within the industry, discover potential career paths, and gain valuable insights into the practical applications of their academic knowledge. This visit aims to bridge the gap between classroom tearning and real-world industry experience.",
            icon: "🏢",
            color: "bg-cyan-500",
            participants: "",
            date: "2024"
        },
        {
            title: "Rode To Role",
            tagline: "Career Guidance Session",
            description: "The \"Rode to Role\" career guidance session is tailored to provide in-depth insights into the role of a Business Analyst (BA) in the tech industry. This session is designed to give students a comprehensive understanding of the key responsibilities, required skills, industry trends, and growth opportunities for aspiring Business Analysts. Led by Ms. Thashini Kamalka, a Business Analyst at SimCentric Technologies, the session offers real-world knowledge and guidance, helping students understand what it takes to succeed in this field. Focused on passionate students aiming to pursue a career as a BA, this session equips them with valuable insights into the industry's expectations and skill requirements",
            icon: "🧭",
            color: "bg-orange-500",
            participants: "",
            date: "2024"
        },
        {
            title: "WiSTEM",
            tagline: "Awareness Session on STEM Careers & Gender Equality",
            description: "The WiSTEM Awareness Session at Viharamahadevi Girls' High School, Badulla, in collaboration with the IEEE WIE Affinity Group of Sri Lanka Section and the IEEE WIE Student Branch Affinity Group of Uva Wellassa University, aimed to inspire Advanced Level students to explore STEM careers while promoting gender equality. The session featured engaging presentations, success stories of women in STEM, and interactive activities that fostered creativity and teamwork. A discussion and Q&A session provided valuable insights into STEM education and careers. The event successfully sparked enthusiasm among students, thanks to the efforts of IEEE WIE groups, volunteers, and school administration.",
            icon: "🔬",
            color: "bg-red-500",
            participants: "",
            date: "2024"
        },
        {
            title: "SHECODERess",
            tagline: "Empowering Women in Tech Through Coding & Design",
            description: "SHECODERess The Hack & Design Showdown V6.0 is an exciting 06-hour hackathon designed to empower and inspire undergraduate students through coding and design, featuring a 06-hour algorithmic hackathon exclusively for female undergraduates and a design hackathon open to all. Participants benefit from hands-on problem-solving, mentorship, and networking opportunities. The 1st round is done, and the 2nd round is upcoming.",
            icon: "💻",
            color: "bg-violet-500",
            participants: "",
            date: "2024"
        },
        {
            title: "CIRCUSTYLE",
            tagline: "Where Circuits Meet Couture",
            description: "CircuStyle is a groundbreaking inter-university competition that merges fashion design and technology. It challenges undergraduates from engineering, tech, and fashion backgrounds to form gender-inclusive teams and create wearable garments enhanced with electronics. Whether it's a glowing dress, sound-reactive fabric, or accessories with sensors, CircuStyle is all about designing garments that do something, using tools like Arduino, sensors, and circuits.",
            icon: "👗",
            color: "bg-fuchsia-500",
            participants: "",
            date: "2024"
        }
    ];

    // Function to handle event navigation from the details section
    const navigateEvent = (direction: 'prev' | 'next') => {
        if (direction === 'prev') {
            setActiveEvent(activeEvent === 0 ? events.length - 1 : activeEvent - 1);
        } else {
            setActiveEvent(activeEvent === events.length - 1 ? 0 : activeEvent + 1);
        }
    };

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
                    {/* Event Selector - Tech-Inspired Circular Navigation */}
                    <div className="lg:w-2/5 relative">
                        <div className="sticky top-28">
                            <div className="relative mx-auto" style={{ width: '380px', height: '380px' }}>
                                {/* Outer tech ring */}
                                <div className="absolute inset-0 rounded-full border-2 border-purple-500/30 flex items-center justify-center">
                                    <div className="absolute inset-0 rounded-full border border-purple-400/20 animate-pulse" style={{ animationDuration: '3s' }}></div>
                                </div>

                                {/* Inner tech ring */}
                                <div className="absolute inset-10 rounded-full border border-purple-400/40 flex items-center justify-center">
                                    <div className="absolute inset-0 rounded-full border border-purple-300/10"></div>
                                </div>

                                {/* Connection lines */}
                                <div className="absolute inset-0">
                                    {Array.from({ length: 12 }).map((_, i) => (
                                        <div
                                            key={i}
                                            className="absolute top-1/2 left-1/2 w-1/2 h-px bg-purple-400/30 origin-left"
                                            style={{ transform: `rotate(${i * 30}deg)` }}
                                        ></div>
                                    ))}
                                </div>

                                {events.map((event, index) => {
                                    const angle = (index * 360) / events.length;
                                    const radian = (angle * Math.PI) / 180;
                                    const radius = 150;
                                    const x = radius * Math.cos(radian);
                                    const y = radius * Math.sin(radian);

                                    return (
                                        <button
                                            key={index}
                                            onClick={() => setActiveEvent(index)}
                                            className={`absolute w-14 h-14 rounded-lg flex items-center justify-center text-xl transition-all duration-500 transform ${
                                                activeEvent === index
                                                    ? 'scale-110 border-2 border-white shadow-lg z-10 bg-gray-900'
                                                    : 'scale-100 opacity-90 hover:opacity-100 bg-gray-800'
                                            } ${event.color}`}
                                            style={{
                                                left: `calc(50% + ${x}px - 1.75rem)`,
                                                top: `calc(50% + ${y}px - 1.75rem)`,
                                            }}
                                        >
                                            {event.icon}
                                            {/* Active indicator */}
                                            {activeEvent === index && (
                                                <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-green-400 animate-ping"></div>
                                            )}
                                        </button>
                                    );
                                })}

                                {/* Center display - Tech element */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex flex-col items-center justify-center text-center p-4 shadow-xl border border-purple-300/30">
                                        <div className="text-xs text-purple-200 font-mono">EVENT</div>
                                        <span className="text-white text-lg font-bold mt-1">{events[activeEvent].date}</span>
                                        <div className="text-white text-xl mt-1">{events[activeEvent].icon}</div>
                                    </div>
                                </div>
                            </div>

                            <div className="text-center mt-8">
                                <h3 className="text-2xl font-bold text-purple-300 mb-2">{events[activeEvent].title}</h3>
                                <p className="text-gray-300 text-sm">{events[activeEvent].tagline}</p>
                                <div className="mt-4 flex justify-center space-x-2">
                                    <button
                                        onClick={() => setActiveEvent(activeEvent === 0 ? events.length - 1 : activeEvent - 1)}
                                        className="w-8 h-8 rounded-full bg-purple-700 hover:bg-purple-600 flex items-center justify-center transition-colors text-xs"
                                    >
                                        ←
                                    </button>
                                    <span className="text-xs text-gray-400 flex items-center">
                    {activeEvent + 1} / {events.length}
                  </span>
                                    <button
                                        onClick={() => setActiveEvent(activeEvent === events.length - 1 ? 0 : activeEvent + 1)}
                                        className="w-8 h-8 rounded-full bg-purple-700 hover:bg-purple-600 flex items-center justify-center transition-colors text-xs"
                                    >
                                        →
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Event Details */}
                    <div className="lg:w-3/5">
                        <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30 h-full min-h-[500px] flex flex-col">
                            {/* Navigation Controls in Details Section */}
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-2xl font-bold">Event Details</h3>
                                <div className="flex space-x-2">
                                    <button
                                        onClick={() => navigateEvent('prev')}
                                        className="w-8 h-8 rounded-full bg-purple-700 hover:bg-purple-600 flex items-center justify-center transition-colors text-xs"
                                        aria-label="Previous event"
                                    >
                                        ←
                                    </button>
                                    <button
                                        onClick={() => navigateEvent('next')}
                                        className="w-8 h-8 rounded-full bg-purple-700 hover:bg-purple-600 flex items-center justify-center transition-colors text-xs"
                                        aria-label="Next event"
                                    >
                                        →
                                    </button>
                                </div>
                            </div>

                            <div className="flex items-start mb-6">
                                <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-xl mr-4 ${events[activeEvent].color} shadow-md`}>
                                    {events[activeEvent].icon}
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold">{events[activeEvent].title}</h3>
                                    <p className="text-purple-300 text-sm">{events[activeEvent].tagline}</p>
                                    {events[activeEvent].participants && (
                                        <div className="mt-2 inline-flex items-center bg-white/10 px-3 py-1 rounded-full text-xs">
                                            👥 {events[activeEvent].participants}
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="flex-grow overflow-y-auto pr-2 custom-scrollbar">
                                <p className="text-gray-200 leading-relaxed">
                                    {events[activeEvent].description}
                                </p>
                            </div>

                            {/* Event Selection Grid */}
                            <div className="mt-6">
                                <h4 className="text-lg font-semibold mb-3 text-purple-300">Browse Events</h4>
                                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
                                    {events.map((event, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setActiveEvent(index)}
                                            className={`p-2 rounded-lg text-center transition-all duration-300 transform hover:scale-105 ${
                                                activeEvent === index
                                                    ? 'bg-purple-600 text-white shadow-lg'
                                                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                                            }`}
                                            aria-label={`Select ${event.title}`}
                                        >
                                            <div className="text-lg mb-1">{event.icon}</div>
                                            <div className="text-xs truncate">{event.title.split(' ')[0]}</div>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="flex space-x-4 mt-6 pt-4 border-t border-purple-500/20">
                                <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-sm transition-colors flex items-center">
                                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                                    </svg>
                                    Learn More
                                </button>
                                <button className="px-4 py-2 border border-purple-500 text-purple-300 hover:bg-purple-500/10 rounded-lg text-sm transition-colors flex items-center">
                                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                    </svg>
                                    View Gallery
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Add custom scrollbar styles to your global CSS file */}
            <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(192, 132, 252, 0.5);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(192, 132, 252, 0.7);
        }
      `}</style>
        </section>
    );
}