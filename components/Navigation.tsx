"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-bg/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
      style={{
        opacity: scrolled ? 1 : 0,
        pointerEvents: scrolled ? "auto" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-10 h-14 flex items-center justify-between">
        <a href="#" className="text-sm font-mono text-text-secondary hover:text-text-primary transition-colors">
          M.Sparks
        </a>
        <div className="flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-text-secondary hover:text-text-primary transition-colors hidden sm:block"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
