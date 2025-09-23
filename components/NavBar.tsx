"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ModeToggle } from "./ThemeToggle";
import { Menu, X } from "lucide-react";
// Avatar and handoff logic removed from the navbar per request

// New navigation to match the reference design
const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Projects", href: "/projects" },
];

const NavBar = () => {
  const { scrollY } = useScroll();
  const [isOpen, setIsOpen] = useState(false);

  // Subtle motion on scroll
  const bgColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255,255,255,0.40)", "rgba(255,255,255,0.75)"]
  );
  const toggleScale = useTransform(scrollY, [0, 120], [1, 0.9]);

  return (
    <>
      {/* Centered pill navigation */}
      <motion.div
        className="fixed top-6 left-1/2 z-40 -translate-x-1/2"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <motion.ul
          style={{ backgroundColor: bgColor }}
          className="hidden md:flex items-center gap-6 rounded-full border border-white/30 bg-white/50 px-6 py-2 shadow-lg backdrop-blur-xl dark:border-white/10 dark:bg-black/40"
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </motion.ul>

        {/* Mobile: hamburger that opens a simple menu */}
        <div className="md:hidden flex items-center justify-center">
          <button
            aria-label="Open navigation"
            onClick={() => setIsOpen(true)}
            className="rounded-full border border-white/20 bg-white/60 p-2 shadow-lg backdrop-blur-xl dark:border-white/10 dark:bg-black/50"
          >
            <Menu size={20} />
          </button>
        </div>
      </motion.div>

      {/* Navbar avatar removed per request */}

      {/* Right theme toggle */}
      <motion.div
        className="fixed right-6 top-6 z-40"
        style={{ scale: toggleScale }}
      >
        <ModeToggle />
      </motion.div>

      {/* Mobile full-screen menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex flex-col items-center justify-center gap-8 bg-background/95 backdrop-blur-xl"
        >
          <button
            aria-label="Close navigation"
            onClick={() => setIsOpen(false)}
            className="absolute right-6 top-6 rounded-full border border-white/20 bg-white/60 p-2 shadow-lg dark:border-white/10 dark:bg-black/50"
          >
            <X size={20} />
          </button>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-xl font-medium text-foreground/90 hover:underline"
            >
              {link.name}
            </Link>
          ))}
        </motion.div>
      )}

      {/* Spacer so content doesn't hide under fixed elements */}
      <div className="h-24" />
    </>
  );
};

export default NavBar;
