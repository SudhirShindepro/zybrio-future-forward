import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { AISection } from "@/components/sections/ai";
import { CTA } from "@/components/sections/cta";
import { Reveal } from "@/components/reveal";

const USE_CASES = [
  { t: "Conversational copilots", d: "Domain-tuned assistants embedded inside your product surface, with citations and audit trail." },
  { t: "RAG knowledge platforms", d: "Search and synthesis across millions of documents — secure, evaluated and observable." },
  { t: "Autonomous workflows", d: "Multi-agent systems that handle ops, triage and back-office work end-to-end." },
  { t: "Predictive intelligence", d: "Forecasting, scoring and anomaly detection wired into your existing data stack." },
  { t: "Computer vision", d: "Detection, OCR and classification pipelines running at edge and at scale." },
  { t: "Voice & multimodal", d: "Realtime transcription, voice agents and multimodal assistants." },
];

export const Route = createFileRoute("/ai")({
  head: () => ({
    meta: [
      { title: "AI Solutions — Zybrio" },
      { name: "description", content: "Production-grade AI engineering: agents, RAG, vision, voice and predictive intelligence." },
    ],
  }),
  component: AIPage,
});

function AIPage() {
  return (
    <>
      <PageHero
        kicker="/ AI SOLUTIONS"
        title="AI engineered"
        accent="for production."
        sub="We ship AI systems that survive contact with reality — measurable, governable and economically defensible."
      />
      <AISection />
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <h2 className="font-display font-semibold text-3xl md:text-5xl tracking-tighter max-w-2xl">Use cases we ship.</h2>
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {USE_CASES.map((u, i) => (
              <Reveal key={u.t} delay={i * 0.05}>
                <div className="glass rounded-2xl p-7 h-full">
                  <div className="font-mono text-xs text-primary">/{String(i + 1).padStart(2, "0")}</div>
                  <h3 className="mt-3 font-display text-xl font-semibold">{u.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{u.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}