"use client";
import { navItems } from "@/constants/constants";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";

// import gsap from "gsap";
// import ScrollTrigger from "gsap/all";
// import { useGSAP } from "@gsap/react";
import Link from "next/link";
// gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // useGSAP(() => {
  // const tl = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: "nav",
  //     start: "bottom top",
  //     // scrub: true,
  //   },
  // });

  // tl.fromTo(
  //   "nav",
  //   { backgroundColor: "transparent" },
  //   {
  //     backgroundColor: "#ffffff50",
  //     backgroundFilter: "blur(10px)",
  //     duration: 1,
  //     ease: "power1.inOut",
  //   },
  // );
  // });

  return (
    <nav className="font-poppins fixed top-0 z-50 h-20 w-full px-6 text-white">
      <div className="text-md flex h-full items-center justify-between px-4">
        <div>
          <h1 className="font-regular text-xl uppercase">Alma Lente</h1>
        </div>
        <div className="flex gap-4">
          {isMenuOpen && (
            <ul className="flex-nowrap gap-10 md:flex">
              {navItems.map(({ number, title, key, url }) => (
                <Link href={url} key={key}>
                  <motion.li
                    animate={{}}
                    whileHover={{ opacity: 0.9 }}
                    className="flex gap-2"
                  >
                    <span className="items-start text-xs">{number}</span>
                    <span className="">{title}</span>
                  </motion.li>
                </Link>
              ))}
            </ul>
          )}

          {isMenuOpen ? (
            <X onClick={() => setIsMenuOpen(false)} />
          ) : (
            <Menu onClick={() => setIsMenuOpen(true)} />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
