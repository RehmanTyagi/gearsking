import React from 'react';

interface ButtonProps {
  type: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
}
const Button: React.FC<ButtonProps> = ({
  type,
  children,
  onClick,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`${className} p-2 font-medium rounded-md bg-primary/70 hover:bg-primary transition text-white`}
    >
      {children}
    </button>
  );
};

export default Button;
