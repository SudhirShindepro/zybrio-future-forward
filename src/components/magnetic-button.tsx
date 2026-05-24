import { Link } from "@tanstack/react-router";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

type Props = {
  to?: string;
  href?: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
  icon?: boolean;
};

export function MagneticButton({ to, href, children, variant = "primary", className, icon = true }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 200, damping: 18 });
  const sy = useSpring(my, { stiffness: 200, damping: 18 });
  const tx = useTransform(sx, (v) => v * 0.35);
  const ty = useTransform(sy, (v) => v * 0.35);

  const onMove = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    mx.set(e.clientX - r.left - r.width / 2);
    my.set(e.clientY - r.top - r.height / 2);
  };
  const onLeave = () => { mx.set(0); my.set(0); };

  const styles = cn(
    "inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium transition-shadow",
    variant === "primary"
      ? "gradient-accent text-white shadow-xl shadow-primary/30 hover:shadow-primary/50"
      : "glass text-foreground hover:bg-white/10",
    className
  );

  const inner = (
    <>
      <span>{children}</span>
      {icon && <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />}
    </>
  );

  return (
    <motion.div ref={ref} onPointerMove={onMove} onPointerLeave={onLeave} style={{ x: tx, y: ty }} className="inline-block">
      {to ? (
        <Link to={to} className={cn(styles, "group")}>{inner}</Link>
      ) : (
        <a href={href ?? "#"} className={cn(styles, "group")}>{inner}</a>
      )}
    </motion.div>
  );
}