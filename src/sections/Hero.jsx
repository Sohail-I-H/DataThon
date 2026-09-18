import { EVENT, GOOGLE_FORM_LINK, HIGHLIGHTS } from "../data/content";
import { AlertBanner, StatCard } from "../components/UI";

export default function Hero() {
  return (
    <>
      {/* Hero Section */}
      <section
        id="home"
        className="relative pt-32 pb-20 px-6 overflow-hidden border-b border-border-subtle"
        aria-label="Hero"
      >
        <div className="max-w-5xl mx-auto text-center relative z-10">
          {/* Department badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-coffee-100 border border-coffee-200 text-coffee-800 text-xs sm:text-sm font-display font-semibold mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-caramel" />
            <span>{EVENT.dept}</span>
          </div>

          {/* Main Title */}
          <h1 className="font-serif font-bold text-coffee-950 tracking-tight leading-[1.05] mb-4 text-5xl sm:text-7xl md:text-8xl">
            DataThon
            <span className="block text-2xl sm:text-4xl md:text-5xl font-display font-medium text-caramel mt-2">
              2026
            </span>
          </h1>

          {/* Tagline */}
          <p className="font-serif italic text-coffee-800 text-xl sm:text-2xl mb-4 max-w-2xl mx-auto">
            "{EVENT.tagline}"
          </p>

          <p className="font-display font-medium text-text-secondary text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            {EVENT.format}
          </p>

          {/* Key tags */}
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {EVENT.keywords.map((kw) => (
              <span
                key={kw}
                className="badge-warm text-xs sm:text-sm px-3.5 py-1"
              >
                {kw}
              </span>
            ))}
          </div>

          {/* CTAs */}
          {/* CTA */}
          <div className="flex justify-center items-center mb-12">
            <a
              href={GOOGLE_FORM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-register-btn"
              className="btn-primary text-base px-9 py-4 rounded-full shadow-md"
            >
              <span>Register Team</span>
              <span className="text-caramel-light font-normal text-sm">· 15 Slots Only</span>
            </a>
          </div>

          {/* Eligibility highlight note */}
          <div className="max-w-2xl mx-auto p-4 rounded-2xl bg-surface border border-border-subtle shadow-soft text-left flex items-start gap-3.5">
            <span className="text-xl mt-0.5">ℹ️</span>
            <div className="text-xs sm:text-sm text-text-secondary">
              <strong className="text-coffee-950 font-semibold">Eligibility Notice: </strong>
              Open to <span className="text-coffee-900 font-semibold">All Years of Non-IT Branches</span> (1st–4th year) and strictly <span className="text-coffee-900 font-semibold">3rd-Year Students only</span> from IT branches.
            </div>
          </div>
        </div>
      </section>

      {/* Hero Highlights */}
      <section id="highlights" className="relative z-10 py-16 px-6 bg-surface-soft/60" aria-label="Event highlights">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
            {HIGHLIGHTS.map((h) => (
              <StatCard key={h.label} {...h} />
            ))}
          </div>

          <AlertBanner
            items={[
              "⚡ ONLY 15 TEAMS ACCEPTED",
              "👥 3 MEMBERS PER TEAM",
              "🎓 NON-IT: ALL YEARS | IT: 3RD YEAR ONLY",
              "⏱ FIRST-COME, FIRST-SERVED",
            ]}
          />
        </div>
      </section>
    </>
  );
}
