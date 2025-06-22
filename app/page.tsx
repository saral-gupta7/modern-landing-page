"use client";
import About from "@/sections/About";
import Hero from "@/sections/Hero";
// import MobileView from "@/sections/mobileView";
import Navbar from "@/components/Navbar";
import Gallery from "@/sections/gallery";
import { ReactLenis } from "lenis/react";
import { useEffect, useState } from "react";
import CustomCursor from "@/components/CustomCursor";
// import LoaderScreen from "@/sections/Loader";

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 800);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className="max-w-screen bg-black">
      <>
        <ReactLenis root />
        {/* <LoaderScreen /> */}

        {isMobile ? "" : <CustomCursor />}

        <Navbar />
        <Hero />
        <About />
        {isMobile ? "" : <Gallery />}
      </>
    </section>
  );
};

export default Home;
