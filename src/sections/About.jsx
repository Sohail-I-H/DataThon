export function About() {
  const pipeline = ["Raw Data", "Deep Insights", "Model Building", "Real Impact"];

  return (
    <section id="about" className="relative z-10 py-24 px-6" aria-labelledby="about-heading">
      <div className="max-w-4xl mx-auto">
        {/* Narrative */}
        <div className="reveal">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-coffee-100 border border-coffee-200 text-coffee-800 text-xs font-display font-semibold uppercase tracking-wider mb-3">
            <span>About the Initiative</span>
          </div>
          <h2 id="about-heading" className="section-heading mb-6 text-coffee-950">
            What is <span className="text-caramel font-serif">DataThon?</span>
          </h2>
          <div className="space-y-4 text-text-secondary leading-relaxed text-base sm:text-lg">
            <p>
              <strong>DataThon 2026</strong> is an intensive two-day Data Science learning and competitive problem-solving experience hosted by the <strong>Department of Artificial Intelligence &amp; Machine Learning</strong>.
            </p>
            <p>
              The event begins on Day 1 with a hands-on technical workshop where participants explore the complete lifecycle of a Data Science project — from understanding raw data and cleaning it, to exploratory analysis, model development, and rigorous evaluation.
            </p>
            <p>
              On Day 2, teams put theory into practice during a focused hackathon. Each team receives a distinct real-world domain problem and dataset to build, evaluate, and defend an end-to-end predictive solution.
            </p>
          </div>

          {/* Pipeline preview */}
          <div className="mt-10 p-6 sm:p-8 rounded-2xl bg-surface border border-border-medium shadow-card">
            <div className="flex items-center gap-2 mb-5">
              <span className="w-2.5 h-2.5 rounded-full bg-caramel" />
              <p className="text-xs font-display font-bold uppercase tracking-widest text-coffee-800">
                The Core Philosophy
              </p>
            </div>
            <div
              className="flex flex-wrap items-center gap-3 sm:gap-4"
              role="img"
              aria-label="Data to Impact pipeline"
            >
              {pipeline.map((step, i) => (
                <span key={step} className="flex items-center gap-3 sm:gap-4">
                  <span className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-surface-soft border border-border-medium text-coffee-950 font-display font-bold text-sm sm:text-base shadow-sm hover:border-caramel hover:bg-coffee-50 transition-all">
                    <span className="w-6 h-6 rounded-lg bg-coffee-200/70 text-coffee-900 text-xs font-bold flex items-center justify-center flex-shrink-0">
                      {i + 1}
                    </span>
                    <span className="text-coffee-950 font-bold">{step}</span>
                  </span>
                  {i < pipeline.length - 1 && (
                    <span className="text-caramel font-bold text-base sm:text-xl flex-shrink-0">→</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
