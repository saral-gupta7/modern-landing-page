import React from "react";
import { aboutSections } from "@/constants/constants";
import Image from "next/image";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    // First animation: pin the section while animating in the children
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top center",
        end: "+=100%", // Pin only for the first animation
        // pin: true,
        scrub: true,
      },
      defaults: {
        ease: "expo.inOut",
      },
    });
    gsap.set("#sections", {
      // translateZ: -1000,
      rotateX: 50,
    });

    tl.to("#sections", {
      opacity: 1,
      // translateZ: 100,
      rotateX: 0,
      // filter: "blur(0px)",
      duration: 1,
    });
    gsap.to("#about", {
      scale: 0.9,
      scrollTrigger: {
        trigger: "#about",
        start: "40% top",
        end: "bottom top", // defines how long the shrink takes
        scrub: true,
      },
    });
  }, []);
  return (
    <section
      className="mx-auto min-h-screen w-full max-w-screen-xl overflow-hidden"
      id="about"
    >
      <h1 className="font-space-grotesk pt-25 text-center text-5xl font-bold text-white">
        The Story Behind the Shutter
      </h1>
      <div className="grid min-h-screen divide-white/10 [perspective::1000px] [transform-style:preserve-3d] md:grid-cols-1 md:gap-0 lg:grid-cols-3 lg:gap-5">
        {aboutSections.map(({ title, description, url, subtitle }, idx) => (
          <div
            className="flex-center relative my-auto h-full w-full flex-col gap-5 rounded-lg md:h-4/5"
            id="sections"
            key={idx}
          >
            <Image
              src={url}
              fill
              className="absolute inset-0 z-10 object-cover opacity-30 blur-[1px] transition-all duration-300 hover:-translate-y-[10px] hover:scale-103 hover:opacity-100 hover:blur-none"
              alt="image"
            />
            <h1
              className={`font-space-grotesk absolute right-10 bottom-7 flex flex-col items-end bg-clip-text text-2xl font-bold text-white`}
            >
              <span className="text-xl">{title}</span>
              <span className="text-4xl">{subtitle}</span>
            </h1>
            <p className="font-playfair text-lg text-white/80">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
