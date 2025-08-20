import { Button } from "../ui/button";
import logo from '../../assets/open day/logo.png';
import { Home, Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function NewChapterHeader() {
    const navigate = useNavigate();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleRegisterClick = () => {
        window.open("https://lu.ma/nk0m4r6x", "_blank");
    };

    const handleHomeClick = () => {
        navigate("/");
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="sticky top-0 z-50 shadow-lg">
            <div className="relative bg-gradient-to-r from-[#2c1b5f] to-[#44154b] backdrop-blur-sm">
                <div className="container mx-auto px-4 py-2">
                    <div className="flex items-center justify-between">
                        {/* Logo Section */}
                        <div className="flex items-center space-x-4">
                            <div className="flex items-center">
                                <div className="w-12 sm:w-16 h-12 sm:h-16 p-1 rounded-full bg-white/10 backdrop-blur-sm border border-purple-300/30 shadow-lg flex items-center justify-center">
                                    <img
                                        src={logo}
                                        alt="IEEE Logo"
                                        className="w-full h-full object-contain p-1.5 transition-all duration-300 hover:scale-105 filter hue-rotate-[220deg] brightness-110"
                                        style={{ filter: "hue-rotate(220deg) brightness(1.1)" }}
                                    />
                                </div>
                                <div className="ml-2 sm:ml-3 space-y-0.5 sm:space-y-1">
                                    <h1 className="text-sm sm:text-xl md:text-2xl font-bold text-white leading-tight">
                                        IEEE OPEN DAY 2025
                                    </h1>
                                    <p className="text-purple-100 text-xs sm:text-sm opacity-90">
                                        [New Chapter Name] • Uva Wellassa University
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-3 lg:space-x-5">
                            <Button
                                size="lg"
                                className="bg-[#5e2d6e] hover:bg-[#7d3a92] hover:cursor-pointer text-white font-semibold px-4 sm:px-6 py-2
                                           rounded-full shadow-lg transform hover:scale-105 transition-all duration-200
                                           border border-purple-400 focus:ring-2 focus:ring-purple-300 focus:ring-opacity-50
                                          inline-flex"
                                onClick={handleRegisterClick}
                            >
                                Register Now
                            </Button>

                            <Button
                                variant="ghost"
                                size="default"
                                className="hover:cursor-pointer bg-white/10 hover:bg-white/20 text-white font-medium rounded-full px-3 sm:px-4 py-2
                                           border border-purple-300/30 shadow-lg flex items-center gap-2 hover:scale-105 transition-all"
                                onClick={handleHomeClick}
                                aria-label="Back to home"
                            >
                                <Home className="h-5 w-5" />
                                <span className="hidden sm:inline">Home</span>
                            </Button>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden flex items-center">
                            <Button
                                variant="ghost"
                                size="icon"
                                className="hover:cursor-pointer bg-white/10 hover:bg-white/20 text-white rounded-full p-2
                                           border border-purple-300/30 shadow-lg hover:scale-105 transition-all"
                                onClick={toggleMobileMenu}
                                aria-label="Toggle menu"
                            >
                                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                            </Button>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    {isMobileMenuOpen && (
                        <div className="md:hidden mt-4 pb-4 space-y-3">
                            <Button
                                size="lg"
                                className="w-full bg-[#5e2d6e] hover:bg-[#7d3a92] text-white font-semibold py-3
                                           rounded-full shadow-lg transform hover:scale-[1.02] transition-all duration-200
                                           border border-purple-400 focus:ring-2 focus:ring-purple-300 focus:ring-opacity-50
                                           flex justify-center items-center gap-2"
                                onClick={handleRegisterClick}
                            >
                                Register Now
                            </Button>

                            <Button
                                variant="ghost"
                                size="lg"
                                className="w-full hover:cursor-pointer bg-white/10 hover:bg-white/20 text-white font-medium rounded-full py-3
                                           border border-purple-300/30 shadow-lg flex justify-center items-center gap-2 hover:scale-[1.02] transition-all"
                                onClick={handleHomeClick}
                            >
                                <Home className="h-5 w-5" />
                                <span>Home</span>
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}