import { useState, useRef, useEffect } from "react";

interface SocialLinks {
    linkedin?: string;
    twitter?: string;
    email?: string;
    website?: string;
}

interface Advisor {
    name: string;
    position: string;
    image: string;
    description: string;
    qualifications: string[];
    socials: SocialLinks;
}

export default function AdvisorDisplay() {
    const [isVisible, setIsVisible] = useState(false);
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

    const advisor: Advisor = {
        name: "Dr. L.K. Narangammana",
        position: "Faculty Advisor",
        image: "/placeholder-avatar.jpg",
        description: "Dr. Narangammana has been the guiding force behind the IEEE WIE Student Branch Affinity Group at Uva Wellassa University since its establishment in 2016. With extensive experience in academia and industry, Dr. Narangammana provides invaluable mentorship and support to empower women in engineering and technology.",
        qualifications: [
            "PhD in Computer Science",
            "Senior Lecturer at Uva Wellassa University",
            "15+ years of academic experience",
            "Specialized in AI and Machine Learning",
            "IEEE Senior Member"
        ],
        socials: {
            linkedin: "#",
            email: "mailto:advisor@example.com",
        }
    };

    return (
        <section ref={sectionRef} className="py-20 lg:py-28 bg-gradient-to-br from-[#f8f5ff] to-[#f0ebff] text-gray-800 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-800">Advisor</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Meet the guiding force behind our organization's success and vision
                    </p>
                    <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-6"></div>
                </div>

                <div className={`flex flex-col lg:flex-row gap-12 items-center transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    {/* Advisor Image */}
                    <div className="lg:w-2/5 flex justify-center">
                        <div className="relative">
                            {/* Main image container */}
                            <div className="w-72 h-72 lg:w-80 lg:h-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                                <div className="w-full h-full bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                                    <svg className="w-32 h-32 text-purple-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                                    </svg>
                                </div>
                            </div>

                            {/* Decorative elements */}
                            <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full bg-purple-200 opacity-50 z-0"></div>
                            <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full bg-pink-200 opacity-50 z-0"></div>

                            {/* Qualification badge */}
                            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-purple-800 text-white px-4 py-2 rounded-full shadow-lg">
                                <span className="text-sm font-medium">IEEE Senior Member</span>
                            </div>
                        </div>
                    </div>

                    {/* Advisor Details */}
                    <div className="lg:w-3/5">
                        <div className="bg-white rounded-2xl p-8 shadow-lg">
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{advisor.name}</h3>
                            <p className="text-purple-600 font-medium text-lg mb-6">{advisor.position}</p>

                            <p className="text-gray-700 leading-relaxed mb-8">
                                {advisor.description}
                            </p>


                            {/* Social Links */}
                            <div>
                                <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                                    <svg className="w-5 h-5 text-purple-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                                    </svg>
                                    Get in Touch
                                </h4>
                                <div className="flex space-x-4">
                                    {advisor.socials.linkedin && (
                                        <a href={advisor.socials.linkedin} className="w-12 h-12 rounded-full bg-purple-100 hover:bg-purple-200 flex items-center justify-center text-purple-700 transition-colors">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                            </svg>
                                        </a>
                                    )}
                                    {advisor.socials.twitter && (
                                        <a href={advisor.socials.twitter} className="w-12 h-12 rounded-full bg-purple-100 hover:bg-purple-200 flex items-center justify-center text-purple-700 transition-colors">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                                            </svg>
                                        </a>
                                    )}
                                    {advisor.socials.email && (
                                        <a href={advisor.socials.email} className="w-12 h-12 rounded-full bg-purple-100 hover:bg-purple-200 flex items-center justify-center text-purple-700 transition-colors">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                            </svg>
                                        </a>
                                    )}
                                    {advisor.socials.website && (
                                        <a href={advisor.socials.website} className="w-12 h-12 rounded-full bg-purple-100 hover:bg-purple-200 flex items-center justify-center text-purple-700 transition-colors">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                                            </svg>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    );
}