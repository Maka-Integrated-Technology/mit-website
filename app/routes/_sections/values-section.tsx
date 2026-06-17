import {
  Lightbulb,
  Award,
  Shield,
  Users,
  BookOpen,
  Target,
  Zap,
} from "lucide-react";
import { Badge } from "~/components/ui/badge";
import { Card, CardContent } from "~/components/ui/card";
import type { LucideIcon } from "lucide-react";

type Value = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const VALUES: Value[] = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We embrace creativity and technology to develop solutions that create real value.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We are committed to delivering high-quality services and products in everything we do.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description:
      "We conduct our business with honesty, transparency, and professionalism.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "We believe in teamwork, partnerships, and shared success across all we do.",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description:
      "We foster growth, development, and lifelong learning within our team and community.",
  },
  {
    icon: Target,
    title: "Customer Success",
    description:
      "Our clients' success is at the center of every decision and solution we create.",
  },
  {
    icon: Zap,
    title: "Impact",
    description:
      "We build solutions that positively transform lives, businesses, and communities.",
  },
];

export default function ValuesSection() {
  return (
    <section className="bg-muted/40 py-20 sm:py-24">
      <div className="max-w-content mx-auto px-4 sm:px-6">
        <div className="mb-12 text-center">
          <Badge variant="outline" className="mb-4">
            What We Stand For
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Our Core <span className="text-primary">Values</span>
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-xl">
            The principles that define our culture and guide how we work with
            our clients, partners, and communities.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {VALUES.map((value) => (
            <Card
              key={value.title}
              className="group transition-shadow hover:shadow-md"
            >
              <CardContent className="flex flex-col gap-4 p-6">
                <div className="bg-primary/10 group-hover:bg-primary/15 flex size-10 items-center justify-center rounded-xl transition-colors">
                  <value.icon
                    className="text-primary size-5"
                    strokeWidth={1.5}
                  />
                </div>
                <div>
                  <h3 className="text-foreground mb-1.5 font-semibold">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
