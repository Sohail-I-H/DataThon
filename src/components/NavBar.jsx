import { useState, useEffect } from "react";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  const links = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "hackathon", label: "Hackathon" },
    { id: "problems", label: "Problems" },
    { id: "register", label: "Register", cta: true },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });

    const sections = document.querySelectorAll("section[id]");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { threshold: 0.25 }
    );
    sections.forEach((s) => obs.observe(s));

    return () => {
      window.removeEventListener("scroll", onScroll);
      obs.disconnect();
    };
  }, []);

  const handleLink = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#FDFBF7]/90 backdrop-blur-md border-b border-border-subtle shadow-sm shadow-coffee-950/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => handleLink("home")}
            className="group flex items-center gap-2 text-left focus:outline-none"
            aria-label="DataThon 2026 Home"
          >
            <span className="w-8 h-8 rounded-lg bg-coffee-900 text-[#FDFBF7] font-serif font-bold text-lg flex items-center justify-center shadow-sm">
              D
            </span>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-xl text-coffee-950 tracking-tight leading-none group-hover:text-caramel transition-colors">
                DataThon
              </span>
              <span className="text-[10px] font-display font-semibold tracking-widest text-text-muted uppercase mt-0.5">
                2026 · AIML DEPT
              </span>
            </div>
          </button>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-1.5" role="list">
            {links.map((l) =>
              l.cta ? (
                <li key={l.id} className="ml-2">
                  <button
                    onClick={() => handleLink(l.id)}
                    className="btn-primary text-sm py-2.5 px-5 rounded-full"
                  >
                    <span>Register</span>
                    <span className="text-xs text-caramel-light font-normal">→</span>
                  </button>
                </li>
              ) : (
                <li key={l.id}>
                  <button
                    onClick={() => handleLink(l.id)}
                    className={`px-3.5 py-2 rounded-lg text-sm font-display font-medium transition-all duration-150 focus:outline-none ${
                      active === l.id
                        ? "text-coffee-950 bg-coffee-100 font-semibold"
                        : "text-text-secondary hover:text-coffee-950 hover:bg-surface-soft"
                    }`}
                  >
                    {l.label}
                  </button>
                </li>
              )
            )}
          </ul>

          {/* Hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2.5 rounded-lg border border-border-subtle bg-surface hover:bg-surface-soft transition-colors focus:outline-none"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <span className={`block w-5 h-0.5 bg-coffee-900 transition-transform duration-200 ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block w-5 h-0.5 bg-coffee-900 transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-0.5 bg-coffee-900 transition-transform duration-200 ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-x-0 top-20 z-40 bg-[#FDFBF7]/98 backdrop-blur-xl border-b border-border-subtle shadow-lg transition-all duration-300 lg:hidden ${
          menuOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="flex flex-col p-5 gap-1.5 max-w-md mx-auto">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => handleLink(l.id)}
              className={`text-left px-4 py-3 rounded-xl text-base font-display font-medium transition-colors ${
                l.cta
                  ? "btn-primary justify-center text-center mt-3 py-3.5"
                  : active === l.id
                  ? "text-coffee-950 bg-coffee-100 font-semibold"
                  : "text-text-secondary hover:text-coffee-950 hover:bg-surface-soft"
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
