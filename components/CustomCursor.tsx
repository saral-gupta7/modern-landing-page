import gsap from "gsap";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
const CustomCursor = () => {
  const cursorRef = useRef(null);
  useGSAP(() => {
    const moveCursor = (e) => {
      gsap.to(cursorRef.current, {
        left: e.clientX,
        top: e.clientY,
        duration: 0.2,
        ease: "power2.out",
      });
    };
    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="x pointer-events-none fixed top-0 left-0 z-[9999] h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white transition-colors duration-200"
    ></div>
  );
};

export default CustomCursor;
