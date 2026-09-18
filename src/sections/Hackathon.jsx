import {
  DELIVERABLES,
  PROBLEM_DOMAINS,
} from "../data/content";
import { DomainCard } from "../components/UI";

export function Hackathon() {
  return (
    <section id="hackathon" className="relative z-10 py-16 px-6 bg-surface-soft/60 border-y border-border-subtle" aria-label="Day 2 Hackathon">
      <div className="max-w-6xl mx-auto">
        {/* Deliverables */}
        <h3 className="reveal font-serif font-bold text-coffee-950 text-2xl mb-6">
          📋 Key Team Deliverables
        </h3>
        <div className="reveal grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {DELIVERABLES.map((d, i) => (
            <div key={d} className="card-warm p-5 flex items-start gap-3">
              <span className="w-7 h-7 rounded-lg bg-coffee-100 text-coffee-900 font-display font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-coffee-900 text-xs sm:text-sm font-medium leading-relaxed">
                {d}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProblemDomains() {
  return (
    <section id="problems" className="relative z-10 py-24 px-6" aria-labelledby="problems-heading">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14 reveal">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-coffee-100 border border-coffee-200 text-coffee-800 text-xs font-display font-semibold uppercase tracking-wider mb-3">
            <span>Problem Statements</span>
          </div>
          <h2 id="problems-heading" className="section-heading">
            12 Real-World <span className="font-serif italic text-caramel">Challenge Domains</span>
          </h2>
          <p className="text-text-secondary text-base sm:text-lg mt-3 max-w-2xl mx-auto">
            Each team is assigned a distinct domain on Day 2. Every domain requires the same sound analytical and predictive rigor.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {PROBLEM_DOMAINS.map((d, i) => {
            const delay = ["", "reveal-delay-1", "reveal-delay-2", "reveal-delay-3"][i % 4];
            return (
              <div key={d.domain} className={`reveal ${delay}`}>
                <DomainCard {...d} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
