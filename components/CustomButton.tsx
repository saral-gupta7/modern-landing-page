import Link from "next/link";
import React, { useRef } from "react";
import { MoveRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface ButtonProps {
  title: string;
  className?: string;
}
const CustomButton = ({ title, className }: ButtonProps) => {
  const buttonRef = useRef(null);
  useGSAP(() => {
    const tl = gsap.timeline();
    if (buttonRef.current) {
      tl.fromTo(
        buttonRef.current,
        {
          scaleX: 0,
        },
        { scaleX: 1, duration: 1, ease: "back.out(1.7)", delay: 1 },
      );

      tl.fromTo(
        ".title",
        {
          scale: 0,
        },
        { scale: 1, duration: 0.5, ease: "back.out(1.7)", delay: 0 },
      );
    }
  });
  return (
    <div ref={buttonRef}>
      <Link href="#about" className="transition-all duration-200">
        <button
          className={`rounded-full border-[0.125] px-10 py-3 shadow-md shadow-white/50 transition-all duration-300 hover:scale-105 hover:bg-white/15 hover:shadow-xl hover:shadow-gray-500/50 ${className}`}
          id="btn"
        >
          <div className="flex-center title inset-0 gap-3">
            <span className="">{title}</span>
            <span className="mt-1">
              <MoveRight />
            </span>
          </div>
        </button>
      </Link>
    </div>
  );
};

export default CustomButton;
