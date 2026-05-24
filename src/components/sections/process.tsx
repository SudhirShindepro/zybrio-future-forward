import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const STEPS = [
  { n: "01", k: "Discover", d: "Workshops, audits and discovery sprints to align on outcomes, constraints and the riskiest assumptions." },
  { n: "02", k: "Design", d: "Systems-first design — components, interactions and architecture decided in one continuous loop." },
  { n: "03", k: "Develop", d: "Senior engineers shipping production code on day one with CI, observability and automated quality gates." },
  { n: "04", k: "Scale", d: "We don't disappear at launch. We measure, refactor and grow your platform alongside your team." },
];

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.6", "end 0.4"] });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-xs tracking-widest text-muted-foreground/70">/ HOW WE WORK</div>
        <h2 className="mt-3 font-display font-semibold text-4xl md:text-6xl tracking-tighter max-w-3xl text-balance">
          A relentless loop of <span className="gradient-text">build, learn, ship.</span>
        </h2>

        <div ref={ref} className="relative mt-20 max-w-4xl mx-auto">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-6 md:left-1/2 top-0 w-px -translate-x-1/2 gradient-accent shadow-[0_0_20px_oklch(0.7_0.22_265/0.8)]"
          />
          <div className="space-y-20">
            {STEPS.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-120px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`relative grid grid-cols-[3rem_1fr] md:grid-cols-2 gap-6 md:gap-16 ${i % 2 === 1 ? "md:[&>*:first-child]:order-2 md:[&>*:first-child]:text-left md:[&>*:last-child]:text-right" : "md:[&>*:last-child]:text-right md:[&>*:first-child]:order-1"}`}
              >
                <div className={i % 2 === 0 ? "md:text-right" : "md:text-left"}>
                  <div className="font-mono text-xs text-primary mb-2">/{s.n}</div>
                  <h3 className="font-display text-3xl md:text-4xl font-semibold tracking-tight">{s.k}</h3>
                </div>
                <div className="relative">
                  <div className="absolute left-0 md:left-auto md:right-full top-2 md:top-3 -translate-x-1/2 md:translate-x-1/2 h-3 w-3 rounded-full gradient-accent shadow-[0_0_20px_oklch(0.7_0.22_265/0.9)] z-10" style={{ left: "-1.5rem" }} />
                  <p className="text-muted-foreground leading-relaxed text-base md:text-lg">{s.d}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}