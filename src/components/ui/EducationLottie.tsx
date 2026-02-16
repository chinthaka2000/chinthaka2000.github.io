"use client";

import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { motion } from "framer-motion";

export default function EducationLottie() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="w-full h-64 md:h-80 relative flex items-center justify-center mt-8"
    >
      <DotLottieReact
        src="https://lottie.host/e6d5334a-7dad-4f40-b8cd-5de9aa075f85/lAl7ViiP2Z.lottie"
        loop
        autoplay
        className="w-full h-full"
      />
    </motion.div>
  );
}
