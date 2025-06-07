import Link from "next/link";
import React from "react";

interface ButtonProps {
  title: string;
  className?: string;
}
const CustomButton = ({ title, className }: ButtonProps) => {
  return (
    <div>
      <Link href="#about" className="transition-all duration-200">
        <button
          className={`rounded-lg border-1 px-10 py-3 transition-all duration-300 hover:bg-white hover:text-black ${className}`}
        >
          {title}
        </button>
      </Link>
    </div>
  );
};

export default CustomButton;
