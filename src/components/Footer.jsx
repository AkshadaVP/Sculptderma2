import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <motion.footer
            id="contact-section"
            className="w-full bg-[#1D1D1D] text-white py-12 px-4 sm:px-6 md:py-16 md:px-20 font-inter"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
        >
            {/* Top Section */}
            <div className="flex flex-col md:flex-row justify-between items-center md:items-center border-b border-gray-700 pb-6 md:pb-8 text-center md:text-left">
                <div className="flex flex-col mb-6 md:mb-0">
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">SculptDerma</h2>
                    <p className="text-xs sm:text-sm text-gray-400">FACE · BODY · SKIN</p>
                </div>
                <div className="flex space-x-3 sm:space-x-4 text-lg sm:text-2xl text-gray-400">
                    <a href="#" aria-label="Facebook" className="hover:text-emerald-400 transition-colors">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" aria-label="Twitter" className="hover:text-emerald-400 transition-colors">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" aria-label="Instagram" className="hover:text-emerald-400 transition-colors">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#" aria-label="LinkedIn" className="hover:text-emerald-400 transition-colors">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                </div>
            </div>

            {/* Middle Section */}
            <div className="flex flex-col md:flex-row justify-between pt-8 gap-8 md:gap-0 text-center md:text-left">
                {/* Services */}
                <div className="md:w-1/4 w-full">
                    <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-white">Services</h3>
                    <ul className="space-y-1.5 sm:space-y-2 text-gray-400 text-sm sm:text-base">
                        <li><a href="#" className="hover:text-emerald-400 transition-colors">Plastic and Aesthetic Surgery</a></li>
                        <li><a href="#" className="hover:text-emerald-400 transition-colors">Dermatology</a></li>
                        <li><a href="#" className="hover:text-emerald-400 transition-colors">Cosmetology</a></li>
                        <li><a href="#" className="hover:text-emerald-400 transition-colors">Hair (Trichology)</a></li>
                        <li><a href="#" className="hover:text-emerald-400 transition-colors">Cosmetic Gynaecology</a></li>
                        <li><a href="#" className="hover:text-emerald-400 transition-colors">Bariatric (Weight Loss) Surgery</a></li>
                        <li><a href="#" className="hover:text-emerald-400 transition-colors">Gender Affirmation Surgery</a></li>
                        <li><a href="#" className="hover:text-emerald-400 transition-colors">Cosmetic Dentistry</a></li>
                        <li><a href="#" className="hover:text-emerald-400 transition-colors">Scar Clinic</a></li>
                        <li><a href="#" className="hover:text-emerald-400 transition-colors">Nutrition and Diet</a></li>
                        <li><a href="#" className="hover:text-emerald-400 transition-colors">IV Drip Bar</a></li>
                        <li><a href="#" className="hover:text-emerald-400 transition-colors">For Men</a></li>
                        <li><a href="#" className="hover:text-emerald-400 transition-colors">For Women</a></li>
                    </ul>
                </div>

                {/* Contact */}
                <div className="md:w-1/4 w-full">
                    <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-white">Contact Us</h3>
                    <p className="text-gray-400 mb-2 text-sm sm:text-base">
                        Email: <a href="mailto:info@sculptderma.com" className="text-white hover:text-emerald-400 transition-colors">info@sculptderma.com</a>
                    </p>
                    <p className="text-gray-400 mb-2 text-sm sm:text-base">
                        Phone: <a href="tel:+918983628436" className="text-white hover:text-emerald-400 transition-colors">+91 89836 28436</a>
                    </p>
                    <p className="text-xs sm:text-sm text-gray-500">(Whatsapp messages only)</p>
                    <h3 className="text-lg sm:text-xl font-semibold mt-5 sm:mt-6 mb-2 text-white">Quick Links</h3>
                    <ul className="space-y-1.5 sm:space-y-2 text-gray-400 text-sm sm:text-base">
                        <li><a href="#" className="hover:text-emerald-400 transition-colors">Terms and Conditions</a></li>
                        <li><a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a></li>
                    </ul>
                </div>

                {/* Locations */}
                <div className="md:w-1/4 w-full">
                    <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-white">Locations</h3>
                    <p className="text-xs sm:text-sm text-gray-400 mb-4">
                        <span className="font-bold block">KHARADI:</span> UG 06, Clover Galleria, Fountain road, Eon free zone, Kharadi, Pune.
                    </p>
                    <p className="text-xs sm:text-sm text-gray-400 mb-4">
                        <span className="font-bold block">WAKAD:</span> Shop no. 4, Western High Street, Opp. to Zesonia Mall, Shankar Kalat Nagar, Wakad, Pimpri Chinchwad, Pune, Maharashtra - 411057.
                    </p>
                    <p className="text-xs sm:text-sm text-gray-400">
                        <span className="font-bold block">BANER:</span> Hairderma, 601, Shirom Residency, Baner Rd, above Jyoti Appliances, Baner, Pune, Maharashtra - 411045.
                    </p>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="mt-6 md:mt-8 text-center text-xs sm:text-sm text-gray-500">
                &copy; {new Date().getFullYear()} SculptDerma. All rights reserved.
            </div>
        </motion.footer>
    );
};

export default Footer;
