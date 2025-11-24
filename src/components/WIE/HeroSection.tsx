import { useState, useEffect } from "react";

export default function WIEHero() {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [fade, setFade] = useState(true);

    const heroTexts = [
        "Empowering Women in Engineering",
        "Advancing Technology for Humanity",
        "Building a Diverse STEM Community",
        "Inspiring Innovation Worldwide"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setCurrentTextIndex((prev) => (prev + 1) % heroTexts.length);
                setFade(true);
            }, 500);
        }, 4000);

        return () => clearInterval(interval);
    }, [heroTexts.length]);

    return (
        <section id="wie" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden bg-white">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-purple-50 to-white z-0"></div>

            {/* Floating shapes with purple theme */}
            <div className="absolute inset-0 z-0 opacity-40">
                {/* Large circle */}
                <div className="absolute top-1/4 -left-24 w-72 h-72 rounded-full bg-purple-100"></div>
                {/* Medium circle */}
                <div className="absolute top-1/2 -right-16 w-48 h-48 rounded-full bg-purple-200"></div>
                {/* Small circle */}
                <div className="absolute bottom-1/4 left-1/4 w-32 h-32 rounded-full bg-purple-300"></div>
                {/* Triangle */}
                <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-purple-100 transform rotate-45"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
                <div className="max-w-4xl mx-auto">
                    {/* Main heading with purple accent */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                        IEEE <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-800">Women in Engineering</span>
                    </h1>

                    {/* Animated subtitle */}
                    <div className="h-20 md:h-24 mb-8 flex items-center justify-center">
                        <h2 className={`text-xl md:text-2xl lg:text-3xl text-gray-700 transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}>
                            {heroTexts[currentTextIndex]}
                        </h2>
                    </div>

                    {/* Description */}
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
                        Dedicated to promoting women engineers and scientists, and inspiring girls around the world to follow their academic interests in a career in engineering and science.
                    </p>

                    {/* Stats Section - Replaces buttons */}
                    {/* Replace the stats section with this */}
                  
                    {/*<div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mt-12">*/}
                    {/*    <div className="flex flex-col items-center text-center p-4">*/}
                    {/*        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-3">*/}
                    {/*            <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">*/}
                    {/*                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />*/}
                    {/*            </svg>*/}
                    {/*        </div>*/}
                    {/*        <h3 className="font-semibold text-gray-900 mb-1">Mentorship</h3>*/}
                    {/*        <p className="text-sm text-gray-600">Professional guidance programs</p>*/}
                    {/*    </div>*/}
                    {/*    <div className="flex flex-col items-center text-center p-4">*/}
                    {/*        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-3">*/}
                    {/*            <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">*/}
                    {/*                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />*/}
                    {/*            </svg>*/}
                    {/*        </div>*/}
                    {/*        <h3 className="font-semibold text-gray-900 mb-1">Networking</h3>*/}
                    {/*        <p className="text-sm text-gray-600">Global community connections</p>*/}
                    {/*    </div>*/}
                    {/*    <div className="flex flex-col items-center text-center p-4">*/}
                    {/*        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-3">*/}
                    {/*            <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">*/}
                    {/*                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />*/}
                    {/*            </svg>*/}
                    {/*        </div>*/}
                    {/*        <h3 className="font-semibold text-gray-900 mb-1">Innovation</h3>*/}
                    {/*        <p className="text-sm text-gray-600">Cutting-edge research</p>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    {/* Scroll indicator */}
                    <div className="mt-16 animate-bounce">
                        <div className="flex flex-col items-center text-purple-600">
                            <span className="text-sm font-medium mb-2">Explore More</span>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}