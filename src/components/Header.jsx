import React from 'react';
import headerImage from '../assets/HeaderImg.jpg';
import { motion } from 'framer-motion';

const Header = () => {
  // Variants for the parent container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        // This makes child animations start one after the other
        staggerChildren: 0.4, 
      },
    },
  };

  // Variants for the child elements (text and image)
  const childVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.header
      className="w-full flex items-stretch pl-20 pr-20 bg-[#1D1D1D] mt-10"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Left: Text - This will animate with the childVariants */}
      <motion.div
        className="w-1/2 flex items-start justify-center bg-[#1D1D1D] bg-opacity-70 text-white p-8"
        variants={childVariants}
      >
        <div>
          <h1 className="text-3xl font-bold mb-4" style={{ color: '#FFFFFF' }}>Reveal Brighter, Younger Eyes with Advanced Aesthetic Science</h1>
          <p className="text-sm mb-4">
            At SculptDerma, we understand that your eyes are the most expressive and delicate part of your face. They convey your emotions, mood, energy, and even your age. Over time, factors such as aging, fatigue, genetics, and sun exposure can lead to visible concerns like dark circles, wrinkles, droopy eyelids, puffiness, or volume loss.
            <br /><br />
            Our Eye Aesthetics program is designed to refresh and restore the eye area through safe, effective, and medically-proven treatments — both surgical and non-surgical.
          </p>
          <div className="mt-4">
            <h2 className="text-lg font-semibold mb-2">What is Eye Aesthetics?</h2>
            <p className="text-sm mb-2">Eye Aesthetics refers to a range of cosmetic and medical treatments that improve the appearance of the area around the eyes, including:</p>
            <ul className="list-disc list-inside text-sm mb-2 pl-4">
              <li>Upper & lower eyelids</li>
              <li>Under-eye area (tear troughs)</li>
              <li>Eyebrows & periorbital wrinkles</li>
              <li>Skin texture and volume</li>
            </ul>
            <p className="text-sm">These treatments aim to enhance the eyes’ brightness, reduce signs of fatigue or aging, and restore facial harmony.</p>
          </div>
        </div>
      </motion.div>
      
      {/* Right: Image - This will animate with the same childVariants */}
      <motion.div
        className="w-1/2 relative overflow-hidden"
        variants={childVariants}
      >
        <img
          src={headerImage}
          alt="Header"
          className="w-full h-full object-cover rounded-tr-[20px] rounded-br-[20px]"
        />
        {/* Feather/gradient overlay */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "linear-gradient(to left, transparent 60%, #1D1D1D 100%)"
        }} />
      </motion.div>
    </motion.header>
  );
};

export default Header;