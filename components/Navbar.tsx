"use client";
import { navItems } from "@/constants/constants";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-1/2 z-50 w-full -translate-x-1/2 p-2 text-white"
    >
      <section className="font-poppins mx-2 h-20 w-full px-6">
        <div className="text-md flex h-full items-center justify-between px-4">
          <div>
            <h1 className="font-regular text-xl uppercase">Alma Lente</h1>
          </div>
          <div className="flex gap-4">
            {isMenuOpen && (
              <ul className="flex-nowrap gap-10 md:flex">
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
            )}

            {isMenuOpen ? (
              <X onClick={() => setIsMenuOpen(false)} />
            ) : (
              <Menu onClick={() => setIsMenuOpen(true)} />
            )}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Navbar;
