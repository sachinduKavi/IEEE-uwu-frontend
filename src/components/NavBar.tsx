import { useState, useEffect } from "react"
import Link from "antd/es/typography/Link"
import Image from '../assets/logo.png'
import { Button } from "./ui/button"
import { Menu, X } from "lucide-react"
import { cn } from "../lib/utils"
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "./ui/navigation-menu"

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState("#home")
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navigation = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Chapters", href: "#chapters" },
    { name: "Events", href: "#events" },
    { name: "Projects", href: "#projects" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ]

  const handleNavClick = (href: string) => {
    setActiveLink(href)
    setIsMenuOpen(false)
  }

  return (
      <header
      className={cn(
        "fixed w-full top-0 left-0 z-50 transition-all duration-300",
        scrolled ? "shadow-md bg-[#EBF8FF]/95 backdrop-blur-sm" : "bg-[#EBF8FF]",
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link href="#home" className="flex items-center" onClick={() => setActiveLink("#home")}>
            <div className="relative h-12 w-auto md:h-14 transition-transform duration-300 hover:scale-105">
              <img
                src={Image}
                alt="IEEE Logo"
                width={120}
                height={56}
                className="h-full w-auto object-contain"
                loading="eager"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              {navigation.map((item) => (
                <NavigationMenuItem key={item.name}>
                  <Link
                    href={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className={cn(
                      "group relative px-4 py-2 text-sm font-medium rounded-lg transition-all",
                      activeLink === item.href
                        ? "text-white bg-[#005596] shadow-md"
                        : "text-[#1e3a8a] hover:bg-[#005596]/10",
                    )}
                  >
                    {item.name}
                    <span
                      className={cn(
                        "absolute bottom-0 left-1/2 h-0.5 bg-[#005596] transition-all duration-300 group-hover:w-4/5 group-hover:left-[10%]",
                        activeLink === item.href ? "w-4/5 left-[10%]" : "w-0",
                      )}
                    ></span>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <Button
            className="hidden md:inline-flex ml-2 bg-[#005596] hover:bg-[#003d6b] text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
            size="sm"
          >
            Join Us
          </Button>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              className="text-[#005596] hover:bg-[#005596]/10"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
            isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0",
          )}
        >
          <div className="bg-white border-t border-gray-200 shadow-lg rounded-b-lg">
            <div className="px-4 pt-3 pb-6 space-y-2">
              {navigation.map((item) => (
                <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "block px-4 py-3 mx-2 rounded-md text-[15px] font-medium transition-all duration-200",
                  "hover:bg-[#005596]/10 hover:text-[#005596] focus:outline-none focus:ring-2 focus:ring-[#005596]/20",
                  activeLink === item.href 
                    ? "bg-[#005596] text-white shadow-sm" 
                    : "text-[#1e3a8a]"
                )}
                onClick={() => handleNavClick(item.href)}
              >
                <span className="relative">
                  {item.name}
                  {activeLink === item.href && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white/80 rounded-full" />
                  )}
                </span>
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
        </div>
      </div>
    </header>
  );
}