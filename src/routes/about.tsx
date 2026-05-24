import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { CTA } from "@/components/sections/cta";

const STATS = [
  { k: "120+", l: "Products shipped" },
  { k: "45", l: "Senior engineers" },
  { k: "12", l: "Time zones" },
  { k: "99.98%", l: "Production uptime" },
];

const VALUES = [
  { t: "Craft over churn", d: "We optimize for shipping quality, not billable hours. Velocity without polish is debt." },
  { t: "Senior by default", d: "No staff augmentation, no juniors hidden behind sales decks. The people who scope ship." },
  { t: "Outcomes own the room", d: "Every roadmap is anchored to measurable business outcomes — not feature counts." },
  { t: "Engineering is design", d: "The fastest path to a beautiful product is a team that treats both as one discipline." },
];

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Zybrio" },
      { name: "description", content: "Senior, opinionated, AI-native. The team behind Zybrio." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        kicker="/ ABOUT"
        title="A senior studio"
        accent="for ambitious teams."
        sub="Zybrio is a focused engineering and AI studio. We partner with founders and product leaders to ship the systems their roadmaps depend on."
      />
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((s, i) => (
            <Reveal key={s.k} delay={i * 0.05}>
              <div className="glass rounded-2xl p-8">
                <div className="font-display text-5xl font-semibold gradient-text">{s.k}</div>
                <div className="mt-3 text-sm text-muted-foreground">{s.l}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <h2 className="font-display font-semibold text-3xl md:text-5xl tracking-tighter max-w-2xl">What we believe.</h2>
          </Reveal>
          <div className="mt-12 grid md:grid-cols-2 gap-4">
            {VALUES.map((v, i) => (
              <Reveal key={v.t} delay={i * 0.05}>
                <div className="glass rounded-2xl p-8 h-full">
                  <h3 className="font-display text-2xl font-semibold">{v.t}</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{v.d}</p>
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