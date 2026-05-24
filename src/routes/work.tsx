import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { Portfolio } from "@/components/sections/portfolio";
import { Testimonials } from "@/components/sections/testimonials";
import { CTA } from "@/components/sections/cta";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — Zybrio" },
      { name: "description", content: "Selected case studies from teams shipping with Zybrio." },
    ],
  }),
  component: WorkPage,
});

function WorkPage() {
  return (
    <>
      <PageHero
        kicker="/ SELECTED WORK"
        title="Products that"
        accent="moved the needle."
        sub="A snapshot of recent engagements across fintech, health, retail and AI-native SaaS."
      />
      <Portfolio />
      <Testimonials />
      <CTA />
    </>
  );
}