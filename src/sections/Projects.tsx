import React from 'react';
import SectionHeading from '../components/SectionHeading';
import Card from '../components/Card';
import Button from '../components/Button';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "AI Safety Incident Dashboard",
    description: "An interactive dashboard for monitoring and analyzing AI safety incidents. Provides real-time data visualization, incident reporting, and trend analysis.",
    image: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    technologies: ["Next.js", "TailwindCSS", "TypeScript", "Chart.js"],
    githubUrl: "https://github.com/charugupta94/AI-Safety-Incident-Dashboard",
    liveUrl: "https://ai-safety-incident-dashboard-iota.vercel.app/"
  },
  {
    title: "Weather App",
    description: "A weather forecasting application that provides real-time weather updates, forecasts, and alerts. Users can search for locations and view detailed weather information.",
    image: "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/04/Apple-Weather-app.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    technologies: ["React.js", "Node.js", "Express.js", "OpenWeatherMap API"],
    githubUrl: "https://github.com/charugupta94/Weather-app",
    liveUrl: "https://weather-app-theta-fawn-49.vercel.app/"
  },
  {
    title: "Blogging Website",
    description: "A comprehensive blogging platform built with the MERN stack (MongoDB, Express, React, Node.js). Features include user authentication, rich text editing, comment system, and responsive design.",
    image: "https://images.pexels.com/photos/6469/red-hands-woman-creative.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    technologies: ["React.js", "Node.js", "MongoDB", "Express.js"],
    githubUrl: "https://github.com/charugupta94/Blogging-Website",
    liveUrl: "https://example.com/"
  },
  {
    title: "Yummy Delights",
    description: "A food ordering website with an intuitive user interface. Users can browse restaurants, view menus, place orders, and track delivery status in real-time.",
    image: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    githubUrl: "https://github.com/charugupta94/Food-Ordering-Website",
    liveUrl: "https://example.com/"
  }
];

const Projects = () => {
  return (
    <div className="container mx-auto px-4">
      <SectionHeading 
        title="Featured Projects" 
        subtitle="A collection of my recent work and ongoing projects"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="overflow-hidden group">
            <div className="h-48 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors duration-300">
                {project.title}
              </h3>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex} 
                    className="text-xs px-2 py-1 bg-slate-700 text-cyan-400 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <p className="text-gray-300 mb-6 line-clamp-3">
                {project.description}
              </p>
              
              <div className="flex gap-3">
                <Button 
                  text="GitHub" 
                  icon={<Github size={16} />} 
                  href={project.githubUrl}
                  target="_blank"
                  className="text-sm px-3 py-1.5"
                />
                <Button 
                  text="Live Demo" 
                  primary
                  icon={<ExternalLink size={16} />} 
                  href={project.liveUrl}
                  target="_blank"
                  className="text-sm px-3 py-1.5"
                />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;