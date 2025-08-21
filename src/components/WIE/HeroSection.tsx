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
        <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
            {/* Background with gradient matching header */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#2c1b5f] via-[#3a176d] to-[#44154b] z-0"></div>

            {/* Animated background elements */}
            <div className="absolute inset-0 z-0 opacity-20">
                {[...Array(15)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute rounded-full bg-white"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            width: `${Math.random() * 100 + 20}px`,
                            height: `${Math.random() * 100 + 20}px`,
                            opacity: Math.random() * 0.2 + 0.1,
                            animation: `pulse ${Math.random() * 10 + 5}s infinite alternate`
                        }}
                    ></div>
                ))}
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
                <div className="max-w-4xl mx-auto">
                    {/* Main heading with animated text */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                        IEEE <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">Women in Engineering</span>
                    </h1>

                    <div className="h-20 md:h-24 mb-8 flex items-center justify-center">
                        <h2 className={`text-xl md:text-2xl lg:text-3xl text-white/90 transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}>
                            {heroTexts[currentTextIndex]}
                        </h2>
                    </div>

                    {/* Call to action buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10">
                        <Link
                            to="#about"
                            onClick={(e) => {
                                e.preventDefault();
                                document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="px-8 py-3 bg-white text-[#2c1b5f] font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                        >
                            Learn More
                        </Link>
                        <Link
                            to="#upcoming-event"
                            onClick={(e) => {
                                e.preventDefault();
                                document.querySelector('#upcoming-event')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="px-8 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
                        >
                            Upcoming Events
                        </Link>
                    </div>
                </div>

                {/* Stats section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 mt-20 md:mt-28 text-white">
                    <div className="text-center">
                        <div className="text-3xl md:text-4xl font-bold mb-2">20K+</div>
                        <div className="text-sm md:text-base opacity-80">Members Worldwide</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl md:text-4xl font-bold mb-2">500+</div>
                        <div className="text-sm md:text-base opacity-80">Affinity Groups</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl md:text-4xl font-bold mb-2">100+</div>
                        <div className="text-sm md:text-base opacity-80">Countries</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl md:text-4xl font-bold mb-2">30+</div>
                        <div className="text-sm md:text-base opacity-80">Years of Impact</div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
                    </div>
                </div>
            </div>

            {/* Add styles for the pulse animation */}
      {/*      <style jsx>{`*/}
      {/*  @keyframes pulse {*/}
      {/*    0% { transform: scale(1); opacity: 0.1; }*/}
      {/*    100% { transform: scale(1.5); opacity: 0.3; }*/}
      {/*  }*/}
      {/*`}</style>*/}
        </section>
    );
}