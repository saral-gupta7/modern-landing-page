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
        end: "+=200%",
        pin: true,
        scrub: true,
      },
    });
    // initial states of text cards
    //
    gsap.set(".card", {
      y: 300,
      // xPercent: -100,
      opacity: 1,
    });

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

    // setting initial position of images
    gsap.set(".gallery-image", {
      scale: 0.5,
      xPercent: 5,
      rotate: 23,
    });
    gsap.set(".gallery-image-1", {
      scale: 0.5,
      xPercent: 10,
      rotate: -15,
    });
    gsap.set(".gallery-image-2", {
      scale: 0.5,
      xPercent: 15,
      rotate: 10,
    });
    gsap.set(".gallery-image-3", {
      rotate: 0,
      xPercent: 91,
      yPercent: -10,
      scale: 0.5,
    });

    // animated states
    //
    tl.to(".card", {
      y: 300,
      ease: "power2.inOut",
    })
      .to(
        ".gallery-image-3",
        {
          rotate: 0,
          xpercent: 91,
          ypercent: -10,
          scale: 0.5,
          ease: "power2.inOut",
        },
        "<",
      )
      .to(".card", {
        opacity: 0,
        delay: 0.5,
        ease: "power2.inOut",
      })
      .to(
        ".gallery-image-3",
        {
          opacity: 0,
          ease: "power2.inOut",
        },
        "<",
      )
      .to(".gallery-image", {
        xPercent: 110,
        duration: 0.5,
        ease: "power2.inOut",
      })
      .to(
        ".gallery-image-1",
        {
          xPercent: 100,
          duration: 0.5,
          ease: "power2.inOut",
        },
        "<",
      )
      .to(
        ".gallery-image-2",
        {
          xPercent: 105,
          duration: 0.5,
          ease: "power2.inOut",
        },
        "<",
      )
      .to(
        ".background-1",
        {
          opacity: 0,
          ease: "power2.inOut",
          // filter: "blur(5px)",
        },
        "<",
      )
      .to(".gallery-image-2", {
        xPercent: -9,
        yPercent: -10,
        scale: 0.5,
        rotate: 0,
        ease: "power2.inOut",
      })
      .to(
        ".card-1",
        {
          y: 300,
          opacity: 1,
          ease: "power2.inOut",
        },
        "<",
      )

      .to(".gallery-image-2", {
        delay: 0.5,
        opacity: 0,
        ease: "power2.inOut",
      })
      .to(
        ".card-1",
        {
          opacity: 0,
          ease: "power2.inOut",
        },
        "<",
      )
      .to(".gallery-image", {
        xPercent: 5,
        duration: 0.5,
        ease: "power2.inOut",
      })
      .to(
        ".gallery-image-1",
        {
          xPercent: 10,
          duration: 0.5,
          ease: "power2.inOut",
        },
        "<",
      )
      .to(
        ".background-2",
        {
          opacity: 0,
          ease: "power2.inOut",
        },
        "<",
      )
      .to(".gallery-image-1", {
        rotate: 0,
        xPercent: 91,
        yPercent: -10,
        scale: 0.5,
        ease: "power2.inOut",
      })

      .to(
        ".card-2",
        {
          y: 300,
          opacity: 1,
          ease: "power2.inOut",
        },
        "<",
      )

      .to(".gallery-image-1", {
        delay: 0.5,
        opacity: 0,
        ease: "power2.inOut",
      })

      .to(
        ".card-2",
        {
          opacity: 0,
          ease: "power2.inOut",
        },
        "<",
      )

      .to(".gallery-image", {
        xPercent: -9,
        rotate: 0,
        scale: 0.5,
        yPercent: -10,
        duration: 0.5,
        ease: "power2.inOut",
      })

      .to(
        ".background-3",
        {
          opacity: 0,
          ease: "power2.inOut",
        },
        "<",
      )
      .to(
        ".card-3",
        {
          y: 300,
          opacity: 1,
          ease: "power2.inOut",
        },
        "<",
      );
  });
  return (
    <section
      className="relative min-h-screen w-full overflow-hidden text-white"
      id="gallery"
    >
      <Image
        src="/images/landscape.jpg"
        fill
        alt="background"
        quality={100}
        className="background-4"
      />
      <Image
        src="/images/landscape6.jpg"
        fill
        alt="background"
        quality={100}
        className="background-3"
      />
      <Image
        src="/images/landscape4.jpg"
        fill
        alt="background"
        quality={100}
        className="background-2"
      />

      <Image
        src="/images/landscape2.jpg"
        fill
        alt="background"
        quality={100}
        className="background-1"
      />

      <div className="grid h-full w-full grid-cols-2">
        <div className="relative h-screen w-full">
          {imageItems.map(({ url, className }, id) => (
            <Image
              src={url}
              alt="gallery"
              fill
              key={id}
              className={`absolute object-cover ${className} bg-white p-8 pb-40 shadow-2xl drop-shadow-orange-600`}
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
