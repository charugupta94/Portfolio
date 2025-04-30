import React from 'react';

type ButtonProps = {
  text: string;
  primary?: boolean;
  icon?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  href?: string;
  download?: boolean;
  target?: string;
};

const Button: React.FC<ButtonProps> = ({ 
  text, 
  primary = false, 
  icon, 
  onClick, 
  className = '',
  href,
  download = false,
  target
}) => {
  const baseClasses = "flex items-center gap-2 px-4 py-2 rounded-md font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg";
  const primaryClasses = "bg-gradient-to-r from-blue-500 to-cyan-400 text-white hover:from-blue-600 hover:to-cyan-500";
  const secondaryClasses = "bg-gray-800 text-white border border-cyan-400 hover:bg-gray-700";
  
  const buttonClasses = `${baseClasses} ${primary ? primaryClasses : secondaryClasses} ${className}`;
  
  if (href) {
    return (
      <a 
        href={href} 
        className={buttonClasses}
        download={download}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
      >
        {icon && <span>{icon}</span>}
        {text}
      </a>
    );
  }
  
  return (
    <button className={buttonClasses} onClick={onClick}>
      {icon && <span>{icon}</span>}
      {text}
    </button>
  );
};

export default Button;