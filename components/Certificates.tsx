 "use client";

import { useEffect, useState, useRef } from 'react';
import { themeColors } from '@/lib/theme';
import { certificates } from '@/lib/data';
import { cn } from '@/lib/utils';
import { Award, ExternalLink } from 'lucide-react';

export default function Certificates() {
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
      id="certificates"
      ref={sectionRef}
      className="py-24 px-4"
      style={{ backgroundColor: themeColors.background.cream }}
    >
      <div className="container mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className={cn(
              "text-3xl md:text-4xl font-bold mb-4 opacity-0",
              isVisible && "animate-fadeIn"
            )}
            style={{ color: themeColors.text.dark }}
          >
            Certificates
          </h2>
          <div
            className={cn(
              "h-1 w-24 mx-auto rounded opacity-0",
              isVisible && "animate-fadeIn delay-200"
            )}
            style={{ backgroundColor: themeColors.primary.main }}
          />
          {/* Program title turned into a link */}
          <a
            href="/assets/certificates/google-cybersec-overview.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "max-w-2xl mx-auto mt-6 text-lg opacity-0 inline-flex items-center hover:underline",
              isVisible && "animate-fadeIn delay-300"
            )}
            style={{ color: themeColors.primary.dark }}
          >
            Google Cybersecurity Professional Certificate
            <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </div>

        {/* Certificate Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificates.map((cert, index) => (
            <div
              key={cert.id}
              className={cn(
                "bg-white rounded-lg p-6 shadow-sm flex items-center opacity-0 hover-lift hover-shadow transition-all",
                isVisible && `animate-fadeIn delay-${100 + index * 50}`
              )}
              style={{ borderLeft: `4px solid ${themeColors.primary.main}` }}
            >
              <div
                className="flex-shrink-0 mr-4 p-3 rounded-full"
                style={{ backgroundColor: themeColors.primary.light }}
              >
                <Award
                  className="h-6 w-6"
                  style={{ color: themeColors.primary.dark }}
                />
              </div>
              <div className="flex-grow">
                <h3
                  className="text-lg font-medium mb-1"
                  style={{ color: themeColors.text.dark }}
                >
                  {cert.title}
                </h3>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium hover:underline"
                  style={{ color: themeColors.primary.dark }}
                >
                  View Certificate
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
