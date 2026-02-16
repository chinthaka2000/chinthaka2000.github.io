"use client";

import { motion } from "framer-motion";

export default function HeroImage() {
  return (
    <div className="relative flex items-center justify-center
      w-full h-[350px]                 // [MOBILE] Container Size
      md:w-[450px] md:h-[450px]        // [DESKTOP] Container Size (DO NOT TOUCH)
      md:translate-x-24                // [DESKTOP] Position (DO NOT TOUCH)
    ">
      {/* Acid Lime Ring */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: [1, 0.4, 1] }}
        transition={{
          scale: { duration: 1, delay: 0.2 },
          opacity: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.2 }
        }}
        className="absolute rounded-full border-[var(--acid-lime)] bg-transparent shadow-[0_0_30px_rgba(212,255,0,0.2)]
          w-[300px] h-[300px]          // [MOBILE] Ring Size (Change these to resize ring on phone)
          top-28                       // [MOBILE] Ring Vertical Position (Change to move up/down)
          border-[6px]                 // [MOBILE] Ring Thickness
          
          md:w-[480px] md:h-[480px]    // [DESKTOP] DO NOT TOUCH
          md:top-18                    // [DESKTOP] DO NOT TOUCH
          md:border-[10px]             // [DESKTOP] DO NOT TOUCH
        "
      />

      {/* User Image */}
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="relative z-10 rounded-full overflow-hidden
          w-[280px] h-[380px]          // [MOBILE] Image Size (Change these to resize image on phone)
          top-12                       // [MOBILE] Image Vertical Position (Change to move up/down)
          
          md:w-[480px] md:h-[620px]    // [DESKTOP] DO NOT TOUCH
          md:top-4                    // [DESKTOP] DO NOT TOUCH
        "
      >
        <img
          src="/me.png"
          alt="Chinthaka Bandaranayake"
          className="w-full h-full object-cover object-top"
        />
      </motion.div>
    </div>
  );
}
