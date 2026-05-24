import { motion } from "framer-motion";
import { StaggerWords } from "@/components/reveal";
import { MagneticButton } from "@/components/magnetic-button";
import { Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-40 pb-32 md:pt-52 md:pb-40">
      {/* Backdrop */}
      <div aria-hidden className="absolute inset-0 ring-grid mask-fade-b opacity-50" />
      <div aria-hidden className="absolute inset-x-0 top-0 h-[800px] pointer-events-none">
        <div className="absolute left-1/2 top-20 -translate-x-1/2 h-[600px] w-[1100px] rounded-full blur-[120px] opacity-60 animate-pulse-glow"
             style={{ background: "radial-gradient(closest-side, oklch(0.7 0.22 265 / 0.6), transparent)" }} />
        <div className="absolute left-[20%] top-[30%] h-[400px] w-[400px] rounded-full blur-[100px] opacity-50 animate-float-slow"
             style={{ background: "radial-gradient(closest-side, oklch(0.65 0.27 300 / 0.55), transparent)" }} />
        <div className="absolute right-[15%] top-[10%] h-[350px] w-[350px] rounded-full blur-[100px] opacity-40 animate-float-slow"
             style={{ background: "radial-gradient(closest-side, oklch(0.72 0.22 200 / 0.5), transparent)", animationDelay: "-6s" }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center"
        >
          <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs text-muted-foreground">
            <Sparkles size={12} className="text-primary" />
            <span>AI-native engineering · v2.0</span>
            <span className="h-1 w-1 rounded-full bg-primary animate-pulse" />
          </div>
        </motion.div>

        <h1 className="mt-8 text-center font-display font-semibold tracking-tighter text-[clamp(2.5rem,7vw,5.5rem)] leading-[1.02] text-balance">
          <StaggerWords text="Engineering modern" />
          <br />
          <span className="gradient-text">
            <StaggerWords text="digital experiences." />
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-7 max-w-xl text-center text-base md:text-lg text-muted-foreground leading-relaxed text-balance"
        >
          Zybrio is an AI-powered software studio building premium products, intelligent platforms, and scalable cloud systems for ambitious teams.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-wrap justify-center gap-3"
        >
          <MagneticButton to="/contact">Start a project</MagneticButton>
          <MagneticButton to="/work" variant="ghost">See our work</MagneticButton>
        </motion.div>

        {/* Floating preview panel */}
        <motion.div
          initial={{ opacity: 0, y: 80, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto mt-20 max-w-5xl"
        >
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-primary/30 via-accent/30 to-primary/30 blur-2xl opacity-50" />
          <div className="relative glass-strong rounded-2xl overflow-hidden">
            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/5">
              <div className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <div className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <div className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <div className="ml-3 text-[11px] font-mono text-muted-foreground">zybrio · agent.live</div>
            </div>
            <div className="grid md:grid-cols-[1fr_1.4fr] divide-x divide-white/5">
              <div className="p-6 space-y-3 text-xs font-mono text-muted-foreground">
                {[
                  { k: "PIPELINE", v: "production · v.2.4.1" },
                  { k: "MODELS", v: "12 active · 99.98%" },
                  { k: "LATENCY", v: "84ms · p95" },
                  { k: "AGENTS", v: "running · 6 active" },
                ].map((r) => (
                  <div key={r.k} className="flex justify-between">
                    <span className="text-[10px] tracking-widest text-muted-foreground/70">{r.k}</span>
                    <span className="text-foreground">{r.v}</span>
                  </div>
                ))}
                <div className="mt-6 space-y-2">
                  {[68, 84, 42, 91, 73].map((v, i) => (
                    <div key={i} className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                      <motion.div
                        className="h-full gradient-accent"
                        initial={{ width: 0 }}
                        animate={{ width: `${v}%` }}
                        transition={{ duration: 1.4, delay: 1.4 + i * 0.1, ease: "easeOut" }}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative p-6 bg-gradient-to-br from-primary/5 to-accent/5">
                <div className="text-[10px] tracking-widest text-muted-foreground/70">REAL-TIME AGENT</div>
                <div className="mt-3 font-display text-lg leading-snug text-foreground">
                  "Deploying inference cluster across <span className="gradient-text">3 regions</span> with auto-scaling enabled."
                </div>
                <div className="mt-6 grid grid-cols-3 gap-2">
                  {["Plan", "Build", "Ship"].map((l, i) => (
                    <motion.div
                      key={l}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.6 + i * 0.15, duration: 0.6 }}
                      className="rounded-lg border border-white/10 bg-white/[0.02] p-3"
                    >
                      <div className="text-[10px] text-muted-foreground">Step {i + 1}</div>
                      <div className="text-sm font-medium mt-0.5">{l}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Logos */}
        <div className="mt-20 text-center text-xs tracking-widest text-muted-foreground/70">
          TRUSTED BY MODERN TEAMS WORLDWIDE
        </div>
        <div className="mt-6 overflow-hidden mask-fade-b" style={{ maskImage: "linear-gradient(90deg, transparent, black 15%, black 85%, transparent)", WebkitMaskImage: "linear-gradient(90deg, transparent, black 15%, black 85%, transparent)" }}>
          <div className="flex gap-16 animate-marquee whitespace-nowrap">
            {[..."Lumen·Nordic·Aether·Quanta·Mercato·Vela·Orbit·Helix·Pivot·Forge".split("·"), ..."Lumen·Nordic·Aether·Quanta·Mercato·Vela·Orbit·Helix·Pivot·Forge".split("·")].map((l, i) => (
              <span key={i} className="font-display text-2xl text-muted-foreground/50">{l}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}