"use client";
import { navItems } from "@/constants/constants";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";

// import gsap from "gsap";
// import ScrollTrigger from "gsap/all";
// import { useGSAP } from "@gsap/react";
import Link from "next/link";
// gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="font-poppins fixed top-0 z-50 h-20 w-full px-3 text-white sm:px-4">
      <div className="text-md mx-auto flex h-full w-full max-w-[88rem] items-center justify-between px-2 backdrop-blur-md sm:px-3">
        <div>
          <Link
            href="#hero"
            className="font-regular flex flex-col text-xl uppercase transition-opacity duration-300 hover:opacity-75"
          >
            <span>Still Reverie</span>
            <span className="text-[0.6rem] tracking-[0.35em] text-white/45">
              Cinematic Imageworks
            </span>
          </Link>
        </div>
        <div className="relative flex items-center gap-4">
          <AnimatePresence>
            {isMenuOpen && (
              <motion.ul
                className="absolute top-1/2 right-12 flex min-w-44 -translate-y-1/2 flex-col gap-4 text-right md:min-w-max md:flex-row md:items-center md:gap-8"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                }}
              >
                {navItems.map(({ number, title, key, url }) => (
                  <motion.li
                    key={key}
                    animate={{}}
                    whileHover={{ opacity: 0.9 }}
                    className="flex items-center justify-end gap-2"
                  >
                    <Link
                      href={url}
                      onClick={() => setIsMenuOpen(false)}
                      className="group flex items-center justify-end gap-2"
                    >
                      <span className="items-start text-[0.65rem] tracking-[0.3em] text-white/40 transition-colors duration-300 group-hover:text-white/70">
                        {number}
                      </span>
                      <span className="text-sm md:text-base">{title}</span>
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>

          {isMenuOpen ? (
            <button
              type="button"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close navigation"
              className="cursor-pointer transition-opacity duration-300 hover:opacity-70"
            >
              <X />
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open navigation"
              className="cursor-pointer transition-opacity duration-300 hover:opacity-70"
            >
              <Menu />
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
