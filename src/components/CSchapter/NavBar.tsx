import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "../../assets/csChapter/cs logo sm.png";
import { useNavigate } from "react-router";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home","about", "events", "team", "contact","membership","resources"];
      let current = "";

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const sectionTop = section.offsetTop - 100;
          const sectionHeight = section.offsetHeight;
          if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = id;
          }
        }
      });

      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Us" },
    { id: "team", label: "Our Team" },
    { id: "membership", label: "Membership Benefits" },
    { id: "resources", label: "Resources" },
    { id: "events", label: "Events" },
    { id: "contact", label: "Get In Touch" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white bg-gradient-to-br from-yellow-50 to-yellow-100 shadow-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div
            className="flex-shrink-0 cursor-pointer"
            onClick={scrollToTop}
          >
            <img className="w-40 h-auto" src={logo} alt="IEEE Logo" />
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-baseline space-x-4">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    activeSection === item.id
                      ? "text-yellow-700 font-semibold border-b-2 border-yellow-500"
                      : "text-gray-800 hover:text-yellow-600"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Student Branch Button */}
            <a
              onClick={()=>navigate('/')}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-md transition-all duration-200 cursor-pointer"
            >
              Student Branch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 hover:text-yellow-600 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md transition-all duration-300">
          <div className="px-4 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  activeSection === item.id
                    ? "text-yellow-700 font-semibold bg-yellow-100"
                    : "text-gray-800 hover:text-yellow-600"
                }`}
              >
                {item.label}
              </a>
            ))}

            {/* Student Branch Button in Mobile Menu */}
            <div
              onClick={()=>navigate('/')}
              rel="noopener noreferrer"
              className="block mt-3 bg-yellow-500 hover:bg-yellow-600 text-white text-center px-4 py-2 rounded-full text-base font-medium shadow-md transition-all duration-200 cursor-pointer"
            >
              Student Branch
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
