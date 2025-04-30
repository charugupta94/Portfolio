import React from 'react';
import SectionHeading from '../components/SectionHeading';
import Card from '../components/Card';
import { Code, Server, Database, Sparkles } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="h-6 w-6 text-cyan-400" />,
      title: 'Frontend Expertise',
      description: 'Crafting responsive, accessible, and performant user interfaces using modern technologies.'
    },
    {
      icon: <Server className="h-6 w-6 text-cyan-400" />,
      title: 'Backend Development',
      description: 'Building robust APIs and server-side applications with a focus on scalability.'
    },
    {
      icon: <Database className="h-6 w-6 text-cyan-400" />,
      title: 'Database Management',
      description: 'Working with both SQL and NoSQL databases to store and retrieve data efficiently.'
    },
    {
      icon: <Sparkles className="h-6 w-6 text-cyan-400" />,
      title: 'Problem Solver',
      description: 'Daily practice with data structures and algorithms to enhance problem-solving abilities.'
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <SectionHeading 
        title="About Me" 
        subtitle="Get to know more about my background and expertise"
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="p-8 h-full">
            <h3 className="text-xl font-semibold mb-4 text-cyan-400">Who I Am</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              I am a Full Stack Developer with a strong passion for coding, design, and solving complex problems through technology. I specialize in building scalable, high-performance web applications that are both user-friendly and maintainable. I thrive in collaborative environments and enjoy transforming ideas into real-world digital solutions.
            </p>
            <p className="text-gray-300 mb-4 leading-relaxed">
              With hands-on experience in both frontend and backend development, I excel at creating seamless user interfaces using modern frameworks like React.js and developing robust server-side logic with Node.js, Express.js, and PHP (Laravel). I am also skilled in working with databases such as MongoDB and MySQL, ensuring data integrity and optimized performance across applications.
            </p>
            <p className="text-gray-300 mb-4 leading-relaxed">
              I am deeply committed to continuous learning and professional growth. I consistently dedicate time to mastering Data Structures and Algorithms (DSA) to enhance my problem-solving skills and technical depth. This disciplined approach helps me write cleaner, more efficient code and tackle technical challenges with confidence.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Whether it's adopting new tools, exploring emerging technologies, or contributing to open-source projects, I am always eager to push boundaries and deliver impactful solutions. My goal is to not only build applications but to create experiences that add value and drive innovation.
            </p>

          </Card>
        </div>

        <div className="lg:col-span-1">
          <Card className="p-8 h-full bg-gradient-to-br from-slate-800 to-slate-900">
            <h3 className="text-xl font-semibold mb-6 text-cyan-400">My Approach</h3>
            <ul className="space-y-6">
              {highlights.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-1 p-2 bg-slate-700/50 rounded-md">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-white">{item.title}</h4>
                    <p className="text-sm text-gray-400">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;