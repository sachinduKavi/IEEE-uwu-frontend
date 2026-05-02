import { Link } from "react-router-dom";
import {
  Linkedin,
  Facebook,
  Twitter,
  MessageCircle,
  Instagram,
} from "lucide-react";
import { ImWhatsapp } from "react-icons/im";
import IEEELogo from "../assets/logo.png";

export default function Footer() {
  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/company/uwuieee",
      label: "LinkedIn",
    },
    {
      icon: Facebook,
      href: "https://www.facebook.com/uwuieee",
      label: "Facebook",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/ieee_uwu/",
      label: "Instagram",
    },
    {
      icon: ImWhatsapp,
      href: "https://whatsapp.com/channel/0029VbArsvFI1rchtAICbG1m",
      label: "Whatsapp",
    },
  ];

  return (
    <footer className="bg-[#0b1120] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          {/* Logo and Description */}
          <div className="space-y-4 text-center md:text-left">
            <div className="flex justify-center md:justify-start">
              <img
                src={IEEELogo}
                alt="IEEE Logo"
                className="h-16 w-auto object-contain"
              />
            </div>
            <p className="text-[#dbeafe] text-sm leading-relaxed">
              The IEEE Student Branch at Uva Wellassa University fosters
              innovation, technical growth, and professional development by
              connecting students with global technology communities.
            </p>
          </div>

          {/* Social Media */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4 text-[#60a5fa]">
              Connect With Us
            </h3>
            <div className="flex space-x-6 items-center">
              {" "}
              {/* Increased spacing */}
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#94a3b8] hover:text-[#60a5fa] transition-colors duration-200 p-3 hover:bg-[#172554] rounded-full" // bigger padding
                    aria-label={social.label}
                  >
                    <IconComponent className="h-7 w-7" /> {/* Bigger icons */}
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="border-t border-[#334155] my-8"></div>

        {/* Copyright */}
        <div className="text-center text-[#94a3b8] text-xs md:text-sm">
          © {new Date().getFullYear()} IEEE Student Branch, Uva Wellassa
          University. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
