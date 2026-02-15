"use client";

import dynamic from 'next/dynamic';

const Pipeline3D = dynamic(() => import('@/components/3d/Pipeline3D'), { ssr: false });

export default function MLOps() {
  return (
    <section id="mlops" className="py-20 bg-black text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold font-mono mb-16 text-center text-white tracking-widest uppercase">
          MLOps Pipeline
        </h2>
        <div className="bg-gray-900/50 rounded-xl border border-gray-800 p-8 backdrop-blur-sm">
          <p className="text-center text-gray-300 mb-8 max-w-2xl mx-auto">
            My approach to MLOps involves automating the entire lifecycle of Machine Learning models, from data ingestion to deployment, ensuring scalability and reproducibility.
          </p>
          <Pipeline3D />
        </div>
      </div>
    </section>
  );
}
