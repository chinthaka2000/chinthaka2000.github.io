"use client";

import { motion } from "framer-motion";
import { experience, education, certifications } from "@/data/experience";
import { Briefcase, Calendar, Award, GraduationCap } from "lucide-react";

import EducationLottie from "@/components/ui/EducationLottie";

export default function Experience() {
  return (
    <section id="experience" className="min-h-screen py-24 bg-zinc-900 border-t border-white/10 relative">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold font-mono text-acid-lime mb-16 tracking-tight"
        >
          EXPERIENCE
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">

          {/* LEFT COLUMN: WORK EXPERIENCE */}
          <div>
            <div className="flex items-center gap-4 mb-12">
              <Briefcase className="text-white w-8 h-8" />
              <h3 className="text-2xl font-bold text-white tracking-widest uppercase">Career History</h3>
            </div>

            <div className="space-y-12 relative border-l border-white/10 ml-3 pl-8">
              {experience.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-zinc-900 border-2 border-acid-lime"></span>

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h4 className="text-xl font-bold text-white">{job.role}</h4>
                    <span className="text-xs font-mono text-acid-lime border border-acid-lime/30 px-2 py-1 rounded-full w-fit mt-2 sm:mt-0">
                      {job.period}
                    </span>
                  </div>

                  <p className="text-lg text-gray-400 mb-4">{job.company}</p>
                  <p className="text-gray-300 leading-relaxed mb-4 text-sm">{job.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {job.skills.map(skill => (
                      <span key={skill} className="text-xs text-gray-500 bg-white/5 px-2 py-1 rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: EDUCATION */}
          <div>
            <div className="flex items-center gap-4 mb-12">
              <GraduationCap className="text-white w-8 h-8" />
              <h3 className="text-2xl font-bold text-white tracking-widest uppercase">Education</h3>
            </div>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + (index * 0.1) }}
                  viewport={{ once: true }}
                  className="bg-black/40 border border-white/10 p-6 rounded-2xl hover:border-acid-lime/30 transition-colors"
                >
                  <h4 className="text-xl font-bold text-white mb-2">{edu.degree}</h4>
                  <p className="text-acid-lime font-mono text-sm mb-4">{edu.institution} | {edu.period}</p>
                  <p className="text-gray-400 text-sm">{edu.description}</p>
                </motion.div>
              ))}
            </div>

            {/* LOTTIE ANIMATION */}
            <EducationLottie />
          </div>

        </div>

        {/* BOTTOM SECTION: CERTIFICATIONS */}
        <div>
          <div className="flex items-center gap-4 mb-12">
            <Award className="text-white w-8 h-8" />
            <h3 className="text-2xl font-bold text-white tracking-widest uppercase">Licenses & Certifications</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <motion.a
                key={cert.id}
                href={cert.url}
                target="_blank"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex items-center justify-between bg-black/40 border border-white/10 p-4 rounded-xl hover:bg-white/5 hover:border-acid-lime/30 transition-all group"
              >
                <div className="pr-4">
                  <h4 className="font-bold text-white text-sm group-hover:text-acid-lime transition-colors line-clamp-1" title={cert.name}>
                    {cert.name}
                  </h4>
                  <p className="text-xs text-gray-500 mt-1">{cert.issuer} • {cert.date}</p>
                </div>
                <ExternalLinkIcon className="text-gray-600 group-hover:text-acid-lime transition-colors w-4 h-4 flex-shrink-0" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ExternalLinkIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
      <polyline points="15 3 21 3 21 9"></polyline>
      <line x1="10" y1="14" x2="21" y2="3"></line>
    </svg>
  )
}
