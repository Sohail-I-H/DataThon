import {
  WORKSHOP_TOPICS,
  DS_PIPELINE,
  EDA_CARDS,
  ML_TYPES,
  ML_TOOLBOX,
  REGRESSION_METRICS,
  CLASSIFICATION_METRICS,
} from "../data/content";
import { NumberedCard, ChipList, BulletList, PipelineFlow } from "../components/UI";

function VizTable({ rows }) {
  return (
    <div className="overflow-hidden rounded-xl border border-border-subtle mt-4 bg-surface-soft/60">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-coffee-100/70 border-b border-border-subtle">
            <th className="text-left py-2.5 px-3.5 text-coffee-900 text-xs font-display font-bold tracking-wider uppercase">
              Analytical Question
            </th>
            <th className="text-left py-2.5 px-3.5 text-coffee-900 text-xs font-display font-bold tracking-wider uppercase">
              Recommended Visualization
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.q} className="border-b border-border-subtle last:border-0 hover:bg-surface transition-colors">
              <td className="py-2.5 px-3.5 text-text-secondary text-xs sm:text-sm font-medium">{r.q}</td>
              <td className="py-2.5 px-3.5 text-coffee-950 text-xs sm:text-sm font-semibold">{r.v}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function Workshop() {
  return (
    <section id="workshop" className="relative z-10 py-24 px-6" aria-labelledby="workshop-heading">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14 reveal">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-coffee-100 border border-coffee-200 text-coffee-800 text-xs font-display font-semibold uppercase tracking-wider mb-3">
            <span>Day 1 — Comprehensive Workshop</span>
          </div>
          <h2 id="workshop-heading" className="section-heading">
            From Problem to <span className="font-serif italic text-caramel">Prediction</span>
          </h2>
          <p className="text-text-secondary text-base sm:text-lg mt-3 max-w-2xl mx-auto">
            A cohesive practical masterclass structured as an unbroken workflow — not disconnected lecture slides.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WORKSHOP_TOPICS.map((topic, i) => {
            const delay = ["", "reveal-delay-1", "reveal-delay-2", "", "reveal-delay-1", "reveal-delay-2"][i];
            const isWide = topic.isPipeline;

            return (
              <div key={topic.num} className={`reveal ${delay} ${isWide ? "lg:col-span-2" : ""}`}>
                <NumberedCard num={topic.num} title={topic.title} className="h-full">
                  {topic.items && <BulletList items={topic.items} color="coffee" />}
                  {topic.tags && <ChipList items={topic.tags} variant="warm" />}

                  {topic.isPipeline && (
                    <>
                      <p className="text-text-secondary text-xs sm:text-sm mb-4 leading-relaxed">
                        {topic.desc}
                      </p>
                      <div className="bg-surface-soft/80 border border-border-subtle rounded-2xl p-5">
                        <PipelineFlow steps={DS_PIPELINE} />
                      </div>
                    </>
                  )}

                  {topic.isVizTable && (
                    <>
                      <VizTable rows={topic.vizRows} />
                      <div className="mt-4 p-3 rounded-xl bg-amber-soft border border-amber-warm/30 text-xs text-coffee-900 font-medium">
                        "{topic.callout}"
                      </div>
                    </>
                  )}
                </NumberedCard>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function EDASpotlight() {
  return (
    <section id="eda" className="relative z-10 py-24 px-6 bg-surface-soft/60 border-y border-border-subtle" aria-labelledby="eda-heading">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14 reveal">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-coffee-100 border border-coffee-200 text-coffee-800 text-xs font-display font-semibold uppercase tracking-wider mb-3">
            <span>Special Module</span>
          </div>
          <h2 id="eda-heading" className="section-heading">
            Exploratory Data Analysis: <span className="font-serif italic text-caramel">Beyond Just Graphing</span>
          </h2>
          <p className="text-text-secondary text-base sm:text-lg mt-3 max-w-2xl mx-auto">
            Participants are coached to interrogate raw data methodically — formulating hypotheses and drawing clear statistical inferences.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {EDA_CARDS.map((card, i) => {
            const delay = ["", "reveal-delay-1", "reveal-delay-2"][i];
            const badgeClasses = {
              coffee: "bg-coffee-100 text-coffee-900 border-coffee-200",
              amber: "bg-amber-soft text-amber-warm border-amber-warm/40",
              sage: "bg-sage-soft text-sage border-sage/40",
            };

            return (
              <div
                key={card.title}
                className={`reveal ${delay} card-warm p-8 flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-3xl p-3 rounded-2xl bg-surface-soft border border-border-subtle" role="img" aria-label={card.title}>
                      {card.icon}
                    </span>
                    <span className={`text-[11px] font-display font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${badgeClasses[card.color]}`}>
                      Pillar 0{i + 1}
                    </span>
                  </div>
                  <h3 className="font-serif font-bold text-coffee-950 text-xl mb-4">
                    {card.title}
                  </h3>
                  <ul className="space-y-3">
                    {card.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-text-secondary text-xs sm:text-sm leading-relaxed">
                        <span className="text-caramel font-bold mt-0.5">›</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function MLFundamentals() {
  return (
    <section id="ml" className="relative z-10 py-24 px-6" aria-labelledby="ml-heading">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14 reveal">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-coffee-100 border border-coffee-200 text-coffee-800 text-xs font-display font-semibold uppercase tracking-wider mb-3">
            <span>Machine Learning</span>
          </div>
          <h2 id="ml-heading" className="section-heading">
            Applied Machine Learning <span className="font-serif italic text-caramel">Toolkit</span>
          </h2>
          <p className="text-text-secondary text-base sm:text-lg mt-3 max-w-xl mx-auto">
            A targeted curriculum focused on algorithms, validation metrics, and practical interpretability.
          </p>
        </div>

        {/* 3 Core ML Paradigms */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {ML_TYPES.map((t, i) => {
            const delay = ["", "reveal-delay-1", "reveal-delay-2"][i];
            return (
              <div key={t.title} className={`reveal ${delay} card-warm p-8 flex flex-col justify-between`}>
                <div>
                  <span className="eyebrow text-xs mb-2 block">{t.type}</span>
                  <h3 className="font-serif font-bold text-coffee-950 text-2xl mb-3">{t.title}</h3>
                  <p className="text-text-secondary text-sm mb-5 leading-relaxed">{t.desc}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {t.examples.map((ex) => (
                      <span key={ex} className="badge-warm text-xs">
                        {ex}
                      </span>
                    ))}
                  </div>
                </div>
                {t.note && (
                  <p className="text-xs text-text-muted italic pt-4 border-t border-border-subtle">
                    {t.note}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        {/* Practical Toolbox */}
        <div className="reveal card-warm p-8 sm:p-10 mb-12 bg-surface">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">🧰</span>
            <h3 className="font-serif font-bold text-coffee-950 text-xl sm:text-2xl">
              Algorithms in Your Toolbox
            </h3>
          </div>
          <p className="text-text-secondary text-sm mb-8">
            These models are thoroughly covered during the workshop and ready to deploy in the hackathon.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {Object.entries(ML_TOOLBOX).map(([category, algos]) => (
              <div key={category} className="p-5 rounded-2xl bg-surface-soft border border-border-subtle">
                <h4 className="font-display font-bold text-coffee-900 text-xs tracking-wider uppercase mb-4">
                  {category}
                </h4>
                <div className="space-y-2">
                  {algos.map((algo) => (
                    <div
                      key={algo}
                      className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-surface border border-border-subtle text-coffee-950 text-xs sm:text-sm font-medium shadow-soft"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-caramel" />
                      <span>{algo}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Evaluation Metrics */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="reveal card-warm p-7">
            <h4 className="font-serif font-bold text-coffee-950 text-lg mb-2">
              Regression Metrics
            </h4>
            <p className="text-text-muted text-xs mb-4">For continuous value predictions:</p>
            <div className="flex flex-wrap gap-2">
              {REGRESSION_METRICS.map((m) => (
                <span key={m} className="badge-warm text-xs sm:text-sm font-semibold">
                  {m}
                </span>
              ))}
            </div>
          </div>
          <div className="reveal reveal-delay-1 card-warm p-7">
            <h4 className="font-serif font-bold text-coffee-950 text-lg mb-2">
              Classification Metrics
            </h4>
            <p className="text-text-muted text-xs mb-4">For category classification predictions:</p>
            <div className="flex flex-wrap gap-2">
              {CLASSIFICATION_METRICS.map((m) => (
                <span key={m} className="badge-caramel text-xs sm:text-sm font-semibold">
                  {m}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Pro Tip Callout */}
        <div className="reveal p-5 sm:p-6 rounded-2xl bg-amber-soft border border-amber-warm/30 flex items-start gap-4">
          <span className="text-2xl mt-0.5">💡</span>
          <div>
            <p className="font-serif font-bold text-coffee-950 text-base mb-1">
              Core Evaluation Philosophy
            </p>
            <p className="text-coffee-900 text-xs sm:text-sm leading-relaxed">
              Higher accuracy alone does not make a solution winning. The most robust model balances business impact, metric justification, and honest handling of edge cases.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
