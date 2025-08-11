import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <motion.footer
            id="contact-section"
            className="w-full bg-[#1D1D1D] text-white py-16 px-8 md:px-20 font-inter"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
        >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-700 pb-8">
                <div className="flex flex-col mb-8 md:mb-0">
                    <h2 className="text-3xl font-bold text-white mb-2">SculptDerma</h2>
                    <p className="text-sm text-gray-400">FACE · BODY · SKIN</p>
                </div>
                <div className="flex space-x-4 text-2xl text-gray-400">
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
            <div className="flex flex-col md:flex-row justify-between pt-8 space-y-8 md:space-y-0">
                <div className="md:w-1/4">
                    <h3 className="text-xl font-semibold mb-4 text-white">Services</h3>
                    <ul className="space-y-2 text-gray-400">
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
                <div className="md:w-1/4">
                    <h3 className="text-xl font-semibold mb-4 text-white">Contact Us</h3>
                    <p className="text-gray-400 mb-2">Email: <a href="mailto:info@sculptderma.com" className="text-white hover:text-emerald-400 transition-colors">info@sculptderma.com</a></p>
                    <p className="text-gray-400 mb-2">Phone: <a href="tel:+918983628436" className="text-white hover:text-emerald-400 transition-colors">+91 89836 28436</a></p>
                    <p className="text-sm text-gray-500">(Whatsapp messages only)</p>
                    <h3 className="text-xl font-semibold mt-6 mb-2 text-white">Quick Links</h3>
                    <ul className="space-y-2 text-gray-400">
                        <li><a href="#" className="hover:text-emerald-400 transition-colors">Terms and Conditions</a></li>
                        <li><a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a></li>
                    </ul>
                </div>
                <div className="md:w-1/4">
                    <h3 className="text-xl font-semibold mb-4 text-white">Locations</h3>
                    <p className="text-sm text-gray-400 mb-4">
                        <span className="font-bold block">KHARADI:</span> UG 06, Clover Galleria, Fountain road, Eon free zone, Kharadi, Pune.
                    </p>
                    <p className="text-sm text-gray-400 mb-4">
                        <span className="font-bold block">WAKAD:</span> Shop no. 4, Western High Street, Opp. to Zesonia Mall, Shankar Kalat Nagar, Wakad, Pimpri Chinchwad, Pune, Maharashtra - 411057.
                    </p>
                    <p className="text-sm text-gray-400">
                        <span className="font-bold block">BANER:</span> Hairderma, 601, Shirom Residency, Baner Rd, above Jyoti Appliances, Baner, Pune, Maharashtra - 411045.
                    </p>
                </div>
            </div>
            <div className="mt-8 text-center text-sm text-gray-500">
                &copy; {new Date().getFullYear()} SculptDerma. All rights reserved.
            </div>
        </motion.footer>
    );
};

export default Footer;