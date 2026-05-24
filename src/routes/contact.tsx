import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { useState } from "react";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Zybrio" },
      { name: "description", content: "Start a project with Zybrio. We respond within 24 hours." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHero
        kicker="/ CONTACT"
        title="Let's build"
        accent="something extraordinary."
        sub="Tell us about your product, ambition and timeline. A principal engineer will respond within 24 hours."
      />
      <section className="pb-32">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-[1fr_1.4fr] gap-8">
          <Reveal>
            <div className="glass rounded-3xl p-8 h-full">
              <h3 className="font-display text-2xl font-semibold">Reach us directly</h3>
              <p className="mt-2 text-sm text-muted-foreground">For new projects, partnerships and press.</p>
              <div className="mt-8 space-y-5">
                {[
                  { i: Mail, l: "hello@zybrio.com" },
                  { i: Phone, l: "+1 (415) 555-0182" },
                  { i: MapPin, l: "Remote · NA · EU · APAC" },
                ].map(({ i: Icon, l }) => (
                  <div key={l} className="flex items-center gap-3 text-sm">
                    <div className="h-10 w-10 rounded-xl glass-strong flex items-center justify-center">
                      <Icon size={16} className="text-primary" />
                    </div>
                    <span>{l}</span>
                  </div>
                ))}
              </div>
              <div className="mt-10 pt-8 border-t border-white/5">
                <div className="text-xs tracking-widest text-muted-foreground">RESPONSE TIME</div>
                <div className="mt-2 font-display text-3xl font-semibold gradient-text">&lt; 24 hours</div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="relative glass-strong rounded-3xl p-8 md:p-10 overflow-hidden"
            >
              <div aria-hidden className="absolute -top-32 -right-32 h-80 w-80 rounded-full blur-3xl opacity-40"
                   style={{ background: "radial-gradient(closest-side, oklch(0.7 0.22 265 / 0.6), transparent)" }} />
              <div className="relative grid sm:grid-cols-2 gap-4">
                <Field label="Name" name="name" />
                <Field label="Work email" name="email" type="email" />
                <Field label="Company" name="company" />
                <Field label="Budget" name="budget" placeholder="$50k+" />
                <div className="sm:col-span-2">
                  <label className="block text-xs tracking-widest text-muted-foreground mb-2">PROJECT</label>
                  <textarea
                    rows={5}
                    placeholder="Tell us about your product and timeline..."
                    className="w-full rounded-xl bg-white/[0.03] border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-primary/60 focus:bg-white/[0.05] transition-colors resize-none"
                  />
                </div>
                <div className="sm:col-span-2 flex justify-between items-center mt-2">
                  <p className="text-xs text-muted-foreground">By submitting you agree to our privacy policy.</p>
                  <button
                    type="submit"
                    className="group inline-flex items-center gap-2 rounded-full gradient-accent px-6 py-3 text-sm font-medium text-white shadow-xl shadow-primary/30 hover:shadow-primary/50 transition-shadow"
                  >
                    {sent ? "Sent — talk soon" : "Send message"}
                    <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>
              </div>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label className="block text-xs tracking-widest text-muted-foreground mb-2">{label.toUpperCase()}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xl bg-white/[0.03] border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-primary/60 focus:bg-white/[0.05] transition-colors"
      />
    </div>
  );
}