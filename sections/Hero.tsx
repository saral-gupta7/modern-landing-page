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
    gsap.fromTo(
      "#coverContent",
      {
        y: "100%",
        scale: 1,
        // opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 3,
        // scale: 1.2,
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "+=100%",
          pin: "#hero",
          scrub: true,
        },
        ease: "none",
        duration: 3,
      },
    );
    // tl.to();
  }, []);
  return (
    <section
      className="mx-auto min-h-screen max-w-screen px-0 pt-24 sm:pt-32"
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
          <CustomButton title="Explore" className="border-white text-3xl" />
        </div>

        <div
          className="absolute inset-0 h-full rounded-3xl text-black"
          id="coverContent"
        >
          <div className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 gap-5 text-white">
            <h1 className="font-poppins text-5xl uppercase">about</h1>
            <h1 className="font-poppins text-5xl uppercase italic">Blake</h1>
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
        <div
          className="absolute inset-0 h-full rounded-3xl text-black"
          id="coverContent"
        >
          <div className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 gap-5 text-white">
            <h1 className="font-poppins text-5xl uppercase">about</h1>
            <h1 className="font-poppins text-5xl uppercase italic">Blake</h1>
          </div>

          <video
            muted
            loop
            autoPlay
            playsInline
            className="z-0 h-full w-full rounded-3xl object-cover"
          >
            <source src="https://videos.pexels.com/video-files/3942468/3942468-hd_1920_1080_30fps.mp4" />
          </video>
        </div>

        {/* <div
          className="absolute inset-0 h-full rounded-3xl bg-purple-400 text-black"
          id="coverContent"
        >
          <div className="mx-auto mt-5 flex max-w-[95%] justify-between py-5">
            <h1 className="font-poppins text-5xl uppercase">about</h1>
            <h1 className="font-poppins text-5xl uppercase italic">Blake</h1>
          </div>
          <div className="relative mx-auto mt-2 h-64 max-w-[95%]">
            <Image
              src={postHero}
              fill
              priority
              alt="posthero"
              className="object-cover object-center"
            />
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
