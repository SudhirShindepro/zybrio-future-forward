import { Reveal } from "@/components/reveal";

const ROWS = [
  ["React", "Next.js", "TypeScript", "Tailwind", "GraphQL", "Vite", "Astro", "Svelte"],
  ["Node.js", "Spring Boot", "Go", "Python", "FastAPI", "Rust", "Django", "Express"],
  ["AWS", "GCP", "Azure", "Kubernetes", "Docker", "Terraform", "Pulumi", "Cloudflare"],
  ["OpenAI", "Anthropic", "LangChain", "Pinecone", "PyTorch", "TensorFlow", "Hugging Face", "vLLM"],
];

export function Tech() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-xs tracking-widest text-muted-foreground/70">/ THE STACK</div>
            <h2 className="mt-3 font-display font-semibold text-4xl md:text-6xl tracking-tighter text-balance">
              The toolchain of <span className="gradient-text">modern engineering.</span>
            </h2>
            <p className="mt-5 text-muted-foreground">
              Opinionated, evergreen, AI-native. We use what ships best, not what looks best on a deck.
            </p>
          </div>
        </Reveal>

        <div className="relative mt-16 space-y-6">
          {ROWS.map((row, i) => (
            <div key={i} className="overflow-hidden" style={{ maskImage: "linear-gradient(90deg, transparent, black 12%, black 88%, transparent)", WebkitMaskImage: "linear-gradient(90deg, transparent, black 12%, black 88%, transparent)" }}>
              <div className="flex gap-3 animate-marquee whitespace-nowrap" style={{ animationDuration: `${30 + i * 6}s`, animationDirection: i % 2 ? "reverse" : "normal" }}>
                {[...row, ...row, ...row].map((t, idx) => (
                  <span key={idx} className="glass rounded-full px-6 py-3 text-sm font-medium text-foreground/90 hover:bg-white/[0.08] transition-colors">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}