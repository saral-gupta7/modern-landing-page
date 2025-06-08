import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const Marquee = () => {
  const firstText = useRef(null);
  const secondText = useRef(null);
  useGSAP(() => {
    requestAnimationFrame(animate);
  }, []);

  let xPercent = 0;
  const direction = -1;
  const animate = () => {
    if (xPercent <= -101) {
      xPercent = 0;
    }
    if (xPercent > 0) {
      xPercent = 100;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    xPercent += 0.1 * direction;
    requestAnimationFrame(animate);
  };

  return (
    <section className="flex-center font-playfair mt-10 -skew-2 overflow-hidden bg-[#0f0f0f] py-3 md:h-64">
      <div className="flex items-center justify-center gap-10 text-[5rem] whitespace-nowrap text-red-500 md:text-[7rem]">
        <div ref={firstText}>Framing emotions - Capturing Moments</div>
        <div ref={secondText}>Framing emotions - Capturing Moments</div>
      </div>
    </section>
  );
};

export default Marquee;
