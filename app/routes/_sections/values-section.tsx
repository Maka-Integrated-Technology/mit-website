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
      "We embrace creativity and emerging technology to develop solutions that create real, lasting value.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We are committed to delivering high-quality services and products across everything we do.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description:
      "We conduct our business with honesty, transparency, and unwavering professionalism.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "We believe in the power of teamwork, partnerships, and shared success to achieve more.",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description:
      "We foster a culture of growth, development, and lifelong learning within our team.",
  },
  {
    icon: Target,
    title: "Customer Success",
    description:
      "Our clients' success is at the center of every decision, strategy, and solution we create.",
  },
  {
    icon: Zap,
    title: "Impact",
    description:
      "We build solutions that positively transform lives, businesses, and communities worldwide.",
  },
];

export default function ValuesSection() {
  return (
    <section className="bg-background py-24 sm:py-28">
      <div className="max-w-content mx-auto px-4 sm:px-6">
        <div className="mb-14 text-center">
          <Badge variant="outline" className="mb-5 rounded-full px-4">
            What We Stand For
          </Badge>
          <h2 className="text-foreground text-3xl font-bold tracking-tight sm:text-4xl">
            Our Core <span className="text-primary">Values</span>
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-xl text-base">
            The principles that define our culture and guide how we work with
            clients, partners, and communities around the world.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {VALUES.map((value) => (
            <div
              key={value.title}
              className="bg-card border-border group flex flex-col gap-5 rounded-3xl border p-7 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="from-primary/15 to-primary/5 group-hover:from-primary/20 group-hover:to-primary/8 flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br transition-colors">
                <value.icon className="text-primary size-5" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-foreground mb-2 font-semibold">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
