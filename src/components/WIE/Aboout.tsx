import { useState, useRef, useEffect } from "react";

export default function WIEAbout() {
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

    return (
        <section id="about" ref={sectionRef} className="py-20 lg:py-28 bg-gradient-to-br from-[#1a103c] to-[#2d0f32] text-white overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">UWU IEEE WIE</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* About Content */}
                    <div className={`transition-all duration-700 ease-out transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                        <div className="mb-10">
                            <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center">
                                <span className="w-3 h-3 rounded-full bg-purple-500 mr-3"></span>
                                Who We Are
                            </h3>
                            <p className="text-lg text-gray-300 leading-relaxed mb-6">
                                IEEE Women in Engineering (WIE) is one of the largest international professional organizations dedicated to promoting women engineers and scientists and inspiring girls around the world to follow their academic interests in a career in engineering.
                            </p>
                            <p className="text-lg text-gray-300 leading-relaxed">
                                Our mission is to facilitate the recruitment and retention of women in technical disciplines globally. We envision a vibrant community of IEEE women and men collectively using their diverse talents to innovate for the benefit of humanity.
                            </p>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-6 mt-10">
                            <div className="text-center p-4 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10">
                                <div className="text-3xl font-bold text-purple-400">200+</div>
                                <div className="text-sm text-gray-300">Affinity Groups</div>
                            </div>
                            <div className="text-center p-4 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10">
                                <div className="text-3xl font-bold text-purple-400">20K+</div>
                                <div className="text-sm text-gray-300">Members Worldwide</div>
                            </div>
                        </div>
                    </div>

                    {/* Image/Graphic */}
                    <div className={`transition-all duration-700 ease-out transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl transform rotate-3"></div>
                            <div className="relative bg-gradient-to-br from-[#2c1b5f] to-[#44154b] p-8 rounded-2xl shadow-2xl h-80 flex items-center justify-center">
                                <div className="text-center">
                                    <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold text-white">Empowering Women in Technology</h3>
                                    <p className="text-gray-300 mt-2">Since 1994</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Vision and Mission Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20">
                    {/* Vision Card */}
                    <div className={`bg-gradient-to-br from-purple-900/30 to-purple-700/20 p-8 rounded-2xl backdrop-blur-sm border border-purple-500/30 transition-all duration-700 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <div className="flex items-center mb-6">
                            <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center mr-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-white">Our Vision</h3>
                        </div>
                        <p className="text-lg text-gray-300 leading-relaxed">
                            We envision a world where women are represented proportionally in engineering and technology fields, contributing their perspectives and innovations to drive progress and solve global challenges.
                        </p>
                    </div>

                    {/* Mission Card */}
                    <div className={`bg-gradient-to-br from-pink-900/30 to-pink-700/20 p-8 rounded-2xl backdrop-blur-sm border border-pink-500/30 transition-all duration-700 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <div className="flex items-center mb-6">
                            <div className="w-12 h-12 rounded-full bg-pink-600 flex items-center justify-center mr-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-white">Our Mission</h3>
                        </div>
                        <p className="text-lg text-gray-300 leading-relaxed">
                            To inspire, engage, and advance women in technical professions around the world by providing networking opportunities, professional development programs, and advocacy for gender equality in STEM fields.
                        </p>
                    </div>
                </div>

                {/* Values */}
                <div className="mt-20">
                    <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">Our Core Values</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { title: "Inclusivity", icon: "👥", desc: "Fostering diverse and welcoming environments in engineering" },
                            { title: "Innovation", icon: "💡", desc: "Encouraging creative solutions to complex global challenges" },
                            { title: "Empowerment", icon: "🚀", desc: "Providing tools and opportunities for professional growth" }
                        ].map((value, index) => (
                            <div key={index} className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-sm text-center">
                                <div className="text-4xl mb-4">{value.icon}</div>
                                <h4 className="text-xl font-semibold mb-2 text-purple-300">{value.title}</h4>
                                <p className="text-gray-300">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}