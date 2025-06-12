import { useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "./ui/button"
import { Menu, X } from "lucide-react"

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState("#home")

  const navigation = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Chapters", href: "#chapters" },
    { name: "Events", href: "#events" },
    { name: "Projects", href: "#projects" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <header className="absolute w-full top-0 left-0 z-50 backdrop-blur-sm bg-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-[#005596] rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">IEEE</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-gray-900">IEEE Student Branch</h1>
              <p className="text-xs text-gray-600">Advancing Technology for Humanity</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-5 py-2.5 text-sm font-medium transition-all rounded-lg ${
                  activeLink === item.href
                    ? "bg-[#005596] text-white shadow-md"
                    : "text-gray-700 hover:bg-[#005596]/10 hover:text-[#005596]"
                }`}
                onClick={() => setActiveLink(item.href)}
              >
                {item.name}
              </Link>
            ))}
            <Button 
              className="ml-4 bg-[#005596] hover:bg-[#004080] text-white shadow-lg"
              size="default"
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
              className="text-gray-700 hover:bg-[#005596]/10 hover:text-[#005596]"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 border-t border-gray-200 shadow-lg">
            <div className="px-4 pt-3 pb-6 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-4 py-3 rounded-lg text-base font-medium ${
                    activeLink === item.href
                      ? "bg-[#005596] text-white"
                      : "text-gray-700 hover:bg-[#005596]/10 hover:text-[#005596]"
                  }`}
                  onClick={() => {
                    setActiveLink(item.href)
                    setIsMenuOpen(false)
                  }}
                >
                  {item.name}
                </Link>
              ))}
              <Button 
                className="w-full mt-3 bg-[#005596] hover:bg-[#004080] text-white shadow-md"
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
  )
}