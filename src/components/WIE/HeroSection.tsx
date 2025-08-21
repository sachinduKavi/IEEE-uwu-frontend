import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
        <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden bg-white">
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

                    {/* Call to action buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10">
                        <Link
                            to="#about"
                            onClick={(e) => {
                                e.preventDefault();
                                document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-purple-800 text-white font-semibold rounded-full hover:from-purple-700 hover:to-purple-900 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-200"
                        >
                            Learn More
                        </Link>
                        <Link
                            to="#upcoming-event"
                            onClick={(e) => {
                                e.preventDefault();
                                document.querySelector('#upcoming-event')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="px-8 py-3 border-2 border-purple-600 text-purple-700 font-semibold rounded-full hover:bg-purple-50 transition-all duration-300 transform hover:scale-105"
                        >
                            Upcoming Events
                        </Link>
                    </div>
                </div>
                
            </div>
        </section>
    );
}