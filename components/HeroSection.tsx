"use client";

import dynamic from "next/dynamic";
import HeroOverlay from "./HeroOverlay";

const HeroGlobe = dynamic(() => import("./HeroGlobe"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-bg" />,
});

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <HeroGlobe />
      <HeroOverlay />
    </section>
  );
}
