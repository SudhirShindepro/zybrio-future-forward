import { motion } from "framer-motion";
import { Reveal } from "@/components/reveal";
import { ArrowUpRight } from "lucide-react";

const WORK = [
  { tag: "FINTECH", title: "Atlas Treasury", desc: "AI-driven cash and risk platform for cross-border treasury teams.", grad: "from-indigo-500/40 via-violet-500/30 to-blue-500/40" },
  { tag: "HEALTH", title: "Lumen Clinical", desc: "Clinical decision support with real-time triage and audit trail.", grad: "from-cyan-400/40 via-teal-400/30 to-emerald-500/40" },
  { tag: "RETAIL", title: "Mercato OS", desc: "Headless commerce platform serving 12M shoppers a month.", grad: "from-pink-500/40 via-fuchsia-500/30 to-purple-500/40" },
  { tag: "AI / SAAS", title: "Helix Studio", desc: "Generative content workspace with multi-agent orchestration.", grad: "from-amber-400/40 via-orange-500/30 to-rose-500/40" },
];

export function Portfolio() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="flex items-end justify-between gap-8 flex-wrap">
            <div>
              <div className="text-xs tracking-widest text-muted-foreground/70">/ SELECTED WORK</div>
              <h2 className="mt-3 font-display font-semibold text-4xl md:text-6xl tracking-tighter max-w-2xl text-balance">
                Products that <span className="gradient-text">moved the needle.</span>
              </h2>
            </div>
            <a href="/work" className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1">
              View all case studies <ArrowUpRight size={14} />
            </a>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {WORK.map((w, i) => (
            <Reveal key={w.title} delay={i * 0.08}>
              <motion.a
                href="#"
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="group block relative overflow-hidden rounded-3xl glass aspect-[4/3]"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${w.grad} opacity-80`} />
                <div className="absolute inset-0 ring-grid opacity-30 mix-blend-overlay" />
                <div
                  aria-hidden
                  className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full blur-3xl opacity-60 group-hover:opacity-90 transition-opacity"
                  style={{ background: "radial-gradient(closest-side, oklch(1 0 0 / 0.3), transparent)" }}
                />
                <div className="relative h-full p-8 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <span className="glass-strong rounded-full px-3 py-1 text-[10px] tracking-widest">{w.tag}</span>
                    <ArrowUpRight className="text-white/80 group-hover:rotate-45 transition-transform" />
                  </div>
                  <div>
                    <h3 className="font-display text-3xl md:text-4xl font-semibold text-white tracking-tight">{w.title}</h3>
                    <p className="mt-2 text-white/80 text-sm max-w-md">{w.desc}</p>
                  </div>
                </div>
              </motion.a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}