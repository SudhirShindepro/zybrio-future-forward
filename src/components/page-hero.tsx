import { Reveal, StaggerWords } from "@/components/reveal";

export function PageHero({ kicker, title, accent, sub }: { kicker: string; title: string; accent?: string; sub: string }) {
  return (
    <section className="relative pt-40 pb-20 md:pt-52 md:pb-28 overflow-hidden">
      <div aria-hidden className="absolute inset-0 ring-grid mask-fade-b opacity-40" />
      <div aria-hidden className="absolute left-1/2 -top-32 -translate-x-1/2 h-[500px] w-[900px] rounded-full blur-3xl opacity-40"
           style={{ background: "radial-gradient(closest-side, oklch(0.7 0.22 265 / 0.55), transparent)" }} />
      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <Reveal>
          <div className="inline-flex glass rounded-full px-4 py-1.5 text-xs tracking-widest text-muted-foreground">{kicker}</div>
        </Reveal>
        <h1 className="mt-6 font-display font-semibold text-[clamp(2.5rem,6.5vw,5rem)] leading-[1.05] tracking-tighter text-balance">
          <StaggerWords text={title} />
          {accent && (<> <span className="gradient-text"><StaggerWords text={accent} /></span></>)}
        </h1>
        <Reveal delay={0.3}>
          <p className="mt-6 max-w-2xl mx-auto text-muted-foreground text-lg leading-relaxed text-balance">{sub}</p>
        </Reveal>
      </div>
    </section>
  );
}