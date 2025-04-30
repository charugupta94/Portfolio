import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import Card from '../components/Card';
import Button from '../components/Button';
import { Calendar, Award, ExternalLink } from 'lucide-react';

const certifications = [
  {
    title: "Programming in C++: A Hands-on Introduction ",
    issuer: "Coursera",
    date: "March 202",
    description: "A hands-on introduction to programming in C++ covering basic syntax, data types, and control structures.",
    image: "/Coursera1.png",
    url: "https://www.coursera.org/account/accomplishments/specialization/certificate/QUJGTRUPWMET"
  },
  {
    title: "Server side JavaScript with Node.js",
    issuer: "Coursera",
    date: "June 2023",
    description: "Comprehensive course on server-side JavaScript development using Node.js, Express, and MongoDB.",
    image: "Coursera1.png",
    url: "https://www.coursera.org/account/accomplishments/certificate/ZBXAPMEKEVZ6"
  },
  {
    title: "Building Web Applications in PHP",
    issuer: "Coursera",
    date: "December 2024",
    description: "Learn how to build dynamic web applications using PHP, covering topics like sessions, cookies, and database integration.",
    image: "Coursera1.png",
    url: "https://www.coursera.org/account/accomplishments/certificate/2LLL05JVLGVF"
  }
];

const Certifications = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  
  const toggleExpand = (index: number) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };
  
  return (
    <div className="container mx-auto px-4">
      <SectionHeading 
        title="Certifications" 
        subtitle="Professional certificates that demonstrate my expertise and continuous learning"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certifications.map((cert, index) => (
          <Card 
            key={index} 
            className={`overflow-hidden transition-all duration-300 ${
              expandedIndex === index ? 'md:col-span-2 lg:col-span-3' : ''
            }`}
          >
            <div className="relative">
              <img 
                src={cert.image} 
                alt={cert.title} 
                className={`w-full object-cover transition-all duration-500 ${
                  expandedIndex === index ? 'h-64' : 'h-48'
                }`}
              />
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-slate-900 to-transparent opacity-80"></div>
              <div className="absolute inset-0 flex items-end">
                <div className="p-6 w-full">
                  <div className="flex flex-wrap items-center justify-between">
                    <h3 className="text-xl font-bold text-white mb-1">{cert.title}</h3>
                    <button 
                      onClick={() => toggleExpand(index)}
                      className="text-xs underline text-cyan-400 hover:text-cyan-300"
                    >
                      {expandedIndex === index ? 'Show Less' : 'Show More'}
                    </button>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-gray-300 mb-2">
                    <Award size={14} className="text-cyan-400" />
                    <span>{cert.issuer}</span>
                    <span>•</span>
                    <Calendar size={14} className="text-cyan-400" />
                    <span>{cert.date}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={`px-6 overflow-hidden transition-all duration-500 ${
              expandedIndex === index ? 'py-6 max-h-96' : 'max-h-0 py-0'
            }`}>
              <p className="text-gray-300 mb-5">{cert.description}</p>
              <Button 
                text="View Certificate" 
                primary
                icon={<ExternalLink size={16} />} 
                href={cert.url}
                target="_blank"
                className="inline-flex"
              />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Certifications;