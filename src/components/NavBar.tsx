import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Image from '../assets/logo.png';
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "../lib/utils";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "./ui/navigation-menu";

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Chapters", to: "/chapters" },
    { name: "Events", to: "/events" },
    { name: "Projects", to: "/projects" },
    { name: "Blog", to: "/blog" },
    { name: "Contact", to: "/contact" },
    { name: "Open Day", to: "/openDay" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleNavClick = (to: string) => {
    setActiveLink(to);
    setIsMobileMenuOpen(false);
  };

  return (
      <header className={cn(
          "fixed top-0 left-0 w-full z-50 shadow-md transition-all duration-300",
          scrolled ? "bg-[#EBF8FF]/95 backdrop-blur-sm" : "bg-[#EBF8FF]"
      )}>
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <nav className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link
                  to="/"
                  className="flex"
                  onClick={() => handleNavClick("/")}
              >
                <img
                    src={Image}
                    alt="IEEE Logo"
                    className="h-12 w-auto md:h-14"
                    loading="eager"
                />
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-4">
              <button
                  onClick={toggleMobileMenu}
                  className="p-2 text-[#005596] hover:bg-[#005596]/10 rounded-md"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-2">
              <NavigationMenu>
                <NavigationMenuList>
                  {navigation.map((item) => (
                      <NavigationMenuItem key={item.name}>
                        <Link
                            to={item.to}
                            onClick={() => handleNavClick(item.to)}
                            className={cn(
                                "group relative px-4 py-2 text-sm font-medium rounded-lg transition-all",
                                activeLink === item.to
                                    ? "text-white bg-[#005596] shadow-md"
                                    : "text-[#1e3a8a] hover:bg-[#005596]/10",
                            )}
                        >
                          {item.name}
                          <span
                              className={cn(
                                  "absolute bottom-0 left-1/2 h-0.5 bg-[#005596] transition-all duration-300 group-hover:w-4/5 group-hover:left-[10%]",
                                  activeLink === item.to ? "w-4/5 left-[10%]" : "w-0",
                              )}
                          ></span>
                        </Link>
                      </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
              <Button
                  className="ml-2 bg-[#005596] hover:bg-[#003d6b] text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
                  size="sm"
              >
                Join Us
              </Button>
            </div>
          </nav>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
              <div className="md:hidden px-4 py-6 bg-white text-[#1e3a8a] space-y-4 shadow-md">
                <div className="flex flex-col space-y-4">
                  {navigation.map((item) => (
                      <Link
                          key={item.name}
                          to={item.to}
                          onClick={() => handleNavClick(item.to)}
                          className={cn(
                              "block px-4 py-2 rounded-md text-[15px] font-medium transition-all",
                              activeLink === item.to
                                  ? "bg-[#005596] text-white"
                                  : "hover:bg-[#005596]/10"
                          )}
                      >
                        {item.name}
                      </Link>
                  ))}
                  <Button
                      className="w-full mt-2 bg-[#005596] hover:bg-[#003d6b] text-white"
                      size="default"
                  >
                    Join Us
                  </Button>
                </div>
              </div>
          )}
        </div>
      </header>
  );
}