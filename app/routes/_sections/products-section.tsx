import {
  Search,
  Map,
  Settings,
  Palette,
  Code2,
  CheckCircle,
  Rocket,
  Wrench,
  Heart,
  ArrowRight,
} from "lucide-react";
import { Badge } from "~/components/ui/badge";
import type { LucideIcon } from "lucide-react";

type ProcessStep = {
  step: number;
  icon: LucideIcon;
  title: string;
};

const PROCESS_STEPS: ProcessStep[] = [
  { step: 1, icon: Search, title: "Product Research" },
  { step: 2, icon: Map, title: "Product Strategy" },
  { step: 3, icon: Settings, title: "Product Management" },
  { step: 4, icon: Palette, title: "UI/UX Design" },
  { step: 5, icon: Code2, title: "Software Engineering" },
  { step: 6, icon: CheckCircle, title: "Quality Assurance" },
  { step: 7, icon: Rocket, title: "Product Launch & Growth" },
  { step: 8, icon: Wrench, title: "Maintenance & Support" },
];

export default function ProductsSection() {
  return (
    <section id="products" className="bg-background py-24 sm:py-28">
      <div className="max-w-content mx-auto px-4 sm:px-6">
        <div className="mb-14 text-center">
          <Badge variant="outline" className="mb-5 rounded-full px-4">
            Innovation at Work
          </Badge>
          <h2 className="text-foreground text-3xl font-bold tracking-tight sm:text-4xl">
            Product Development &amp;{" "}
            <span className="text-primary">Innovation</span>
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-xl text-base">
            We develop innovative digital products to solve challenges across
            healthcare, education, finance, and emerging technology sectors.
          </p>
        </div>

        {/* Process steps */}
        <div className="mb-20">
          <p className="text-muted-foreground mb-8 text-center text-sm font-semibold tracking-wider uppercase">
            Our Product Development Process
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.step}
                className="bg-card border-border group flex flex-col items-center gap-3 rounded-3xl border p-6 text-center transition-all duration-200 hover:shadow-md"
              >
                <div className="bg-primary/10 group-hover:bg-primary/15 flex size-11 items-center justify-center rounded-2xl transition-colors">
                  <step.icon
                    className="text-primary size-5"
                    strokeWidth={1.5}
                  />
                </div>
                <span className="text-primary text-xs font-bold tracking-wider">
                  {String(step.step).padStart(2, "0")}
                </span>
                <p className="text-foreground text-sm leading-tight font-semibold">
                  {step.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Product portfolio */}
        <div>
          <p className="text-muted-foreground mb-8 text-center text-sm font-semibold tracking-wider uppercase">
            Product Portfolio
          </p>

          <div className="mx-auto max-w-3xl">
            <div className="from-primary/8 to-primary/3 border-primary/20 relative overflow-hidden rounded-3xl border bg-gradient-to-br p-10">
              <div className="bg-primary/10 pointer-events-none absolute top-0 right-0 h-64 w-64 translate-x-1/3 -translate-y-1/3 rounded-full blur-3xl" />

              <div className="relative flex flex-col gap-6">
                {/* Header */}
                <div className="flex flex-wrap items-center gap-4">
                  <div className="bg-primary/15 flex size-14 items-center justify-center rounded-2xl">
                    <Heart className="text-primary size-7" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2.5">
                      <h3 className="text-foreground text-2xl font-bold">
                        OHealth+
                      </h3>
                      <Badge className="rounded-full text-xs">
                        In Development
                      </Badge>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      Digital Healthcare Platform
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-base leading-relaxed">
                  OHealth+ is an innovative digital healthcare platform being
                  developed by Maka Integrated Technology Limited. Designed to
                  improve access to healthcare services through technology, it
                  connects patients, healthcare providers, and resources within
                  a secure, user-friendly ecosystem.
                </p>

                <p className="text-muted-foreground text-base leading-relaxed">
                  OHealth+ leverages digital innovation to enhance healthcare
                  accessibility, streamline experiences, support professionals,
                  and contribute to improved health outcomes globally.
                  Additional features, partnerships, and service offerings will
                  be announced as development progresses.
                </p>

                {/* Tags + CTA */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Healthcare Access",
                      "Patient Connect",
                      "Provider Network",
                      "Digital Health",
                    ].map((tag) => (
                      <span
                        key={tag}
                        className="bg-primary/10 text-primary rounded-full px-3.5 py-1 text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-muted-foreground flex items-center gap-1.5 text-xs">
                    Stay tuned for updates
                    <ArrowRight className="size-3" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
