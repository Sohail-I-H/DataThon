import NavBar from "./components/NavBar";
import Hero from "./sections/Hero";
import { About, EventStructure } from "./sections/About";
import { Workshop, EDASpotlight, MLFundamentals } from "./sections/Workshop";
import { Hackathon, ProblemDomains, Evaluation, AIPolicy } from "./sections/Hackathon";
import { Eligibility, Register, Contact, Footer } from "./sections/Register";
import { useScrollReveal } from "./hooks/useAnimations";

export default function App() {
  useScrollReveal(".reveal");

  return (
    <div className="relative min-h-screen bg-base text-text-primary overflow-x-hidden selection:bg-coffee-200 selection:text-coffee-950">
      {/* Warm textured background & subtle ambient lighting */}
      <div className="warm-paper-texture" aria-hidden="true" />
      <div className="ambient-glow ambient-1" aria-hidden="true" />
      <div className="ambient-glow ambient-2" aria-hidden="true" />

      {/* Navigation */}
      <NavBar />

      {/* Main Sections */}
      <main>
        <Hero />
        <About />
        <EventStructure />
        <Workshop />
        <EDASpotlight />
        <MLFundamentals />
        <Hackathon />
        <ProblemDomains />
        <Evaluation />
        <AIPolicy />
        <Eligibility />
        <Register />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
