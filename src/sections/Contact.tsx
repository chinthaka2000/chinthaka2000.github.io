"use client";

import dynamic from 'next/dynamic';

const Contact3D = dynamic(() => import('@/components/3d/Contact3D'), { ssr: false });

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen py-20 bg-black text-white flex items-center justify-center relative overflow-hidden">
      <Contact3D />
      <div className="container mx-auto px-6 max-w-4xl z-10">
        <h2 className="text-4xl font-bold font-mono mb-16 text-center text-white tracking-widest uppercase">
          Get In Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-12 bg-gray-900/50 p-8 rounded-2xl border border-gray-800 backdrop-blur-sm">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Let's Connect</h3>
            <p className="text-gray-400">
              I'm currently looking for Machine Learning and MLOps internship opportunities.
              Whether you have a question or just want to say hi, my inbox is always open!
            </p>
            <div className="space-y-4">
              <p className="flex items-center space-x-3 text-gray-300">
                <span className="text-acid-lime font-mono">Email:</span>
                <a href="mailto:contact@chinthaka.dev" className="hover:text-acid-lime transition-colors">contact@chinthaka.dev</a>
              </p>
              <p className="flex items-center space-x-3 text-gray-300">
                <span className="text-acid-lime font-mono">LinkedIn:</span>
                <a href="https://www.linkedin.com/in/chinthaka-bandaranayake/" target="_blank" rel="noopener noreferrer" className="hover:text-acid-lime transition-colors">chinthaka-bandaranayake</a>
              </p>
            </div>
          </div>

          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-mono text-gray-400 mb-2">Name</label>
              <input type="text" id="name" className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors" placeholder="Your Name" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-mono text-gray-400 mb-2">Email</label>
              <input type="email" id="email" className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors" placeholder="your@email.com" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-mono text-gray-400 mb-2">Message</label>
              <textarea id="message" rows={4} className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors" placeholder="Your message..."></textarea>
            </div>
            <button type="submit" className="w-full bg-acid-lime text-black font-bold font-mono py-4 rounded-none hover:bg-white transition-all uppercase tracking-widest">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
