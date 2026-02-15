"use client";

import Lottie from "lottie-react";
import { useEffect, useState } from "react";

interface LottieBackgroundProps {
  animationPath: string; // Path to standard JSON file in public folder or URL
  className?: string;
}

export default function LottieBackground({ animationPath, className = "" }: LottieBackgroundProps) {
  const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    const loadLottie = async () => {
      try {
        const response = await fetch(animationPath);
        if (!response.ok) throw new Error('Failed to fetch lottie json');
        const data = await response.json();
        setAnimationData(data);
      } catch (error) {
        console.error("Error loading animation:", error);
      }
    };

    if (animationPath) {
      loadLottie();
    }
  }, [animationPath]);

  if (!animationData) return <div className={`absolute inset-0 z-0 bg-transparent ${className}`} />;

  return (
    <div className={`absolute inset-0 z-0 overflow-hidden pointer-events-none ${className}`}>
      <Lottie
        animationData={animationData}
        loop={true}
        autoplay={true}
        className="w-full h-full object-cover"
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
}
