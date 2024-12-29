import React from "react";

interface ButtonProps {
  type: "button" | "submit" | "reset";
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
      className={`${className} bg-primary/70 p-2.5 font-medium text-white transition hover:bg-primary`}
    >
      {children}
    </button>
  );
};

export default Button;
