import { ArrowRight, Network, TrendingUp } from "lucide-react";
import { Link } from "react-router";
import Reveal from "../_components/reveal";
import {
  AUDIENCES,
  CONTACT_HREF,
  IMPACT_STATS,
} from "../_sections/marketing-data";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";

const IMPACT_PILLARS = [
  "Accessible learning",
  "Practical mentorship",
  "Industry exposure",
  "Technology partnerships",
];

export default function ImpactPage() {
  return (
    <div className="bg-background flex flex-col">
      <section className="relative overflow-hidden px-4 py-24 sm:px-6 sm:py-28 lg:py-32">
        <div className="absolute inset-x-0 top-0 h-[500px] bg-[radial-gradient(circle_at_50%_0%,color-mix(in_oklch,var(--primary)_18%,transparent),transparent_62%)]" />
        <div className="max-w-content relative mx-auto grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <Reveal>
            <Badge variant="outline" className="mb-5 rounded-full px-4">
              Impact
            </Badge>
            <h1 className="max-w-4xl text-5xl leading-[1.05] font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Bridging the technology skills gap with access and opportunity.
            </h1>
            <p className="text-muted-foreground mt-6 max-w-2xl text-lg leading-relaxed">
              We create practical learning opportunities, mentorship programs,
              internships, and industry exposure that prepare people for
              meaningful technology careers.
            </p>
          </Reveal>

          <Reveal delay="short">
            <div className="grid grid-cols-2 gap-4">
              {IMPACT_STATS.map((stat, index) => (
                <div
                  key={stat.label}
                  className="bg-muted/35 border-border animate-float rounded-3xl border p-6 text-center"
                  style={{ animationDelay: `${index * 0.25}s` }}
                >
                  <p className="text-primary font-display text-5xl font-bold">
                    {stat.value}
                  </p>
                  <p className="text-muted-foreground mt-2 text-sm font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-muted/45 px-4 py-24 sm:px-6 sm:py-28">
        <div className="max-w-content mx-auto">
          <Reveal className="mb-12 grid gap-6 lg:grid-cols-[0.8fr_1fr] lg:items-end">
            <div>
              <TrendingUp className="text-primary mb-5 size-8" />
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                The impact system is bigger than one program.
              </h2>
            </div>
            <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed">
              Maka&apos;s impact connects products, services, learning, and
              partnerships so communities can move from access to capability.
            </p>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-4">
            {IMPACT_PILLARS.map((pillar, index) => (
              <Reveal
                key={pillar}
                delay={index % 2 === 0 ? "none" : "short"}
                className="bg-background border-border rounded-3xl border p-5"
              >
                <p className="text-primary mb-10 text-xs font-bold">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="font-semibold">{pillar}</h3>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6 sm:py-28">
        <div className="max-w-content mx-auto">
          <Reveal className="mb-12 max-w-3xl">
            <Network className="text-primary mb-5 size-8" />
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              A wide ecosystem of organizations, builders, and learners.
            </h2>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {AUDIENCES.map((audience, index) => (
              <Reveal
                key={audience.label}
                delay={index % 2 === 0 ? "none" : "short"}
                className="border-border bg-muted/35 flex min-h-24 items-center gap-3 rounded-2xl border p-5"
              >
                <span className="bg-background flex size-10 shrink-0 items-center justify-center rounded-xl border">
                  <audience.icon className="text-primary size-4" />
                </span>
                <span className="text-sm font-semibold">{audience.label}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/45 px-4 py-20 sm:px-6 sm:py-24">
        <Reveal className="max-w-content bg-background border-border mx-auto grid gap-8 rounded-[2rem] border p-8 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <h2 className="max-w-2xl text-3xl font-bold tracking-tight">
            We are building products, skills, and partnerships for long-term
            community value.
          </h2>
          <Button asChild className="w-fit rounded-full px-7">
            <Link to={CONTACT_HREF}>
              Partner With Maka
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </Reveal>
      </section>
    </div>
  );
}
