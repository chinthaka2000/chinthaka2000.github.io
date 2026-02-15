"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Section = 'HOME' | 'ABOUT' | 'EXPERIENCE' | 'PROJECTS' | 'SKILLS' | 'MLOPS' | 'CONTACT';

interface NavigationContextType {
  activeSection: Section;
  setActiveSection: (section: Section) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export function NavigationProvider({ children }: { children: ReactNode }) {
  const [activeSection, setActiveSection] = useState<Section>('HOME');

  useEffect(() => {
    const handleScroll = () => {
      const sections: Section[] = ['HOME', 'ABOUT', 'EXPERIENCE', 'PROJECTS', 'SKILLS', 'MLOPS', 'CONTACT'];

      // Default to HOME if at top
      if (window.scrollY < 100) {
        setActiveSection('HOME');
        return;
      }

      for (const section of sections) {
        const element = document.getElementById(section.toLowerCase());
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the section is in the middle of the viewport
          if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <NavigationContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
}
