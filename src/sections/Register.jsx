import {
  CONTACTS,
  GOOGLE_FORM_LINK,
} from "../data/content";
import { AlertBanner, ContactCard } from "../components/UI";


export function Register() {
  return (
    <section id="register" className="relative z-10 py-24 px-6 overflow-hidden" aria-labelledby="register-heading">
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-coffee-100 border border-coffee-200 text-coffee-800 text-xs font-display font-semibold uppercase tracking-wider mb-4">
          <span>Registration Open</span>
        </div>

        <h2 id="register-heading" className="section-heading mb-3">
          Register Your Team for <span className="font-serif italic text-caramel">DataThon 2026</span>
        </h2>
        <p className="text-text-secondary text-base sm:text-lg mb-8 max-w-xl mx-auto">
          Form your team of three and submit your registration to participate in this two-day experience.
        </p>

        {/* Badges */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-8">
          {[
            "🌟 Open to All Branches",
            "🎓 IT & Non-IT Welcome",
            "👥 3 Members / Team",
          ].map((chip) => (
            <span
              key={chip}
              className="badge-warm px-4 py-1.5 text-xs sm:text-sm font-semibold"
            >
              {chip}
            </span>
          ))}
        </div>

        {/* Alert Banner */}
        <div className="mb-10 max-w-xl mx-auto">
          <AlertBanner
            items={[
              "OPEN TO ALL BRANCHES",
              "IT & NON-IT STUDENTS",
              "ALL ACADEMIC YEARS WELCOME",
            ]}
          />
        </div>

        {/* Primary CTA */}
        <div className="flex flex-col items-center gap-3">
          <a
            href={GOOGLE_FORM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            id="register-now-btn"
            className="btn-primary text-base sm:text-lg px-10 py-4 rounded-full shadow-lg"
          >
            <span>Complete Team Registration Form</span>
            <span className="text-caramel-light font-normal text-sm">↗</span>
          </a>
          <p className="text-text-muted text-xs mt-2">
            The registration form will open in a new tab via Google Forms.
          </p>
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="relative z-10 py-24 px-6 bg-surface-soft/60 border-t border-border-subtle" aria-labelledby="contact-heading">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14 reveal">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-coffee-100 border border-coffee-200 text-coffee-800 text-xs font-display font-semibold uppercase tracking-wider mb-3">
            <span>Helpdesk &amp; Queries</span>
          </div>
          <h2 id="contact-heading" className="section-heading">
            Student <span className="font-serif italic text-caramel">Coordinators</span>
          </h2>
          <p className="text-text-secondary text-base sm:text-lg mt-3">
            Have questions regarding registration, team formation, or event logistics? Contact us directly.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {CONTACTS.map((c, i) => {
            const delay = ["", "reveal-delay-1", "reveal-delay-2"][i];
            return (
              <div key={c.name} className={`reveal ${delay}`}>
                <ContactCard {...c} index={i} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="relative z-10 bg-[#F5F0E6] border-t border-border-subtle py-12 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-2.5 mb-2">
          <span className="w-6 h-6 rounded-md bg-coffee-900 text-[#FDFBF7] font-serif font-bold text-sm flex items-center justify-center">
            D
          </span>
          <p className="font-serif font-bold text-xl text-coffee-950">DataThon 2026</p>
        </div>

        <p className="text-text-secondary text-sm font-medium">
          Organized by the{" "}
          <strong className="text-coffee-950 font-semibold">
            Department of Artificial Intelligence &amp; Machine Learning
          </strong>
        </p>

        <p className="text-text-muted text-xs sm:text-sm mt-1">
          25–26 September 2026 &nbsp;|&nbsp; 1-Day Workshop + 1-Day Hackathon
        </p>

        <div className="my-6 max-w-lg mx-auto border-t border-border-subtle" />

        <p className="text-text-muted text-xs leading-relaxed max-w-lg mx-auto">
          <strong>Eligibility Summary:</strong> Open to both IT &amp; Non-IT branches across all academic years (1st–4th year).
        </p>

        <p className="text-text-muted text-[11px] mt-4">
          © 2026 DataThon · Dept. of AIML. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
