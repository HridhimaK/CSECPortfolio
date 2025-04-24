"use client";

import { useEffect, useState, useRef } from 'react';
import { themeColors } from '@/lib/theme';
import { cn } from '@/lib/utils';
import { Shield, FileText, Award, Briefcase } from 'lucide-react';

export default function About() {
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
      id="about"
      ref={sectionRef}
      className="py-24 px-4"
      style={{ backgroundColor: themeColors.background.light }}
    >
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 
            className={cn(
              "text-3xl md:text-4xl font-bold mb-4 opacity-0",
              isVisible && "animate-fadeIn"
            )}
            style={{ color: themeColors.text.dark }}
          >
            About Me
          </h2>
          <div 
            className={cn(
              "h-1 w-24 mx-auto rounded opacity-0",
              isVisible && "animate-fadeIn delay-200"
            )}
            style={{ backgroundColor: themeColors.primary.main }}
          ></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div 
            className={cn(
              "opacity-0",
              isVisible && "animate-slideInLeft"
            )}
          >
            <p 
              className="text-lg leading-relaxed mb-6"
              style={{ color: themeColors.text.dark }}
            >
              I am an Information Systems and Cybersecurity enthusiast with a passion for protecting digital infrastructures from evolving threats. My journey in this field began with a strong foundation in information systems, which evolved into a focused interest in cybersecurity.
            </p>
            <p 
              className="text-lg leading-relaxed mb-6"
              style={{ color: themeColors.text.dark }}
            >
              Through the Google Cybersecurity Professional Certificate program, I've developed practical skills in vulnerability assessments, incident handling, security auditing, and implementation of security controls. I approach cybersecurity with a holistic mindset, understanding that effective protection requires attention to technical, human, and procedural aspects.
            </p>
            <p 
              className="text-lg leading-relaxed"
              style={{ color: themeColors.text.dark }}
            >
              My goal is to contribute to organizations by helping them build robust security postures, stay ahead of threats, and protect their valuable digital assets while enabling business operations to thrive securely.
            </p>
          </div>

          <div 
            className={cn(
              "grid grid-cols-2 gap-6 opacity-0",
              isVisible && "animate-slideInRight"
            )}
          >
            {[
              {
                icon: <Shield className="h-10 w-10 mb-3" style={{ color: themeColors.primary.main }} />,
                title: "Security Analysis",
                description: "Identifying vulnerabilities and recommending security controls"
              },
              {
                icon: <FileText className="h-10 w-10 mb-3" style={{ color: themeColors.accent.lavender }} />,
                title: "Documentation",
                description: "Creating clear, thorough security documentation"
              },
              {
                icon: <Award className="h-10 w-10 mb-3" style={{ color: themeColors.accent.peach }} />,
                title: "Certifications",
                description: "Google Cybersecurity Professional Certificate"
              },
              {
                icon: <Briefcase className="h-10 w-10 mb-3" style={{ color: themeColors.accent.mint }} />,
                title: "Projects",
                description: "Hands-on security implementations and analyses"
              }
            ].map((item, index) => (
              <div 
                key={index}
                className={cn(
                  "bg-white rounded-lg p-6 text-center shadow-sm hover-lift hover-shadow transition-all",
                  isVisible && `animate-fadeIn delay-${(index + 1) * 100}`
                )}
              >
                <div className="flex justify-center">{item.icon}</div>
                <h3 
                  className="text-lg font-medium mb-2"
                  style={{ color: themeColors.text.dark }}
                >{item.title}</h3>
                <p 
                  className="text-sm"
                  style={{ color: themeColors.text.medium }}
                >{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}