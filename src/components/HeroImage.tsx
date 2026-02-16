"use client";

import { motion } from "framer-motion";

export default function HeroImage() {
  return (
    // ADJUST HERE: 'translate-x-12' moves everything to the right. Increase number to move further right.
    <div className="relative w-[450px] h-[450px] flex items-center justify-center translate-x-24">
      {/* Acid Lime Ring */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: [1, 0.4, 1] }}
        transition={{
          scale: { duration: 1, delay: 0.2 },
          opacity: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.2 }
        }}
        // ADJUST HERE: 
        // w-[440px] h-[440px] -> Size of the circle
        // top-52 ->  Moves the circle DOWN. Decrease this number (e.g., top-40) to move UP. 
        className="absolute w-[475px] h-[475px] top-36 rounded-full border-[10px] border-[var(--acid-lime)] bg-transparent shadow-[0_0_30px_rgba(212,255,0,0.2)]"
      />

      {/* User Image */}
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        // ADJUST HERE:
        // w-[440px] -> Width of image (matches circle width now)
        // h-[920px] -> Height of image container
        className="relative z-10 w-[440px] h-[720px] top-6 rounded-full overflow-hidden"
      >
        <img
          src="/me.png"
          alt="Chinthaka Bandaranayake"
          width={440}
          height={720}
          className="w-full h-full object-cover object-top filter contrast-125 brightness-110 drop-shadow-2xl translate-x-4"
          style={{
            maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)'
          }}
          loading="eager"
          decoding="sync"
        />
      </motion.div>
    </div>
  );
}
