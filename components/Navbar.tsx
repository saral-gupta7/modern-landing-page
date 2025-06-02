"use client";
import { navItems } from "@/constants/constants";
import { ModeToggle } from "@/components/mode-toggle";
import CustomButton from "@/components/CustomButton";
import { motion } from "motion/react";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Navbar = () => {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 z-10 w-full bg-black"
    >
      <section className="font-poppins mx-auto h-24 w-full max-w-screen-xl">
        <div className="text-md flex h-full items-center justify-between px-4">
          <div>
            <h1 className="font-regular text-xl uppercase">Noirframe</h1>
          </div>
          <div>
            <ul className="hidden flex-nowrap gap-10 md:flex">
              {navItems.map(({ number, title, key }) => (
                <motion.li
                  key={key}
                  animate={{}}
                  whileHover={{ opacity: 0.9 }}
                  className="flex gap-2"
                >
                  <span className="items-start text-xs">{number}</span>
                  <span className="">{title}</span>
                </motion.li>
              ))}
            </ul>
          </div>
          {/* <div className="flex items-center gap-5">
            <CustomButton title="Click" />
            <ModeToggle />
          </div> */}
        </div>
      </section>
    </motion.div>
  );
};

export default Navbar;
