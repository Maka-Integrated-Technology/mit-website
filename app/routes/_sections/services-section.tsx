import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import Reveal from "../_components/reveal";
import { SERVICES } from "./marketing-data";
import { Button } from "~/components/ui/button";

const FEATURED_SERVICES = SERVICES.slice(0, 4);

export default function ServicesSection() {
  return (
    <section className="bg-background px-4 py-24 sm:px-6 sm:py-28">
      <div className="max-w-content mx-auto">
        <Reveal className="mb-12 grid gap-6 lg:grid-cols-[0.75fr_1fr] lg:items-end">
          <div>
            <span className="border-primary/20 bg-primary/5 text-primary mb-5 inline-flex rounded-full border px-4 py-1.5 text-xs font-semibold">
              Services
            </span>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              A clearer path from business need to working system.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed">
            Instead of showing every service at once, the homepage introduces
            the capabilities by outcome: build, connect, understand, and guide.
          </p>
        </Reveal>

        <div className="grid gap-4 lg:grid-cols-4">
          {FEATURED_SERVICES.map((service, index) => (
            <Reveal
              key={service.title}
              delay={index % 2 === 0 ? "none" : "short"}
              className="group border-border bg-muted/35 hover:border-primary/30 min-h-[320px] rounded-3xl border p-6 transition-colors"
            >
              <div className="flex h-full flex-col">
                <div className="flex items-start justify-between gap-4">
                  <div className="bg-background flex size-12 items-center justify-center rounded-2xl border">
                    <service.icon className="text-primary size-5" />
                  </div>
                  <span className="text-primary/60 text-xs font-bold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="mt-auto pt-12">
                  <h3 className="text-lg font-bold">{service.title}</h3>
                  <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
                    {service.summary}
                  </p>
                  <div className="mt-5 h-1.5 rounded-full bg-background">
                    <div className="bg-primary h-full w-2/3 rounded-full transition-all duration-500 group-hover:w-full" />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 flex justify-center">
          <Button asChild variant="outline" className="rounded-full px-6">
            <Link to="/services">
              View All Services
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
