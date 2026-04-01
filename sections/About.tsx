import React from "react";
import { aboutSections } from "@/constants/constants";
import Image from "next/image";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import { motion } from "motion/react";
import { useRef } from "react";

const About = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#about",
          start: "top 65%",
          end: "+=110%",
          scrub: true,
        },
        defaults: {
          ease: "expo.inOut",
        },
      });

      gsap.set(".about-panel", {
        opacity: 0.45,
        rotateX: 45,
        y: 80,
        transformOrigin: "top center",
      });

      tl.to(".about-panel", {
        opacity: 1,
        rotateX: 0,
        y: 0,
        stagger: 0.12,
        duration: 1,
      });

      gsap.to("#about", {
        scale: 0.94,
        scrollTrigger: {
          trigger: "#about",
          start: "45% top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="mx-auto min-h-screen w-full max-w-6xl overflow-hidden px-6 pt-28 pb-24"
      id="about"
    >
      <div className="mx-auto max-w-3xl text-center">
        <p className="section-label">The Story Behind The Shutter</p>
        <h1 className="section-heading mt-5">
          A calmer, more tactile way to present photography as a lived
          atmosphere.
        </h1>
        <p className="section-copy mx-auto mt-6 max-w-2xl">
          The motion remains cinematic, but the section now reads more like an
          editorial spread: cleaner spacing, stronger hierarchy, and imagery
          that does the heavy lifting.
        </p>
      </div>

      <div className="mt-16 grid gap-6 [perspective:1000px] [transform-style:preserve-3d] lg:grid-cols-3">
        {aboutSections.map(({ title, description, url, subtitle }, idx) => (
          <article
            className="about-panel relative min-h-[28rem] overflow-hidden rounded-[2rem] lg:min-h-[38rem]"
            key={idx}
          >
            <Image
              src={url}
              fill
              className="absolute inset-0 object-cover transition-all duration-500 hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 33vw"
              alt={`${title} ${subtitle}`}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/15 to-black/80" />
            <motion.div
              className="absolute inset-x-0 bottom-0 z-20 flex flex-col items-start gap-4 p-8"
              whileHover={{
                y: -10,
              }}
            >
              <span className="section-label text-white/55">{title}</span>
              <span className="font-space-grotesk text-4xl font-semibold text-white">
                {subtitle}
              </span>
              <p className="font-playfair max-w-sm text-base leading-7 text-white/76">
                {description}
              </p>
            </motion.div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default About;
