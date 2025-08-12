import React from 'react';
import DrAkash from '../assets/DrAkash.png';
import DrSomnath from '../assets/DrSomnath.png';
import { motion } from 'framer-motion';

const DrSection = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3 },
        },
    };

    const profileVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    };

    return (
        <motion.div
            id="experts-section"
            className="w-full bg-[#1D1D1D] text-white py-12 px-4 md:px-20"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
        >
            <div className="flex flex-col gap-12 bg-[#1D1D1D]">

                {/* Dr. Akash Tarkase */}
                <motion.div
                    className="flex flex-col md:flex-row items-stretch w-full"
                    variants={profileVariants}
                >
                    {/* Image */}
                    <div className="md:w-1/2 w-full relative overflow-hidden flex items-center justify-center bg-[#1D1D1D] bg-opacity-70 order-1">
                        <img
                            src={DrAkash}
                            alt="Dr. Akash Tarkase"
                            className="w-full h-auto max-h-[300px] md:max-h-[400px] object-cover rounded-none md:rounded-tl-[20px] md:rounded-bl-[20px]"
                        />
                        <div
                            className="absolute inset-0 pointer-events-none hidden md:block"
                            style={{
                                background: "linear-gradient(to right, transparent 60%, #1D1D1D 100%)"
                            }}
                        />
                    </div>

                    {/* Text */}
                    <div className="md:w-1/2 w-full flex flex-col justify-center bg-[#1D1D1D] bg-opacity-70 text-white p-4 md:p-8 order-2">
                        <h2 className="text-2xl font-bold mb-2">Dr. Akash Tarkase</h2>
                        <div className="font-semibold mb-2">DrNB Plastic & Reconstructive Surgery | Cosmetic & Plastic Surgeon | Founder, Sculpt Derma</div>
                        <p className="mb-2 text-sm">
                            Dr. Akash Tarkase is a board-certified plastic surgeon with years of experience in delivering natural, refined results...
                        </p>
                        <p className="text-sm mb-4">
                            We, at Sculpt Derma, are committed to provide customized and transparent facial rejuvenation services...
                        </p>
                        <button className="bg-white text-black font-semibold px-6 py-2 rounded shadow hover:bg-gray-200 transition w-fit">
                            Book Appointment
                        </button>
                    </div>
                </motion.div>

                {/* Dr. Somnath Karad */}
                <motion.div
                    className="flex flex-col md:flex-row-reverse items-stretch w-full"
                    variants={profileVariants}
                >
                    {/* Image */}
                    <div className="md:w-1/2 w-full relative overflow-hidden flex items-center justify-center bg-[#1D1D1D] bg-opacity-70 order-1">
                        <img
                            src={DrSomnath}
                            alt="Dr. Somnath Karad"
                            className="w-full h-auto max-h-[300px] md:max-h-[400px] object-cover rounded-none md:rounded-tr-[20px] md:rounded-br-[20px]"
                        />
                        <div
                            className="absolute inset-0 pointer-events-none hidden md:block"
                            style={{
                                background: "linear-gradient(to left, transparent 60%, #1D1D1D 100%)"
                            }}
                        />
                    </div>

                    {/* Text */}
                    <div className="md:w-1/2 w-full flex flex-col justify-center bg-[#1D1D1D] bg-opacity-70 text-white p-4 md:p-8 order-2">
                        <h2 className="text-2xl font-bold mb-2">Dr. Somnath Karad</h2>
                        <div className="font-semibold mb-2">M.Ch. Plastic & Reconstructive Surgery | Cosmetic & Plastic Surgeon | Co-Founder, Sculpt Derma</div>
                        <p className="mb-2 text-sm">
                            Dr. Somnath Karad brings a wealth of surgical expertise and a holistic aesthetic vision to every procedure...
                        </p>
                        <button className="bg-white text-black font-semibold px-6 py-2 rounded shadow hover:bg-gray-200 transition w-fit">
                            Book Appointment
                        </button>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default DrSection;
