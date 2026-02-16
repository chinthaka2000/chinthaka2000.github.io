"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useNavigation } from "@/context/NavigationContext";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { activeSection, setActiveSection } = useNavigation();

  const navLinks = [
    { name: 'Home', id: 'HOME' },
    { name: 'About', id: 'ABOUT' },
    { name: 'Experience', id: 'EXPERIENCE' },
    { name: 'Projects', id: 'PROJECTS' },
    { name: 'Skills', id: 'SKILLS' },
    { name: 'Contact', id: 'CONTACT' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 py-6">
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#home"
          className="text-xl font-bold font-mono tracking-tighter hover:text-acid-lime transition-colors flex items-center gap-2"
        >
          CHINTHAKA2000<span className="text-acid-lime">.github.io</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex relative group">
          {/* Animated Border Container */}
          <div className="absolute -inset-[1px] rounded-full overflow-hidden">
            <div className="absolute inset-[-100%] bg-[conic-gradient(from_90deg_at_50%_50%,#000_0%,var(--acid-lime)_50%,#000_100%)] animate-[spin_4s_linear_infinite] opacity-70" />
          </div>

          {/* Inner Content */}
          <div className="relative flex space-x-8 items-center bg-black/80 backdrop-blur-md px-8 py-3 rounded-full border border-white/5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={`#${link.id.toLowerCase()}`} // Changed to anchor tag with href
                className={`text-sm font-medium tracking-wide transition-all duration-300 hover:text-acid-lime relative group ${activeSection === link.id ? 'text-acid-lime' : 'text-gray-300'
                  }`}
              >
                <span className="uppercase font-mono">{link.name}</span>
                {activeSection === link.id && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-acid-lime shadow-[0_0_10px_#D4FF00]"></span>
                )}
              </a>
            ))}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none bg-white/10 p-2 rounded-md"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-t border-white/10 p-6 flex flex-col space-y-4 shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={`#${link.id.toLowerCase()}`}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block text-lg font-medium text-left ${activeSection === link.id ? 'text-acid-lime' : 'text-gray-300'
                }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
