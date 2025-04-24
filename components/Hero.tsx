"use client";

import { useEffect, useState } from 'react';
import { themeColors } from '@/lib/theme';
import { ShieldCheck } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';


export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden"
      style={{ backgroundColor: themeColors.background.cream }}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-24 w-64 h-64 rounded-full opacity-20" 
          style={{ backgroundColor: themeColors.accent.lavender }}></div>
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full opacity-30" 
          style={{ backgroundColor: themeColors.primary.light }}></div>
        <div className="absolute top-2/3 left-1/3 w-32 h-32 rounded-full opacity-20" 
          style={{ backgroundColor: themeColors.accent.mint }}></div>
      </div>
      
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">

          {/* Text side */}
          <div className="text-center md:text-left md:flex-1">
            <div className={cn(
              "inline-flex items-center justify-center mb-6 p-3 rounded-full opacity-0",
              isVisible && "animate-fadeIn"
            )} style={{ backgroundColor: themeColors.primary.light }}>
              <ShieldCheck className="h-6 w-6" style={{ color: themeColors.primary.main }} />
            </div>
            
            <h1 className={cn(
              "text-4xl md:text-5xl lg:text-6xl font-bold mb-4 opacity-0",
              isVisible && "animate-fadeIn delay-100"
            )} style={{ color: themeColors.text.dark }}>
              Hridhima Karmakar
            </h1>
            
            <h2 className={cn(
              "text-xl md:text-2xl lg:text-3xl font-medium mb-6 opacity-0",
              isVisible && "animate-fadeIn delay-200"
            )} style={{ color: themeColors.text.medium }}>
              Information Systems & Cybersecurity Enthusiast
            </h2>
            
            <p className={cn(
              "max-w-2xl text-lg md:text-xl opacity-0",
              isVisible && "animate-fadeIn delay-300"
            )} style={{ color: themeColors.text.medium }}>
              Protecting digital assets through innovative security solutions, 
              risk assessment, and proactive threat mitigation.
            </p>
            
            <div className={cn(
              "mt-12 opacity-0",
              isVisible && "animate-fadeIn delay-400"
            )}>
              <a 
                href="#about"
                className="inline-flex items-center px-6 py-3 text-base font-medium rounded-full text-white hover-lift hover-shadow transition-all"
                style={{ backgroundColor: themeColors.primary.main }}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Photo side */}
          <div className={cn(
            "w-64 h-64 relative rounded-lg overflow-hidden opacity-0 shadow-lg",
            isVisible && "animate-fadeIn delay-200"
          )}>
            <Image
              src="/public/assets/profile.jpg"
              alt="Profile portrait of Hridhima Karmakar"
              fill         // or width/height if you prefer
              className="object-cover"
            />

          </div>
        </div>
      </div>
    </section>
  );
}
