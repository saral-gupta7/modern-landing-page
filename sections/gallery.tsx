import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import GalleryContent from "@/components/GalleryContent";
import { cards, imageItems } from "@/constants/constants";
gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const galleryItems = imageItems.map((image, index) => ({
    image,
    card: cards[index],
  }));

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        const stage = sectionRef.current?.querySelector(".gallery-stage");

        if (!stage) {
          return;
        }

        const stackStates = [
          { x: 0, y: 120, rotate: -14, scale: 0.88 },
          { x: 28, y: 82, rotate: -7, scale: 0.92 },
          { x: 58, y: 42, rotate: 4, scale: 0.96 },
          { x: 82, y: 8, rotate: 10, scale: 1 },
        ];

        const activeX = () => stage.clientWidth * 0.4;
        const activeY = () => 18;
        const restingX = () => stage.clientWidth * 0.39;

        gsap.set(".gallery-copy", {
          autoAlpha: 0,
          y: 36,
        });

        gsap.set(".gallery-bg", {
          autoAlpha: 0,
        });

        gsap.set(".gallery-bg-0", {
          autoAlpha: 1,
        });

        gsap.utils
          .toArray<HTMLElement>(".gallery-card")
          .forEach((card, index) => {
            gsap.set(card, {
              ...stackStates[index],
              autoAlpha: 1,
              transformOrigin: "center center",
              zIndex: 20 - index,
            });
          });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: "#gallery-desktop",
            start: "top top",
            end: "+=260%",
            pin: true,
            scrub: true,
          },
        });

        tl.to(".gallery-card-0", {
          x: activeX,
          y: activeY,
          rotate: 0,
          scale: 1.1,
          ease: "power2.inOut",
          duration: 1,
        }).to(
          ".gallery-copy-0",
          {
            autoAlpha: 1,
            y: 0,
            ease: "power2.out",
            duration: 0.45,
          },
          "<0.1",
        );

        galleryItems.slice(1).forEach((_, index) => {
          const previous = index;
          const current = index + 1;

          tl.to(`.gallery-copy-${previous}`, {
            autoAlpha: 0,
            y: -24,
            ease: "power2.inOut",
            duration: 0.35,
          })
            .to(
              `.gallery-bg-${previous}`,
              {
                autoAlpha: 0,
                ease: "power2.inOut",
                duration: 0.4,
              },
              "<",
            )
            .to(
              `.gallery-card-${previous}`,
              {
                autoAlpha: 0,
                x: restingX,
                y: 48,
                rotate: -4,
                scale: 1.14,
                ease: "power2.inOut",
                duration: 0.45,
              },
              "<",
            )
            .to(
              `.gallery-bg-${current}`,
              {
                autoAlpha: 1,
                ease: "power2.inOut",
                duration: 0.4,
              },
              "<",
            )
            .to(
              `.gallery-card-${current}`,
              {
                x: activeX,
                y: activeY,
                rotate: 0,
                scale: 1.1,
                ease: "power2.inOut",
                duration: 0.95,
              },
              ">-0.05",
            )
            .to(
              `.gallery-copy-${current}`,
              {
                autoAlpha: 1,
                y: 0,
                ease: "power2.out",
                duration: 0.45,
              },
              "<0.12",
            );
        });
      });

      return () => mm.revert();
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className="relative text-white" id="gallery">
      <div
        id="gallery-desktop"
        className="relative hidden min-h-screen overflow-hidden px-6 py-10 lg:block"
      >
        <Image
          src="/images/landscape.webp"
          fill
          alt="Dark landscape backdrop"
          sizes="100vw"
          className="gallery-bg gallery-bg-3 object-cover"
        />
        <Image
          src="/images/landscape6.webp"
          fill
          alt="Layered landscape backdrop"
          sizes="100vw"
          className="gallery-bg gallery-bg-2 object-cover"
        />
        <Image
          src="/images/landscape4.webp"
          fill
          alt="Muted landscape backdrop"
          sizes="100vw"
          className="gallery-bg gallery-bg-1 object-cover"
        />
        <Image
          src="/images/landscape2.webp"
          fill
          alt="Mountain backdrop"
          sizes="100vw"
          className="gallery-bg gallery-bg-0 object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="gallery-stage relative z-10 mx-auto h-screen max-w-[88rem]">
          <div className="pointer-events-none max-w-md pt-20">
            <p className="section-label">Selected Frames</p>
            <h2 className="font-space-grotesk mt-4 text-4xl leading-tight font-semibold">
              A gallery stack that lets each frame leave the pile and own the
              stage.
            </h2>
          </div>

          <div className="absolute top-[28%] left-0 h-[34rem] w-[22rem] xl:w-[24rem]">
            {galleryItems.map(({ image, card }, index) => (
              <div
                key={card.title}
                className={`gallery-card gallery-card-${index} absolute top-0 left-0 h-[28rem] w-[18.5rem] overflow-hidden rounded-[2rem] shadow-[0_36px_90px_rgba(0,0,0,0.45)] xl:h-[31rem] xl:w-[20rem]`}
              >
                <Image
                  src={image.url}
                  alt={card.title}
                  fill
                  sizes="(max-width: 1536px) 24vw, 20rem"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
              </div>
            ))}
          </div>

          <div className="pointer-events-none absolute top-[22%] right-0 h-[26rem] w-[min(33rem,36vw)]">
            {galleryItems.map(({ card }, index) => (
              <GalleryContent
                title={card.title}
                content={card.description}
                className={`gallery-copy gallery-copy-${index}`}
                index={index + 1}
                key={card.title}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="px-5 py-20 lg:hidden">
        <div className="mx-auto max-w-xl">
          <p className="section-label">Selected Frames</p>
          <h2 className="font-space-grotesk mt-4 text-4xl leading-tight font-semibold">
            A mobile-first gallery that keeps the imagery clear and the copy
            readable.
          </h2>
        </div>

        <div className="mx-auto mt-10 max-w-xl space-y-12">
          {galleryItems.map(({ image, card }, index) => (
            <article key={card.title}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem]">
                <Image
                  src={image.url}
                  alt={card.title}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
              </div>

              <div className="mt-5">
                <span className="section-label">{`Sequence ${String(index + 1).padStart(2, "0")}`}</span>
                <h3 className="font-space-grotesk mt-3 text-3xl font-semibold">
                  {card.title}
                </h3>
                <p className="font-playfair mt-4 text-base leading-7 text-white/76">
                  {card.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
