import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { Services } from "@/components/sections/services";
import { Process } from "@/components/sections/process";
import { CTA } from "@/components/sections/cta";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Zybrio" },
      { name: "description", content: "AI engineering, custom software, cloud, data and design — delivered by an opinionated senior team." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        kicker="/ SERVICES"
        title="Capabilities"
        accent="built for outcomes."
        sub="Six tightly-integrated practices, one senior team. We compress strategy, design and engineering into a single shipping motion."
      />
      <Services />
      <Process />
      <CTA />
    </>
  );
}