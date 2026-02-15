"use client";

import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 border-t border-gray-800">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h3 className="text-2xl font-bold font-mono text-cyan-400">CHINTHAKA<span className="text-white">.DEV</span></h3>
          <p className="text-gray-400 mt-2 text-sm">
            Building the future with AI & 3D Web Technologies.
          </p>
        </div>

        <div className="flex space-x-6">
          <a
            href="https://github.com/chinthaka2000"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition-colors"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/chinthaka-bandaranayake/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition-colors"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:contact@chinthaka.dev"
            className="text-gray-400 hover:text-cyan-400 transition-colors"
          >
            <Mail size={24} />
          </a>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-600 text-sm">
        &copy; {new Date().getFullYear()} Chinthaka Bandaranayake. All rights reserved.
      </div>
    </footer>
  );
}
