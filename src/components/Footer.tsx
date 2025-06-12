import { Link } from "react-router"
import { Linkedin, Facebook, Twitter, MessageCircle, Instagram } from "lucide-react"

export default function Footer() {
  const navigationLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Events", href: "#events" },
    { name: "Gallery", href: "#gallery" },
    { name: "Projects", href: "#projects" },
    { name: "Resources", href: "#resources" },
  ]

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: MessageCircle, href: "#", label: "Discord" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ]

  return (
    <footer className="bg-[#1e4a5c] text-white py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* IEEE Logo */}
        <div className="mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 border-2 border-white flex items-center justify-center transform rotate-45">
                <span className="text-white font-bold text-lg transform -rotate-45">IEEE</span>
              </div>
              <span className="text-3xl font-bold tracking-wider">IEEE</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-white/90 text-sm max-w-2xl mx-auto leading-relaxed">
            The IEEE Student Branch at Uva Wellassa University fosters innovation, technical growth, and professional
            development by connecting students with global technology communities.
          </p>
        </div>

        {/* Separator Line */}
        <div className="border-t border-white/20 mb-8"></div>

        {/* Navigation Links */}
        <nav className="mb-8">
          <ul className="flex flex-wrap justify-center gap-6 md:gap-8">
            {navigationLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.href}
                  className="text-white hover:text-white text-sm font-medium transition-colors duration-200"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social Media Icons */}
        <div className="mb-8">
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon
              return (
                <Link
                  key={index}
                  to={social.href}
                  className="text-white hover:text-white transition-colors duration-200"
                  aria-label={social.label}
                >
                  <IconComponent className="h-5 w-5" />
                </Link>
              )
            })}
          </div>
        </div>

        {/* Copyright */}
        <div className="text-white/70 text-sm">
          © 2025 IEEE Student Branch, Uva Wellassa University. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
