"use client";

import { useInView } from "react-intersection-observer";
import Image from "next/image";

const educationData = [
  {
    degree: "Bachelor of Engineering in Computer Science",
    institution: "KLE Technological University",
    period: "2022 - 2026",
    achievements: [
      "Current CGPA: 9.66",
      "Member of the University's Data Science Club",
    ],
    logo: "/image/KLElogo.png"
  },
  {
    degree: "Research Intern",
    institution: "Center of Excellence in Visual Intelligence",
    period: "2024 - 2026",
    achievements: [
      "Worked on physics based underwater image restoration",
    ],
    logo: "/image/CEVIlogo.jpg"
  },
  {
    degree: "Higher Secondary Education",
    institution: "Mount Litera Zee School, Goa",
    period: "2020 - 2022",
    achievements: [
      "12th Percentage: 95%",
      "Class Valedictorian",
    ],
    logo: "/image/Mount-Litera-Zee-School-Goa.jpg"
  }
];

export default function EducationSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="py-16 bg-white" id="education">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-gray-900">
          Education
        </h2>
        
        <div className="max-w-4xl" ref={ref}>
          {educationData.map((edu, index) => (
            <div
              key={index}
              className={`mb-12 transform transition-all duration-500 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="bg-white rounded-xl shadow-lg p-6 relative overflow-hidden">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Logo */}
                  <div className="flex-shrink-0 w-24 h-24 relative">
                    <Image
                      src={edu.logo}
                      alt={`${edu.institution} logo`}
                      fill
                      className="object-contain"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-purple-800 font-semibold mb-1">
                      {edu.institution}
                    </p>
                    <p className="text-gray-600 text-sm mb-4">
                      {edu.period}
                    </p>
                    
                    <ul className="space-y-2">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-center text-gray-700">
                          <svg 
                            className="w-5 h-5 text-purple-800 mr-2" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              strokeWidth="2" 
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
