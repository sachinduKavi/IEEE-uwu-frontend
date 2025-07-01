import { Button } from "../ui/button";
import logo from '../../assets/open day/logo.png'

export default function Header() {
    const handleRegisterClick = () => {
        window.open("https://lu.ma/nk0m4r6x", "_blank");
    }

    return (
        <header className="sticky top-0 z-50 shadow-lg">
            <div className="relative bg-gradient-to-r from-blue-950/90 to-blue-800/90 backdrop-blur-sm">
                <div className="container mx-auto px-4 py-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            {/* Enhanced Logo Container */}
                            <div className="flex items-center">
                                <div className="w-16 h-16 p-1 rounded-full bg-white/10 backdrop-blur-sm border border-blue-300/30 shadow-lg flex items-center justify-center">
                                    <img
                                        src={logo}
                                        alt="IEEE Logo"
                                        className="w-full h-full object-contain p-1.5 transition-all duration-300 hover:scale-105"
                                    />
                                </div>
                                <div className="ml-3 space-y-1">
                                    <h1 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                                        IEEE OPEN DAY 2025
                                    </h1>
                                    <p className="text-blue-100 text-xs sm:text-sm opacity-90">
                                        Uva Wellassa University
                                    </p>
                                </div>
                            </div>
                        </div>

                        <Button
                            size="lg"
                            className="bg-blue-600 hover:bg-blue-500 hover:cursor-pointer text-white font-semibold px-6 py-2
                                       rounded-full shadow-lg transform hover:scale-105 transition-all duration-200
                                       border border-blue-400 focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50
                                       hidden sm:inline-flex"
                            onClick={handleRegisterClick}
                        >
                            Register Now
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    )
}