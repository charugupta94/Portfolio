import React from 'react';
import { Github, Linkedin, Mail, Phone, Code2, Download } from 'lucide-react';
import Button from './Button';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Code2 className="h-8 w-8 text-cyan-400" />
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Charu Gupta
              </span>
            </div>
            <p className="text-gray-300 mb-4">
              A passionate Full Stack Developer specializing in scalable web applications.
            </p>
            <Button 
              text="Download CV" 
              icon={<Download size={16} />} 
              href="/Charu Gupta Resume.pdf" 
              download 
              className="mt-2"
            />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 relative inline-block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-cyan-400">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Certifications', 'Education', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 relative inline-block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-cyan-400">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-cyan-400" />
                <a href="mailto:charugupta860@gmail.com" className="text-gray-300 hover:text-white transition-colors duration-200">
                  charugupta860@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-cyan-400" />
                <a href="tel:+1234567890" className="text-gray-300 hover:text-white transition-colors duration-200">
                  +91 639-640-1458
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Github size={16} className="text-cyan-400" />
                <a href="https://github.com/charugupta94" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-200">
                  GitHub
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Linkedin size={16} className="text-cyan-400" />
                <a href="https://www.linkedin.com/in/charug86/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-200">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Developer Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;