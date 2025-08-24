import { useState, useEffect } from "react";

export default function RecentEventHighlight() {
    const [isVisible, setIsVisible] = useState(true);
    const [isScrolled, setIsScrolled] = useState(false);

    // Sample event data - replace with your actual event details
    const recentEvent = {
        title: "SHECODERess Finals",
        date: "October 25, 2023",
        tagline: "Sri Lanka's Premier Ladies-Only Hackathon",
        description: "Join us for the final round of SHECODERess, where talented female coders will showcase their skills and compete for exciting prizes.",
        registerLink: "#register",
        image: "/placeholder-event.jpg"
    };

    // Hide banner when scrolled
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!isVisible) return null;

    return (
        <>
            {/* Desktop Sticky Banner */}
            <div className={`hidden md:flex fixed bottom-6 right-6 z-50 transition-all duration-500 ${isScrolled ? 'translate-y-0' : 'translate-y-20'}`}>
                <div className="bg-gradient-to-r from-purple-700 to-pink-700 text-white rounded-2xl shadow-2xl overflow-hidden w-80 transform hover:scale-105 transition-transform duration-300 border-2 border-white/20">
                    <div className="p-5">
                        <div className="flex justify-between items-start mb-3">
                            <h3 className="font-bold text-lg">Upcoming Event</h3>
                            <button
                                onClick={() => setIsVisible(false)}
                                className="text-white/70 hover:text-white text-lg"
                            >
                                ×
                            </button>
                        </div>

                        <div className="mb-4">
                            <div className="text-sm text-purple-200">{recentEvent.date}</div>
                            <h4 className="font-bold text-xl mb-1">{recentEvent.title}</h4>
                            <p className="text-sm text-white/90">{recentEvent.tagline}</p>
                        </div>

                        <a
                            href={recentEvent.registerLink}
                            className="block w-full bg-white text-purple-700 text-center font-bold py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors mb-2"
                        >
                            Register Now
                        </a>

                        <div className="text-xs text-white/70 text-center">
                            Limited spots available
                        </div>
                    </div>

                    {/* Animated pulse effect */}
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
                </div>
            </div>

            {/* Mobile Banner - Fixed at bottom */}
            <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-purple-700 to-pink-700 text-white p-4 shadow-lg border-t border-white/20">
                <div className="flex justify-between items-center mb-2">
                    <h3 className="font-bold">Upcoming Event</h3>
                    <button
                        onClick={() => setIsVisible(false)}
                        className="text-white/70 hover:text-white text-lg"
                    >
                        ×
                    </button>
                </div>

                <div className="mb-3">
                    <div className="text-xs text-purple-200">{recentEvent.date}</div>
                    <h4 className="font-bold text-sm">{recentEvent.title}</h4>
                </div>

                <a
                    href={recentEvent.registerLink}
                    className="block w-full bg-white text-purple-700 text-center font-bold py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors text-sm"
                >
                    Register Now
                </a>
            </div>
        </>
    );
}