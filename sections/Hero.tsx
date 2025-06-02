"use client";

import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  useGSAP(() => {
    gsap.to(".hero-bg", {
      scale: 1.05,
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "+=80%",
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
      transformOrigin: "center center",
    });

    gsap.fromTo(
      ".hero-span",
      {
        y: -100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.3,
      },
    );
  }, []);
  return (
    <section
      className="relative mx-auto min-h-screen max-w-screen px-4 pt-24 sm:pt-32"
      id="hero"
    >
      <div className="hero-bg bg-gradient absolute bottom-2 left-0 h-[85%] w-full rounded-3xl sm:h-6/7 sm:rounded-4xl">
        <div className="flex h-full flex-wrap items-center justify-center px-2">
          <h1 className="font-poppins hero-text xs:text-4xl text-center text-3xl leading-tight text-black sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="hero-span">Captured.</span>{" "}
            <span className="hero-span">Crafted.</span>{" "}
            <span className="hero-span">Remembered.</span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
