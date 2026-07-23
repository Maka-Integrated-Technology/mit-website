import { ArrowRight, Check, Mail, Route, Workflow } from "lucide-react";
import { Link } from "react-router";
import Reveal from "../_components/reveal";
import { CONTACT_HREF, SERVICES } from "../_sections/marketing-data";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";

const ENGAGEMENT_STEPS = [
  "Understand the business context",
  "Shape the technical direction",
  "Deliver practical systems",
  "Support adoption and growth",
];

export default function ServicesPage() {
  return (
    <div className="bg-background flex flex-col">
      <section className="relative overflow-hidden px-4 py-24 sm:px-6 sm:py-28 lg:py-32">
        <div className="absolute inset-0 bg-[linear-gradient(color-mix(in_oklch,var(--primary)_6%,transparent)_1px,transparent_1px),linear-gradient(90deg,color-mix(in_oklch,var(--primary)_6%,transparent)_1px,transparent_1px)] bg-[size:88px_88px]" />
        <div className="absolute inset-x-0 top-0 h-[480px] bg-[radial-gradient(circle_at_50%_0%,color-mix(in_oklch,var(--primary)_18%,transparent),transparent_62%)]" />

        <div className="max-w-content relative mx-auto grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <Reveal>
            <Badge variant="outline" className="mb-5 rounded-full px-4">
              Services
            </Badge>
            <h1 className="max-w-4xl text-5xl leading-[1.05] font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Technology services for strategy, delivery, and measurable growth.
            </h1>
            <p className="text-muted-foreground mt-6 max-w-2xl text-lg leading-relaxed">
              We support organizations from early technical decisions through
              product launch, infrastructure, intelligence, training, and
              ongoing transformation.
            </p>
            <Button asChild className="mt-8 rounded-full px-7">
              <Link to={CONTACT_HREF}>
                Discuss a Project
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </Reveal>

          <Reveal delay="short">
            <div className="border-primary/15 bg-muted/35 relative overflow-hidden rounded-[2rem] border p-6 sm:p-8">
              <div className="pointer-events-none absolute top-0 right-0 h-64 w-64 translate-x-1/3 -translate-y-1/3 rounded-full bg-primary/10 blur-3xl" />
              <div className="relative">
                <div className="mb-10 flex items-center justify-between">
                  <div className="bg-background flex size-14 items-center justify-center rounded-2xl border">
                    <Workflow className="text-primary size-7" strokeWidth={1.5} />
                  </div>
                  <span className="border-primary/20 text-primary rounded-full border px-3 py-1 text-xs font-semibold">
                    Engagement model
                  </span>
                </div>
                <div className="grid gap-3">
                  {ENGAGEMENT_STEPS.map((step, index) => (
                    <div
                      key={step}
                      className="bg-background border-border flex items-center gap-4 rounded-2xl border p-4"
                    >
                      <span className="text-primary text-xs font-bold">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <p className="font-medium">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-muted/45 px-4 py-24 sm:px-6 sm:py-28">
        <div className="max-w-content mx-auto">
          <Reveal className="mb-12 grid gap-6 lg:grid-cols-[0.8fr_1fr] lg:items-end">
            <div>
              <Badge variant="outline" className="mb-5 rounded-full px-4">
                Service System
              </Badge>
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Detailed capabilities, organized by outcome.
              </h2>
            </div>
            <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed">
              Each service category can stand alone, but the strongest work
              happens when strategy, infrastructure, software, data, and
              training connect.
            </p>
          </Reveal>

          <div className="grid gap-5">
            {SERVICES.map((service, index) => (
              <Reveal
                key={service.title}
                delay={index % 2 === 0 ? "none" : "short"}
                className="bg-background border-border overflow-hidden rounded-[2rem] border"
              >
                <div className="grid gap-0 lg:grid-cols-[0.75fr_1.25fr]">
                  <div className="border-border border-b p-7 lg:border-r lg:border-b-0">
                    <div className="bg-primary/10 mb-6 flex size-12 items-center justify-center rounded-2xl">
                      <service.icon className="text-primary size-5" />
                    </div>
                    <p className="text-primary mb-3 text-xs font-bold">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="text-2xl font-bold">{service.title}</h3>
                    <p className="text-muted-foreground mt-4 leading-relaxed">
                      {service.summary}
                    </p>
                  </div>
                  <ul className="grid gap-0 sm:grid-cols-2">
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className="border-border flex items-start gap-3 border-b p-4 last:border-b-0 sm:border-r sm:nth-even:border-r-0"
                      >
                        <Check className="text-primary mt-0.5 size-4 shrink-0" />
                        <span className="text-muted-foreground text-sm">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6 sm:py-28">
        <Reveal className="max-w-content border-primary/15 bg-muted/35 mx-auto grid gap-8 rounded-[2rem] border p-8 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <Route className="text-primary mb-5 size-7" />
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Need a technical partner for the next stage?
            </h2>
            <p className="text-muted-foreground mt-3 max-w-2xl leading-relaxed">
              Tell us what you are building, modernizing, or trying to improve.
              We will help shape a practical path forward.
            </p>
          </div>
          <Button asChild className="w-fit rounded-full px-7">
            <Link to={CONTACT_HREF}>
              Contact Us
              <Mail className="size-4" />
            </Link>
          </Button>
        </Reveal>
      </section>
    </div>
  );
}
