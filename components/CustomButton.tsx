import React from "react";

interface ButtonProps {
  title: string;
  className?: string;
}
const CustomButton = ({ title, className }: ButtonProps) => {
  return (
    <div>
      <button
        className={`rounded-lg border-1 px-10 py-3 transition-all duration-500 hover:bg-white hover:text-black ${className}`}
      >
        {title}
      </button>
    </div>
  );
};

export default CustomButton;
