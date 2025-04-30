import React from 'react';

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  center?: boolean;
};

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle, center = true }) => {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''}`}>
      <h2 className="text-3xl font-bold mb-4 inline-block relative">
        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">{title}</span>
        <span className="block h-1 w-full bg-gradient-to-r from-cyan-400 to-blue-500 mt-2 rounded-full"></span>
      </h2>
      {subtitle && <p className="text-gray-300 max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  );
};

export default SectionHeading;