import React from 'react';
import { Download, Mail } from 'lucide-react';
import Button from '../components/Button';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-60 h-60 bg-indigo-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 pt-24 pb-12 z-10 flex flex-col-reverse lg:flex-row items-center gap-12">
        <div className="lg:w-1/2">
          <div className="animate-fadeIn">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              HELLO, I'M <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">CHARU GUPTA</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-300">
              Full Stack Developer
            </h2>
            <p className="text-gray-300 mb-8 text-lg max-w-lg">
              Crafting scalable web applications with a passion for elegant, efficient solutions
              and continuously improving my skills.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button 
                text="Contact Me" 
                primary 
                icon={<Mail size={18} />}
                href="#contact"
              />
              <Button 
                text="Download Resume" 
                icon={<Download size={18} />}
                href="/resume.pdf"
                download
              />
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 animate-float">
            <div className="absolute inset-0 rounded-full blur-xl opacity-20 animate-pulse"></div>
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-cyan-400/30 p-1">
              {/* Replace with your photo */}
              <img 
                src="/public/formal.png" 
                alt="Developer Portrait" 
                className="w-full h-full object-cover rounded-full transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-cyan-400 flex justify-center pt-1">
          <div className="w-1 h-2 bg-cyan-400 rounded-full animate-scrollDown"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;