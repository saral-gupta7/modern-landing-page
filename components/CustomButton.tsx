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
  const buttonRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    if (!buttonRef.current) {
      return;
    }

    const tl = gsap.timeline();
    const titleRef = buttonRef.current.querySelector(".button-title");

    tl.fromTo(
      buttonRef.current,
      {
        scaleX: 0,
      },
      { scaleX: 1, duration: 1, ease: "back.out(1.7)", delay: 1 },
    );

    if (titleRef) {
      tl.fromTo(
        titleRef,
        {
          scale: 0,
        },
        { scale: 1, duration: 0.5, ease: "back.out(1.7)", delay: 0 },
      );
    }
  });

  return (
    <div ref={buttonRef}>
      <Link href="#about">
        <button
          className={`rounded-full border-[1px] border-[#f5f0e8]/55 px-8 py-3 text-[#f7f3ec] transition-all duration-300 hover:scale-105 hover:border-[#f5f0e8]/85 hover:bg-white/12 hover:shadow-xl hover:shadow-black/30 ${className}`}
          id="btn"
        >
          <div className="button-title flex-center inset-0 gap-3">
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
