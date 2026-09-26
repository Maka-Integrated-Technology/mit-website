import {
  ArrowRight,
  BookOpen,
  GraduationCap,
  Route,
  Users,
} from "lucide-react";
import { Link } from "react-router";
import Reveal from "../_components/reveal";
import {
  CONTACT_HREF,
  LEARNING_AREAS,
  TALENT_PROGRAMS,
} from "../_sections/marketing-data";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";

const JOURNEY = [
  "Discover",
  "Learn",
  "Practice",
  "Mentorship",
  "Career growth",
];

export default function LearningPage() {
  return (
    <div className="bg-background flex flex-col">
      <section className="relative overflow-hidden px-4 py-24 sm:px-6 sm:py-28 lg:py-32">
        <div className="absolute inset-x-0 top-0 h-[500px] bg-[radial-gradient(circle_at_50%_0%,color-mix(in_oklch,var(--primary)_18%,transparent),transparent_62%)]" />
        <div className="max-w-content relative mx-auto grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <Reveal>
            <Badge variant="outline" className="mb-5 rounded-full px-4">
              Maka Learning Platform
            </Badge>
            <h1 className="max-w-4xl text-5xl leading-[1.05] font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Practical learning paths for tomorrow&apos;s technology talent.
            </h1>
            <p className="text-muted-foreground mt-6 max-w-2xl text-lg leading-relaxed">
              Our education and talent development initiative combines
              structured learning, mentorship, practical projects, career
              guidance, and industry exposure.
            </p>
          </Reveal>

          <Reveal delay="short">
            <div className="border-primary/15 bg-muted/35 rounded-[2rem] border p-6 sm:p-8">
              <Route className="text-primary mb-8 size-8" />
              <div className="grid gap-3">
                {JOURNEY.map((step, index) => (
                  <div
                    key={step}
                    className="bg-background border-border flex items-center gap-4 rounded-2xl border p-4"
                  >
                    <span className="text-primary text-xs font-bold">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="font-semibold">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-muted/45 px-4 py-24 sm:px-6 sm:py-28">
        <div className="max-w-content mx-auto">
          <Reveal className="mb-10 grid gap-6 lg:grid-cols-[0.8fr_1fr] lg:items-end">
            <div>
              <BookOpen className="text-primary mb-5 size-7" />
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Training areas
              </h2>
            </div>
            <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed">
              Learners can explore practical disciplines across product,
              engineering, analytics, design, business, and digital operations.
            </p>
          </Reveal>
          <div className="flex flex-wrap gap-2.5">
            {LEARNING_AREAS.map((area, index) => (
              <span
                key={area}
                className="animate-float bg-background border-border rounded-full border px-4 py-2 text-sm font-medium"
                style={{ animationDelay: `${(index % 6) * 0.18}s` }}
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6 sm:py-28">
        <div className="max-w-content mx-auto">
          <Reveal className="mb-12 max-w-3xl">
            <GraduationCap className="text-primary mb-5 size-8" />
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Internship, mentorship, and career development programs.
            </h2>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {TALENT_PROGRAMS.map((program, index) => (
              <Reveal
                key={program.title}
                delay={index % 2 === 0 ? "none" : "short"}
                className="border-border bg-muted/35 min-h-44 rounded-3xl border p-5"
              >
                <program.icon className="text-primary mb-8 size-5" />
                <h3 className="font-semibold">{program.title}</h3>
                <p className="text-muted-foreground mt-2 text-sm">
                  {program.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/45 px-4 py-20 sm:px-6 sm:py-24">
        <Reveal className="max-w-content bg-background border-border mx-auto grid gap-8 rounded-[2rem] border p-8 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <Users className="text-primary mb-5 size-7" />
            <h2 className="max-w-2xl text-3xl font-bold tracking-tight">
              Building talent is part of how Maka builds technology.
            </h2>
          </div>
          <Button asChild className="w-fit rounded-full px-7">
            <Link to={CONTACT_HREF}>
              Ask About Learning Programs
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </Reveal>
      </section>
    </div>
  );
}
