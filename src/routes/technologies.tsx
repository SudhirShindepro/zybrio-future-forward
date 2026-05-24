import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { Tech } from "@/components/sections/tech";
import { CTA } from "@/components/sections/cta";

export const Route = createFileRoute("/technologies")({
  head: () => ({
    meta: [
      { title: "Technologies — Zybrio" },
      { name: "description", content: "Our evergreen, AI-native stack — chosen for shipping, not for slides." },
    ],
  }),
  component: TechPage,
});

function TechPage() {
  return (
    <>
      <PageHero
        kicker="/ TECHNOLOGIES"
        title="The toolchain"
        accent="of modern engineering."
        sub="React, Node, Spring, Go, AWS, Kubernetes and the AI runtime — all the way down to the bare metal when it matters."
      />
      <Tech />
      <CTA />
    </>
  );
}