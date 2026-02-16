"use client";

import { motion } from "framer-motion";
import { Code2, Cpu, Database, GraduationCap, Brain, Terminal } from "lucide-react";
import LottieBackground from '@/components/ui/LottieBackground';

export default function About() {
  return (
    <section id="about" className="min-h-screen py-24 bg-black relative overflow-hidden">
      <LottieBackground animationPath="/hero-bg.json" className="opacity-20 pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold font-mono text-acid-lime mb-16 tracking-tight"
        >
          ABOUT_ME
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]">

          {/* 1. Main Bio - Large Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 row-span-2 bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-acid-lime/30 transition-colors duration-300"
          >
            <div className="flex items-start gap-4 mb-6">
              <Terminal className="text-acid-lime w-8 h-8" />
              <h3 className="text-2xl font-bold">The Developer</h3>
            </div>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I’m passionate about designing and building <span className="text-white font-semibold">end-to-end machine learning systems</span> that create real-world impact. My focus goes beyond model development — I work across the full ML lifecycle, from data and experimentation to deployment, monitoring, and continuous improvement.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I’m particularly interested in the intersection of <span className="text-acid-lime">AI, Machine Learning, MLOps, and scalable system design</span>, where intelligent models are transformed into reliable, production-ready solutions aligned with business goals.
            </p>

            <div className="mb-6">
              <p className="text-lg text-gray-300 mb-3">I enjoy approaching ML as an engineering discipline, with an emphasis on:</p>
              <div className="flex flex-wrap gap-2">
                {['Reproducibility', 'Scalability', 'Automation', 'Performance Measurement', 'Maintainability'].map(item => (
                  <span key={item} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-acid-lime font-mono">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I’m continuously exploring better ways to move from experimentation to production and to build robust, data-driven systems that deliver measurable value.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed italic border-l-2 border-acid-lime pl-4">
              I’m always open to collaborating on innovative projects, contributing to real-world ML applications, and connecting with people who are working on production ML, MLOps, and applied AI solutions.
            </p>
          </motion.div>

          {/* 2. Tech Stack - Tall Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="md:col-span-1 row-span-2 bg-gradient-to-b from-white/10 to-transparent border border-white/10 rounded-3xl p-8 flex flex-col items-center text-center hover:border-acid-lime/30 transition-colors duration-300"
          >
            <div className="w-full h-full flex flex-col justify-center items-center gap-6">
              <Cpu className="w-16 h-16 text-acid-lime animate-pulse-slow" />
              <h3 className="text-xl font-bold">Core Stack</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {['Python', 'TensorFlow', 'PyTorch', 'Docker', 'Kubernetes', 'H2O', 'Next.js'].map(tech => (
                  <span key={tech} className="px-3 py-1 rounded-full bg-white/5 text-sm font-mono border border-white/10">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* 3. Education - Small Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="md:col-span-1 bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors"
          >
            <GraduationCap className="text-acid-lime w-8 h-8 mb-4" />
            <h3 className="text-xl font-bold mb-2">Education</h3>
            <p className="text-gray-400 text-sm">BSc (Hons) in Computer Science</p>
            <p className="text-gray-500 text-xs mt-1">Specializing in AI & Data Science</p>
          </motion.div>

          {/* 4. Interests - Small Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="md:col-span-1 bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors"
          >
            <Brain className="text-acid-lime w-8 h-8 mb-4" />
            <h3 className="text-xl font-bold mb-2">Interests</h3>
            <p className="text-gray-400 text-sm">3D Web Design, Robotics, Automated Trading Systems</p>
          </motion.div>

          {/* 5. Location/Status - Small Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="md:col-span-1 bg-zinc-900 border border-white/10 rounded-3xl p-8 flex items-center justify-between group"
          >
            <div>
              <h3 className="text-xl font-bold text-gray-200">Open for Work</h3>
              <p className="text-acid-lime text-sm mt-1 animate-pulse">Available for Hire</p>
            </div>
            <div className="w-3 h-3 bg-acid-lime rounded-full shadow-[0_0_10px_#D4FF00]"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
