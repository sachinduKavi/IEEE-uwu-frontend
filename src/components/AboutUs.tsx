import React from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
    return (
        <div className="bg-[#EBF8FF] py-16 px-6 lg:px-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* Text Section */}
                <div className="space-y-6 ml-20">
                    <h2 className="text-[#005596] text-4xl md:text-5xl font-extrabold">
                        About IEEE UWU
                    </h2>
                    <p className="text-[#4A4A4A] text-base md:text-lg leading-relaxed font-medium">
                        IEEE Student Branch of Uva Wellassa University is a vibrant community
                        of tech enthusiasts, innovators, and future leaders. We aim to inspire
                        students to learn, lead, and make a difference through technology and
                        collaboration.
                    </p>
                    <Link
                        to="/about"
                        className="inline-block px-6 py-2 border-2 border-[#0077B6] text-[#0077B6] rounded-md font-medium hover:bg-[#0077B6] hover:text-white transition"
                    >
                        Learn More
                    </Link>
                </div>

                {/* Image Section */}
                <div className="flex justify-center">
                    <div className="w-80 h-80 md:w-96 md:h-96 clip-hexagon overflow-hidden ">
                        <img
                            src="/images/Mask group.png" 
                            alt="IEEE Students"
                            className="object-cover w-full h-full"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
