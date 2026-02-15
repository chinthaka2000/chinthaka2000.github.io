"use client";

import { Typewriter } from 'react-simple-typewriter';

interface TypewriterEffectProps {
  words: string[];
  className?: string;
}

export default function InfiniteTypewriter({ words, className = "" }: TypewriterEffectProps) {
  return (
    <span className={className}>
      <Typewriter
        words={words}
        loop={0} // Infinite loop
        cursor
        cursorStyle="|"
        typeSpeed={50}
        deleteSpeed={30}
        delaySpeed={1000}
      />
    </span>
  );
}
