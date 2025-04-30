import React from 'react';

type CardProps = {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
};

const Card: React.FC<CardProps> = ({ children, className = '', hoverEffect = true }) => {
  const baseClasses = "bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-md border border-gray-700";
  const hoverClasses = hoverEffect 
    ? "transition-all duration-300 hover:shadow-xl hover:shadow-cyan-900/20 hover:border-cyan-400/30 hover:-translate-y-1" 
    : "";
  
  return (
    <div className={`${baseClasses} ${hoverClasses} ${className}`}>
      {children}
    </div>
  );
};

export default Card;