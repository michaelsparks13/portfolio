"use client";

import { useEffect, useState } from "react";

export default function HeroOverlay() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none">
      {/* Gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg/60 via-bg/30 to-bg/80" />

      <div
        className="relative text-center px-6 max-w-3xl"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(24px)",
          transition: "opacity 1s ease 0.2s, transform 1s ease 0.2s",
        }}
      >
        <p className="text-text-secondary text-sm tracking-[0.2em] uppercase mb-4 font-mono">
          Michael Sparks
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
          <span className="gradient-text">Climate & Weather</span>
          <br />
          <span className="text-text-primary">Tech Engineer</span>
        </h1>
        <p className="text-text-secondary text-lg sm:text-xl max-w-xl mx-auto leading-relaxed">
          Building AI-powered tools to understand Earth&apos;s weather systems,
          monitor environmental change, and make climate data actionable.
        </p>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 flex flex-col items-center gap-2 pointer-events-auto"
        style={{
          opacity: visible ? 0.6 : 0,
          transition: "opacity 1.5s ease 1.5s",
        }}
      >
        <span className="text-text-secondary text-xs tracking-wider uppercase">Explore</span>
        <svg
          className="w-5 h-5 text-text-secondary bounce-down"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
}
