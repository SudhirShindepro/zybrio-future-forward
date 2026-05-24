import { motion } from "framer-motion";
import { MagneticButton } from "@/components/magnetic-button";
import { Reveal } from "@/components/reveal";

export function CTA() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl glass-strong p-12 md:p-20 text-center">
          <div aria-hidden className="absolute inset-0">
            <motion.div
              className="absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full blur-3xl"
              style={{ background: "radial-gradient(closest-side, oklch(0.7 0.22 265 / 0.5), transparent)" }}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="absolute inset-0 ring-grid opacity-20" />
          </div>
          <Reveal>
            <div className="relative">
              <h2 className="font-display font-semibold text-4xl md:text-7xl tracking-tighter text-balance">
                Have something <span className="gradient-text">extraordinary</span> to build?
              </h2>
              <p className="mt-6 text-muted-foreground max-w-xl mx-auto text-lg">
                Tell us about your product, timeline and ambitions. We respond within 24 hours with a tailored plan.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-3">
                <MagneticButton to="/contact">Start a conversation</MagneticButton>
                <MagneticButton to="/work" variant="ghost">Explore our work</MagneticButton>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}