import React from "react";
import { aboutSections } from "@/constants/constants";
import Image from "next/image";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    gsap.fromTo(
      "#sections",
      {
        opacity: 0,
        filter: "blur(5px)",
        rotate: 30,
        scale: 0.9,
      },
      {
        opacity: 1,
        rotate: 0,
        scale: 1,
        y: 0,
        filter: "blur(0px)",
        scrollTrigger: {
          trigger: "#about",
          start: "30% bottom",
          end: "bottom bottom",
          scrub: true,
        },
        stagger: 0.3,
      },
    );
  }, []);
  return (
    <section
      className="grid min-h-screen divide-x-1 divide-white/10 md:grid-cols-2 lg:grid-cols-4"
      id="about"
    >
      {aboutSections.map(({ title, description, url, gradient }, idx) => (
        <div
          className="flex-center relative h-screen w-full flex-col gap-5 rounded-lg"
          id="sections"
          key={idx}
        >
          <Image
            src={url}
            fill
            className="absolute inset-0 z-10 object-cover opacity-10 blur-[3px] transition-all duration-300 hover:opacity-100 hover:blur-none"
            alt="image"
          />
          <h1
            className={`font-lato ${gradient} bg-clip-text text-4xl font-bold text-transparent`}
          >
            {title}
          </h1>
          <p className="font-playfair text-xl text-white/70">{description}</p>
        </div>
      ))}
    </section>
  );
};

export default About;
