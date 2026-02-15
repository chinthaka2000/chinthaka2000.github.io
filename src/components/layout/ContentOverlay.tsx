"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useNavigation } from '@/context/NavigationContext';
import About from '@/sections/About';
import Projects from '@/sections/Projects';
import Skills from '@/sections/Skills';
import MLOps from '@/sections/MLOps';
import Contact from '@/sections/Contact';

export default function ContentOverlay() {
  const { activeSection, setActiveSection } = useNavigation();

  // Mapping sections to components
  const renderSection = () => {
    switch (activeSection) {
      case 'ABOUT': return <About />;
      case 'PROJECTS': return <Projects />;
      case 'SKILLS': return <Skills />;
      case 'MLOPS': return <MLOps />;
      case 'CONTACT': return <Contact />;
      default: return null;
    }
  };

  return (
    <AnimatePresence>
      {activeSection !== 'HOME' && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed inset-0 z-40 flex items-center justify-center p-4 md:p-8 bg-black/60 backdrop-blur-sm"
        >
          {/* Glass Modal Container */}
          <div className="relative w-full max-w-6xl h-[85vh] bg-deep-dark/90 border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col">

            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 border-b border-white/10 bg-black/40">
              <h2 className="text-2xl font-mono text-acid-lime tracking-widest uppercase">
                {activeSection} <span className="text-white/50 text-sm normal-case">/ MODULE_LOADED</span>
              </h2>
              <button
                onClick={() => setActiveSection('HOME')}
                className="p-2 bg-white/5 hover:bg-acid-lime hover:text-black rounded-full transition-all duration-300 group"
              >
                <X className="w-6 h-6 group-hover:rotate-90 transition-transform" />
              </button>
            </div>

            {/* Scrollable Content Area */}
            <div className="flex-1 overflow-y-auto custom-scrollbar p-6 relative">
              {/* 
                  Note: The existing sections (About, Projects, etc.) might have their own paddings/margins 
                  that need adjustment for this modal view. We wrap them in a div to ensure they fit.
               */}
              <div className="min-h-full">
                {renderSection()}
              </div>
            </div>

            {/* Modal Footer (Decorative) */}
            <div className="p-2 bg-black/80 border-t border-white/5 text-right">
              <p className="text-xs text-gray-600 font-mono">SYSTEM_STATUS: ONLINE</p>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
