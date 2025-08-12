import React from 'react';
import headerImage from '../assets/HeaderImg.jpg';
import { motion } from 'framer-motion';

const Header = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.4 },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <motion.header
      className="w-full flex flex-col lg:flex-row items-stretch bg-[#1D1D1D] mt-10 px-4 sm:px-6 lg:px-20"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Image first on mobile, second on desktop */}
      <motion.div
        className="w-full lg:w-1/2 relative overflow-hidden order-1 lg:order-2"
        variants={childVariants}
      >
        <img
          src={headerImage}
          alt="Header"
          className="w-full h-56 sm:h-72 lg:h-full object-cover 
                     rounded-none lg:rounded-tr-[20px] lg:rounded-br-[20px]"
        />
        <div
          className="absolute inset-0 pointer-events-none hidden lg:block"
          style={{
            background: 'linear-gradient(to left, transparent 60%, #1D1D1D 100%)',
          }}
        />
      </motion.div>

      {/* Text second on mobile, first on desktop */}
      <motion.div
        className="w-full lg:w-1/2 flex items-start justify-center bg-[#1D1D1D] bg-opacity-70 text-white p-4 sm:p-6 lg:p-8 order-2 lg:order-1"
        variants={childVariants}
      >
        <div>
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4">
            Reveal Brighter, Younger Eyes with Advanced Aesthetic Science
          </h1>
          <p className="text-sm sm:text-base mb-4">
            At SculptDerma, we understand that your eyes are the most expressive and delicate part of your face.
            They convey your emotions, mood, energy, and even your age. Over time, factors such as aging, fatigue,
            genetics, and sun exposure can lead to visible concerns like dark circles, wrinkles, droopy eyelids,
            puffiness, or volume loss.
            <br /><br />
            Our Eye Aesthetics program is designed to refresh and restore the eye area through safe, effective,
            and medically-proven treatments — both surgical and non-surgical.
          </p>
          <div className="mt-4">
            <h2 className="text-lg sm:text-xl font-semibold mb-2">What is Eye Aesthetics?</h2>
            <p className="text-sm sm:text-base mb-2">
              Eye Aesthetics refers to a range of cosmetic and medical treatments that improve the appearance
              of the area around the eyes, including:
            </p>
            <ul className="list-disc list-inside text-sm sm:text-base mb-2 pl-4">
              <li>Upper & lower eyelids</li>
              <li>Under-eye area (tear troughs)</li>
              <li>Eyebrows & periorbital wrinkles</li>
              <li>Skin texture and volume</li>
            </ul>
            <p className="text-sm sm:text-base">
              These treatments aim to enhance the eyes’ brightness, reduce signs of fatigue or aging, and
              restore facial harmony.
            </p>
          </div>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Header;
