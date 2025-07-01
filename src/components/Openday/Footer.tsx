import { Facebook, Instagram, Linkedin, Mail, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-gradient-to-r  from-blue-950/90 to-blue-800/90  text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-2xl font-bold mb-4">IEEE Society</h3>
                        <p className="text-blue-200 mb-4">University of Technology</p>
                        <p className="text-blue-200 text-sm">
                            Advancing technology for humanity through innovation, education, and professional development.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-xl font-semibold mb-4">Contact Information</h4>
                        <div className="space-y-2 text-blue-200">
                            <div className="flex items-center space-x-2">
                                <Mail className="w-4 h-4" />
                                <span>ieee@university.edu</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <MapPin className="w-4 h-4" />
                                <span>Engineering Building, Room 301</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
                        <div className="flex space-x-4">
                            <a
                                href="#"
                                className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
                                aria-label="Facebook"
                            >
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
                                aria-label="Instagram"
                            >
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-blue-700 mt-8 pt-8 text-center">
                    <p className="text-blue-200">© 2025 IEEE Society - University of Technology. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}