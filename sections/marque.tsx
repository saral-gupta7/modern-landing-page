import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const Marquee = () => {
  const firstText = useRef<HTMLDivElement>(null);
  const secondText = useRef<HTMLDivElement>(null);
  const xPercent = useRef(0);
  const lastScrollY = useRef(window.scrollY);

  useEffect(() => {
    const animate = () => {
      // Clamp xPercent between -100 and 0 for seamless loop
      // if (xPercent.current <= -100) xPercent.current = 0;
      // if (xPercent.current > 0) xPercent.current = -100;

      gsap.set(firstText.current, { xPercent: xPercent.current });
      // gsap.set(secondText.current, { xPercent: xPercent.current + 100 });
    };

    const onScroll = () => {
      const currentScrollY = window.scrollY;
      const direction = currentScrollY > lastScrollY.current ? -1 : 1;
      xPercent.current += 1 * direction; // Adjust speed here
      lastScrollY.current = currentScrollY;
      animate();
    };

    window.addEventListener("scroll", onScroll);
    animate();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section className="flex-center font-playfair mt-10 overflow-hidden py-3 md:h-64">
      <div className="flex items-center justify-center gap-10 text-[5rem] whitespace-nowrap text-red-500 md:text-[7rem]">
        <div ref={firstText}>Framing emotions - Capturing Moments</div>
        <div ref={secondText}>Framing emotions - Capturing Moments</div>
      </div>
    </section>
  );
};

export default Marquee;
