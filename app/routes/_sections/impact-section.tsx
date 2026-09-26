import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import Reveal from "../_components/reveal";
import { IMPACT_STATS } from "./marketing-data";
import { Button } from "~/components/ui/button";

const FEATURED_STATS = IMPACT_STATS.slice(0, 3);

export default function ImpactSection() {
  return (
    <section className="bg-muted/45 px-4 py-24 sm:px-6 sm:py-28">
      <div className="max-w-content mx-auto">
        <Reveal className="mb-10 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <span className="border-primary/20 bg-background text-primary mb-5 inline-flex rounded-full border px-4 py-1.5 text-xs font-semibold">
              Impact
            </span>
            <h2 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
              Closing gaps in access, skills, systems, and opportunity.
            </h2>
          </div>
          <Button asChild variant="outline" className="w-fit rounded-full px-6">
            <Link to="/impact">
              See the Impact Story
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </Reveal>

        <Reveal className="bg-background border-border overflow-hidden rounded-[2rem] border">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
            <div className="p-7 sm:p-10">
              <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed">
                The impact story expands across learning disciplines, talent
                programs, services, and communities. The landing page keeps the
                promise visible without making users read the whole report.
              </p>
              <div className="bg-muted mt-10 h-3 overflow-hidden rounded-full">
                <div className="bg-primary h-full w-3/4 rounded-full" />
              </div>
            </div>
            <div className="border-border grid border-t lg:border-t-0 lg:border-l">
              {FEATURED_STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="border-border flex items-center justify-between gap-6 border-b p-6 last:border-b-0"
                >
                  <p className="text-muted-foreground text-sm font-medium">
                    {stat.label}
                  </p>
                  <p className="text-primary font-display text-4xl font-bold">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
