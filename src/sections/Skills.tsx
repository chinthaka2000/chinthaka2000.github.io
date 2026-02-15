"use client";

import dynamic from 'next/dynamic';

const Skills3D = dynamic(() => import('@/components/3d/Skills3D'), { ssr: false });

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen py-20 bg-gray-900 text-white relative overflow-hidden">
      <div className="container mx-auto px-6 z-10 relative">
        <h2 className="text-4xl font-bold font-mono mb-16 text-center text-white tracking-widest uppercase">
          Technical Skills
        </h2>

        <div className="flex justify-center items-center">
          <Skills3D />
        </div>
      </div>
    </section>
  );
}
