import { useEffect, useRef } from "react";

export function useReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const targets = el.querySelectorAll ? el.querySelectorAll(".reveal") : [];
    const selfIsReveal = el.classList?.contains("reveal");
    const allTargets = selfIsReveal ? [el, ...targets] : [...targets];

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    allTargets.forEach((t) => obs.observe(t));
    return () => obs.disconnect();
  }, []);

  return ref;
}

export function useScrollReveal(selector = ".reveal") {
  useEffect(() => {
    const targets = document.querySelectorAll(selector);
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    targets.forEach((t) => obs.observe(t));
    return () => obs.disconnect();
  }, [selector]);
}

export function useCounter(targetValue, duration = 1200) {
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        let start = 0;
        const step = Math.ceil(targetValue / (duration / 16));
        const timer = setInterval(() => {
          start = Math.min(start + step, targetValue);
          el.textContent = start;
          if (start >= targetValue) clearInterval(timer);
        }, 16);
      }
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [targetValue, duration]);

  return ref;
}
