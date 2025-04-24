"use client";

import { useEffect, useState, useRef } from 'react';
import { themeColors } from '@/lib/theme';
import { resumeData } from '@/lib/data';
import { cn } from '@/lib/utils';
import { GraduationCap, Briefcase, Code, Users, Award } from 'lucide-react';

export default function Resume() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('summary');
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

  const tabs = [
    { id: 'summary', label: 'Summary', icon: <Award className="h-4 w-4 mr-2" /> },
    { id: 'education', label: 'Education', icon: <GraduationCap className="h-4 w-4 mr-2" /> },
    { id: 'experience', label: 'Experience', icon: <Briefcase className="h-4 w-4 mr-2" /> },
    { id: 'skills', label: 'Skills', icon: <Code className="h-4 w-4 mr-2" /> },
    { id: 'projects', label: 'Projects', icon: <Users className="h-4 w-4 mr-2" /> },
  ];

  return (
    <section
      id="resume"
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
            Resume
          </h2>
          <div 
            className={cn(
              "h-1 w-24 mx-auto rounded opacity-0",
              isVisible && "animate-fadeIn delay-200"
            )}
            style={{ backgroundColor: themeColors.primary.main }}
          ></div>
        </div>

        <div 
          className={cn(
            "bg-white rounded-lg shadow-md overflow-hidden opacity-0",
            isVisible && "animate-fadeIn delay-300"
          )}
        >
          {/* Tabs navigation */}
          <div className="flex overflow-x-auto p-2 border-b border-gray-100 bg-gray-50">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={cn(
                  "flex items-center px-4 py-2 text-sm font-medium rounded-md whitespace-nowrap mr-2",
                  activeTab === tab.id
                    ? "text-white"
                    : "text-gray-600 hover:bg-gray-100"
                )}
                style={{ 
                  backgroundColor: activeTab === tab.id ? themeColors.primary.main : 'transparent' 
                }}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="p-6">
            {/* Summary Tab */}
            {activeTab === 'summary' && (
              <div>
                <h3 
                  className="text-xl font-semibold mb-4"
                  style={{ color: themeColors.text.dark }}
                >
                  Professional Summary
                </h3>
                <p 
                  className="text-base leading-relaxed"
                  style={{ color: themeColors.text.medium }}
                >
                  {resumeData.professionalSummary}
                </p>
              </div>
            )}

            {/* Education Tab */}
            {activeTab === 'education' && (
              <div>
                <h3 
                  className="text-xl font-semibold mb-6"
                  style={{ color: themeColors.text.dark }}
                >
                  Education
                </h3>
                {resumeData.education.map((edu, index) => (
                  <div key={index} className="mb-6 pb-6 border-b border-gray-100 last:border-0 last:mb-0 last:pb-0">
                    <div className="flex justify-between mb-2">
                      <h4 
                        className="text-lg font-medium"
                        style={{ color: themeColors.text.dark }}
                      >
                        {edu.degree}
                      </h4>
                      <span 
                        className="text-sm font-medium px-2 py-1 rounded"
                        style={{ 
                          backgroundColor: themeColors.primary.light,
                          color: themeColors.primary.dark 
                        }}
                      >
                        {edu.dates}
                      </span>
                    </div>
                    <p 
                      className="text-base mb-1"
                      style={{ color: themeColors.text.medium }}
                    >
                      {edu.institution}
                    </p>
                    <p 
                      className="text-sm"
                      style={{ color: themeColors.text.light }}
                    >
                      {edu.location}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Experience Tab */}
            {activeTab === 'experience' && (
              <div>
                <h3 
                  className="text-xl font-semibold mb-6"
                  style={{ color: themeColors.text.dark }}
                >
                  Work Experience
                </h3>
                {resumeData.workHistory.map((job, index) => (
                  <div key={index} className="mb-6 pb-6 border-b border-gray-100 last:border-0 last:mb-0 last:pb-0">
                    <div className="flex justify-between mb-2">
                      <h4 
                        className="text-lg font-medium"
                        style={{ color: themeColors.text.dark }}
                      >
                        {job.title}
                      </h4>
                      <span 
                        className="text-sm font-medium px-2 py-1 rounded"
                        style={{ 
                          backgroundColor: themeColors.primary.light,
                          color: themeColors.primary.dark 
                        }}
                      >
                        {job.dates}
                      </span>
                    </div>
                    <p 
                      className="text-base mb-3"
                      style={{ color: themeColors.text.medium }}
                    >
                      {job.company}, {job.location}
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      {job.responsibilities.map((resp, i) => (
                        <li 
                          key={i}
                          className="text-sm"
                          style={{ color: themeColors.text.medium }}
                        >
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {/* Skills Tab */}
            {activeTab === 'skills' && (
              <div>
                <h3 
                  className="text-xl font-semibold mb-6"
                  style={{ color: themeColors.text.dark }}
                >
                  Skills
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 
                      className="text-lg font-medium mb-4"
                      style={{ color: themeColors.text.dark }}
                    >
                      Technical Skills
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {resumeData.skills.technical.map((skill, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 text-sm rounded-full"
                          style={{ 
                            backgroundColor: themeColors.primary.light,
                            color: themeColors.primary.dark 
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 
                      className="text-lg font-medium mb-4"
                      style={{ color: themeColors.text.dark }}
                    >
                      Soft Skills
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {resumeData.skills.soft.map((skill, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 text-sm rounded-full"
                          style={{ 
                            backgroundColor: themeColors.accent.lavender,
                            color: themeColors.text.dark 
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Projects Tab */}
            {activeTab === 'projects' && (
              <div>
                <h3 
                  className="text-xl font-semibold mb-6"
                  style={{ color: themeColors.text.dark }}
                >
                  Projects & Organizations
                </h3>
                <div className="space-y-6 mb-8">
                  {resumeData.projects.map((project, i) => (
                    <div 
                      key={i}
                      className="bg-gray-50 rounded-lg p-4 border-l-4"
                      style={{ borderLeftColor: themeColors.primary.main }}
                    >
                      <h4 
                        className="text-lg font-medium mb-2"
                        style={{ color: themeColors.text.dark }}
                      >
                        {project.title}
                      </h4>
                      <p 
                        className="text-sm"
                        style={{ color: themeColors.text.medium }}
                      >
                        {project.description}
                      </p>
                    </div>
                  ))}
                </div>

                <h4 
                  className="text-lg font-medium mb-4"
                  style={{ color: themeColors.text.dark }}
                >
                  Organizations
                </h4>
                <ul className="list-disc pl-5 space-y-2">
                  {resumeData.organizations.map((org, i) => (
                    <li 
                      key={i}
                      className="text-base"
                      style={{ color: themeColors.text.medium }}
                    >
                      {org}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}