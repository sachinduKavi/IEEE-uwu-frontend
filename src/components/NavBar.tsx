import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import logo from '../assets/logo.png';

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Chapters", href: "#chapters" },
    { name: "Events", href: "#events" },
    { name: "Projects", href: "#projects" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ];

  return (
      <header className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-md bg-[#EBF8FF]/95' : 'bg-[#EBF8FF]'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo */}
            <Link to="#home" className="flex items-center" onClick={() => setActiveLink("#home")}>
              <img
                  src={logo}
                  alt="IEEE Logo"
                  className="h-12 w-auto md:h-14 transition-transform duration-300 hover:scale-105"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-2">
              {navigation.map((item) => (
                  <Link
                      key={item.name}
                      to={item.href}
                      className={`relative px-4 py-2 text-sm font-medium transition-all rounded-lg group ${
                          activeLink === item.href
                              ? 'text-white bg-[#005596] shadow-md'
                              : 'text-[#1e3a8a] hover:bg-[#005596] hover:text-white focus:bg-[#005596] focus:text-white'
                      }`}
                      onClick={() => setActiveLink(item.href)}
                  >
                    {item.name}
                    <span className={`absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#005596] transition-all duration-300 group-hover:w-4/5 group-hover:left-[10%] ${
                        activeLink === item.href ? 'w-4/5 left-[10%]' : ''
                    }`}></span>
                  </Link>
              ))}
              <Button
                  className="ml-2 bg-[#005596] hover:bg-[#003d6b] text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
                  size="sm"
              >
                Join Us
              </Button>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  aria-label="Toggle menu"
                  className="text-[#005596] hover:bg-[#005596]/10"
              >
                {isMenuOpen ? (
                    <X className="h-5 w-5" />
                ) : (
                    <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
              <div className="md:hidden bg-white border-t border-gray-200 shadow-lg animate-fade-in-down">
                <div className="px-4 pt-3 pb-6 space-y-2">
                  {navigation.map((item) => (
                      <Link
                          key={item.name}
                          to={item.href}
                          className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                              activeLink === item.href
                                  ? "bg-[#005596] text-white"
                                  : "text-[#1e3a8a] hover:bg-[#005596] hover:text-white"
                          }`}
                          onClick={() => {
                            setActiveLink(item.href);
                            setIsMenuOpen(false);
                          }}
                      >
                        {item.name}
                      </Link>
                  ))}
                  <Button
                      className="w-full mt-3 bg-[#005596] hover:bg-[#003d6b] text-white shadow-md"
                      size="default"
                      onClick={() => setIsMenuOpen(false)}
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