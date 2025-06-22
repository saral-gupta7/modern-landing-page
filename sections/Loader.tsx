"use client";
import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { loaderItems } from "@/constants/constants";
const LoaderScreen = () => {
  useGSAP(() => {
    const tl = gsap.timeline();
    const textRefs = document.querySelectorAll("#loader-section > div");
    gsap.set(".text", {
      y: 0,
      opacity: 1,
    });
    gsap.set(textRefs, {
      opacity: 1,
      y: 0,
    });
    tl.from(".text", {
      y: "100%",
      opacity: 1,
      stagger: 0.5,
      ease: "power2.inOut",
      duration: 1,
    });
    tl.to(textRefs, {
      y: "-100%",
      opacity: 0,
      scale: 0.95,
      stagger: {
        amount: 0.3,
        from: "center",
      },
    });

    tl.to("#loader-section", {
      // scale: 2,
      filter: "blue(10px)",
      opacity: 0,
      zIndex: -10,
      delay: -0.5,
      ease: "power2.inOut",
    });
  }, []);
  return (
    <section
      id="loader-section"
      className="flex-center fixed inset-0 z-100 grid h-screen w-full grid-cols-3 bg-black"
    >
      {loaderItems.map(({ text }) => (
        <div
          key={text}
          className="relative h-screen w-full bg-black py-5 opacity-0"
        >
          {/* <Image@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap');
            src={src}
            width={1920}
            height={2800}
            alt={alt}
            className="h-full w-full rounded-lg object-cover"
          /> */}
          <div className="absolute inset-0 h-full w-full bg-black opacity-30"></div>
          <div className="absolute-center overflow-hidden">
            <h1 className="text font-playfair tracking-light text-7xl font-bold text-white/80 uppercase">
              {text}
            </h1>
          </div>
        </div>
      ))}
    </section>
  );
};

export default LoaderScreen;
