"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

import HeroVideo from "@/components/HeroVideo";
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "+=150%",
        scrub: true,
        pin: true,
      },

      defaults: {
        duration: 1,
      },
    });
    gsap.set("#hero-slide-2, #hero-slide-3", { y: "100%", opacity: 1 });

    tl.to("#hero-slide-1", {
      scale: 0.95,
    })
      .to(
        "#hero-slide-2",
        {
          y: 0,
          opacity: 1,
        },
        "<",
      )
      .to("#hero-slide-2", {
        scale: 0.95,
        // opacity: 0.4,
      })

      .to(
        "#hero-slide-3",
        {
          y: 0,
          opacity: 1,
        },
        "<",
      );

    gsap.to("#hero-slide-3", {
      scale: 1.1,
      scrollTrigger: {
        trigger: "hero",
        start: "30% top",
        end: "bottom top", // defines how long the shrink takes
        scrub: true,
      },
    });
    // y: -300,
    // borderRadius: 0,
  }, []);
  return (
    <section
      className="relative h-screen max-w-screen overflow-hidden text-white"
      id="hero"
    >
      <HeroVideo
        url={"/videos/hero.mp4"}
        content={[
          { text: "Captured." },
          { text: "Crafted.", isItalic: true },
          { text: "Remembered." },
        ]}
        id="hero-slide-1"
        zIndex="z-10"
      />
      <HeroVideo
        url={"/videos/hero2.mp4"}
        content={[
          { text: "Framed." },
          { text: "Focused.", isItalic: true },
          { text: "Felt." },
        ]}
        id="hero-slide-2"
        zIndex="z-20"
      />
      <HeroVideo
        url={"/videos/hero3.mp4"}
        content={[
          { text: "Glimpsed." },
          { text: "Gathered.", isItalic: true },
          { text: "Given." },
        ]}
        id="hero-slide-3"
        zIndex="z-30"
      />
    </section>
  );
};

export default Hero;
