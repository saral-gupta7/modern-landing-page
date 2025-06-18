import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import GalleryContent from "@/components/GalleryContent";
import { cards, imageItems } from "@/constants/constants";
gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#gallery",
        start: "top top",
        end: "+=100%",
        pin: true,
        scrub: true,
      },
    });
    // initial states
    gsap.set(".card-1", {
      y: "100%",
      xPercent: -100,
      opacity: 1,
    });

    gsap.set(".card-2", {
      y: "100%",
      opacity: 1,
    });

    gsap.set(".card-3", {
      y: "100%",
      xPercent: -100,
      opacity: 1,
    });

    gsap.set(".gallery-image", {
      scale: 0.5,
      xPercent: 5,
      rotate: 23,
      // zIndex: 10,
      // opacity: 0,
      // borderRadius: "100%",
    });
    gsap.set(".gallery-image-1", {
      scale: 0.5,
      xPercent: 10,
      rotate: -15,
      // opacity: 0,
      // borderRadius: "100%",
    });
    gsap.set(".gallery-image-2", {
      scale: 0.5,
      xPercent: 20,
      rotate: 10,
      // opacity: 0,
      // borderRadius: "100%",
    });
    gsap.set(".gallery-image-3", {
      scale: 0.5,
      xPercent: 30,
      rotate: -8,
      // opacity: 0,
      // borderRadius: "100%",
    });

    // animated states
    tl.to(".card-1", {
      y: 0,
      xPercent: -100,
      opacity: 1,
      // padding: 0,
    })
      .to(
        ".card",
        {
          opacity: 0,
        },
        "<+0.1",
      )
      .to(
        ".gallery-image-1",
        {
          scale: 1,
          xPercent: 100,
          rotate: 0,
          opacity: 1,
          duration: 0.5,
          borderRadius: 0,
          padding: 0,
        },
        "<",
      )
      .to(".card-2", {
        y: 0,
        opacity: 1,
      })
      .to(
        ".card-1",
        {
          opacity: 0,
        },
        "<+0.1",
      )
      .to(
        ".gallery-image-2",
        {
          scale: 1,
          xPercent: 0,
          rotate: 0,
          opacity: 1,
          duration: 0.5,
          borderRadius: 0,
          padding: 0,
        },
        "<",
      )
      .to(".card-3", {
        y: 0,
        opacity: 1,
      })
      .to(
        ".card-2",
        {
          opacity: 0,
        },
        "<+0.1",
      )
      .to(
        ".gallery-image-3",
        {
          scale: 1,
          xPercent: 100,
          rotate: 0,
          opacity: 1,
          duration: 0.5,
          borderRadius: 0,
          padding: 0,
        },
        "<",
      );
    // .to(".gallery-image-3", {
    //   scale: 0.6,
    //   xPercent: 50,
    //   yPercent: 0,
    //   rotate: 10,
    // })

    // .to(".gallery-image-2", {
    //   scale: 0.6,
    //   xPercent: 40,
    //   yPercent: -5,
    //   rotate: -10,
    // })

    // .to(".gallery-image-1", {
    //   scale: 0.6,
    //   xPercent: 30,
    //   rotate: -25,
    //   yPercent: -10,
    // });
  });
  return (
    <section
      className="min-h-screen w-full overflow-hidden text-white"
      id="gallery"
    >
      <div className="grid h-full w-full grid-cols-2">
        <div className="relative h-screen w-full">
          {imageItems.map(({ url, className }, id) => (
            <Image
              src={url}
              alt="gallery"
              fill
              key={id}
              className={`absolute object-cover ${className} bg-white px-5 pt-15 pb-30 shadow-2xl drop-shadow-orange-600`}
            />
          ))}
        </div>
        <div className="flex-center relative h-screen">
          {cards.map(({ title, description, className }, id) => (
            <GalleryContent
              title={title}
              content={description}
              className={className}
              key={id}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
