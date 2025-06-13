import { Link } from "react-router"
import { Linkedin, Facebook, Twitter, MessageCircle, Instagram } from "lucide-react"
import IEEELogo from '../assets/logo.png'

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
    <footer className="bg-[#0a192f] text-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex justify-center md:justify-start">
              <img 
                src={IEEELogo} 
                alt="IEEE Logo" 
                className="h-16 w-auto object-contain"
              />
            </div>
            <p className="text-[#ccd6f6] text-sm leading-relaxed">
              The IEEE Student Branch at Uva Wellassa University fosters innovation, 
              technical growth, and professional development by connecting students 
              with global technology communities.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4 text-[#64ffda]">Quick Links</h3>
            <nav>
              <ul className="space-y-3">
                {navigationLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-[#8892b0] hover:text-[#64ffda] text-sm transition-colors duration-200 hover:underline underline-offset-4"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Social Media */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4 text-[#64ffda]">Connect With Us</h3>
            <div className="flex space-x-4 items-center">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon
                return (
                  <Link
                    key={index}
                    to={social.href}
                    className="text-[#8892b0] hover:text-[#64ffda] transition-colors duration-200 p-2 hover:bg-[#112240] rounded-full"
                    aria-label={social.label}
                  >
                    <IconComponent className="h-5 w-5" />
                  </Link>
                )
              })}
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="border-t border-[#233554] my-8"></div>

        {/* Copyright */}
        <div className="text-center text-[#8892b0] text-xs md:text-sm">
          © {new Date().getFullYear()} IEEE Student Branch, Uva Wellassa University. All rights reserved.
        </div>
      </div>
    </footer>
  )
}