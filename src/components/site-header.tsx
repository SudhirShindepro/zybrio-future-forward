import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/ai", label: "AI Solutions" },
  { to: "/technologies", label: "Tech" },
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled ? "py-3" : "py-5"
      )}
    >
      <div className="mx-auto max-w-7xl px-5">
        <div
          className={cn(
            "flex items-center justify-between rounded-2xl px-5 py-3 transition-all duration-500",
            scrolled ? "glass-strong" : "bg-transparent"
          )}
        >
          <Link to="/" className="group flex items-center gap-2">
            <div className="relative h-8 w-8 rounded-lg gradient-accent glow-primary">
              <div className="absolute inset-[2px] rounded-[6px] bg-background flex items-center justify-center">
                <span className="font-display font-bold text-sm gradient-text">Z</span>
              </div>
            </div>
            <span className="font-display font-semibold tracking-tight text-lg">Zybrio</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="relative rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                activeProps={{ className: "text-foreground bg-white/5" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden md:inline-flex items-center gap-2 rounded-full gradient-accent px-5 py-2 text-sm font-medium text-white shadow-lg shadow-primary/20 transition-transform hover:scale-105"
            >
              Start a project
            </Link>
            <button
              className="md:hidden p-2 rounded-lg glass"
              onClick={() => setOpen((s) => !s)}
              aria-label="Menu"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden mt-2 glass-strong rounded-2xl p-4 flex flex-col gap-1 animate-in fade-in slide-in-from-top-2">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-xl text-sm text-muted-foreground hover:text-foreground hover:bg-white/5"
                activeProps={{ className: "text-foreground bg-white/5" }}
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 text-center rounded-xl gradient-accent px-4 py-3 text-sm font-medium text-white"
            >
              Start a project
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}