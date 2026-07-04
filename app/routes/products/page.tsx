import { ArrowRight, FlaskConical, Heart, Layers, Radar } from "lucide-react";
import { Link } from "react-router";
import Reveal from "../_components/reveal";
import { CONTACT_HREF, PROCESS_STEPS } from "../_sections/marketing-data";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";

const PRODUCT_SIGNALS = [
  "Healthcare access",
  "Provider networks",
  "Secure user journeys",
  "Global health outcomes",
];

export default function ProductsPage() {
  return (
    <div className="bg-background flex flex-col">
      <section className="relative overflow-hidden px-4 py-24 sm:px-6 sm:py-28 lg:py-32">
        <div className="absolute inset-x-0 top-0 h-[500px] bg-[radial-gradient(circle_at_50%_0%,color-mix(in_oklch,var(--primary)_18%,transparent),transparent_62%)]" />
        <div className="max-w-content relative mx-auto grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <Reveal>
            <Badge variant="outline" className="mb-5 rounded-full px-4">
              Product Development
            </Badge>
            <h1 className="max-w-4xl text-5xl leading-[1.05] font-bold tracking-tight sm:text-6xl lg:text-7xl">
              From product idea to launch-ready digital ecosystem.
            </h1>
            <p className="text-muted-foreground mt-6 max-w-2xl text-lg leading-relaxed">
              Maka develops digital products across healthcare, education,
              finance, and emerging technology sectors with a practical,
              research-led product process.
            </p>
          </Reveal>

          <Reveal delay="short">
            <div className="border-primary/15 bg-muted/35 relative overflow-hidden rounded-[2rem] border p-6 sm:p-8">
              <div className="pointer-events-none absolute right-0 bottom-0 h-64 w-64 translate-x-1/3 translate-y-1/3 rounded-full bg-primary/10 blur-3xl" />
              <div className="relative">
                <div className="mb-8 flex items-start justify-between gap-4">
                  <div className="bg-primary/10 flex size-16 items-center justify-center rounded-3xl">
                    <Heart className="text-primary size-8" strokeWidth={1.5} />
                  </div>
                  <Badge className="rounded-full text-xs">In Development</Badge>
                </div>
                <h2 className="text-4xl font-bold tracking-tight">OHealth+</h2>
                <p className="text-muted-foreground mt-2">
                  Digital Healthcare Platform
                </p>
                <p className="text-muted-foreground mt-6 text-lg leading-relaxed">
                  A secure, user-friendly healthcare ecosystem designed to
                  improve access, connect patients and providers, and support
                  better digital health experiences.
                </p>
                <div className="mt-8 flex flex-wrap gap-2">
                  {PRODUCT_SIGNALS.map((signal) => (
                    <span
                      key={signal}
                      className="bg-background border-border rounded-full border px-3.5 py-2 text-xs font-semibold"
                    >
                      {signal}
                    </span>
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
                Product Lab
              </Badge>
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                A disciplined path from insight to growth.
              </h2>
            </div>
            <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed">
              The process is intentionally staged so products are shaped by real
              problems, tested carefully, launched responsibly, and improved
              after release.
            </p>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS_STEPS.map((step, index) => (
              <Reveal
                key={step.step}
                delay={index % 2 === 0 ? "none" : "short"}
                className="bg-background border-border min-h-48 rounded-3xl border p-5"
              >
                <div className="flex items-center justify-between gap-4">
                  <step.icon className="text-primary size-5" />
                  <span className="text-primary text-xs font-bold">
                    {String(step.step).padStart(2, "0")}
                  </span>
                </div>
                <p className="mt-16 text-base font-semibold">{step.title}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6 sm:py-28">
        <Reveal className="max-w-content border-primary/15 bg-muted/35 mx-auto overflow-hidden rounded-[2rem] border">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
            <div className="border-border border-b p-8 sm:p-10 lg:border-r lg:border-b-0">
              <FlaskConical className="text-primary mb-6 size-8" />
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                What we look for before building.
              </h2>
              <p className="text-muted-foreground mt-4 leading-relaxed">
                Strong product opportunities usually sit where a real access
                gap, a clear user journey, and a sustainable delivery model
                overlap.
              </p>
            </div>
            <div className="grid gap-0 sm:grid-cols-2">
              {[
                { icon: Radar, label: "Clear problem signal" },
                { icon: Layers, label: "Scalable product model" },
                { icon: Heart, label: "Human benefit" },
                { icon: ArrowRight, label: "Launch path" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="border-border border-b p-6 sm:border-r sm:nth-even:border-r-0"
                >
                  <item.icon className="text-primary mb-5 size-5" />
                  <p className="font-semibold">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="bg-muted/45 px-4 py-20 sm:px-6 sm:py-24">
        <Reveal className="max-w-content bg-background border-border mx-auto grid gap-8 rounded-[2rem] border p-8 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <h2 className="max-w-2xl text-3xl font-bold tracking-tight">
            Want to discuss product partnership or OHealth+ updates?
          </h2>
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
