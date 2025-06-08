"use client";

import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import landscape from "@/public/images/showcase.jpg";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

const About = () => {
  const imageRef = useRef(null);

  const tl = gsap.timeline();
  useGSAP(() => {
    const headerSplit = SplitText.create(".header-text", {
      type: "chars words lines",
    });
    const firstSplit = SplitText.create(".first-para", {
      type: "chars words lines",
    });
    const secondSplit = SplitText.create(".second-para", {
      type: "chars words lines",
    });

    tl.from(imageRef.current, {
      y: -300,
      // x: -100,
      scrollTrigger: {
        trigger: "#about",
        start: "30% bottom",
        end: "100% bottom",
        scrub: true,
      },
    });
    tl.fromTo(
      headerSplit.words,
      {
        y: -100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        scrollTrigger: {
          trigger: "#about",
          start: "30% bottom",
          end: "20% center",
          scrub: true,
        },
        ease: "sine",
      },
    );
    tl.fromTo(
      firstSplit.lines,
      {
        y: -50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        scrollTrigger: {
          trigger: "#about",
          start: "60% bottom",
          end: "20% center",
          scrub: true,
        },
        ease: "sine",
        delay: 3,
      },
    );

    tl.fromTo(
      secondSplit.lines,
      {
        y: -50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        scrollTrigger: {
          trigger: "#about",
          start: "70% bottom",
          end: "40% center",
          scrub: true,
        },
        ease: "sine",
      },
    );
  });

  return (
    <section className="relative mt-10 min-h-[calc(100vh-80px)]" id="about">
      <div className="font-poppins relative grid h-full w-full grid-cols-1 lg:grid-cols-2 lg:gap-20">
        <div className="relative h-[calc(100vh-80px)] overflow-hidden">
          <Image src={landscape} alt="photo" className="" ref={imageRef} />
          <div className="absolute inset-0 h-full w-full bg-black/50 lg:hidden"></div>
        </div>

        <div className="absolute mx-auto max-w-3xl px-6 py-12 font-sans text-wrap text-gray-800 lg:relative">
          <h1 className="font-bold text-black">
            <br />
            <span className="header-text text-3xl font-semibold text-wrap text-gray-200 md:text-4xl">
              The wildlife and human&apos;s harmonious co-existence
            </span>
          </h1>

          <p className="text first-para mt-4 font-semibold text-gray-400">
            The series uses a single self portrait for all the concepts to bring
            out a sense of uniformity and consistency in design and intend on
            proving how a single image can be used to create several concepts.
          </p>

          <p className="second-para mt-4 text-gray-300">
            The core intent of this series was to bring out the harmony in the
            co-existence of wildlife and humans and extract the association by
            building on their traits, further glorifying the relatable values
            they hold as a lesson for the humans to connect with.
          </p>

          <p className="second-para mt-4 text-gray-300">
            People are often seen to associate themselves with nature and draw
            in their life lessons from traits being witnessed in wildlife. This
            led me to make a series that identifies the relation, making the
            viewers feel it through the commonalities between species.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
