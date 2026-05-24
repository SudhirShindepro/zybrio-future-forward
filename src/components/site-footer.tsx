import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Twitter } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="relative mt-32 border-t border-white/5 overflow-hidden">
      <div
        aria-hidden
        className="absolute -top-40 left-1/2 -translate-x-1/2 h-[400px] w-[900px] rounded-full blur-3xl opacity-30"
        style={{ background: "radial-gradient(closest-side, oklch(0.7 0.22 265 / 0.6), transparent)" }}
      />
      <div className="relative mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-lg gradient-accent glow-primary" />
              <span className="font-display font-semibold text-xl">Zybrio</span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground leading-relaxed">
              Engineering AI-powered software and digital products for ambitious teams shaping the next decade.
            </p>
            <div className="mt-6 flex gap-3">
              {[Twitter, Linkedin, Github].map((Icon, i) => (
                <a key={i} href="#" className="h-10 w-10 rounded-full glass flex items-center justify-center hover:text-primary transition-colors">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
          <FooterCol title="Company" links={[
            { to: "/about", label: "About" },
            { to: "/work", label: "Work" },
            { to: "/contact", label: "Contact" },
          ]} />
          <FooterCol title="Capabilities" links={[
            { to: "/services", label: "Services" },
            { to: "/ai", label: "AI Solutions" },
            { to: "/technologies", label: "Technologies" },
          ]} />
          <FooterCol title="Resources" links={[
            { to: "/", label: "Insights" },
            { to: "/", label: "Careers" },
            { to: "/", label: "Privacy" },
          ]} />
        </div>
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Zybrio. Engineering the future.</p>
          <p className="font-mono">v2.0 — Crafted with intention</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { to: string; label: string }[] }) {
  return (
    <div>
      <h4 className="font-display text-sm font-semibold mb-4">{title}</h4>
      <ul className="space-y-2.5">
        {links.map((l) => (
          <li key={l.label}>
            <Link to={l.to} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}