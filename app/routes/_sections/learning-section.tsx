import { ArrowRight, BookOpen, Briefcase, Users } from "lucide-react";
import { Link } from "react-router";
import Reveal from "../_components/reveal";
import { Button } from "~/components/ui/button";

const LEARNING_PREVIEW = [
  {
    icon: BookOpen,
    label: "Skill tracks",
    text: "Structured learning paths across technology disciplines.",
  },
  {
    icon: Users,
    label: "Mentorship",
    text: "Guidance from people who understand practical delivery.",
  },
  {
    icon: Briefcase,
    label: "Industry exposure",
    text: "Project experience that makes learning easier to apply.",
  },
];

export default function LearningSection() {
  return (
    <section className="bg-background px-4 py-24 sm:px-6 sm:py-28">
      <div className="max-w-content mx-auto">
        <Reveal className="border-border bg-muted/35 grid gap-10 rounded-[2rem] border p-6 sm:p-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <span className="border-primary/20 bg-background text-primary mb-5 inline-flex rounded-full border px-4 py-1.5 text-xs font-semibold">
              Maka Learning Platform
            </span>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Learning that feels like preparation, not decoration.
            </h2>
            <p className="text-muted-foreground mt-5 text-lg leading-relaxed">
              Training, mentorship, practical projects, and career development
              programs sit behind the curtain. The full program map lives on its
              own page.
            </p>
            <Button asChild className="mt-7 rounded-full px-6">
              <Link to="/learning">
                Explore Learning
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>

          <div className="grid gap-3">
            {LEARNING_PREVIEW.map((item, index) => (
              <div
                key={item.label}
                className="bg-background border-border grid gap-4 rounded-2xl border p-5 sm:grid-cols-[auto_1fr_auto] sm:items-center"
              >
                <div className="bg-primary/10 flex size-11 items-center justify-center rounded-xl">
                  <item.icon className="text-primary size-5" />
                </div>
                <div>
                  <h3 className="font-bold">{item.label}</h3>
                  <p className="text-muted-foreground mt-1 text-sm">
                    {item.text}
                  </p>
                </div>
                <span className="text-primary text-xs font-bold">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
