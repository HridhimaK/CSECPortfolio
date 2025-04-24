// Portfolio Data

export const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Certificates', href: '#certificates' },
  { name: 'Resume', href: '#resume' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Contact', href: '#contact' },

];

export interface Certificate {
  id: number;
  title: string;
  link: string;
}

export const certificates = [
  {
    id: 1,
    title: 'Foundations of Cybersecurity',
    link: '/assets/certificates/foundation.pdf',
  },
  {
    id: 2,
    title: 'Play It Safe: Manage Security Risks',
    link: '/assets/certificates/play.pdf',
  },
  {
    id: 3,
    title: 'Connect and Protect: Networks and Network Security',
    link: '/assets/certificates/network.pdf',
  },
  {
    id: 4,
    title: 'Tools of the Trade: Linux and SQL',
    link: '/assets/certificates/linux.pdf',
  },
  {
    id: 5,
    title: 'Assets, Threats, and Vulnerabilities',
    link: '/assets/certificates/asset.pdf',
  },
  {
    id: 6,
    title: 'Sound the Alarm: Detection and Response',
    link: '/assets/certificates/sound.pdf',
  },
  {
    id: 7,
    title: 'Automate Cybersecurity Tasks with Python',
    link: '/assets/certificates/auto.pdf',
  },
  {
    id: 8,
    title: 'Put It to Work: Prepare for Cybersecurity Jobs',
    link: '/assets/certificates/prepare.pdf',
  },
];

export interface PortfolioProject {
  id: number
  title: string
  description: string
  skills: string[]
  image: string
  report: string       
}

export const portfolioProjects = [
  {
    id: 1,
    title: 'Professional Statement',
    description: 'Crafted a comprehensive professional statement that articulates my cybersecurity philosophy, ethical stance, and career objectives.',
    skills: ['Communication', 'Professional Development', 'Personal Branding'],
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    report: '/assets/reports/professional-statement.pdf',
  },
  {
    id: 2,
    title: 'Security Audit',
    description: 'Conducted a thorough security audit for a fictional company, identifying vulnerabilities and recommending mitigation strategies.',
    skills: ['Risk Assessment', 'Compliance', 'Documentation'],
    image: 'https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    report: '/assets/reports/sa.pdf',
  },
  {
    id: 3,
    title: 'Network Analysis',
    description: 'Analyzed network structure and security protocols, documenting potential weaknesses and suggesting improvements.',
    skills: ['Network Security', 'Traffic Analysis', 'Protocol Review'],
    image: 'https://images.pexels.com/photos/6147363/pexels-photo-6147363.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    report: '/assets/reports/na.pdf',
  },
  {
    id: 4,
    title: 'Linux File Permissions',
    description: 'Managed and optimized file permissions using Linux commands to enhance system security and access control.',
    skills: ['Linux', 'Command Line', 'Access Control'],
    image: 'https://images.pexels.com/photos/207580/pexels-photo-207580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    report: '/assets/reports/lc.pdf',
  },
  {
    id: 5,
    title: 'SQL Security Filtering',
    description: 'Applied advanced filters to SQL queries to protect against injection attacks and secure database operations.',
    skills: ['SQL', 'Database Security', 'Query Optimization'],
    image: 'https://images.pexels.com/photos/325111/pexels-photo-325111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    report: '/assets/reports/ssf.pdf',
  },
  {
    id: 6,
    title: 'Small Business Vulnerability Assessment',
    description: 'Identified and documented potential vulnerabilities for a small business environment, prioritizing remediation efforts.',
    skills: ['Vulnerability Assessment', 'Risk Prioritization', 'Security Planning'],
    image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    report: '/assets/reports/vul.pdf',
  },
  {
    id: 7,
    title: 'Incident Handler\'s Journal',
    description: 'Documented security incidents in a structured format, including detection, analysis, containment, and lessons learned.',
    skills: ['Incident Response', 'Documentation', 'Process Management'],
    image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    report: '/assets/reports/hj.pdf',
  },
  {
    id: 8,
    title: 'Python Security Tool',
    description: 'Developed a Python script to import and parse text files in a security analysis scenario, automating routine security tasks.',
    skills: ['Python', 'Automation', 'Data Parsing'],
    image: 'https://images.pexels.com/photos/2653362/pexels-photo-2653362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    report: '/assets/reports/pst.pdf',
  },
  {
    id: 9,
    title: 'Professional Resume',
    description: 'Created a targeted cybersecurity resume highlighting relevant skills, certifications, and projects to position myself for roles in the field.',
    skills: ['Professional Development', 'Career Planning', 'Self-Marketing'],
    image: 'https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    report: '/assets/reports/hkpr.pdf',
  },
];

export const resumeData = {
  professionalSummary: 
    "Information Systems and Cybersecurity enthusiast with a strong foundation in security principles, risk management, and technical implementations. Passionate about protecting digital assets and implementing robust security measures. Equipped with hands-on experience in vulnerability assessments, incident handling, and security best practices from the Google Cybersecurity Professional Certificate program.",
  
  education: [
    {
      degree: "Bachelor of Science in Information Systems",
      institution: "University of Texas at Arlington",
      location: "Arlington, TX",
      dates: "2019 - 2023",
    },
  ],
  
  workHistory: [
    {
      title: "IT Support Intern",
      company: "ABC Corporation",
      location: "Dallas, TX",
      dates: "May 2022 - August 2022",
      responsibilities: [
        "Assisted with troubleshooting hardware and software issues across the organization",
        "Helped implement security patches and updates for company systems",
        "Documented technical procedures and created user guides",
        "Participated in security awareness training for employees"
      ]
    },
    {
      title: "Student Research Assistant",
      company: "University of Texas at Arlington",
      location: "Arlington, TX",
      dates: "January 2021 - May 2021",
      responsibilities: [
        "Collected and analyzed data for departmental research on cybersecurity practices",
        "Assisted in literature reviews and documentation",
        "Helped organize and present findings to faculty and students",
        "Collaborated with team members on research methodologies"
      ]
    }
  ],
  
  skills: {
    technical: [
      "Network Security",
      "Risk Assessment",
      "Linux Command Line",
      "SQL",
      "Python",
      "Incident Response",
      "Vulnerability Analysis",
      "Security Auditing"
    ],
    soft: [
      "Critical Thinking",
      "Problem Solving",
      "Communication",
      "Teamwork",
      "Attention to Detail",
      "Time Management",
      "Adaptability",
      "Continuous Learning"
    ]
  },
  
  projects: [
    {
      title: "Employee Management System",
      description: "Developed a secure database system for managing employee information with role-based access controls and data encryption."
    },
    {
      title: "Crime Rate Prediction",
      description: "Used statistical analysis and machine learning to predict crime rates based on historical data and socioeconomic factors."
    }

   
  ],
  
  organizations: [
    "Women in Cybersecurity (WiCyS)",
    "Information Systems Security Association (ISSA) - Student Member",
    "Association for Computing Machinery (ACM)"
  ]
};

export const contactInfo = {
  email: "hridhima.karmakar@example.com",
  linkedin: "https://www.linkedin.com/in/hridhimakarmakar",
  github: "https://github.com/hridhimakarmakar"
};