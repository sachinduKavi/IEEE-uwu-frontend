import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';
import '../css/Footer.css';
import ieeeLogo from '../assets/ieee-logo.png';

const Footer: React.FC = () => {
  return (
    <footer className="ieee-footer">
      <div className="footer-inner">

        {/* Left Section: Logo & Title */}
        <div className="footer-logo-section">
          <img src={ieeeLogo} alt="IEEE Logo" className="footer-logo" />
          <h2 className="footer-title">
            IEEE Student Branch<br />
            Uva Wellassa University of Sri Lanka
          </h2>
          <p className="footer-tagline">Advancing Technology for Humanity.</p>
        </div>

        {/* Middle Section: Navigation Links */}
        <div className="footer-links-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/events">Events</a></li>
            <li><a href="/team">Our Team</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Right Section: Contact & Social */}
        <div className="footer-contact-section">
          <h3>Contact</h3>
          <p>IEEE UWU Student Branch<br />Badulla, Sri Lanka</p>
          <p><FaEnvelope className="icon" /> ieee@uwu.ac.lk</p>
          <div className="footer-social-icons">
            <a href="https://facebook.com/ieeeuwu" target="_blank" rel="noreferrer"><FaFacebookF /></a>
            <a href="https://instagram.com/ieeeuwu" target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a href="https://linkedin.com/company/ieeeuwu" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} IEEE Student Branch – Uva Wellassa University of Sri Lanka. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
