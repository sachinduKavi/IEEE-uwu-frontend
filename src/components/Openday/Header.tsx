import { Button } from "../ui/button";
import { Award } from "lucide-react";

export default function Header() {
    const handleRegisterClick = () => {
        window.open("https://forms.google.com/register", "_blank");
    }

    return (
        <header className="sticky top-0 z-50 shadow-lg">

            <div className="relative bg-gradient-to-r  from-blue-950/90 to-blue-800/90 backdrop-blur-sm">
                <div className="container mx-auto px-4 py-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-blue-600/90 rounded-full flex items-center justify-center shadow-md">
                                <Award className="w-5 h-5 text-white" />
                            </div>
                            <div className="space-y-1">
                                <h1 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                                    IEEE Society Open Day 2025
                                </h1>
                                <p className="text-blue-100 text-xs sm:text-sm opacity-90">
                                    University of Technology
                                </p>
                            </div>
                        </div>
                        <Button
                            size="lg"
                            className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-2
                                       rounded-full shadow-lg transform hover:scale-105 transition-all duration-200
                                       border border-blue-400 focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50"
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