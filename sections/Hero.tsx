"use client";
import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import CustomButton from "@/components/CustomButton";
// import postHero from "@/public/images/post-hero.jpg";
// import Image from "next/image";
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      ".hero-span",
      {
        opacity: 0,
        y: -100,
      },
      {
        opacity: 1,
        duration: 2,
        y: 0,
        delay: 1,
      },
    );
    tl.fromTo(
      "#coverContent",
      {
        y: "120%",
      },
      {
        y: 0,
        opacity: 1,
        stagger: 4,
        // scale: 1.2,
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "+=100%",
          pin: "#hero",
          scrub: true,
        },
        ease: "expoScale(0.5,7, none)",
        duration: 3,
      },
    );
    tl.to("#coverContent", {
      scale: 1.15,
      scrollTrigger: {
        trigger: "#coverContent",
        start: "top top",
        end: "+=200%",
        scrub: true,
      },
      delay: 1,
    });
  }, []);
  return (
    <section
      className="mx-auto min-h-[calc(100vh-30px)] max-w-screen overflow-x-hidden px-0 pt-24 text-white sm:pt-32"
      id="hero"
    >
      <div className="relative h-full w-full rounded-3xl sm:rounded-3xl">
        <video
          muted
          autoPlay
          loop
          playsInline
          className="absolute inset-0 h-full w-full rounded-3xl object-cover object-center"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 h-full w-full bg-black opacity-50"></div>

        <div className="absolute inset-0 flex h-full flex-col flex-wrap items-center justify-center gap-10 px-2">
          <h1 className="font-poppins hero-text xs:text-4xl leading text-center text-3xl text-white sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="hero-span">Captured.</span>{" "}
            <span className="hero-span font-playfair italic">Crafted.</span>{" "}
            <span className="hero-span">Remembered.</span>
          </h1>
          <CustomButton title="Explore" className="border-white text-2xl" />
        </div>
        {/* First Cover */}
        <div
          className="absolute inset-0 h-full w-full rounded-3xl text-black"
          id="coverContent"
        >
          <div className="absolute inset-0 rounded-3xl bg-[#00000070]" />
          <div className="flex-center absolute top-1/2 left-1/2 z-99 -translate-x-1/2 -translate-y-1/2 flex-col gap-5 text-white">
            <h1 className="font-poppins hero-text xs:text-4xl leading text-center text-3xl text-white sm:text-5xl md:text-5xl lg:text-7xl">
              <span className="hero-span">Framed. </span>{" "}
              <span className="hero-span font-playfair italic">Focused. </span>{" "}
              <span className="hero-span">Focused. </span>
            </h1>
            <CustomButton title="Explore" className="border-white text-2xl" />
          </div>
          <video
            muted
            loop
            autoPlay
            playsInline
            className="z-0 h-full w-full rounded-3xl object-cover"
          >
            <source src="/videos/hero2.mp4" />
          </video>
        </div>
        {/* Second Cover */}
        <div
          className="absolute inset-0 h-full w-full rounded-3xl text-black"
          id="coverContent"
        >
          <div className="absolute inset-0 rounded-3xl bg-[#00000070]" />
          <div className="flex-center absolute top-1/2 left-1/2 z-99 flex -translate-x-1/2 -translate-y-1/2 flex-col gap-5 text-white">
            <h1 className="font-poppins hero-text xs:text-4xl leading text-center text-3xl text-white sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="hero-span">Glimpsed.</span>{" "}
              <span className="hero-span font-playfair italic">Gathered.</span>{" "}
              <span className="hero-span">Given.</span>
            </h1>

            <CustomButton title="Explore" className="border-white text-2xl" />
          </div>

          <video
            muted
            loop
            autoPlay
            playsInline
            className="z-0 h-full w-full rounded-3xl object-cover"
          >
            <source src="/videos/hero3.mp4" />
          </video>
        </div>
      </div>
    </section>
  );
};

export default Hero;
