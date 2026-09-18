import { SectionHeading } from "../components/UI";
import { DAYS } from "../data/content";

export function About() {
  const pipeline = ["Raw Data", "Deep Insights", "ML Predictions", "Real Impact"];

  return (
    <section id="about" className="relative z-10 py-24 px-6" aria-labelledby="about-heading">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Narrative */}
          <div className="reveal">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-coffee-100 border border-coffee-200 text-coffee-800 text-xs font-display font-semibold uppercase tracking-wider mb-3">
              <span>About the Initiative</span>
            </div>
            <h2 id="about-heading" className="section-heading mb-6 text-coffee-950">
              What is <span className="text-caramel font-serif">DataThon?</span>
            </h2>
            <div className="space-y-4 text-text-secondary leading-relaxed text-base">
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
            <div className="mt-8 p-5 rounded-2xl bg-surface border border-border-subtle shadow-soft">
              <p className="text-xs font-display font-bold uppercase tracking-wider text-text-muted mb-3">
                The Core Philosophy
              </p>
              <div
                className="flex flex-wrap items-center gap-2"
                role="img"
                aria-label="Data to Impact pipeline"
              >
                {pipeline.map((step, i) => (
                  <span key={step} className="flex items-center gap-2">
                    <span className="font-display font-semibold text-xs sm:text-sm px-3 py-1.5 rounded-lg bg-surface-soft border border-border-subtle text-coffee-900">
                      {step}
                    </span>
                    {i < pipeline.length - 1 && (
                      <span className="text-caramel font-bold text-sm">→</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Key Facts Cards */}
          <div className="flex flex-col gap-4 reveal reveal-delay-2">
            {[
              {
                icon: "🏛️",
                title: "Dept. of AI & ML",
                desc: "Curated and hosted by faculty and student mentors from the Artificial Intelligence & Machine Learning Department.",
              },
              {
                icon: "📅",
                title: "Two Distinct Days",
                desc: "25–26 September 2026. Day 1 is dedicated to guided learning; Day 2 is a competitive build hackathon.",
              },
              {
                icon: "👥",
                title: "Strict Team Limit",
                desc: "Only 15 teams of exactly 3 students. Slots are confirmed on a strict first-come, first-served basis.",
                urgent: true,
              },
              {
                icon: "🎓",
                title: "Targeted Eligibility",
                desc: "Non-IT branches: All years eligible (1st–4th year). IT branches: 3rd-year students only.",
                accent: true,
              },
            ].map((fact) => (
              <div
                key={fact.title}
                className={`card-warm p-5 sm:p-6 flex items-start gap-4 ${
                  fact.urgent
                    ? "border-amber-warm/40 bg-amber-soft/40"
                    : fact.accent
                    ? "border-caramel/30 bg-coffee-50/70"
                    : ""
                }`}
              >
                <span className="text-2xl sm:text-3xl p-2.5 rounded-xl bg-surface border border-border-subtle flex-shrink-0">
                  {fact.icon}
                </span>
                <div>
                  <h3 className="font-serif font-bold text-coffee-950 text-base sm:text-lg">
                    {fact.title}
                  </h3>
                  <p className="text-text-secondary text-xs sm:text-sm mt-1 leading-relaxed">
                    {fact.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function EventStructure() {
  return (
    <section id="event-structure" className="relative z-10 py-24 px-6 bg-surface-soft/60 border-y border-border-subtle" aria-labelledby="structure-heading">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14 reveal">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-coffee-100 border border-coffee-200 text-coffee-800 text-xs font-display font-semibold uppercase tracking-wider mb-3">
            <span>Event Structure</span>
          </div>
          <h2 id="structure-heading" className="section-heading">
            Two Days. <span className="font-serif italic text-caramel">Complete Transformation.</span>
          </h2>
          <p className="text-text-secondary text-base sm:text-lg mt-3 max-w-xl mx-auto">
            From learning fundamental data science tools to applying them on an original challenge.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {DAYS.map((day, i) => (
            <article
              key={day.day}
              className={`reveal ${i === 1 ? "reveal-delay-2" : ""} card-warm p-8 sm:p-10 flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="badge-warm font-display font-bold text-xs uppercase tracking-wider">
                    {day.day}
                  </span>
                  <span className="text-text-muted text-xs sm:text-sm font-medium">
                    📅 {day.date}
                  </span>
                </div>

                <h3 className="font-serif font-bold text-coffee-950 text-2xl sm:text-3xl mb-1">
                  {day.title}
                </h3>
                <p className="font-serif italic text-caramel text-base sm:text-lg mb-5">
                  {day.subtitle}
                </p>
                <p className="text-text-secondary text-sm sm:text-base leading-relaxed mb-6">
                  {day.desc}
                </p>
              </div>

              <div className="pt-6 border-t border-border-subtle flex items-center justify-between">
                <span className="text-xs font-display font-semibold text-coffee-800">
                  Focus: {i === 0 ? "Foundations & Code Labs" : "Applied Challenge & Defense"}
                </span>
                <span className="text-xs font-display font-bold text-caramel">
                  {day.badge}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
