import { useState, useRef, useEffect } from "react";
import advisorImage from "../../assets/WIE/Ms.-S.D.H.S.-Wickramarathne.jpg"; // Renamed import

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
        name: "Ms. S.D.H.S. Wickramarathne",
        position: "Head Of CSI Department",
        image: advisorImage, // Now using the renamed import
        description: "Ms. S. D. H. S. Wickramarathne is a Senior Lecturer (Grade I) in the Department of Computer Science and Informatics at Uva Wellassa University. She holds an M.Sc. from the Asian Institute of Technology, Thailand, and a B.Sc. in IT from the University of Moratuwa. She has wide experience in teaching, curriculum development, quality assurance, and student mentoring, and has held key roles in program coordination and academic committees.",
        qualifications: [
            "PhD in Computer Science",
            "Senior Lecturer at Uva Wellassa University",
            "15+ years of academic experience",
            "Specialized in AI and Machine Learning",
            "IEEE Senior Member"
        ],
        socials: {
            linkedin: "https://www.linkedin.com/in/harshani-wickramarathna-7a519710/",
            email: "mailto:harshani@uwu.ac.lk",
        }
    };

    return (
        <section id="wieadvisor" ref={sectionRef} className="py-20 lg:py-28 bg-gradient-to-br from-[#f8f5ff] to-[#f0ebff] text-gray-800 overflow-hidden">
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
                                {/* Replace the placeholder SVG with actual image */}
                                <img
                                    src={advisor.image}
                                    alt={advisor.name}
                                    className="w-full h-full object-cover"
                                />
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

                            {/*/!* Qualifications *!/*/}
                            {/*<div className="mb-8">*/}
                            {/*    <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">*/}
                            {/*        <svg className="w-5 h-5 text-purple-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">*/}
                            {/*            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>*/}
                            {/*        </svg>*/}
                            {/*        Key Qualifications*/}
                            {/*    </h4>*/}
                            {/*    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">*/}
                            {/*        {advisor.qualifications.map((qualification, index) => (*/}
                            {/*            <div key={index} className="flex items-center">*/}
                            {/*                <svg className="w-4 h-4 text-purple-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">*/}
                            {/*                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>*/}
                            {/*                </svg>*/}
                            {/*                <span className="text-gray-700">{qualification}</span>*/}
                            {/*            </div>*/}
                            {/*        ))}*/}
                            {/*    </div>*/}
                            {/*</div>*/}

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
                                    {advisor.socials.email && (
                                        <a href={advisor.socials.email} className="w-12 h-12 rounded-full bg-purple-100 hover:bg-purple-200 flex items-center justify-center text-purple-700 transition-colors">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
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