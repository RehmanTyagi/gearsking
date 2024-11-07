import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}
const Button: React.FC<ButtonProps> = ({ children, onClick, className }) => {
  return (
    <button
      className={`${className}  text-lg dark:hover:bg-gray-700 hover:bg-gray-100 p-2 rounded-lg`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
