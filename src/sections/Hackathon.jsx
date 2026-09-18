import {
  HACKATHON_WORKFLOW,
  DELIVERABLES,
  EDA_FLOW,
  PROBLEM_DOMAINS,
  EVAL_COMPONENTS,
  PHILOSOPHY_FLOW,
  AI_ALLOWED,
  AI_MUST_EXPLAIN,
} from "../data/content";
import { DomainCard, MetricTable } from "../components/UI";

export function Hackathon() {
  return (
    <section id="hackathon" className="relative z-10 py-24 px-6 bg-surface-soft/60 border-y border-border-subtle" aria-labelledby="hackathon-heading">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14 reveal">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-coffee-100 border border-coffee-200 text-coffee-800 text-xs font-display font-semibold uppercase tracking-wider mb-3">
            <span>Day 2 — Hackathon</span>
          </div>
          <h2 id="hackathon-heading" className="section-heading">
            Turn Real Data Into <span className="font-serif italic text-caramel">Measurable Impact</span>
          </h2>
          <p className="text-text-secondary text-base sm:text-lg mt-3 max-w-xl mx-auto">
            Teams of three take on an authentic problem statement — navigating the complete pipeline from raw dataset to working prototype.
          </p>
        </div>

        {/* Workflow Steps */}
        <div className="reveal card-warm p-8 sm:p-10 mb-12">
          <h3 className="font-serif font-bold text-coffee-950 text-center text-xl mb-8">
            🗂 Hackathon Delivery Pipeline
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3.5">
            {HACKATHON_WORKFLOW.map((step, i) => (
              <div
                key={step}
                className="flex flex-col items-center text-center p-4 rounded-xl bg-surface-soft border border-border-subtle hover:border-coffee-300 hover:bg-surface transition-all"
              >
                <span className="font-display font-bold text-xs text-caramel mb-1">
                  STEP {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display font-semibold text-coffee-950 text-xs sm:text-sm leading-snug">
                  {step}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Deliverables */}
        <h3 className="reveal font-serif font-bold text-coffee-950 text-2xl mb-6">
          📋 Key Team Deliverables
        </h3>
        <div className="reveal grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
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

        {/* EDA Challenge */}
        <div className="reveal card-warm p-8 sm:p-10 bg-surface">
          <div className="max-w-3xl">
            <span className="eyebrow block mb-2">Evidence-Based Discovery</span>
            <h3 className="font-serif font-bold text-coffee-950 text-2xl sm:text-3xl mb-3">
              EDA: Every Chart Must Answer a Specific Question
            </h3>
            <p className="text-text-secondary text-sm sm:text-base mb-8 leading-relaxed">
              Every team will receive 5 focused analytical questions specific to their dataset. Instead of superficial charts, your analysis must deliver clear visual and statistical evidence.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 justify-center py-5 px-4 rounded-2xl bg-surface-soft border border-border-subtle mb-6">
            {EDA_FLOW.map((step, i) => (
              <span key={step} className="flex items-center gap-2">
                <span className="pipe-step">{step}</span>
                {i < EDA_FLOW.length - 1 && (
                  <span className="text-caramel font-bold text-sm">→</span>
                )}
              </span>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-amber-soft border border-amber-warm/30 flex items-center gap-3">
            <span className="text-xl">💬</span>
            <p className="text-coffee-900 font-display font-semibold text-xs sm:text-sm">
              Don't just plot diagrams. Explain clearly what the data reveals and what decisions it supports.
            </p>
          </div>
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

export function Evaluation() {
  return (
    <section id="evaluation" className="relative z-10 py-24 px-6 bg-surface-soft/60 border-y border-border-subtle" aria-labelledby="eval-heading">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14 reveal">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-coffee-100 border border-coffee-200 text-coffee-800 text-xs font-display font-semibold uppercase tracking-wider mb-3">
            <span>Scoring Rubric</span>
          </div>
          <h2 id="eval-heading" className="section-heading">
            How Solutions Are <span className="font-serif italic text-caramel">Evaluated</span>
          </h2>
          <p className="text-text-secondary text-base sm:text-lg mt-3">
            A comprehensive 100-mark rubric that rewards thorough end-to-end thinking rather than brute-force metric gaming.
          </p>
        </div>

        {/* Total Marks Banner */}
        <div className="flex justify-center mb-8 reveal">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-surface border border-border-subtle shadow-soft">
            <span className="w-3 h-3 rounded-full bg-caramel" />
            <span className="font-serif font-bold text-coffee-950 text-2xl">100 Marks</span>
            <span className="text-text-muted text-xs font-display font-semibold uppercase tracking-wider">
              Total Score Weightage
            </span>
          </div>
        </div>

        {/* Metric Table */}
        <div className="reveal mb-12">
          <MetricTable components={EVAL_COMPONENTS} />
        </div>

        {/* Evaluation Philosophy */}
        <div className="reveal card-warm p-8 sm:p-10 text-center bg-surface">
          <h3 className="font-serif font-bold text-coffee-950 text-2xl mb-3">
            DataThon Celebrates Sound Engineering
          </h3>
          <p className="text-text-secondary text-sm max-w-xl mx-auto mb-8">
            Judges evaluate the complete arc of reasoning — not just the decimal points of accuracy.
          </p>

          <div className="flex flex-wrap items-center gap-2 justify-center mb-8">
            {PHILOSOPHY_FLOW.map((step, i) => (
              <span key={step} className="flex items-center gap-2">
                <span className="pipe-step text-xs">{step}</span>
                {i < PHILOSOPHY_FLOW.length - 1 && (
                  <span className="text-caramel font-bold text-sm">→</span>
                )}
              </span>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-surface-soft border border-border-subtle inline-flex items-center gap-3">
            <span>🎯</span>
            <p className="text-coffee-900 font-display font-semibold text-xs sm:text-sm">
              The goal is to cultivate genuine analytical competence and practical domain communication.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AIPolicy() {
  return (
    <section id="ai-policy" className="relative z-10 py-24 px-6" aria-labelledby="ai-heading">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14 reveal">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-coffee-100 border border-coffee-200 text-coffee-800 text-xs font-display font-semibold uppercase tracking-wider mb-3">
            <span>Guidelines &amp; Ethics</span>
          </div>
          <h2 id="ai-heading" className="section-heading">
            AI-Assisted <span className="font-serif italic text-caramel">Development Policy</span>
          </h2>
          <p className="text-text-secondary text-base sm:text-lg mt-3 max-w-xl mx-auto">
            Modern tools are encouraged — provided you can explain and defend every line of logic you submit.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="reveal card-warm p-8 bg-surface">
            <p className="font-serif font-bold text-sage text-xl mb-5 flex items-center gap-2.5">
              <span>✅</span>
              <span>AI Tools Are Allowed For</span>
            </p>
            <ul className="space-y-3.5">
              {AI_ALLOWED.map((item) => (
                <li key={item} className="flex items-start gap-3 text-text-secondary text-xs sm:text-sm leading-relaxed">
                  <span className="text-sage font-bold">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal reveal-delay-1 card-warm p-8 bg-surface">
            <p className="font-serif font-bold text-coffee-950 text-xl mb-5 flex items-center gap-2.5">
              <span>⚑</span>
              <span>You Must Be Able to Explain</span>
            </p>
            <ul className="space-y-3.5">
              {AI_MUST_EXPLAIN.map((item) => (
                <li key={item} className="flex items-start gap-3 text-text-secondary text-xs sm:text-sm leading-relaxed">
                  <span className="text-caramel font-bold">›</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="reveal p-6 rounded-2xl text-center bg-amber-soft border border-amber-warm/40">
          <p className="font-serif font-bold text-coffee-950 text-lg sm:text-xl">
            "Use AI as an accelerator for your learning. Never let AI replace your understanding."
          </p>
        </div>
      </div>
    </section>
  );
}
