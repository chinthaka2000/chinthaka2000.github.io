"use client";

import dynamic from 'next/dynamic';
import { useState } from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

const Contact3D = dynamic(() => import('@/components/3d/Contact3D'), { ssr: false });

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Portfolio Contact from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    const mailtoLink = `mailto:smartchinthaka512@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

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
            <div className="space-y-6 mt-8">
              <a
                href="mailto:smartchinthaka512@gmail.com"
                className="flex items-center gap-4 text-gray-300 hover:text-acid-lime transition-colors group p-4 bg-white/5 rounded-xl border border-white/10 hover:border-acid-lime/30"
              >
                <div className="p-3 bg-zinc-900 rounded-lg group-hover:bg-acid-lime/10 transition-colors">
                  <Mail className="w-6 h-6 text-acid-lime" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-mono mb-1">Email</p>
                  <p className="font-bold">smartchinthaka512@gmail.com</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/chinthaka-bandaranayake/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-gray-300 hover:text-acid-lime transition-colors group p-4 bg-white/5 rounded-xl border border-white/10 hover:border-acid-lime/30"
              >
                <div className="p-3 bg-zinc-900 rounded-lg group-hover:bg-acid-lime/10 transition-colors">
                  <Linkedin className="w-6 h-6 text-acid-lime" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-mono mb-1">LinkedIn</p>
                  <p className="font-bold">chinthaka-bandaranayake</p>
                </div>
              </a>

              <a
                href="https://github.com/chinthaka2000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-gray-300 hover:text-acid-lime transition-colors group p-4 bg-white/5 rounded-xl border border-white/10 hover:border-acid-lime/30"
              >
                <div className="p-3 bg-zinc-900 rounded-lg group-hover:bg-acid-lime/10 transition-colors">
                  <Github className="w-6 h-6 text-acid-lime" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-mono mb-1">GitHub</p>
                  <p className="font-bold">chinthaka2000</p>
                </div>
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-mono text-gray-400 mb-2">Name</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-acid-lime transition-colors"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-mono text-gray-400 mb-2">Email</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-acid-lime transition-colors"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-mono text-gray-400 mb-2">Message</label>
              <textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-acid-lime transition-colors"
                placeholder="Your message..."
              ></textarea>
            </div>
            <button type="submit" className="w-full bg-acid-lime text-black font-bold font-mono py-4 rounded-none hover:bg-white transition-all uppercase tracking-widest flex items-center justify-center gap-2">
              <Mail className="w-5 h-5" />
              Send via Email App
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
