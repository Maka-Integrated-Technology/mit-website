import { ArrowRight, Building2, GraduationCap, Rocket } from "lucide-react";
import { Link } from "react-router";
import Reveal from "../_components/reveal";
import { Button } from "~/components/ui/button";

const SIGNALS = [
  {
    icon: Building2,
    title: "Organizations",
    text: "Modern systems that make operations easier to run, measure, and scale.",
  },
  {
    icon: Rocket,
    title: "Product teams",
    text: "Digital products shaped around usefulness, adoption, and long-term growth.",
  },
  {
    icon: GraduationCap,
    title: "Future talent",
    text: "Learning routes that turn curiosity into practical technology capability.",
  },
];

export default function AboutSection() {
  return (
    <section className="bg-muted/50 px-4 py-24 sm:px-6 sm:py-28">
      <div className="max-w-content mx-auto">
        <Reveal className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <span className="border-primary/20 bg-background text-primary mb-5 inline-flex rounded-full border px-4 py-1.5 text-xs font-semibold">
              What Maka Does
            </span>
            <h2 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
              Technology delivery, product innovation, and talent development
              in one connected company.
            </h2>
          </div>
          <div className="border-primary/15 bg-background rounded-3xl border p-6 sm:p-8">
            <p className="text-muted-foreground text-lg leading-relaxed">
              Maka helps organizations modernize, builds digital products, and
              creates pathways for people to become capable technology
              professionals.
            </p>
            <Button asChild variant="link" className="mt-5 px-0">
              <Link to="/about">
                Learn about Maka
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {SIGNALS.map((signal, index) => (
            <Reveal
              key={signal.title}
              delay={index === 0 ? "none" : "short"}
              className="bg-background border-border relative overflow-hidden rounded-3xl border p-7"
            >
              <div className="bg-primary/10 mb-8 flex size-12 items-center justify-center rounded-2xl">
                <signal.icon className="text-primary size-5" />
              </div>
              <p className="text-primary mb-2 text-xs font-bold tracking-widest uppercase">
                0{index + 1}
              </p>
              <h3 className="text-xl font-bold">{signal.title}</h3>
              <p className="text-muted-foreground mt-3 leading-relaxed">
                {signal.text}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
