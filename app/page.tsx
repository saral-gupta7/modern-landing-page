"use client";
import About from "@/sections/About";
import Hero from "@/sections/Hero";
// import Gallery from "@/sections/gallery";
import { ReactLenis } from "lenis/react";

const Home = () => {
  // const lenis = useLenis((lenis) => {
  //   // called every scroll
  //   console.log(lenis);
  // });
  return (
    <section className="min-h-screen bg-black px-3 md:px-6">
      <ReactLenis root />
      <Hero />
      <About />
      {/* <Gallery /> */}
    </section>
  );
};

export default Home;
