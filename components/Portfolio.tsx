"use client";

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { themeColors } from '@/lib/theme';
import { portfolioProjects } from '@/lib/data';
import { cn } from '@/lib/utils';
import { ExternalLink } from 'lucide-react';

export default function Portfolio() {
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

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="py-24 px-4"
      style={{ backgroundColor: themeColors.background.cream }}
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 
            className={cn(
              "text-3xl md:text-4xl font-bold mb-4 opacity-0",
              isVisible && "animate-fadeIn"
            )}
            style={{ color: themeColors.text.dark }}
          >
            Portfolio Projects
          </h2>
          <div 
            className={cn(
              "h-1 w-24 mx-auto rounded opacity-0",
              isVisible && "animate-fadeIn delay-200"
            )}
            style={{ backgroundColor: themeColors.primary.main }}
          ></div>
          <p 
            className={cn(
              "max-w-2xl mx-auto mt-6 text-lg opacity-0",
              isVisible && "animate-fadeIn delay-300"
            )}
            style={{ color: themeColors.text.medium }}
          >
            Projects developed during the Google Cybersecurity Professional Certificate program
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioProjects.map((project, index) => (
            <div 
              key={project.id}
              className={cn(
                "bg-white rounded-lg shadow-sm overflow-hidden opacity-0 hover-lift hover-shadow transition-all",
                isVisible && `animate-fadeIn delay-${100 + index * 50}`
              )}
            >
              <div className="relative h-48 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  unoptimized
                />
                <div 
                  className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end"
                >
                  <h3 className="text-xl font-semibold text-white p-4">{project.title}</h3>
                </div>
              </div>
              <div className="p-5">
                <p 
                  className="text-base mb-4"
                  style={{ color: themeColors.text.medium }}
                >
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.skills.map((skill, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 text-xs rounded-full"
                      style={{ 
                        backgroundColor: themeColors.primary.light,
                        color: themeColors.primary.dark 
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <a
                  href={project.report}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium hover:underline"
                  style={{ color: themeColors.primary.dark }}
                >
                  View Details
                  <ExternalLink className="ml-1 h-3 w-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}