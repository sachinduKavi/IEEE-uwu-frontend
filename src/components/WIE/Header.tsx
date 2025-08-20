import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from '../../assets/WIE/logo.png';
import { Button } from "../ui/button";
import { Menu, X, Home } from "lucide-react";
import { cn } from "../../lib/utils";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "../ui/navigation-menu";

export default function WIEHeader() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState("#home");
    const [scrolled, setScrolled] = useState(false);
    const navigate = useNavigate();

    const navigation = [
        { name: "Home", to: "#home", isAnchor: true },
        { name: "About", to: "#about", isAnchor: true },
        { name: "Chapters", to: "#chapters", isAnchor: true },
        { name: "Events", to: "#upcoming-event", isAnchor: true },
    ];

    const handleRegisterClick = () => {
        window.open("https://lu.ma/nk0m4r6x", "_blank");
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);

            // Only update active link if we're on the home page
            if (window.location.pathname === '/') {
                const sections = navigation.filter(item => item.isAnchor).map(item => item.to.substring(1));
                const scrollPosition = window.scrollY + 100;

                for (const section of sections) {
                    const element = document.getElementById(section);
                    if (element) {
                        const offsetTop = element.offsetTop;
                        const offsetHeight = element.offsetHeight;

                        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                            setActiveLink(`#${section}`);
                            break;
                        }
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [navigation]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen((prev) => !prev);
    };

    const handleNavClick = (to: string, isAnchor: boolean) => {
        if (isAnchor) {
            setActiveLink(to);
            setIsMobileMenuOpen(false);

            if (window.location.pathname !== '/') {
                navigate('/');
                setTimeout(() => {
                    const element = document.querySelector(to);
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                    }
                }, 100);
            } else {
                const element = document.querySelector(to);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }
        } else {
            // Regular page navigation
            setIsMobileMenuOpen(false);
            navigate(to);
        }
    };

    return (
        <header className={cn(
            "fixed top-0 left-0 w-full z-50 shadow-lg transition-all duration-300",
            scrolled ? "bg-gradient-to-r from-[#2c1b5f]/95 to-[#44154b]/95 backdrop-blur-sm" : "bg-gradient-to-r from-[#2c1b5f] to-[#44154b]"
        )}>
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <nav className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link
                            to="/"
                            onClick={(e) => {
                                e.preventDefault();
                                handleNavClick("#home", true);
                            }}
                            className="flex"
                        >
                            <img
                                src={logo}
                                alt="IEEE WIE Logo"
                                className="h-40 w-auto md:h-20 transition-all duration-300 hover:scale-105"
                                loading="eager"
                                style={{
                                    filter: "brightness(1.2) contrast(1.1) drop-shadow(0 0 6px rgba(255,255,255,0.4))"
                                }}
                            />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
                        <NavigationMenu>
                            <NavigationMenuList>
                                {navigation.map((item) => (
                                    <NavigationMenuItem key={item.name}>
                                        <Link
                                            to={item.to}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                handleNavClick(item.to, item.isAnchor);
                                            }}
                                            className={cn(
                                                "group relative px-4 py-2 text-sm font-medium rounded-lg transition-all",
                                                activeLink === item.to || (!item.isAnchor && window.location.pathname === item.to)
                                                    ? "text-white bg-[#8a3fa9] shadow-md"
                                                    : "text-white/90 hover:bg-white/10",
                                            )}
                                        >
                                            {item.name}
                                            <span
                                                className={cn(
                                                    "absolute bottom-0 left-1/2 h-0.5 bg-white transition-all duration-300 group-hover:w-4/5 group-hover:left-[10%]",
                                                    activeLink === item.to || (!item.isAnchor && window.location.pathname === item.to)
                                                        ? "w-4/5 left-[10%]"
                                                        : "w-0",
                                                )}
                                            ></span>
                                        </Link>
                                    </NavigationMenuItem>
                                ))}
                            </NavigationMenuList>
                        </NavigationMenu>

                        <Button
                            className="ml-2 bg-[#8a3fa9] hover:bg-[#a258c0] text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 border border-white/30"
                            size="sm"
                            onClick={handleRegisterClick}
                        >
                            Register Now
                        </Button>

                        <Button
                            variant="ghost"
                            size="sm"
                            className="hover:cursor-pointer bg-white/10 hover:bg-white/20 text-white rounded-full px-3 py-2
                         border border-white/30 shadow-lg flex items-center gap-2 hover:scale-105 transition-all"
                            onClick={() => navigate("/")}
                            aria-label="Back to home"
                        >
                            <Home className="h-4 w-4" />
                        </Button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center space-x-4">
                        <button
                            onClick={toggleMobileMenu}
                            className="p-2 text-white hover:bg-white/10 rounded-md border border-white/30"
                        >
                            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                    </div>
                </nav>

                {/* Mobile Navigation */}
                {isMobileMenuOpen && (
                    <div className="md:hidden px-4 py-6 bg-gradient-to-b from-[#2c1b5f] to-[#44154b] text-white space-y-4 shadow-md">
                        <div className="flex flex-col space-y-4">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.to}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleNavClick(item.to, item.isAnchor);
                                    }}
                                    className={cn(
                                        "block px-4 py-2 rounded-md text-[15px] font-medium transition-all",
                                        activeLink === item.to || (!item.isAnchor && window.location.pathname === item.to)
                                            ? "bg-[#8a3fa9] text-white"
                                            : "hover:bg-white/10"
                                    )}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <Button
                                className="w-full mt-2 bg-[#8a3fa9] hover:bg-[#a258c0] text-white border border-white/30"
                                size="default"
                                onClick={handleRegisterClick}
                            >
                                Register Now
                            </Button>
                            <Button
                                variant="ghost"
                                size="default"
                                className="w-full hover:cursor-pointer bg-white/10 hover:bg-white/20 text-white rounded-full py-2
                           border border-white/30 shadow-lg flex justify-center items-center gap-2"
                                onClick={() => navigate("/")}
                            >
                                <Home className="h-5 w-5" />
                                <span>Home</span>
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}