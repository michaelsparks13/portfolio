import { skillCategories } from "@/lib/projects";
import ScrollReveal from "./ScrollReveal";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6 sm:px-10">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-accent font-mono text-sm tracking-wider uppercase mb-3">
              Expertise
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">
              Tech Stack
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <ScrollReveal key={category.title}>
              <div className="rounded-xl border border-border bg-surface p-6 h-full">
                <h3 className="text-sm font-mono text-accent tracking-wider uppercase mb-5">
                  {category.title}
                </h3>
                <ul className="space-y-3">
                  {category.skills.map((skill) => (
                    <li key={skill} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent/50 flex-shrink-0" />
                      <span className="text-text-secondary text-sm">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
