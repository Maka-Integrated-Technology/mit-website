import { ArrowRight, Compass, Network, Target, Zap } from "lucide-react";
import { Link } from "react-router";
import Reveal from "../_components/reveal";
import {
  CONTACT_HREF,
  PURPOSE_CARDS,
  SPECIALTIES,
  VALUES,
} from "../_sections/marketing-data";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";

const STORY_POINTS = [
  {
    eyebrow: "01",
    title: "We modernize operations",
    body: "We help organizations move from fragmented manual processes into practical systems that are easier to run, measure, and improve.",
  },
  {
    eyebrow: "02",
    title: "We build products with intent",
    body: "Our product work starts with usefulness, trust, and adoption before moving into design, engineering, launch, and growth.",
  },
  {
    eyebrow: "03",
    title: "We develop people",
    body: "Maka extends beyond software delivery by creating routes for future talent to learn, practice, and build real technical confidence.",
  },
];

const ECOSYSTEM_NODES = [
  "Digital transformation",
  "Product innovation",
  "Technology education",
  "Talent development",
];

export default function AboutPage() {
  return (
    <div className="bg-background flex flex-col">
      <section className="relative overflow-hidden px-4 py-24 sm:px-6 sm:py-28 lg:py-32">
        <div className="absolute inset-0 bg-[linear-gradient(color-mix(in_oklch,var(--primary)_6%,transparent)_1px,transparent_1px),linear-gradient(90deg,color-mix(in_oklch,var(--primary)_6%,transparent)_1px,transparent_1px)] bg-size-[88px_88px]" />
        <div className="absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(circle_at_50%_0%,color-mix(in_oklch,var(--primary)_20%,transparent),transparent_62%)]" />

        <div className="max-w-content relative mx-auto grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <Reveal>
            <Badge variant="outline" className="mb-5 rounded-full px-4">
              About Maka
            </Badge>
            <h1 className="max-w-4xl text-5xl leading-[1.05] font-bold tracking-tight sm:text-6xl lg:text-7xl">
              We build the systems, products, and talent behind meaningful
              digital progress.
            </h1>
            <p className="text-muted-foreground mt-6 max-w-2xl text-lg leading-relaxed">
              Maka Integrated Technology Limited is a global technology,
              innovation, and product development company creating practical
              digital solutions for businesses, institutions, and individuals.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild className="rounded-full px-6">
                <Link to={CONTACT_HREF}>
                  Start a Conversation
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full px-6">
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
          </Reveal>

          <Reveal delay="short">
            <div className="border-primary/15 bg-muted/35 relative overflow-hidden rounded-[2rem] border p-6 sm:p-8">
              <div className="bg-primary/10 pointer-events-none absolute right-0 bottom-0 h-64 w-64 translate-x-1/3 translate-y-1/3 rounded-full blur-3xl" />
              <div className="relative flex min-h-[430px] flex-col justify-between">
                <div className="flex items-center justify-between gap-4">
                  <img
                    src="/maka-logo.png"
                    alt="Maka Integrated Technology Limited logo"
                    className="h-14 w-auto object-contain"
                  />
                  <span className="border-primary/20 text-primary rounded-full border px-3 py-1 text-xs font-semibold">
                    Connected ecosystem
                  </span>
                </div>

                <div className="border-primary/15 bg-background relative mx-auto flex size-64 items-center justify-center rounded-full border">
                  <div className="hero-orbit border-primary/15 absolute top-1/2 left-1/2 size-52 -translate-x-1/2 -translate-y-1/2 rounded-full border" />
                  <div className="bg-primary/10 text-primary flex size-24 items-center justify-center rounded-3xl">
                    <Network className="size-10" strokeWidth={1.5} />
                  </div>
                  {ECOSYSTEM_NODES.map((node, index) => (
                    <span
                      key={node}
                      className="animate-float bg-background border-border absolute rounded-full border px-3 py-1.5 text-xs font-semibold"
                      style={{
                        animationDelay: `${index * 0.4}s`,
                        inset:
                          index === 0
                            ? "8% auto auto 2%"
                            : index === 1
                              ? "10% 0 auto auto"
                              : index === 2
                                ? "auto auto 10% 0"
                                : "auto 2% 8% auto",
                      }}
                    >
                      {node}
                    </span>
                  ))}
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  {STORY_POINTS.map((point) => (
                    <div
                      key={point.eyebrow}
                      className="bg-background border-border rounded-2xl border p-4"
                    >
                      <p className="text-primary text-xs font-bold">
                        {point.eyebrow}
                      </p>
                      <p className="mt-2 text-sm font-semibold">
                        {point.title}
                      </p>
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
          <Reveal className="mb-12 grid gap-6 lg:grid-cols-[0.75fr_1fr] lg:items-end">
            <div>
              <Badge variant="outline" className="mb-5 rounded-full px-4">
                How We Create Value
              </Badge>
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Three connected ways Maka shows up.
              </h2>
            </div>
            <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed">
              The landing page introduces the promise. This page expands the
              operating model behind it: systems, products, and people.
            </p>
          </Reveal>

          <div className="grid gap-4 lg:grid-cols-3">
            {STORY_POINTS.map((point, index) => (
              <Reveal
                key={point.title}
                delay={index === 0 ? "none" : "short"}
                className="bg-background border-border min-h-[300px] rounded-[2rem] border p-7"
              >
                <p className="text-primary text-sm font-bold">
                  {point.eyebrow}
                </p>
                <h3 className="mt-10 text-2xl font-bold">{point.title}</h3>
                <p className="text-muted-foreground mt-4 leading-relaxed">
                  {point.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6 sm:py-28">
        <div className="max-w-content mx-auto">
          <Reveal className="mb-12 max-w-3xl">
            <Badge variant="outline" className="mb-5 rounded-full px-4">
              Capability Map
            </Badge>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Connected capabilities for modern organizations.
            </h2>
          </Reveal>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {SPECIALTIES.map((specialty, index) => (
              <Reveal
                key={specialty.label}
                delay={index % 2 === 0 ? "none" : "short"}
                className="border-border bg-muted/35 group hover:border-primary/30 min-h-40 rounded-3xl border p-5 transition-colors"
              >
                <div className="flex h-full flex-col justify-between gap-8">
                  <span className="bg-background flex size-11 items-center justify-center rounded-2xl border">
                    <specialty.icon className="text-primary size-4" />
                  </span>
                  <span className="text-base leading-tight font-semibold">
                    {specialty.label}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/45 px-4 py-24 sm:px-6 sm:py-28">
        <div className="max-w-content mx-auto grid gap-5 md:grid-cols-2">
          {PURPOSE_CARDS.map((card, index) => (
            <Reveal
              key={card.kicker}
              delay={index === 0 ? "none" : "short"}
              className="bg-background border-border relative overflow-hidden rounded-[2rem] border p-8 sm:p-10"
            >
              <div className="bg-primary/10 pointer-events-none absolute top-0 right-0 h-48 w-48 translate-x-1/3 -translate-y-1/3 rounded-full blur-3xl" />
              <div className="relative">
                <div className="bg-primary/10 mb-8 flex size-14 items-center justify-center rounded-2xl">
                  <card.icon
                    className="text-primary size-7"
                    strokeWidth={1.5}
                  />
                </div>
                <p className="text-primary mb-2 text-xs font-semibold tracking-widest uppercase">
                  {card.kicker}
                </p>
                <h2 className="font-display mb-5 text-3xl font-bold sm:text-4xl">
                  {card.title}
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {card.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6 sm:py-28">
        <div className="max-w-content mx-auto">
          <Reveal className="mb-12 grid gap-6 lg:grid-cols-[0.8fr_1fr] lg:items-end">
            <div>
              <Badge variant="outline" className="mb-5 rounded-full px-4">
                What We Stand For
              </Badge>
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Values that shape how we build.
              </h2>
            </div>
            <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed">
              These are the principles that keep the company useful, focused,
              and accountable as we build with clients, partners, and learners.
            </p>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((value, index) => (
              <Reveal
                key={value.title}
                delay={index % 2 === 0 ? "none" : "short"}
                className="bg-background border-border rounded-3xl border p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <value.icon className="text-primary size-5" />
                  <span className="text-primary/60 text-xs font-bold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-10 font-semibold">{value.title}</h3>
                <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                  {value.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/45 px-4 py-20 sm:px-6 sm:py-24">
        <Reveal className="max-w-content border-primary/15 bg-background mx-auto grid gap-8 rounded-[2rem] border p-8 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <div className="text-primary mb-5 flex items-center gap-3">
              <Compass className="size-5" />
              <Target className="size-5" />
              <Zap className="size-5" />
            </div>
            <h2 className="max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to understand where Maka can fit into your next move?
            </h2>
          </div>
          <Button asChild className="w-fit rounded-full px-7">
            <Link to={CONTACT_HREF}>
              Contact Us
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </Reveal>
      </section>
    </div>
  );
}
