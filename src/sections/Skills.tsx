import React from 'react';
import SectionHeading from '../components/SectionHeading';

const skillCategories = [
  {
    name: "Frontend",
    skills: [
      { name: "HTML", icon: "html5.svg" },
      { name: "CSS", icon: "css3.svg" },
      { name: "JavaScript", icon: "javascript.svg" },
      { name: "React.js", icon: "react.svg" },
      { name: "Next.js", icon: "nextjs.svg" },
      { name: "Angular.js", icon: "angular.svg" },
      { name: "Bootstrap", icon: "bootstrap.svg" },
    ]
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", icon: "nodejs.svg" },
      { name: "Express.js", icon: "express.svg" },
      { name: "PHP", icon: "php.svg" },
      { name: "Laravel", icon: "laravel.svg" },
    ]
  },
  {
    name: "Database",
    skills: [
      { name: "MongoDB", icon: "mongodb.svg" },
      { name: "MySQL", icon: "mysql.svg" },
      { name: "PostgreSQL", icon: "postgresql.svg" },
    ]
  },
  {
    name: "Programming",
    skills: [
      { name: "C", icon: "c.svg" },
      { name: "C++", icon: "cpp.svg" },
      { name: "Python", icon: "python.svg" },
      { name: "Java", icon: "java.svg" },
      { name: "DSA", icon: "algorithm.svg" },
    ]
  }
];

const getIconUrl = (iconName: string) => {
  const iconMap: { [key: string]: string } = {
    "html5.svg": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    "css3.svg": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    "javascript.svg": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    "react.svg": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    "nextjs.svg": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    "angular.svg": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
    "bootstrap.svg": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    "nodejs.svg": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    "express.svg": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    "php.svg": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    "laravel.svg": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
    "mongodb.svg": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    "mysql.svg": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    "postgresql.svg": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    "c.svg": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
    "cpp.svg": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    "python.svg": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    "java.svg": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    "algorithm.svg": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg", // Placeholder for DSA
  };
  
  return iconMap[iconName] || "https://via.placeholder.com/50";
};

const Skills = () => {
  return (
    <div className="container mx-auto px-4">
      <SectionHeading 
        title="Skills & Technologies" 
        subtitle="The tools and technologies I use to bring products to life"
      />
      
      <div className="space-y-12">
        {skillCategories.map((category, index) => (
          <div key={index}>
            <h3 className="text-xl font-semibold mb-6 text-left text-white">
              <span className="border-b-2 border-cyan-400 pb-1">{category.name}</span>
            </h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
              {category.skills.map((skill, skillIndex) => (
                <div 
                  key={skillIndex}
                  className="group relative flex flex-col items-center transition-all duration-300"
                >
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-slate-800 rounded-xl p-4 flex items-center justify-center 
                    shadow-lg group-hover:shadow-cyan-500/20 border border-gray-700 group-hover:border-cyan-400/50
                    transition-all duration-300 transform group-hover:-translate-y-2 group-hover:bg-slate-700"
                  >
                    <img 
                      src={getIconUrl(skill.icon)} 
                      alt={`${skill.name} icon`} 
                      className="w-12 h-12 md:w-14 md:h-14 transition-transform duration-500 group-hover:scale-110" 
                    />
                  </div>
                  <span className="mt-3 text-gray-300 font-medium group-hover:text-cyan-400 transition-colors duration-300">
                    {skill.name}
                  </span>
                  <div className="absolute  w-20 h-20 md:w-24 md:h-24  bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl opacity-0 group-hover:opacity-20 blur transition duration-500 group-hover:duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;