"use client";

import dynamic from 'next/dynamic';
import { useNavigation } from '@/context/NavigationContext';
// import ContentOverlay from '@/components/layout/ContentOverlay'; // REMOVED
import Navbar from '@/components/layout/Navbar';
import { motion, AnimatePresence } from 'framer-motion';
import InfiniteTypewriter from '@/components/InfiniteTypewriter';
import { Download } from 'lucide-react';
import About from '@/sections/About';
import Projects from '@/sections/Projects';
import Skills from '@/sections/Skills';
import Contact from '@/sections/Contact';
import Experience from '@/sections/Experience';
import LottieBackground from '@/components/ui/LottieBackground';

import Preloader from '@/components/ui/Preloader';

// Dynamic import for 3D Scene
const RoboScene = dynamic(() => import('@/components/3d/RoboScene'), { ssr: false });
const HeroImage = dynamic(() => import('@/components/HeroImage'), { ssr: false });



export default function Home() {
  const { activeSection } = useNavigation();

  return (
    <div className="relative bg-black text-white selection:bg-acid-lime selection:text-black">
      <Preloader />
      {/* 1. Persistent 3D Background (Fixed) */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <RoboScene />
      </div>

      {/* 2. Top Navigation (Fixed) */}
      <Navbar />

      {/* 3. Scrollable Sections */}
      <main className="relative z-10 w-full">

        {/* HERO SECTION */}
        <section id="home" className="h-screen w-full relative flex items-center justify-center overflow-hidden bg-black">
          <LottieBackground animationPath="/hero-bg.json" className="opacity-60 absolute inset-0 z-0 -translate-y-12 scale-110" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Left Text */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-left"
              >
                <h1 className="text-6xl md:text-7xl font-bold font-mono tracking-tighter mb-4 text-white mt-10 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                  CHINTHAKA
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                    BANDARANAYAKE
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-acid-lime font-mono tracking-widest uppercase mb-8 h-[32px] flex items-center">
                  <InfiniteTypewriter
                    words={['AI/ML Enthusiast', 'MLOps Practitioner', 'Aspiring Data Scientist']}
                    className=""
                  />
                </p>
                <div className="flex flex-col md:flex-row gap-4 items-center mt-10">
                  <div className="w-64 px-6 py-2 border border-white/20 rounded-full backdrop-blur-md bg-white/5 flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-green-500 inline-block mr-3 animate-pulse"></span>
                    <span className="text-sm font-mono tracking-widest">SYSTEM ONLINE</span>
                  </div>

                  <a
                    href="/skill.md"
                    download
                    className="w-64 flex items-center justify-center gap-2 px-6 py-2 border border-acid-lime text-acid-lime rounded-full hover:bg-acid-lime/10 transition-colors uppercase font-mono tracking-widest text-sm group"
                  >
                    <Download className="w-4 h-4 group-hover:animate-bounce" />
                    SKILL.md
                  </a>
                </div>
              </motion.div>

              {/* Right Image */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="hidden md:flex justify-end"
              >
                <HeroImage />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <About />

        {/* EXPERIENCE SECTION */}
        <Experience />

        {/* PROJECTS SECTION */}
        <Projects />

        {/* SKILLS SECTION */}
        <Skills />

        {/* CONTACT SECTION */}
        <Contact />

      </main>
    </div>
  );
}
