"use client";

import { useEffect, useState } from "react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react/dist/index.js';
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time or wait for resources
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // 2.5 seconds loading time

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black"
        >
          <div className="w-64 h-64 md:w-96 md:h-96">
            <DotLottieReact
              src="https://lottie.host/e448d025-a66d-43ce-ad6b-7b06cc0de0e3/4m0drxY8b3.lottie"
              loop
              autoplay
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
