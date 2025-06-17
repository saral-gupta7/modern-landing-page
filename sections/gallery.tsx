import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  useGSAP(() => {
    // Animate all cards from right into position with stagger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#gallery",
        start: "top top",
        end: "+=50%", // enough scroll distance for both animations
        pin: true,
        scrub: true,
      },
    });

    // tl.fromTo(
    //   ".card",
    //   {
    //     x: "100vw",
    //     opacity: 0,
    //   },
    //   {
    //     x: 0,
    //     opacity: 1,
    //     duration: 1,
    //     stagger: 0.2,
    //     ease: "power2.out",
    //   },
    // );

    // After all cards are in place, animate each to center and scale up, one after another
    tl.to(".card", {
      zIndex: 10,
      duration: 0.7,
      ease: "power2.out",
      stagger: 0.3,
    });
    tl.to("#image-container", {
      gap: 0,
      duration: 0.5,
      ease: "power2.inOut",
    });
  });
  return (
    <section
      className="bg-fuji flex min-h-screen w-full items-center justify-center overflow-hidden"
      id="gallery"
    >
      <div
        className="flex h-[400px] w-[800px] items-center justify-center gap-2 border"
        id="image-container"
      >
        <div className="card h-full w-[200px] bg-[url('/images/landscape2.jpg')] bg-[length:800px_400px] bg-[0px_0px]"></div>
        <div className="card h-full w-[200px] bg-[url('/images/landscape2.jpg')] bg-[length:800px_400px] bg-[-200px_0px]"></div>
        <div className="card h-full w-[200px] bg-[url('/images/landscape2.jpg')] bg-[length:800px_400px] bg-[-400px_0px]"></div>
        <div className="card h-full w-[200px] bg-[url('/images/landscape2.jpg')] bg-[length:800px_400px] bg-[-600px_0px]"></div>
      </div>
    </section>
  );
};

export default Gallery;
