import React, { useEffect, useRef } from 'react';
import vision1 from '../assets/vision1.jpg';
import vision2 from '../assets/vision2.jpg';
import vision3 from '../assets/vision3.jpg';
import c1 from '../assets/c1.jpg';
import c2 from '../assets/c2.jpg';
import { motion } from 'framer-motion';

const points1 = [
  {
    title: 'First Signs of Aging Appear Around the Eyes',
    content: (
      <>
        <span className="text-sm">The skin around the eyes is thin, delicate, and constantly in motion (blinking ~20,000 times a day). As we age:</span>
        <ul className="list-disc list-inside ml-4 mt-1 text-sm">
          <li>Collagen and elastin fibers break down</li>
          <li>The fat under the eye starts to shift and diminish</li>
          <li>Muscle tone weakens, leading to drooping eyelids and under-eye bags</li>
        </ul>
        <span className="block mt-1 text-sm">Result? Tired, saggy, and older-looking eyes — even if the rest of the face looks youthful.</span>
      </>
    ),
  },
  {
    title: 'Tired Eyes = Tired Face',
    content: (
      <>
        <span className="text-sm">Many patients at SculptDerma complain of people saying:</span>
        <ul className="list-disc list-inside ml-4 mt-1 text-sm">
          <li>“You look tired,”</li>
          <li>“Didn’t you sleep well?”</li>
          <li>“Are you upset?”</li>
        </ul>
        <span className="block mt-1 text-sm">Even when they’re completely healthy.</span>
        <br />
        <span className="block mt-1 text-sm">Why? Because:</span>
        <ul className="list-disc list-inside ml-4 mt-1 text-sm">
          <li>Dark circles, hollow tear troughs, and sagging lids create a fatigued appearance</li>
          <li>Frown lines and crow’s feet send false signals of sadness, worry, or exhaustion</li>
          <li>A small concern in the eye region can make the entire face look low in energy, sad, or aged.</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Eyes Define Facial Harmony & Youth',
    content: (
      <>
        <span className="text-sm">In aesthetic proportions:</span>
        <ul className="list-disc list-inside ml-4 mt-1 text-sm">
          <li>Wide, open eyes with a defined brow arch are signs of youth and alertness</li>
          <li>A smooth, continuous transition from lower eyelid to cheek is ideal</li>
          <li>Any disruption — like puffiness, pigmentation, or loose skin — creates visual disharmony</li>
        </ul>
        <span className="block mt-1 text-sm">Eye rejuvenation brings back Facial symmetry, balance, and vitality.</span>
      </>
    ),
  },
  {
    title: 'Minor Enhancements = Major Impact',
    content: (
      <>
        <span className="text-sm">Compared to large facial surgeries, small tweaks around the eyes (like under-eye fillers or Botox for crow’s feet) often create dramatic improvements in appearance — with minimal downtime.</span>
        <ul className="list-disc list-inside ml-4 mt-1 text-sm">
          <li>Tear trough fillers restore volume and reduce shadows</li>
          <li>Botox opens up the brow and lifts tired expressions</li>
          <li>Skin boosters hydrate and refresh thin crepey skin</li>
        </ul>
        <span className="block mt-1 text-sm">These targeted enhancements are quick, safe, and high-impact.</span>
      </>
    ),
  },
];

const points2 = [
  {
    title: 'Psychological & Social Confidence Boost',
    content: (
      <>
        <span className="text-sm">Several clinical studies (and our own patient testimonials) show:</span>
        <ul className="list-disc list-inside ml-4 mt-1 text-sm">
          <li>Patients report higher confidence, better social engagement, and improved mood after eye aesthetic treatments</li>
          <li>They feel more “like themselves,” less judged or misunderstood</li>
          <li>Many say they now look how they feel inside — not how age or fatigue had made them appear</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Eyes Are the Focal Point in Photos & Video Calls',
    content: (
      <>
        <span className="text-sm">In the post-pandemic world of selfies, video calls, and Instagram reels, your eyes are always in focus.</span>
        <ul className="list-disc list-inside ml-4 mt-1 text-sm">
          <li>On video, the upper face dominates the screen</li>
          <li>Eye bags, uneven brows, or tired eyes are more noticeable on camera</li>
          <li>Improving your eye aesthetics enhances your digital and real-life first impression.</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Medical Relevance Beyond Cosmetics',
    content: (
      <>
        <span className="text-sm">Some eye aesthetic treatments also have medical value:</span>
        <ul className="list-disc list-inside ml-4 mt-1 text-sm">
          <li>Blepharoplasty may improve peripheral vision in droopy eyelids</li>
          <li>Fat grafting or fillers can improve volume loss post illness or weight loss</li>
          <li>Brow ptosis correction helps those with functional visual interference</li>
        </ul>
      </>
    ),
  },
];

// Custom CSS for hiding the scrollbar
const hideScrollbar = `
  .hide-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .hide-scrollbar {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
`;

const CentreContent = () => {
  const signaturePlans = [
    {
      name: 'Bright Eye Boost',
      includes: 'PRP + Mesopeel + Jalupro Lite',
      bestFor: 'Tired eyes, mild pigmentation',
    },
    {
      name: 'Lifted Look Plan',
      includes: 'Threads + Botox Brow Lift + Skin Booster',
      bestFor: 'Hooded lids, low-set brows',
    },
    {
      name: 'Youthful Eye Pro',
      includes: 'Blepharoplasty + Fat Grafting + Laser Resurfacing',
      bestFor: 'Advanced aging, eye bags',
    },
  ];

  const treatmentCosts = [
    { treatment: 'Under-eye Filler (1 ml)', price: '₹18,000–₹25,000' },
    { treatment: 'Botox (Crow’s Feet)', price: '₹8,000–₹12,000' },
    { treatment: 'PRP Eye Rejuvenation', price: '₹4,000–₹6,000' },
    { treatment: 'Blepharoplasty (Upper/Lower)', price: '₹45,000–₹90,000' },
    { treatment: 'MNRF / CO2 Laser (Eye area)', price: '₹6,000–₹12,000' },
    { treatment: 'Threads (Eyebrow lift)', price: '₹20,000–₹35,000' },
  ];

  const carouselImages = [
    { before: c1, after: c2, title: 'Liposuction Abdomen' },
    { before: c1, after: c2, title: 'Liposuction Abdomen' },
    { before: c1, after: c2, title: 'Liposuction Abdomen' },
    { before: c1, after: c2, title: 'Liposuction Abdomen' },
    { before: c1, after: c2, title: 'Liposuction Abdomen' },
    // Duplicate the first images to make the loop seamless
    { before: c1, after: c2, title: 'Liposuction Abdomen' },
    { before: c1, after: c2, title: 'Liposuction Abdomen' },
  ];

  const carouselRef = useRef(null);
  const animationRef = useRef(null);
  const scrollSpeed = 0.5;

  const animate = () => {
    if (carouselRef.current) {
      const carouselWidth = carouselRef.current.scrollWidth;
      const visibleWidth = carouselRef.current.clientWidth;
      const scrollPosition = carouselRef.current.scrollLeft;
      const loopPoint = carouselWidth - visibleWidth * 2;

      if (scrollPosition >= loopPoint) {
        carouselRef.current.scrollLeft = 0;
      } else {
        carouselRef.current.scrollLeft += scrollSpeed;
      }
    }
    animationRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    animationRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationRef.current);
  }, []);

  const fadeInVariants = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };
  
  const staggeredItemVariants = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };
  
  const staggeredContainerVariants = {
    initial: { opacity: 0 },
    whileInView: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  return (
    <div className=" w-full bg-[#1D1D1D] text-white py-12 px-4 md:px-20 flex flex-col gap-12 font-inter">
      <style>{hideScrollbar}</style>

      {/* Centered Heading and Intro */}
      <motion.div
        id="blog-section"
        className="w-full flex flex-col items-center justify-center text-center mb-8"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className=' border border-white w-full flex flex-col justify-center text-center items-center rounded-2xl p-6'>
          <h2 className="text-2xl font-bold mb-4 ">Why Eye Aesthetics Matters?</h2>
          <p className="mb-6 text-sm max-w-3xl">
            The eyes are not just a sensory organ — they’re a central part of facial communication, emotion, and beauty. In both medical and cosmetic practice, the periorbital area (the area around the eyes) plays a crucial role in how people perceive health, youthfulness, fatigue, and emotion. The eyes are not just a sensory organ — they’re a central part of facial communication, emotion, and beauty. In both medical and cosmetic practice, the periorbital area (the area around the eyes) plays a crucial role in how people perceive health, youthfulness, fatigue, and emotion.
          </p>
        </div>
      </motion.div>

      {/* Row 1 */}
      <motion.div
        className="flex flex-col md:flex-row items-stretch w-full gap-8 min-h-[400px]"
        initial="initial"
        whileInView="whileInView"
        variants={staggeredContainerVariants}
        viewport={{ once: true }}
      >
        {/* Image left */}
        <motion.div
          className="md:w-1/2 w-full relative overflow-hidden flex items-stretch"
          variants={fadeInVariants}
        >
          <img
            src={vision1}
            alt="Vision 1"
            className="w-full h-full object-cover object-center max-h-none rounded-tl-[20px] rounded-bl-[20px]"
          />
          {/* Feather/gradient overlay */}
          <div className="absolute inset-0 pointer-events-none" style={{
            background: "linear-gradient(to right, transparent 60%, #1D1D1D 100%)"
          }} />
        </motion.div>
        {/* Content right */}
        <motion.div
          className="md:w-1/2 w-full flex flex-col justify-center bg-[#1D1D1D] bg-opacity-70 text-white p-8 rounded-tr-[20px] rounded-br-[20px]"
          variants={fadeInVariants}
        >
          {points1.map((point, idx) => (
            <motion.div key={idx} className="mb-6 flex items-start" variants={staggeredItemVariants}>
              <span className="text-2xl font-bold mr-3 mt-1 min-w-[2rem]">{idx + 1}.</span>
              <div>
                <h3 className="text-lg font-semibold mb-1">{point.title}</h3>
                <div className="text-sm">{point.content}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Row 2 */}
      <motion.div
        className="flex flex-col md:flex-row-reverse items-stretch w-full gap-8 min-h-[400px]"
        initial="initial"
        whileInView="whileInView"
        variants={staggeredContainerVariants}
        viewport={{ once: true }}
      >
        {/* Image right */}
        <motion.div
          className="md:w-1/2 w-full relative overflow-hidden flex items-stretch"
          variants={fadeInVariants}
        >
          <img
            src={vision2}
            alt="Vision 2"
            className="w-full h-full object-cover object-center max-h-none rounded-tr-[20px] rounded-br-[20px]"
          />
          {/* Feather/gradient overlay */}
          <div className="absolute inset-0 pointer-events-none" style={{
            background: "linear-gradient(to left, transparent 60%, #1D1D1D 100%)"
          }} />
        </motion.div>
        {/* Content left */}
        <motion.div
          className="md:w-1/2 w-full flex flex-col justify-center bg-[#1D1D1D] bg-opacity-70 text-white p-8 rounded-tl-[20px] rounded-bl-[20px]"
          variants={fadeInVariants}
        >
          {points2.map((point, idx) => (
            <motion.div key={idx} className="mb-6 flex items-start" variants={staggeredItemVariants}>
              <span className="text-2xl font-bold mr-3 mt-1 min-w-[2rem]">{idx + 5}.</span>
              <div>
                <h3 className="text-lg font-semibold mb-1">{point.title}</h3>
                <div className="text-sm">{point.content}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Non-Surgical Procedures */}
      <motion.div
        id="non-surgical-section"
        className="w-full bg-[#1D1D1D] text-white p-8 rounded-2xl shadow-xl border border-gray-700"
        variants={fadeInVariants}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-bold mb-6 text-black bg-white p-5 rounded-lg">Non-Surgical Eye Aesthetic Procedures</h2>
        <div className="p-5">
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-2">1. Under-Eye Fillers (Tear Trough Correction)</h3>
            <p className="text-base text-gray-300 mb-2">
              Hyaluronic acid-based fillers like Juvederm Volbella or Restylane to correct under-eye hollows and shadows.
            </p>
            <p className="text-base text-gray-300">
              We offer multi-modal treatment for pigmentation, thinning, and vascular circles:
            </p>
            <ul className="list-disc list-inside ml-4 text-sm mt-1 text-gray-400">
              <li>Quick 20-minute treatment</li>
              <li>No downtime</li>
              <li>Lasts 9–12 months</li>
            </ul>
          </div>
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-2">2. Dark Circle Treatments</h3>
            <ul className="list-disc list-inside ml-4 text-base text-gray-300">
              <li>Q-Switched Laser Toning</li>
              <li>PRP/GFC Injections</li>
              <li>Skin Boosters like Jalupro & Rejuran</li>
              <li>Periocular Peels (e.g. Mesopeel)</li>
            </ul>
          </div>
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-2">3. Botox for Crow’s Feet & Brow Lift</h3>
            <p className="text-base text-gray-300 mb-2">
              Botulinum Toxin (Botox) is used to relax muscles and reduce:
            </p>
            <ul className="list-disc list-inside ml-4 text-base text-gray-300">
              <li>Wrinkles around the outer eyes (“crow’s feet”)</li>
              <li>Droopy or low-set eyebrows</li>
              <li>Fine lines on upper cheeks and under eyes</li>
            </ul>
          </div>
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-2">4. Eye Skin Boosters</h3>
            <p className="text-base text-gray-300">
              Hydrating injectables (like Jalupro, Profhilo) to improve thin, crepey skin and stimulate collagen production around the eyes.
            </p>
          </div>
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-2">5. MNRF (Microneedling Radiofrequency)</h3>
            <p className="text-base text-gray-300">
              Non-invasive, collagen-stimulating device that smoothens fine lines and tightens skin around the eye zone.
            </p>
          </div>
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-2">6. Laser Resurfacing for Periorbital Wrinkles</h3>
            <p className="text-base text-gray-300">
              Fractional CO2 or Er:YAG lasers to treat deep wrinkles, skin laxity, and pigmentation.
            </p>
          </div>
          <div className="mb-0">
            <h3 className="text-xl font-semibold mb-2">7. Thread Lift for Eyebrow & Eye Corner Elevation</h3>
            <p className="text-base text-gray-300">
              PDO threads for non-surgical eyebrow lift, enhancing eye openness and youthfulness.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Surgical Procedures */}
      <motion.div
        id="surgical-section"
        className="flex flex-col md:flex-row-reverse items-stretch w-full gap-8 min-h-[400px]"
        initial="initial"
        whileInView="whileInView"
        variants={staggeredContainerVariants}
        viewport={{ once: true }}
      >
        {/* Image right */}
        <motion.div
          className="md:w-1/2 w-full relative overflow-hidden flex items-stretch"
          variants={fadeInVariants}
        >
          <img
            src={vision3}
            alt="Vision 3"
            className="w-full h-100 object-cover object-center max-h-none rounded-tr-[20px] rounded-br-[20px]"
          />
          {/* Feather/gradient overlay */}
          <div className="absolute inset-0 pointer-events-none" style={{
            background: "linear-gradient(to left, transparent 60%, #1D1D1D 100%)"
          }} />
        </motion.div>
        {/* Content left */}
        <motion.div
          className="md:w-1/2 w-full flex flex-col justify-center bg-[#1D1D1D] bg-opacity-70 text-white p-8 rounded-tl-[20px] rounded-bl-[20px]"
          variants={fadeInVariants}
        >
          <div>
            <h3 className="text-2xl font-bold mb-6">Surgical Eye Aesthetic Procedures</h3>
            <div className="text-sm">
              <ul className="list-disc list-inside space-y-4">
                <li>
                  <span className="font-bold">1. Blepharoplasty (Eyelid Surgery)</span>
                  <br />
                  <span className="block mt-1">A definitive surgical solution for:</span>
                  <ul className="list-disc list-inside ml-4">
                    <li>Droopy upper eyelids</li>
                    <li>Puffy lower eyelids</li>
                    <li>Eye bags or excess skin</li>
                  </ul>
                  <span className="block mt-1">Performed by our plastic surgeon with local or general anesthesia.</span>
                </li>
                <li>
                  <span className="font-bold">2. Fat Grafting Around the Eyes</span>
                  <br />
                  <span className="block mt-1">Autologous fat is harvested and injected into under-eye hollows or upper eyelids for long-term natural volume restoration.</span>
                </li>
                <li>
                  <span className="font-bold">3. Surgical Brow Lift</span>
                  <br />
                  <span className="block mt-1">Lifting sagging eyebrows and correcting deep forehead folds to open up the eye area.</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Signature Plans Table */}
      <motion.div
        className="w-full bg-[#1D1D1D] text-white p-8 rounded-2xl shadow-xl border border-gray-700"
        variants={fadeInVariants}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-bold mb-6 text-white text-center">SculptDerma's Signature Eye Aesthetic Plans</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-gray-800 text-gray-300 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left w-1/4">Package Name</th>
                <th className="py-3 px-6 text-left w-1/2">Includes</th>
                <th className="py-3 px-6 text-left w-1/4">Best For</th>
              </tr>
            </thead>
            <tbody className="text-gray-300 text-sm font-light">
              {signaturePlans.map((plan, index) => (
                <tr key={index} className="border-b border-gray-700 hover:bg-gray-800">
                  <td className="py-3 px-6 text-left whitespace-nowrap">{plan.name}</td>
                  <td className="py-3 px-6 text-left">{plan.includes}</td>
                  <td className="py-3 px-6 text-left">{plan.bestFor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Treatment Cost Table */}
      <motion.div
        className="w-full bg-[#1D1D1D] text-white p-8 rounded-2xl shadow-xl border border-gray-700"
        variants={fadeInVariants}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-bold mb-6 text-white text-center">Eye Aesthetic Treatment Cost in Pune</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-gray-800 text-gray-300 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left w-3/5">Treatment</th>
                <th className="py-3 px-6 text-left w-2/5">Price (INR)</th>
              </tr>
            </thead>
            <tbody className="text-gray-300 text-sm font-light">
              {treatmentCosts.map((item, index) => (
                <tr key={index} className="border-b border-gray-700 hover:bg-gray-800">
                  <td className="py-3 px-6 text-left whitespace-nowrap">{item.treatment}</td>
                  <td className="py-3 px-6 text-left">{item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-6 text-xs text-center text-white">
          *Exact cost may vary depending on the severity and combinations. Personalized quotes are given after consultation.
        </p>
      </motion.div>

      {/* Why Choose Section */}
      <motion.div
        className='flex gap-5 justify-center'
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className='flex text-center justify-center items-center bg-[#1D1D1D] text-white text-4xl font-bold rounded-2xl w-200 border border-white'>
          Why Choose SculptDerma for Eye Aesthetics?
        </div>
        <motion.div
          className='flex justify-center'
          initial="initial"
          whileInView="whileInView"
          variants={staggeredContainerVariants}
          viewport={{ once: true }}
        >
          <ul className="space-y-2 text-white">
            <motion.li variants={staggeredItemVariants}><span className="text-white mr-2">■</span>In-house dermatologists + plastic surgeons</motion.li>
            <motion.li variants={staggeredItemVariants}><span className="text-white mr-2">■</span>FDA-approved products: Juvederm, Restylane, Botox, Profhilo</motion.li>
            <motion.li variants={staggeredItemVariants}><span className="text-white mr-2">■</span>Fully equipped minor OT & advanced laser technologies</motion.li>
            <motion.li variants={staggeredItemVariants}><span className="text-white mr-2">■</span>Safe, personalized & protocol-driven approach</motion.li>
            <motion.li variants={staggeredItemVariants}><span className="text-white mr-2">■</span>Thousands of satisfied clients</motion.li>
          </ul>
        </motion.div>
      </motion.div>

      {/* Our Results Carousel */}
      <motion.div
        id="results-section"
        className="w-full bg-[#] text-white py-8"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center text-white">OUR RESULTS</h2>
        <div
          ref={carouselRef}
          className="flex overflow-x-auto hide-scrollbar snap-x snap-mandatory"
        >
          {carouselImages.map((image, index) => (
            <div key={index} className="flex-none w-[200px] md:w-[250px] mx-4 snap-center">
              <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg p-4">
                <div className="text-center mb-4 text-lg font-semibold">
                  {image.title}
                </div>
                <div className="flex gap-2">
                  <div className="relative w-1/2 rounded-lg overflow-hidden">
                    <img
                      src={image.before}
                      alt={`Before ${index + 1}`}
                      className="w-full h-auto object-cover rounded-lg"
                    />
                    <span className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded-full">
                      Before
                    </span>
                  </div>
                  <div className="relative w-1/2 rounded-lg overflow-hidden">
                    <img
                      src={image.after}
                      alt={`After ${index + 1}`}
                      className="w-full h-auto object-cover rounded-lg"
                    />
                    <span className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded-full">
                      After
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Map Section */}
      <motion.div
        id='contact-section'
        className="w-full bg-[#1D1D1D] text-white py-12 px-4 md:px-20 flex flex-col md:flex-row gap-8 font-inter"
        initial="initial"
        whileInView="whileInView"
        variants={staggeredContainerVariants}
        viewport={{ once: true }}
      >
        <motion.div
          className="w-full md:w-1/2 rounded-lg overflow-hidden shadow-xl border border-gray-700"
          variants={fadeInVariants}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15124.96593444983!2d73.91617475!3d18.5996024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c129f122e20b%3A0xf6a761e3d740c02c!2sSculptDerma!5e0!3m2!1sen!2sin!4v1691234567890!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="SculptDerma Location Map"
          ></iframe>
        </motion.div>
        <motion.div
          className="w-full md:w-1/2 flex flex-col justify-center p-8"
          variants={fadeInVariants}
        >
          <h2 className="text-4xl font-bold mb-6" style={{ color: 'WHITE' }}>
            Visit Us
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Address:</h3>
              <p className="text-sm">
                <span className="font-bold">KHARADI:</span> Sculptderma, UG 06, Clover Galleria, Fountain road, Eon free zone, Kharadi, Pune. Phone: +91 89836 28436
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">WAKAD:</h3>
              <p className="text-sm">
                Sculptderma, Shop no. 4, Western High Street, Opp. to Zesonia Mall, Shankar Kalat Nagar, Wakad, Pimpri Chinchwad, Pune, Maharashtra - 411057. Phone: +91 95526 80484
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">BANER:</h3>
              <p className="text-sm">
                Sculptderma, Hairderma, 601, Shirom Residency, Baner Rd, above Jyoti Appliances, Baner, Pune, Maharashtra - 411045. Phone: +91 89836 28437
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CentreContent;