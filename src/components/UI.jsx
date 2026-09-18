// SectionHeading
export function SectionHeading({ eyebrow, title, subtitle, center = true }) {
  return (
    <div className={`mb-12 ${center ? "text-center" : ""}`}>
      {eyebrow && (
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-coffee-100 border border-coffee-200 text-coffee-800 text-xs font-display font-semibold uppercase tracking-wider mb-3">
          <span>●</span>
          <span>{eyebrow}</span>
        </div>
      )}
      <h2 className="section-heading mb-4 text-coffee-950">{title}</h2>
      {subtitle && (
        <p className="text-text-secondary text-base md:text-lg max-w-2xl mx-auto font-normal leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}

// AlertBanner — warm informational banner
export function AlertBanner({ items }) {
  return (
    <div className="rounded-2xl bg-amber-soft border border-amber-warm/30 p-4 sm:p-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-center shadow-soft">
      <span className="w-2.5 h-2.5 rounded-full bg-amber-warm flex-shrink-0" />
      {items.map((item, i) => (
        <span key={i} className="font-display font-bold text-xs sm:text-sm text-coffee-900 tracking-wide">
          {item}
          {i < items.length - 1 && <span className="text-coffee-300 ml-6 hidden sm:inline">|</span>}
        </span>
      ))}
    </div>
  );
}

// StatCard
export function StatCard({ icon, value, label, urgent }) {
  return (
    <div
      className={`card-warm p-6 text-center flex flex-col items-center justify-center gap-2 ${
        urgent ? "border-amber-warm/40 bg-amber-soft/50" : ""
      }`}
    >
      <span className="text-2xl" role="img" aria-label={label}>
        {icon}
      </span>
      <p className={`font-display font-bold text-lg leading-tight ${urgent ? "text-amber-warm" : "text-coffee-950"}`}>
        {value}
      </p>
      <p className="text-text-muted text-xs font-medium">{label}</p>
    </div>
  );
}

// NumberedCard
export function NumberedCard({ num, title, children, className = "" }) {
  return (
    <div className={`card-warm p-7 relative overflow-hidden flex flex-col justify-between ${className}`}>
      <span className="ghost-num">{num}</span>
      <div>
        <span className="inline-block text-xs font-display font-bold text-caramel tracking-widest uppercase mb-1.5">
          Section {num}
        </span>
        <h3 className="font-serif font-bold text-coffee-950 text-xl mb-4">{title}</h3>
        {children}
      </div>
    </div>
  );
}

// ChipList
export function ChipList({ items, variant = "warm" }) {
  const styles = {
    warm: "badge-warm",
    caramel: "badge-caramel",
    sage: "badge-sage",
    rust: "badge-rust",
  };
  const cls = styles[variant] || styles.warm;
  return (
    <div className="flex flex-wrap gap-1.5 mt-3">
      {items.map((item) => (
        <span key={item} className={cls}>
          {item}
        </span>
      ))}
    </div>
  );
}

// BulletList
export function BulletList({ items, color = "coffee" }) {
  const dotColor =
    color === "amber"
      ? "bg-amber-warm"
      : color === "sage"
      ? "bg-sage"
      : color === "rust"
      ? "bg-rust"
      : "bg-coffee-600";

  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5 text-text-secondary text-sm leading-relaxed">
          <span className={`w-1.5 h-1.5 rounded-full ${dotColor} flex-shrink-0 mt-2`} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

// PipelineFlow
export function PipelineFlow({ steps, activeIndex = -1 }) {
  return (
    <div className="flex flex-col items-start gap-0 w-full">
      {steps.map((step, i) => (
        <div key={i} className="flex flex-col items-start w-full">
          <div className="flex items-center gap-3 w-full">
            <span
              className={`text-xs font-display font-semibold px-3 py-1.5 rounded-lg border transition-all ${
                i === activeIndex
                  ? "bg-coffee-900 text-[#FDFBF7] border-coffee-900 shadow-sm"
                  : "bg-surface text-coffee-800 border-border-subtle hover:border-coffee-300"
              }`}
            >
              <span className="text-text-muted font-normal mr-2">{String(i + 1).padStart(2, "0")}</span>
              {step}
            </span>
          </div>
          {i < steps.length - 1 && (
            <div className="ml-5 w-px h-4 bg-border-medium" />
          )}
        </div>
      ))}
    </div>
  );
}

// DomainCard
export function DomainCard({ icon, domain, problems }) {
  return (
    <div className="card-warm p-6 flex flex-col gap-3 hover:-translate-y-1 transition-all">
      <div className="flex items-center gap-3">
        <span className="w-10 h-10 rounded-xl bg-surface-soft border border-border-subtle flex items-center justify-center text-xl flex-shrink-0">
          {icon}
        </span>
        <h4 className="font-serif font-bold text-coffee-900 text-base">{domain}</h4>
      </div>
      <ul className="space-y-2 mt-2 pt-3 border-t border-border-subtle">
        {problems.map((p) => (
          <li key={p} className="text-text-secondary text-xs sm:text-sm flex items-start gap-2 leading-snug">
            <span className="text-caramel font-bold text-xs mt-0.5">›</span>
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ContactCard
export function ContactCard({ name, phone, tel, initial, index }) {
  const backgrounds = [
    "bg-coffee-900 text-[#FDFBF7]",
    "bg-caramel text-[#FDFBF7]",
    "bg-sage text-[#FDFBF7]",
  ];
  return (
    <div className="card-warm p-7 text-center flex flex-col items-center gap-4">
      <div
        className={`w-14 h-14 rounded-2xl ${backgrounds[index % 3]} flex items-center justify-center font-serif font-bold text-2xl shadow-sm`}
      >
        {initial}
      </div>
      <div>
        <p className="font-serif font-bold text-coffee-950 text-lg">{name}</p>
        <p className="text-text-muted text-xs mt-0.5">Student Coordinator</p>
      </div>
      <a
        href={`tel:${tel}`}
        className="inline-flex items-center gap-2 text-coffee-900 font-display font-semibold text-sm px-4 py-2 rounded-xl bg-surface-soft border border-border-subtle hover:bg-coffee-100 hover:border-coffee-300 transition-all"
        aria-label={`Call ${name}`}
      >
        <span>📞</span>
        <span>{phone}</span>
      </a>
    </div>
  );
}

// MetricTable
export function MetricTable({ components }) {
  const total = components.reduce((a, c) => a + c.marks, 0);
  return (
    <div className="overflow-hidden rounded-2xl border border-border-subtle bg-surface shadow-soft">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-surface-soft border-b border-border-subtle">
            <th className="text-left px-6 py-4 text-coffee-900 text-xs font-display font-bold tracking-wider uppercase">
              Evaluation Component
            </th>
            <th className="text-right px-6 py-4 text-coffee-900 text-xs font-display font-bold tracking-wider uppercase">
              Marks Weightage
            </th>
          </tr>
        </thead>
        <tbody>
          {components.map((c) => (
            <tr key={c.label} className="border-t border-border-subtle hover:bg-surface-soft/60 transition-colors">
              <td className="px-6 py-4">
                <p className="text-coffee-900 text-sm font-medium">{c.label}</p>
                <div className="h-1.5 rounded-full bg-coffee-100 mt-2.5 overflow-hidden max-w-md">
                  <div className="eval-bar-fill" style={{ width: `${(c.marks / 20) * 100}%` }} />
                </div>
              </td>
              <td className="px-6 py-4 text-right">
                <span className="font-display font-bold text-coffee-900 text-base">{c.marks}</span>
                <span className="text-text-muted text-xs ml-1">/ 100</span>
              </td>
            </tr>
          ))}
          <tr className="border-t-2 border-coffee-200 bg-surface-soft">
            <td className="px-6 py-4 font-serif font-bold text-coffee-950 text-base">TOTAL MARKS</td>
            <td className="px-6 py-4 text-right font-serif font-bold text-caramel text-xl">{total}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
