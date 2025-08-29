"use client";

import React from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ModeToggle } from "./ThemeToggle";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Blog", href: "/blog" },
];

const NavBar = () => {
  const { scrollY } = useScroll();

  // Navbar animation based on scroll
  const navHeight = useTransform(scrollY, [0, 100], ["4rem", "3.2rem"]);
  const navBg = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255,255,255,0.3)", "rgba(255,255,255,0.7)"]
  );
  const navShadow = useTransform(
    scrollY,
    [0, 100],
    ["0 4px 12px rgba(0,0,0,0.1)", "0 6px 20px rgba(0,0,0,0.15)"]
  );

  return (
    <motion.nav
      style={{
        height: navHeight,
        backgroundColor: navBg,
        boxShadow: navShadow,
      }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-4 left-4 right-4 z-50 
      rounded-2xl border border-white/20 
      backdrop-blur-xl flex items-center justify-between px-6"
    >
      {/* Logo / Brand */}
      <div className="font-bold text-lg tracking-tight">darshan.dev</div>

      {/* Nav Links */}
      <ul className="flex items-center space-x-6">
        {navLinks.map((link) => (
          <motion.li key={link.href} whileHover={{ scale: 1.05 }}>
            <Link
              href={link.href}
              className="relative text-foreground/80 hover:text-foreground transition-colors"
            >
              {link.name}
              {/* Animated underline */}
              <motion.span
                className="absolute left-0 -bottom-1 h-[2px] bg-foreground/80"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
            </Link>
          </motion.li>
        ))}
        <li>
          <ModeToggle />
        </li>
      </ul>
    </motion.nav>
  );
};

export default NavBar;
