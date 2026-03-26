import ScrollReveal from "./ScrollReveal";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 sm:px-10">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <p className="text-accent font-mono text-sm tracking-wider uppercase mb-3">
            About
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-8">
            Building at the intersection of
            <br />
            <span className="gradient-text">geospatial data</span> and{" "}
            <span className="gradient-text">weather science</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal>
          <div className="space-y-5 text-text-secondary leading-relaxed">
            <p>
              I build interactive tools that make complex Earth observation and
              weather model data accessible through high-performance
              visualization. My work spans the full stack — from Python data
              pipelines processing satellite imagery and climate reanalysis data,
              to React frontends rendering millions of data points on
              WebGL-powered maps.
            </p>
            <p>
              I&apos;ve built production geospatial applications for investigative
              journalism, including an{" "}
              <span className="text-text-primary">
                interactive map tracking aquaculture facilities across China
              </span>{" "}
              using Mapbox, D3, and hexbin density visualization, and a{" "}
              <span className="text-text-primary">
                trail running race platform
              </span>{" "}
              with custom elevation profiles, GPS-enabled offline maps, and
              course simulators.
            </p>
            <p>
              My focus is now on the climate and weather AI space — where
              foundation models are transforming how we forecast weather,
              satellites are generating petabytes of Earth observation data daily,
              and the tools to make sense of it all are still being built.
            </p>
          </div>
        </ScrollReveal>

        {/* Stat highlights */}
        <ScrollReveal>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-14 pt-8 border-t border-border">
            {[
              { value: "11", label: "Projects Designed" },
              { value: "5+", label: "Data APIs Integrated" },
              { value: "6+", label: "Satellite Data Sources" },
              { value: "3", label: "Production Apps Shipped" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold gradient-text">
                  {stat.value}
                </div>
                <div className="text-text-secondary text-xs mt-1 font-mono uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
