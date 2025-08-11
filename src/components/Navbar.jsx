import React from 'react';
import logo from '../assets/logo.png';
import { MdEmail } from 'react-icons/md';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    // The parent motion.nav will handle the fade-in from the bottom animation
    <motion.nav
      className="bg-[#1D1D1D] text-white w-full"
      // Animation starts 20 pixels below its final position and is transparent
      initial={{ opacity: 0, y: 20 }}
      // Animation ends at its final position and is fully visible
      animate={{ opacity: 1, y: 0 }}
      // The animation takes 0.8 seconds and has a smooth "easeOut" effect
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Top Row */}
      <div className="flex items-center justify-between px-8 h-20">
        {/* Left: Logo and Contact */}
        <div className="flex items-center space-x-6">
          <img src={logo} alt="logo" className="w-16 h-16" />
          <MdEmail className="text-xl" />
          <FaWhatsapp className="text-xl" />
          <span className="text-sm">+91 89836 26437</span>
        </div>
        {/* Center: Book a Consultation */}
        <div className="flex-1 flex justify-center">
          <span className="font-bold text-sm">EYE AESTHETICS</span>
        </div>
        {/* Right: Empty for spacing */}
        <div className="w-40"></div>
      </div>
      {/* Divider */}
      <div className="border-t border-gray-400"></div>
      {/* Bottom Row: Navigation */}
      <div className="flex justify-center space-x-12 py-2 text-sm">
        {[
          { name: 'EXPERTS', href: '#experts-section' },
          { name: 'BLOG', href: '#blog-section' },
          { name: 'SURGICAL', href: '#surgical-section' },
          { name: 'NON-SURGICAL', href: '#non-surgical-section' },
          { name: 'RESULTS', href: '#results-section' },
          { name: 'CONTACT', href: '#contact-section' },
        ].map((item, idx) => (
          <a
            key={idx}
            href={item.href}
            className="hover:underline underline-offset-4 decoration-white"
          >
            {item.name}
          </a>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navbar;