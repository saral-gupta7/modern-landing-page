"use client";
import About from "@/sections/About";
import Hero from "@/sections/Hero";
import Marquee from "@/sections/marque";
// import Gallery from "@/sections/gallery";
import { ReactLenis } from "lenis/react";

const Home = () => {
  // const lenis = useLenis((lenis) => {
  //   // called every scroll
  //   console.log(lenis);
  // });
  return (
    <section className="max-w-screen bg-black px-3 md:px-6">
      <ReactLenis root />
      <Hero />
      <Marquee />
      <About />
      {/* <Gallery />
      <div className="h-screen bg-black"></div> */}
    </section>
  );
};

export default Home;
