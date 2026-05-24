import { motion } from "framer-motion";
import { Reveal } from "@/components/reveal";
import { MagneticButton } from "@/components/magnetic-button";
import { Brain, Workflow, Zap, ShieldCheck } from "lucide-react";

const PILLARS = [
  { icon: Brain, t: "Foundation-model engineering", d: "RAG, fine-tuning, evaluation harnesses and inference cost optimization." },
  { icon: Workflow, t: "Agentic workflows", d: "Multi-step agents that orchestrate tools, APIs and humans-in-the-loop." },
  { icon: Zap, t: "Realtime intelligence", d: "Streaming completions, embeddings pipelines and low-latency inference." },
  { icon: ShieldCheck, t: "Trust & governance", d: "Guardrails, redaction, audit logs and policy-aware deployments." },
];

export function AISection() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div aria-hidden className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full blur-[120px] opacity-30"
             style={{ background: "radial-gradient(closest-side, oklch(0.65 0.27 300 / 0.6), transparent)" }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-[1fr_1fr] gap-16 items-center">
        <div>
          <Reveal>
            <div className="text-xs tracking-widest text-muted-foreground/70">/ AI SOLUTIONS</div>
            <h2 className="mt-3 font-display font-semibold text-4xl md:text-6xl tracking-tighter text-balance">
              Production-grade <span className="gradient-text">AI engineering.</span>
            </h2>
            <p className="mt-5 text-muted-foreground max-w-md">
              From prototype to scale. We design, ship and operate AI systems that are reliable, observable and economically defensible.
            </p>
          </Reveal>

          <div className="mt-10 grid sm:grid-cols-2 gap-3">
            {PILLARS.map((p, i) => {
              const Icon = p.icon;
              return (
                <Reveal key={p.t} delay={i * 0.05}>
                  <div className="glass rounded-2xl p-5 h-full">
                    <Icon size={18} className="text-primary" />
                    <h3 className="mt-3 font-display font-semibold">{p.t}</h3>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{p.d}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <div className="mt-10">
            <MagneticButton to="/ai">Explore AI capabilities</MagneticButton>
          </div>
        </div>

        <Reveal delay={0.2}>
          <div className="relative aspect-square max-w-lg mx-auto">
            {[1, 2, 3].map((r) => (
              <motion.div
                key={r}
                className="absolute inset-0 rounded-full border border-white/10"
                style={{ transform: `scale(${1 - r * 0.18})` }}
                animate={{ rotate: r % 2 ? 360 : -360 }}
                transition={{ duration: 40 + r * 10, repeat: Infinity, ease: "linear" }}
              >
                {Array.from({ length: 6 }).map((_, i) => {
                  const angle = (i / 6) * Math.PI * 2;
                  return (
                    <div
                      key={i}
                      className="absolute h-3 w-3 rounded-full gradient-accent shadow-[0_0_15px_oklch(0.7_0.22_265/0.8)]"
                      style={{
                        left: `${50 + 50 * Math.cos(angle)}%`,
                        top: `${50 + 50 * Math.sin(angle)}%`,
                        transform: "translate(-50%, -50%)",
                      }}
                    />
                  );
                })}
              </motion.div>
            ))}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="glass-strong rounded-3xl p-8 w-56 h-56 flex flex-col items-center justify-center text-center glow-primary">
                <div className="font-display text-5xl font-semibold gradient-text">99.98%</div>
                <div className="mt-2 text-xs tracking-widest text-muted-foreground">UPTIME · AGENTS</div>
                <div className="mt-4 font-mono text-[10px] text-muted-foreground">84ms p95 · 12 models</div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}