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
} from "lucide-react";
import { Badge } from "~/components/ui/badge";
import { Card, CardContent } from "~/components/ui/card";
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
    <section id="products" className="bg-muted/40 py-20 sm:py-24">
      <div className="max-w-content mx-auto px-4 sm:px-6">
        <div className="mb-12 text-center">
          <Badge variant="outline" className="mb-4">
            Innovation at Work
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Product Development &amp;{" "}
            <span className="text-primary">Innovation</span>
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-xl">
            We develop innovative digital products designed to solve real
            challenges across healthcare, education, business operations,
            finance, and emerging technology sectors.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-foreground mb-6 text-center text-lg font-semibold">
            Our Product Development Process
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.step}
                className="bg-card border-border flex flex-col items-center gap-3 rounded-xl border p-5 text-center"
              >
                <div className="bg-primary/10 flex size-10 items-center justify-center rounded-full">
                  <step.icon
                    className="text-primary size-4"
                    strokeWidth={1.5}
                  />
                </div>
                <span className="bg-primary/10 text-primary rounded-full px-2.5 py-0.5 text-xs font-bold">
                  {String(step.step).padStart(2, "0")}
                </span>
                <p className="text-foreground text-sm leading-tight font-medium">
                  {step.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-foreground mb-6 text-center text-lg font-semibold">
            Product Portfolio
          </h3>
          <div className="mx-auto max-w-2xl">
            <Card className="relative overflow-hidden">
              <div className="bg-primary/5 pointer-events-none absolute top-0 right-0 h-48 w-48 translate-x-1/3 -translate-y-1/3 rounded-full blur-2xl" />
              <CardContent className="relative p-8">
                <div className="flex flex-col gap-5">
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="bg-primary/10 flex size-12 items-center justify-center rounded-xl">
                      <Heart
                        className="text-primary size-6"
                        strokeWidth={1.5}
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-foreground text-xl font-bold">
                          OHealth+
                        </h4>
                        <Badge className="text-xs">In Development</Badge>
                      </div>
                      <p className="text-muted-foreground text-sm">
                        Digital Healthcare Platform
                      </p>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    OHealth+ is an innovative digital healthcare platform
                    currently being developed by Maka Integrated Technology
                    Limited. The platform is designed to improve access to
                    healthcare services through technology by connecting
                    patients, healthcare providers, and healthcare resources
                    within a secure and user-friendly ecosystem.
                  </p>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    OHealth+ aims to leverage digital innovation to enhance
                    healthcare accessibility, streamline healthcare experiences,
                    support healthcare professionals, and contribute to improved
                    health outcomes. Additional features, partnerships, and
                    service offerings will be announced as development
                    progresses.
                  </p>

                  <div className="border-border flex flex-wrap gap-2 border-t pt-4">
                    {[
                      "Healthcare Access",
                      "Patient Connect",
                      "Provider Network",
                      "Digital Health",
                    ].map((tag) => (
                      <span
                        key={tag}
                        className="bg-muted text-muted-foreground rounded-full px-3 py-1 text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
