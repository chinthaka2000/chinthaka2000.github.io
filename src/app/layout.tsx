import type { Metadata } from 'next';
// Temporarily using standard fonts to bypass Google Fonts connection issues during build
// import { Inter, Space_Mono, Manrope, Playfair_Display } from 'next/font/google';
import './globals.css';
import Providers from '@/components/layout/Providers';

// const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
// const spaceMono = Space_Mono({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-space-mono' });
// const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' });
// const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-serif' });

export const metadata: Metadata = {
  title: 'Chinthaka Bandaranayake | ML & MLOps Engineer',
  description: 'Portfolio of Chinthaka Bandaranayake, a Machine Learning and MLOps Engineer specializing in 3D design and AI.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`font-sans bg-deep-dark text-white antialiased`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
