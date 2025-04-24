"use client";

import { useEffect, useState, useRef } from 'react';
import { themeColors } from '@/lib/theme';
import { contactInfo } from '@/lib/data';
import { cn } from '@/lib/utils';
import { Mail, Linkedin, Github, ChevronUp } from 'lucide-react';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 px-4 relative"
      style={{ backgroundColor: themeColors.primary.light }}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-24 w-64 h-64 rounded-full opacity-20" 
          style={{ backgroundColor: themeColors.accent.lavender }}></div>
        <div className="absolute bottom-1/4 -left-32 w-96 h-96 rounded-full opacity-20" 
          style={{ backgroundColor: themeColors.primary.main }}></div>
      </div>
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-16">
          <h2 
            className={cn(
              "text-3xl md:text-4xl font-bold mb-4 opacity-0",
              isVisible && "animate-fadeIn"
            )}
            style={{ color: themeColors.text.dark }}
          >
            Get In Touch
          </h2>
          <div 
            className={cn(
              "h-1 w-24 mx-auto rounded opacity-0",
              isVisible && "animate-fadeIn delay-200"
            )}
            style={{ backgroundColor: themeColors.primary.dark }}
          ></div>
          <p 
            className={cn(
              "max-w-2xl mx-auto mt-6 text-lg opacity-0",
              isVisible && "animate-fadeIn delay-300"
            )}
            style={{ color: themeColors.text.medium }}
          >
            Feel free to reach out for collaborations, opportunities, or just to connect!
          </p>
        </div>

        <div 
          className={cn(
            "bg-white rounded-lg shadow-md p-8 opacity-0",
            isVisible && "animate-fadeIn delay-400"
          )}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a
              href={`mailto:${contactInfo.email}`}
              className="flex flex-col items-center p-6 rounded-lg text-center hover-lift hover-shadow transition-all"
              style={{ backgroundColor: themeColors.background.light }}
            >
              <div 
                className="p-4 rounded-full mb-4"
                style={{ backgroundColor: themeColors.primary.light }}
              >
                <Mail className="h-6 w-6" style={{ color: themeColors.primary.dark }} />
              </div>
              <h3 
                className="text-lg font-medium mb-2"
                style={{ color: themeColors.text.dark }}
              >
                Email
              </h3>
              <p 
                className="text-sm break-all"
                style={{ color: themeColors.text.medium }}
              >
                {contactInfo.email}
              </p>
            </a>

            <a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 rounded-lg text-center hover-lift hover-shadow transition-all"
              style={{ backgroundColor: themeColors.background.light }}
            >
              <div 
                className="p-4 rounded-full mb-4"
                style={{ backgroundColor: themeColors.primary.light }}
              >
                <Linkedin className="h-6 w-6" style={{ color: themeColors.primary.dark }} />
              </div>
              <h3 
                className="text-lg font-medium mb-2"
                style={{ color: themeColors.text.dark }}
              >
                LinkedIn
              </h3>
              <p 
                className="text-sm"
                style={{ color: themeColors.text.medium }}
              >
                Connect Professionally
              </p>
            </a>

            <a
              href={contactInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 rounded-lg text-center hover-lift hover-shadow transition-all"
              style={{ backgroundColor: themeColors.background.light }}
            >
              <div 
                className="p-4 rounded-full mb-4"
                style={{ backgroundColor: themeColors.primary.light }}
              >
                <Github className="h-6 w-6" style={{ color: themeColors.primary.dark }} />
              </div>
              <h3 
                className="text-lg font-medium mb-2"
                style={{ color: themeColors.text.dark }}
              >
                GitHub
              </h3>
              <p 
                className="text-sm"
                style={{ color: themeColors.text.medium }}
              >
                View My Projects
              </p>
            </a>
          </div>
        </div>

        <div className="text-center mt-16">
          <button
            onClick={scrollToTop}
            className={cn(
              "inline-flex items-center justify-center p-3 rounded-full opacity-0 hover-lift transition-all",
              isVisible && "animate-fadeIn delay-500"
            )}
            style={{ backgroundColor: 'white' }}
            aria-label="Back to top"
          >
            <ChevronUp className="h-6 w-6" style={{ color: themeColors.primary.dark }} />
          </button>
        </div>
      </div>

      <footer className="mt-16 text-center relative z-10">
        <p 
          className={cn(
            "text-sm opacity-0",
            isVisible && "animate-fadeIn delay-600"
          )}
          style={{ color: themeColors.text.dark }}
        >
          &copy; {new Date().getFullYear()} Hridhima Karmakar. All rights reserved.
        </p>
      </footer>
    </section>
  );
}