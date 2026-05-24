import { motion } from "framer-motion";
import { Reveal } from "@/components/reveal";
import { Bot, Code2, Cloud, Layers, LineChart, Smartphone } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const SERVICES = [
  { icon: Bot, title: "AI & Intelligent Systems", desc: "LLM-powered products, autonomous agents, RAG pipelines and ML platforms engineered for production." },
  { icon: Code2, title: "Custom Software Engineering", desc: "Greenfield platforms and complex business systems built with modern architecture and craft." },
  { icon: Cloud, title: "Cloud & DevOps", desc: "AWS, Kubernetes and Terraform — resilient infrastructure, zero-downtime deploys, observable by default." },
  { icon: Smartphone, title: "Mobile & Web Apps", desc: "Native, cross-platform and PWA experiences with the polish your customers feel at first touch." },
  { icon: Layers, title: "Product Design", desc: "Design systems, interaction patterns and brand-led interfaces that turn ideas into shippable products." },
  { icon: LineChart, title: "Data Engineering", desc: "Pipelines, lakehouses, analytics and real-time streams that make decisions measurable." },
];

export function Services() {
  const [active, setActive] = useState(0);
  return (
    <section id="services" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="flex items-end justify-between gap-8 flex-wrap">
            <div>
              <div className="text-xs tracking-widest text-muted-foreground/70">/ CAPABILITIES</div>
              <h2 className="mt-3 font-display font-semibold text-4xl md:text-6xl tracking-tighter max-w-2xl text-balance">
                A studio built for the <span className="gradient-text">full product surface.</span>
              </h2>
            </div>
            <p className="text-muted-foreground max-w-sm">
              Six tightly-integrated practices. One opinionated team. Engineered to ship.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            const isActive = active === i;
            return (
              <Reveal key={s.title} delay={i * 0.06}>
                <motion.div
                  onMouseEnter={() => setActive(i)}
                  className={cn(
                    "group relative h-full rounded-2xl p-7 transition-all duration-500 cursor-pointer overflow-hidden glass",
                    isActive && "bg-white/[0.06]"
                  )}
                >
                  <div
                    aria-hidden
                    className={cn(
                      "absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500",
                      isActive && "opacity-100"
                    )}
                    style={{ background: "linear-gradient(135deg, oklch(0.7 0.22 265 / 0.3), transparent 60%)", maskImage: "linear-gradient(black, black)", padding: "1px" }}
                  />
                  <div className="relative">
                    <div className="h-12 w-12 rounded-xl glass-strong flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon size={20} className="text-primary" />
                    </div>
                    <h3 className="mt-6 font-display text-xl font-semibold">{s.title}</h3>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                    <div className="mt-6 flex items-center gap-2 text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                      <span>Explore</span>
                      <span>→</span>
                    </div>
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}