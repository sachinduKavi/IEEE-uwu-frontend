import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from '../../assets/WIE/logo.png';
import { Menu, X } from "lucide-react";
import { cn } from "../../lib/utils";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "../ui/navigation-menu";

export default function WIEHeader() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState("#home");
    const [scrolled, setScrolled] = useState(false);
    const navigate = useNavigate();

    const navigation = [
        { name: "Home", to: "#wie", isAnchor: true },
        { name: "About", to: "#wieabout", isAnchor: true },
        { name: "Advisor", to: "#wieadvisor", isAnchor: true },
        { name: "Committee", to: "#wiecommittee", isAnchor: true },
        { name: "Awards", to: "#wieawards", isAnchor: true },
        { name: "Events", to: "#wieevents", isAnchor: true },
        { name: "Benefits", to: "#wiebenefits", isAnchor: true },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);

            // Only update active link if we're on the home page
            if (window.location.pathname === '/wie') {
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

            if (window.location.pathname !== '/wie') {
                navigate('/wie');
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
                    {/* Logo - Made much larger with enhanced visibility */}
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
                                className="h-24 w-auto md:h-32 lg:h-40 transition-all duration-300 hover:opacity-90"
                                loading="eager"
                                style={{
                                    filter: "brightness(1.4) contrast(1.3) drop-shadow(0 0 10px rgba(255,255,255,0.7))"
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
                                                "group relative px-4 py-2 text-sm font-medium transition-all",
                                                activeLink === item.to || (!item.isAnchor && window.location.pathname === item.to)
                                                    ? "text-white border-b-2 border-white font-semibold"
                                                    : "text-white/90 hover:text-white",
                                            )}
                                        >
                                            {item.name}
                                        </Link>
                                    </NavigationMenuItem>
                                ))}
                            </NavigationMenuList>
                        </NavigationMenu>

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
                                        "block px-4 py-2 text-[15px] font-medium transition-colors border-l-4 pl-3",
                                        activeLink === item.to || (!item.isAnchor && window.location.pathname === item.to)
                                            ? "text-white border-l-white font-semibold"
                                            : "border-l-transparent hover:border-l-white/30"
                                    )}
                                >
                                    {item.name}
                                </Link>
                            ))}

                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}