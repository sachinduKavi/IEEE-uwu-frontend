import { useState, useRef, useEffect } from "react";
// Import your images
import layanjala from '../../assets/WIE/laya.jpg';
import chamodya from '../../assets/WIE/chamodya.png';
import prathiba from '../../assets/WIE/prathiba.jpg'
import ishini from '../../assets/WIE/WebMaster -Ishini Dewamiththa.jpeg';
import hasini from '../../assets/WIE/hasini.jpg';
import pamudi from '../../assets/WIE/pamudi.jpeg';
import nipunee from '../../assets/WIE/nipuniee.jpg';

// Junior committee imports
import ishiniD from '../../assets/WIE/Vice chairperson - Ishini Dissanayake.jpg';
import dinithi from '../../assets/WIE/Assistant Secretary - Dinithi Ukwatta .jpg';
import kavisana from '../../assets/WIE/Pv member - Kavisana Kanthavanesan.jpg';
import sachini from '../../assets/WIE/PV member - W. Sachini Tharushika.jpg';
import milasha from '../../assets/WIE/Editorial Member - Milasha Subasinghe.jpg';
import jeyamathura from '../../assets/WIE/Editorial Member - Jeyamathura Jeyakaneshan .jpg';
import naduni from '../../assets/WIE/MD Member - Naduni Jayathilake.jpg';

interface CommitteeMember {
    name: string;
    position: string;
    image: string;
    socials?: {
        linkedin?: string;
        twitter?: string;
        github?: string;
    };
}

export default function CommitteeDisplay() {
    const [activeCommittee, setActiveCommittee] = useState<"top" | "junior">("top");
    const [selectedMember, setSelectedMember] = useState<number | null>(null);
    const sectionRef = useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = useState(false);

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

    const topCommittee: CommitteeMember[] = [
        {
            name: "Ms. Layanjala Jayasundara",
            position: "CHAIRPERSON",
            image: layanjala,
            socials: {
                linkedin: "#",

            }
        },
        {
            name: "Ms. Chamodya Perera",
            position: "SECRETARY",
            image: chamodya,
            socials: {
                linkedin: "https://www.linkedin.com/in/chamodya-perera-762b5831b/",

            }
        },
        {
            name: "Ms. Prathibha Dulakshini",
            position: "TREASURER",
            image: prathiba,
            socials: {
                linkedin: "https://www.linkedin.com/in/prathibhasiriwardhana/",

            }
        },
        {
            name: "Ms. Ishini Dewamiththa",
            position: "WEBMASTER",
            image: ishini,
            socials: {
                linkedin: "https://www.linkedin.com/in/ishini-dewamiththa/",
            }
        },
        {
            name: "Ms. Hasini Sarathchandra",
            position: "HEAD OF PUBLIC VISIBILITY",
            image: hasini,
            socials: {
                linkedin: "https://www.linkedin.com/in/hasini-sarathchandra-7895452a0/",

            }
        },
        {
            name: "Ms. Pamudi Karunathilaka",
            position: "HEAD OF EDITORIAL",
            image: pamudi,
            socials: {
                linkedin: "https://www.linkedin.com/in/pamudi-karunathilaka/",

            }
        },
        {
            name: "Ms. Nipunee Nawanjana",
            position: "HEAD OF MEMBERSHIP DEVELOPMENT",
            image: nipunee,
            socials: {
                linkedin: "https://www.linkedin.com/in/nipuni-nawanjana-93b416300/",

            }
        }
    ];

    const juniorCommittee: CommitteeMember[] = [
        {
            name: "Ms. Ishini Dissanayake",
            position: "VICE CHAIRPERSON",
            image: ishiniD,
            socials: {
                linkedin: "#",
            }
        },
        {
            name: "Ms. Dinithi Ukwatta",
            position: "ASSISTANT SECRETARY",
            image: dinithi,
            socials: {
                linkedin: "#",
                twitter: "#",
            }
        },
        {
            name: "Ms. Kavisana Kanthavanesan",
            position: "MEMBER-PUBLIC VISIBILITY",
            image: kavisana,
            socials: {
                linkedin: "#",
                github: "#",
            }
        },
        {
            name: "Ms. Sachini Tharushika",
            position: "MEMBER-PUBLIC VISIBILITY",
            image: sachini,
            socials: {
                linkedin: "#",
            }
        },
        {
            name: "Ms. Milasha Subasinghe",
            position: "MEMBER-EDITORIAL",
            image: milasha,
            socials: {
                linkedin: "#",
                twitter: "#",
            }
        },
        {
            name: "Ms. Jeyamathura Jeyakaneshan",
            position: "MEMBER-EDITORIAL",
            image: jeyamathura,
            socials: {
                linkedin: "#",
            }
        },
        {
            name: "Ms. Naduni Jayathilake",
            position: "MEMBER-MEMBERSHIP DEVELOPMENT",
            image: naduni,
            socials: {
                linkedin: "#",
            }
        }
    ];

    const currentCommittee = activeCommittee === "top" ? topCommittee : juniorCommittee;

    // Split committees into rows based on the layout requirements
    const topCommitteeRows = [
        topCommittee.slice(0, 4),
        topCommittee.slice(4)
    ];

    const juniorCommitteeRows = [
        juniorCommittee.slice(0, 3),
        juniorCommittee.slice(3, 6),
        juniorCommittee.slice(6)
    ];

    const committeeRows = activeCommittee === "top" ? topCommitteeRows : juniorCommitteeRows;

    return (
        <section id="wiecommittee" ref={sectionRef} className="py-20 lg:py-28 bg-gradient-to-br from-[#f8f5ff] to-[#f0ebff] text-gray-800 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-800">Executive Committee</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Meet the dedicated team driving innovation and empowerment in our community
                    </p>
                    <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-6"></div>
                </div>

                {/* Committee Selector */}
                <div className="flex justify-center mb-12">
                    <div className="bg-white rounded-xl p-1 shadow-lg flex">
                        <button
                            onClick={() => setActiveCommittee("top")}
                            className={`px-6 py-3 rounded-xl text-sm font-medium transition-all ${
                                activeCommittee === "top"
                                    ? "bg-gradient-to-r from-purple-600 to-purple-800 text-white shadow-md"
                                    : "text-gray-600 hover:text-purple-700"
                            }`}
                        >
                            Top Committee
                        </button>
                        <button
                            onClick={() => setActiveCommittee("junior")}
                            className={`px-6 py-3 rounded-xl text-sm font-medium transition-all ${
                                activeCommittee === "junior"
                                    ? "bg-gradient-to-r from-purple-600 to-purple-800 text-white shadow-md"
                                    : "text-gray-600 hover:text-purple-700"
                            }`}
                        >
                            Junior Committee
                        </button>
                    </div>
                </div>

                {/* Committee Grid with Custom Layout */}
                <div className={`transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    {committeeRows.map((row, rowIndex) => (
                        <div
                            key={rowIndex}
                            className={`flex justify-center gap-6 mb-6 ${
                                row.length === 1 ? 'justify-center' : ''
                            }`}
                        >
                            {row.map((member, index) => {
                                const absoluteIndex = activeCommittee === "top"
                                    ? (rowIndex * 4 + index)
                                    : (rowIndex * 3 + index);

                                return (
                                    <div
                                        key={absoluteIndex}
                                        className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group flex-1 min-w-[280px] max-w-[320px] mx-3"
                                        onMouseEnter={() => setSelectedMember(absoluteIndex)}
                                        onMouseLeave={() => setSelectedMember(null)}
                                    >
                                        <div className="relative h-48 overflow-hidden">
                                            {/* Gradient overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>

                                            {/* Member image with better cropping */}
                                            <div className="w-full h-full flex items-center justify-center overflow-hidden bg-gray-100">
                                                <img
                                                    src={member.image}
                                                    alt={member.name}
                                                    className="w-full h-full object-cover object-center scale-105 group-hover:scale-110 transition-transform duration-500"
                                                    style={{ objectPosition: '50% 30%' }} // Adjust this to focus on faces
                                                />
                                            </div>

                                            {/* Social links */}
                                            <div className="absolute bottom-4 left-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                                                {member.socials?.linkedin && (
                                                    <a href={member.socials.linkedin} className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-purple-700 hover:bg-purple-700 hover:text-white transition-colors">
                                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                                        </svg>
                                                    </a>
                                                )}
                                                {member.socials?.twitter && (
                                                    <a href={member.socials.twitter} className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-purple-700 hover:bg-purple-700 hover:text-white transition-colors">
                                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                                                        </svg>
                                                    </a>
                                                )}
                                                {member.socials?.github && (
                                                    <a href={member.socials.github} className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-purple-700 hover:bg-purple-700 hover:text-white transition-colors">
                                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                                                        </svg>
                                                    </a>
                                                )}
                                            </div>
                                        </div>

                                        {/* Member info */}
                                        <div className="p-6">
                                            <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors">{member.name}</h3>
                                            <p className="text-purple-600 font-medium whitespace-pre-line">{member.position}</p>
                                            <div className="mt-4 w-12 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    ))}
                </div>

                {/* Stats Footer */}
                <div className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="bg-white p-6 rounded-2xl shadow-md">
                        <div className="text-3xl font-bold text-purple-700">15</div>
                        <div className="text-sm text-gray-600 mt-2">Total Members</div>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-md">
                        <div className="text-3xl font-bold text-purple-700">6</div>
                        <div className="text-sm text-gray-600 mt-2">Top Team</div>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-md">
                        <div className="text-3xl font-bold text-purple-700">9</div>
                        <div className="text-sm text-gray-600 mt-2">Junior Team</div>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-md">
                        <div className="text-3xl font-bold text-purple-700">12+</div>
                        <div className="text-sm text-gray-600 mt-2">Events Yearly</div>
                    </div>
                </div>
            </div>
        </section>
    );
}