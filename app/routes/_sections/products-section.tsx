import { ArrowRight, Heart, Search, Settings, Sparkles } from "lucide-react";
import { Link } from "react-router";
import Reveal from "../_components/reveal";
import { Button } from "~/components/ui/button";

const PROCESS_PREVIEW = [
  { icon: Search, label: "Research", text: "Find the real problem." },
  { icon: Settings, label: "Build", text: "Prototype, test, and ship." },
  { icon: Sparkles, label: "Grow", text: "Improve with market signals." },
];

export default function ProductsSection() {
  return (
    <section className="bg-muted/45 px-4 py-24 sm:px-6 sm:py-28">
      <div className="max-w-content mx-auto grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <Reveal>
          <span className="border-primary/20 bg-background text-primary mb-5 inline-flex rounded-full border px-4 py-1.5 text-xs font-semibold">
            Product Innovation
          </span>
          <h2 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
            Product work should create suspense, not spill every detail.
          </h2>
          <p className="text-muted-foreground mt-5 max-w-xl text-lg leading-relaxed">
            Maka is developing digital product ecosystems across sectors where
            access, trust, and usability matter. OHealth+ is one early signal.
          </p>
          <Button asChild className="mt-7 rounded-full px-6">
            <Link to="/products">
              Explore Product Work
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </Reveal>

        <Reveal delay="short">
          <div className="bg-background border-border overflow-hidden rounded-[2rem] border">
            <div className="border-border flex items-center justify-between border-b p-5">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 flex size-11 items-center justify-center rounded-xl">
                  <Heart className="text-primary size-5" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-bold">OHealth+</p>
                  <p className="text-muted-foreground text-sm">
                    Digital Healthcare Platform
                  </p>
                </div>
              </div>
              <span className="border-primary/20 text-primary rounded-full border px-3 py-1 text-xs font-semibold">
                In development
              </span>
            </div>

            <div className="grid gap-0 md:grid-cols-3">
              {PROCESS_PREVIEW.map((item, index) => (
                <div
                  key={item.label}
                  className="border-border border-t p-6 md:border-t-0 md:border-l first:md:border-l-0"
                >
                  <p className="text-primary mb-8 text-xs font-bold">
                    0{index + 1}
                  </p>
                  <item.icon className="text-primary mb-4 size-5" />
                  <h3 className="font-bold">{item.label}</h3>
                  <p className="text-muted-foreground mt-2 text-sm">
                    {item.text}
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
