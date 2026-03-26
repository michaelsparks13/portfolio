"use client";

import { useState } from "react";
import type { Project } from "@/lib/projects";
import TechTag from "./TechTag";

const iconMap: Record<string, React.ReactNode> = {
  "cloud-sun": (
    <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12">
      <circle cx="26" cy="24" r="10" stroke="currentColor" strokeWidth="2" />
      <path d="M26 10v-4M26 42v-4M12 24H8M44 24h-4M16 14l-3-3M39 37l-3-3M36 14l3-3M13 37l3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M22 38a10 10 0 0118-6 8 8 0 11-2 16H22a7 7 0 010-14z" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.08" />
    </svg>
  ),
  satellite: (
    <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12">
      <rect x="20" y="20" width="24" height="16" rx="2" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.08" />
      <line x1="8" y1="28" x2="20" y2="28" stroke="currentColor" strokeWidth="2" />
      <line x1="44" y1="28" x2="56" y2="28" stroke="currentColor" strokeWidth="2" />
      <rect x="4" y="22" width="4" height="12" rx="1" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.08" />
      <rect x="56" y="22" width="4" height="12" rx="1" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.08" />
      <circle cx="32" cy="48" r="4" stroke="currentColor" strokeWidth="2" opacity="0.4" />
      <circle cx="32" cy="48" r="8" stroke="currentColor" strokeWidth="1.5" opacity="0.2" />
    </svg>
  ),
  database: (
    <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12">
      <ellipse cx="32" cy="18" rx="16" ry="6" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.08" />
      <path d="M16 18v10c0 3.3 7.2 6 16 6s16-2.7 16-6V18" stroke="currentColor" strokeWidth="2" />
      <path d="M16 28v10c0 3.3 7.2 6 16 6s16-2.7 16-6V28" stroke="currentColor" strokeWidth="2" />
      <path d="M16 38v10c0 3.3 7.2 6 16 6s16-2.7 16-6V38" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),
  flame: (
    <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12">
      <path d="M32 8c0 12-16 20-16 32a16 16 0 0032 0C48 28 32 20 32 8z" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.08" />
      <path d="M32 28c0 6-6 10-6 16a6 6 0 0012 0c0-6-6-10-6-16z" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.15" />
    </svg>
  ),
  brain: (
    <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12">
      <circle cx="24" cy="24" r="8" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.08" />
      <circle cx="40" cy="24" r="8" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.08" />
      <circle cx="24" cy="40" r="8" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.08" />
      <circle cx="40" cy="40" r="8" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.08" />
      <line x1="32" y1="16" x2="32" y2="48" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      <line x1="16" y1="32" x2="48" y2="32" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
    </svg>
  ),
  tornado: (
    <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12">
      <path d="M12 16h40M16 24h32M20 32h24M24 40h16M28 48h8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="32" cy="56" r="2" fill="currentColor" opacity="0.5" />
    </svg>
  ),
  grid: (
    <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12">
      <rect x="12" y="12" width="40" height="40" rx="4" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.05" />
      <line x1="12" y1="25" x2="52" y2="25" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
      <line x1="12" y1="38" x2="52" y2="38" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
      <line x1="25" y1="12" x2="25" y2="52" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
      <line x1="38" y1="12" x2="38" y2="52" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
      <circle cx="32" cy="32" r="6" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.1" />
    </svg>
  ),
  "satellite-dish": (
    <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12">
      <path d="M14 50L32 32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="32" cy="32" r="4" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.2" />
      <path d="M20 20a17 17 0 0124 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M16 16a24 24 0 0132 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
      <path d="M12 12a31 31 0 0140 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.25" />
    </svg>
  ),
  tree: (
    <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12">
      <path d="M32 8L18 28h8L18 42h28L38 28h8L32 8z" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.08" />
      <rect x="29" y="42" width="6" height="14" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.1" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12">
      <path d="M32 8L12 20v16c0 12 8.8 21.4 20 24 11.2-2.6 20-12 20-24V20L32 8z" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.08" />
      <path d="M24 34l6 6 12-14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  droplets: (
    <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12">
      <path d="M22 40c0 5.5-4.5 10-10 10S2 45.5 2 40c0-7 10-18 10-18s10 11 10 18z" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.08" transform="translate(10,-4)" />
      <path d="M22 40c0 5.5-4.5 10-10 10S2 45.5 2 40c0-7 10-18 10-18s10 11 10 18z" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.12" transform="translate(30,-14) scale(0.7)" />
      <path d="M22 40c0 5.5-4.5 10-10 10S2 45.5 2 40c0-7 10-18 10-18s10 11 10 18z" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.06" transform="translate(22,4) scale(0.5)" />
    </svg>
  ),
};

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const isEven = index % 2 === 0;
  const isLive = project.status === "live";

  return (
    <div
      className={`flex flex-col ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      } gap-6 md:gap-10 items-center`}
    >
      {/* Visual side */}
      <div className="w-full md:w-1/2 flex-shrink-0">
        <div className="relative rounded-xl overflow-hidden border border-border bg-surface grid-pattern aspect-[16/10] flex items-center justify-center group">
          {/* Icon */}
          <div className="text-accent opacity-30 group-hover:opacity-50 transition-opacity duration-500">
            {iconMap[project.icon] || iconMap["grid"]}
          </div>

          {/* Category label */}
          <div className="absolute top-4 left-4">
            <span className="text-xs font-mono tracking-wider uppercase text-text-secondary bg-bg/70 px-2.5 py-1 rounded-full backdrop-blur-sm">
              {project.category}
            </span>
          </div>

          {/* Status badge */}
          <div className="absolute top-4 right-4">
            {isLive ? (
              <span className="glow-live inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase bg-live/20 text-live px-2.5 py-1 rounded-full border border-live/30">
                <span className="w-1.5 h-1.5 rounded-full bg-live" />
                Live
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 text-xs font-mono tracking-wider uppercase bg-concept/15 text-concept px-2.5 py-1 rounded-full border border-concept/20">
                Designed
              </span>
            )}
          </div>

          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-surface/80 via-transparent to-transparent" />

          {/* Project number */}
          <div className="absolute bottom-4 right-4 text-5xl font-bold text-text-secondary/10 font-mono">
            {String(index + 1).padStart(2, "0")}
          </div>
        </div>
      </div>

      {/* Text side */}
      <div className="w-full md:w-1/2 space-y-4">
        <h3 className="text-2xl sm:text-3xl font-bold text-text-primary leading-tight">
          {project.title}
        </h3>
        <p className="text-accent text-sm font-medium">{project.subtitle}</p>
        <p className="text-text-secondary leading-relaxed text-sm">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 pt-1">
          {project.techStack.slice(0, 6).map((tech) => (
            <TechTag key={tech} label={tech} />
          ))}
          {project.techStack.length > 6 && (
            <TechTag label={`+${project.techStack.length - 6}`} />
          )}
        </div>

        {/* Expandable details */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-xs text-accent hover:text-accent/80 font-mono tracking-wide cursor-pointer transition-colors"
        >
          {expanded ? "- Less" : "+ Details"}
        </button>

        {expanded && (
          <div className="space-y-3 pt-1 text-sm animate-in">
            <div>
              <span className="text-text-secondary font-mono text-xs uppercase tracking-wider">
                Data Sources
              </span>
              <p className="text-text-secondary/80 mt-1 leading-relaxed">
                {project.dataSources.join(" / ")}
              </p>
            </div>
            <div>
              <span className="text-text-secondary font-mono text-xs uppercase tracking-wider">
                Relevant To
              </span>
              <p className="text-text-secondary/80 mt-1">
                {project.targetCompanies.join(", ")}
              </p>
            </div>
          </div>
        )}

        {/* CTA for live projects */}
        {isLive && project.liveUrl && (
          <div className="pt-2">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-accent text-white text-sm font-medium hover:bg-accent/90 transition-colors"
            >
              View Live Demo
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
