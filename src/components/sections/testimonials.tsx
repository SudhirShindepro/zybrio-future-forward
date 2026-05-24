import { motion } from "framer-motion";
import { Reveal } from "@/components/reveal";
import { Quote } from "lucide-react";

const ITEMS = [
  { q: "Zybrio rebuilt our core platform in a quarter. Six months later we doubled retention.", a: "Mira Soren", r: "Head of Product, Atlas" },
  { q: "The only team that thinks like a founder and ships like a senior engineering org.", a: "David Chen", r: "CTO, Helix Studio" },
  { q: "From discovery to deployment in 10 weeks. Their AI engineering bar is genuinely rare.", a: "Aisha Rahman", r: "VP Engineering, Mercato" },
  { q: "They didn't sell us slides. They shipped a product that pays for itself every month.", a: "Lukas Vogel", r: "Founder, Lumen Clinical" },
];

export function Testimonials() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-xs tracking-widest text-muted-foreground/70">/ TRUST</div>
            <h2 className="mt-3 font-display font-semibold text-4xl md:text-6xl tracking-tighter text-balance">
              The teams behind the <span className="gradient-text">products you use.</span>
            </h2>
          </div>
        </Reveal>

        <div className="mt-16 overflow-hidden" style={{ maskImage: "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)", WebkitMaskImage: "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)" }}>
          <motion.div
            className="flex gap-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          >
            {[...ITEMS, ...ITEMS].map((t, i) => (
              <div key={i} className="glass rounded-2xl p-7 min-w-[380px] max-w-[380px]">
                <Quote size={24} className="text-primary" />
                <p className="mt-4 text-lg leading-relaxed font-display">{t.q}</p>
                <div className="mt-6 pt-6 border-t border-white/5">
                  <div className="font-semibold text-sm">{t.a}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{t.r}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}