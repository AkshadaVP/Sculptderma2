import React from 'react';
import logo from '../assets/logo.png';
import { MdEmail } from 'react-icons/md';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav
      className="bg-[#1D1D1D] text-white w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {/* Top Row */}
      <div className="flex flex-col md:flex-row md:items-center justify-between px-4 sm:px-6 md:px-8 py-3 md:py-0">
        {/* Left: Logo and Contact */}
        <div className="flex flex-wrap justify-center md:justify-start items-center gap-2 sm:gap-4 md:space-x-6">
          <img
            src={logo}
            alt="logo"
            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16"
          />
          <MdEmail className="text-lg sm:text-xl" />
          <FaWhatsapp className="text-lg sm:text-xl" />
          <span className="text-xs sm:text-sm">+91 89836 26437</span>
        </div>

        {/* Center: Brand */}
        <div className="mt-2 md:mt-0 flex justify-center">
          <span className="font-bold text-xs sm:text-sm md:text-base text-center">
            EYE AESTHETICS
          </span>
        </div>

        {/* Right: Empty for spacing */}
        <div className="hidden md:block w-40"></div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-400"></div>

      {/* Bottom Row: Navigation */}
      <div className="flex flex-wrap justify-center gap-3 sm:gap-6 md:space-x-12 py-2 text-xs sm:text-sm">
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
