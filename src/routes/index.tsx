import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Process } from "@/components/sections/process";
import { Portfolio } from "@/components/sections/portfolio";
import { Tech } from "@/components/sections/tech";
import { AISection } from "@/components/sections/ai";
import { Testimonials } from "@/components/sections/testimonials";
import { CTA } from "@/components/sections/cta";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Zybrio — AI-Powered Software Engineering" },
      { name: "description", content: "Premium AI-powered software studio building intelligent platforms, custom products and cloud systems for ambitious teams." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <Services />
      <Process />
      <Portfolio />
      <AISection />
      <Tech />
      <Testimonials />
      <CTA />
    </>
  );
}
