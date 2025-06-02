import About from "@/sections/About";
import Hero from "@/sections/Hero";
import React from "react";

const Home = () => {
  return (
    <section className="min-h-screen bg-black px-7">
      <Hero />
      <About />
    </section>
  );
};

export default Home;
