"use client";

import { nightFrames } from "@/constants/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const AfterHours = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.set(".after-hours-copy", {
        y: 48,
        opacity: 0,
        filter: "blur(10px)",
      });

      gsap.set(".after-hours-frame", {
        yPercent: 18,
        opacity: 0.45,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#after-hours",
          start: "top 70%",
          end: "bottom 40%",
          scrub: true,
        },
      });

      tl.to(".after-hours-copy", {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        stagger: 0.1,
        ease: "power2.out",
      }).to(
        ".after-hours-frame",
        {
          yPercent: (index) => [-6, 4, -3][index],
          opacity: 1,
          rotate: (index) => [-3, 2, 4][index],
          stagger: 0.12,
          ease: "sine.inOut",
        },
        0,
      );

      gsap.to(".after-hours-frame", {
        yPercent: "+=7",
        duration: 2.6,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 0.18,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="after-hours"
      className="relative isolate overflow-hidden px-6 py-28 text-white"
    >
      <div className="sleep-glow absolute top-24 right-[-8rem] h-72 w-72 blur-3xl" />
      <div className="absolute top-1/2 left-[-8rem] h-64 w-64 -translate-y-1/2 rounded-full bg-[#f1d49a]/8 blur-3xl" />

      <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <p className="after-hours-copy section-label">After Hours</p>
          <h2 className="after-hours-copy section-heading mt-5">
            A dreamy nocturne section with slow, sleep-like GSAP drift.
          </h2>
          <p className="after-hours-copy section-copy mt-6 max-w-xl">
            This section now leans on a curated mix of late-night frames with
            restrained motion, so the atmosphere feels authored instead of
            mocked up.
          </p>
          <p className="after-hours-copy mt-8 text-sm tracking-[0.3em] text-white/36 uppercase">
            Nocturne studies
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          {nightFrames.map(({ title, description, url }, index) => (
            <article
              key={title}
              className={`after-hours-frame ${index === 1 ? "sm:translate-y-16" : ""} ${
                index === 2 ? "sm:col-span-2 sm:max-w-xl" : ""
              }`}
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
                <Image
                  src={url}
                  alt={title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 30vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
              </div>

              <div className="mt-4 flex items-start justify-between gap-6">
                <div>
                  <p className="section-label text-white/38">{`Nocturne ${index + 1}`}</p>
                  <h3 className="font-space-grotesk mt-2 text-2xl font-semibold">
                    {title}
                  </h3>
                </div>
                <p className="font-playfair max-w-[14rem] text-right text-sm leading-6 text-white/58">
                  {description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AfterHours;
