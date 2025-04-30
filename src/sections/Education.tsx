import React from 'react';
import SectionHeading from '../components/SectionHeading';
import Card from '../components/Card';
import { GraduationCap, Calendar } from 'lucide-react';

const educationTimeline = [
  {
    degree: "Bachelor of Technology",
    field: "Computer Science",
    institution: "Lovely Professional University",
    location: "Punjab, India",
    duration: "2021 - Present",
    year: "3rd Year",
    description: "Currently pursuing B.Tech in Computer Science with focus on software development and engineering principles.",
    icon: <GraduationCap className="h-8 w-8 text-cyan-400" />
  },
  {
    degree: "Higher Secondary Education (12th)",
    field: "Science",
    institution: "Tagore Public School",
    location: "Palwal, Haryana",
    duration: "2021 - 2022",
    description: "Completed higher secondary education with focus on Physics, Chemistry, and Mathematics.",
    icon: <GraduationCap className="h-8 w-8 text-cyan-400" />
  },
  {
    degree: "Secondary Education (10th)",
    field: "General",
    institution: "Tagore Public School",
    location: "Palwal, Haryana",
    duration: "2019 - 2020",
    description: "Completed secondary education with a strong foundation in core subjects.",
    icon: <GraduationCap className="h-8 w-8 text-cyan-400" />
  }
];

const Education = () => {
  return (
    <div className="container mx-auto px-4">
      <SectionHeading 
        title="Education" 
        subtitle="My academic journey and qualifications"
      />
      
      <div className="relative">
        {/* Timeline connector */}
        <div className="absolute left-0 md:left-1/2 h-full w-px bg-gray-700 transform md:translate-x-0.5 translate-x-5 z-0"></div>
        
        <div className="space-y-12 relative z-10">
          {educationTimeline.map((edu, index) => (
            <div key={index} className={`flex flex-col md:flex-row gap-8 ${
              index % 2 === 0 ? 'md:flex-row-reverse' : ''
            }`}>
              {/* Timeline dot */}
              <div className="absolute left-5 md:left-1/2 w-10 h-10 rounded-full bg-slate-800 border-4 border-cyan-400 transform md:-translate-x-5 -translate-x-5 flex items-center justify-center shadow-lg shadow-cyan-900/20">
                <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
              </div>
              
              {/* Content */}
              <div className={`md:w-1/2 ml-14 md:ml-0 ${
                index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'
              }`}>
                <Card className="p-6 md:p-8 relative overflow-visible">
                  {/* Animated indicator */}
                  <div className={`absolute top-8 ${
                    index % 2 === 0 ? 'left-0 -translate-x-full' : 'right-0 translate-x-full'
                  } transform hidden md:block`}>
                    <div className={`w-8 h-[2px] ${
                      index % 2 === 0 ? 'bg-gradient-to-l' : 'bg-gradient-to-r'
                    } from-cyan-400 to-transparent`}></div>
                  </div>
                  
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-2 bg-slate-700/50 rounded-lg">
                      {edu.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                      <p className="text-cyan-400">{edu.field}</p>
                    </div>
                  </div>
                  
                  <div className="ml-16">
                    <div className="flex items-center gap-1 text-gray-300 mb-3">
                      <span>{edu.institution}, {edu.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 mb-4">
                      <Calendar size={14} />
                      <span>{edu.duration}</span>
                      {edu.year && (
                        <>
                          <span>•</span>
                          <span className="px-2 py-0.5 bg-blue-900/30 text-blue-400 text-xs rounded-full">
                            {edu.year}
                          </span>
                        </>
                      )}
                    </div>
                    <p className="text-gray-300">{edu.description}</p>
                  </div>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;