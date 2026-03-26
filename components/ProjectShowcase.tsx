"use client";

import { projects } from "@/lib/projects";
import ProjectCard from "./ProjectCard";
import ScrollReveal from "./ScrollReveal";

export default function ProjectShowcase() {
  return (
    <section id="projects" className="py-24 px-6 sm:px-10 max-w-6xl mx-auto">
      <ScrollReveal>
        <div className="text-center mb-20">
          <p className="text-accent font-mono text-sm tracking-wider uppercase mb-3">
            Portfolio
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary">
            11 Projects
          </h2>
          <p className="text-text-secondary mt-4 max-w-lg mx-auto leading-relaxed">
            Tools for understanding weather, monitoring environmental change,
            and making climate data actionable.
          </p>
        </div>
      </ScrollReveal>

      <div className="space-y-24 reveal-stagger">
        {projects.map((project, i) => (
          <ScrollReveal key={project.id}>
            <ProjectCard project={project} index={i} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
