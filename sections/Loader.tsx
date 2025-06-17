"use client";
import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { loaderItems } from "@/constants/constants";
const LoaderScreen = () => {
  useGSAP(() => {
    const tl = gsap.timeline();
    const textRefs = document.querySelectorAll("#loader-section > div");
    tl.set(".text", {
      y: 0,
      opacity: 0,
    });
    tl.fromTo(
      textRefs,
      {
        opacity: 0,
        scale: 0.95,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 1.75,
        ease: "power2.inOut",
        stagger: 0.5,
      },
    );
    tl.from(".text", {
      y: "100%",
      opacity: 1,
      stagger: 0.5,
      ease: "power2.inOut",
    });
    tl.to("#loader-section", {
      scale: 2,
      filter: "blue(10px)",
      opacity: 0,
      zIndex: -10,
      ease: "power2.inOut",
    });
  }, []);
  return (
    <section
      id="loader-section"
      className="flex-center fixed inset-0 z-100 grid h-screen w-full grid-cols-3 gap-3 bg-black"
    >
      {loaderItems.map(({ src, alt, text }) => (
        <div key={text} className="relative h-screen w-full py-5 opacity-0">
          <Image
            src={src}
            width={1920}
            height={2800}
            alt={alt}
            className="h-full w-full rounded-lg object-cover"
          />
          <div className="absolute inset-0 h-full w-full bg-black opacity-30"></div>
          <div className="absolute-center overflow-hidden">
            <h1 className="text font-playfair tracking-light text-7xl font-bold text-white/80">
              {text}
            </h1>
          </div>
        </div>
      ))}
    </section>
  );
};

export default LoaderScreen;
