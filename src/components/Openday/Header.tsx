import { Button } from "../ui/Button.tsx";
import { Award } from "lucide-react";

export default function Header() {
    const handleRegisterClick = () => {
        window.open("https://forms.google.com/register", "_blank")
    }

    return (
        <header className="sticky top-0 z-50 bg-gradient-to-r from-blue-900 to-blue-800 shadow-lg">
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                            <Award className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <h1 className="text-2xl md:text-3xl font-bold text-white">IEEE Society Open Day 2025</h1>
                            <p className="text-blue-200 text-sm">University of Technology</p>
                        </div>
                    </div>
                    <Button
                        size="lg"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
                        onClick={handleRegisterClick}
                    >
                        Register Now
                    </Button>
                </div>
            </div>
        </header>
    )
}