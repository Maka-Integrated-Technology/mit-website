import {
  ArrowDown,
  ArrowRight,
  Award,
  BookOpenCheck,
  CalendarDays,
  Check,
  Clock3,
  UsersRound,
} from "lucide-react";
import Reveal from "../_components/reveal";
import ApplicationForm from "./_sections/application-form";
import { BOOTCAMP_TRACKS, BOOTCAMP_WEEKS } from "./_sections/bootcamp-data";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { CONTACT_EMAIL } from "~/routes/_sections/marketing-data";

const PROGRAM_DETAILS = [
  { icon: CalendarDays, label: "Starts", value: "Early January 2027" },
  { icon: Clock3, label: "Duration", value: "3 months" },
  { icon: BookOpenCheck, label: "Learning", value: "Mentor-led & practical" },
  { icon: Award, label: "Tuition", value: "₦70,000" },
];

const GRADUATE_PATHS = [
  "Join the Maka Tech alumni community",
  "Be considered for Maka Tech opportunities",
  "Contribute to a client project when a suitable opportunity is available",
  "Be recommended to companies when there is a suitable fit",
];

export default function BootcampPage() {
  return (
    <div className="bg-background flex flex-col">
      <section className="relative overflow-hidden px-4 py-24 sm:px-6 sm:py-28 lg:py-32">
        <div className="absolute inset-x-0 top-0 h-[500px] bg-[radial-gradient(circle_at_50%_0%,color-mix(in_oklch,var(--primary)_18%,transparent),transparent_62%)]" />
        <div className="max-w-content relative mx-auto grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <Reveal>
            <Badge variant="outline" className="mb-5 rounded-full px-4">
              Maka Tech Bootcamp · January 2027 cohort
            </Badge>
            <h1 className="max-w-4xl text-5xl leading-[1.05] font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Learn a skill. Build real work. Find your next step.
            </h1>
            <p className="text-muted-foreground mt-6 max-w-2xl text-lg leading-relaxed">
              Choose a track that fits your goals and learn with guidance from
              mentors across technology, product, and digital operations.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button asChild className="rounded-full px-7">
                <a href="#apply">
                  Apply for the bootcamp
                  <ArrowRight className="size-4" />
                </a>
              </Button>
              <span className="text-muted-foreground text-sm">
                Early January 2027 · ₦70,000 tuition
              </span>
            </div>
          </Reveal>

          <Reveal delay="short">
            <div className="border-primary/15 bg-muted/35 relative overflow-hidden rounded-[2rem] border p-6 sm:p-8">
              <div className="bg-primary/10 pointer-events-none absolute top-0 right-0 size-56 translate-x-1/3 -translate-y-1/3 rounded-full blur-3xl" />
              <div className="relative">
                <div className="mb-8 flex items-center justify-between">
                  <div className="bg-background flex size-14 items-center justify-center rounded-2xl border">
                    <UsersRound className="text-primary size-6" />
                  </div>
                  <span className="border-primary/20 text-primary rounded-full border px-3 py-1 text-xs font-semibold">
                    12-week learning journey
                  </span>
                </div>
                <div className="grid gap-3">
                  {[
                    "Choose your track",
                    "Learn with a mentor",
                    "Practice and build",
                    "Join the alumni community",
                  ].map((step, index) => (
                    <div
                      className="bg-background border-border flex items-center gap-4 rounded-2xl border p-4"
                      key={step}
                    >
                      <span className="text-primary text-xs font-bold">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <p className="font-semibold">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-muted/45 px-4 py-8 sm:px-6">
        <div className="max-w-content mx-auto grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {PROGRAM_DETAILS.map((item) => (
            <div
              className="bg-background border-border flex items-center gap-4 rounded-2xl border p-5"
              key={item.label}
            >
              <span className="bg-primary/10 flex size-11 shrink-0 items-center justify-center rounded-xl">
                <item.icon className="text-primary size-5" />
              </span>
              <div>
                <p className="text-muted-foreground text-xs">{item.label}</p>
                <p className="mt-1 font-semibold">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6 sm:py-28">
        <div className="max-w-content mx-auto">
          <Reveal className="mb-12 grid gap-6 lg:grid-cols-[0.8fr_1fr] lg:items-end">
            <div>
              <Badge variant="outline" className="mb-5 rounded-full px-4">
                Choose your direction
              </Badge>
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                One bootcamp. Multiple paths.
              </h2>
            </div>
            <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed">
              Select one track on your application. You will learn alongside a
              mentor and a community working toward practical, career-ready
              skills.
            </p>
          </Reveal>

          <div className="grid gap-4 md:grid-cols-2">
            {BOOTCAMP_TRACKS.map((group, index) => (
              <Reveal
                className="border-border bg-muted/35 rounded-3xl border p-6 sm:p-7"
                delay={index % 2 === 0 ? "none" : "short"}
                key={group.title}
              >
                <span className="text-primary text-xs font-bold">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-xl font-bold">{group.title}</h3>
                <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                  {group.description}
                </p>
                <ul className="mt-5 grid gap-2">
                  {group.tracks.map((track) => (
                    <li
                      className="flex items-start gap-2.5 text-sm"
                      key={track}
                    >
                      <Check className="text-primary mt-0.5 size-4 shrink-0" />
                      {track}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/45 px-4 py-24 sm:px-6 sm:py-28">
        <div className="max-w-content mx-auto">
          <Reveal className="mb-12 max-w-3xl">
            <Badge variant="outline" className="mb-5 rounded-full px-4">
              The learning journey
            </Badge>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Three months of guided practice.
            </h2>
            <p className="text-muted-foreground mt-4 text-lg leading-relaxed">
              Each track follows a practical rhythm: learn the foundations,
              practice with feedback, then apply your skills to a final project.
            </p>
          </Reveal>
          <div className="grid gap-4 lg:grid-cols-3">
            {BOOTCAMP_WEEKS.map((phase) => (
              <Reveal
                className="bg-background border-border rounded-3xl border p-6 sm:p-7"
                key={phase.number}
              >
                <p className="text-primary text-xs font-bold">
                  WEEKS {phase.number}
                </p>
                <h3 className="mt-8 text-xl font-bold">{phase.title}</h3>
                <p className="text-muted-foreground mt-3 leading-relaxed">
                  {phase.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6 sm:py-28">
        <div className="max-w-content mx-auto grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <Badge variant="outline" className="mb-5 rounded-full px-4">
              After completion
            </Badge>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Keep growing with the Maka community.
            </h2>
            <p className="text-muted-foreground mt-5 text-lg leading-relaxed">
              Graduates who complete the program receive a certificate of
              completion and an invitation to join the Maka Tech alumni
              community.
            </p>
            <p className="text-muted-foreground mt-4 leading-relaxed">
              Alumni may be considered for Maka Tech work, client projects, or
              recommendations to companies when their skills and available
              opportunities align. These opportunities are not guaranteed.
            </p>
          </Reveal>
          <Reveal delay="short">
            <div className="border-border bg-muted/35 rounded-[2rem] border p-6 sm:p-8">
              <div className="grid gap-3">
                {GRADUATE_PATHS.map((path) => (
                  <div
                    className="bg-background border-border flex items-start gap-3 rounded-2xl border p-4"
                    key={path}
                  >
                    <Check className="text-primary mt-0.5 size-4 shrink-0" />
                    <p className="text-sm leading-relaxed">{path}</p>
                  </div>
                ))}
              </div>
              <div className="border-border mt-6 border-t pt-5">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  A certificate is awarded upon successful completion of the
                  program requirements.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-muted/45 px-4 py-24 sm:px-6 sm:py-28" id="apply">
        <div className="max-w-content mx-auto grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <Reveal className="lg:sticky lg:top-28">
            <Badge variant="outline" className="mb-5 rounded-full px-4">
              Applications
            </Badge>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Start your next chapter.
            </h2>
            <p className="text-muted-foreground mt-5 leading-relaxed">
              The first cohort begins in early January 2027. When registration
              opens, choose your track and share your details. Maka Tech will
              follow up with application decisions and program schedule
              information.
            </p>
            <div className="border-border bg-background mt-7 rounded-2xl border p-5">
              <p className="text-sm font-semibold">What to expect</p>
              <ul className="text-muted-foreground mt-3 grid gap-2.5 text-sm">
                <li className="flex gap-2.5">
                  <Check className="text-primary size-4 shrink-0" />
                  Three-month mentor-guided program
                </li>
                <li className="flex gap-2.5">
                  <Check className="text-primary size-4 shrink-0" />
                  ₦70,000 tuition; payment after application review
                </li>
                <li className="flex gap-2.5">
                  <Check className="text-primary size-4 shrink-0" />
                  Certificate and alumni community for completers
                </li>
              </ul>
            </div>
            <p className="text-muted-foreground mt-5 text-sm">
              Questions?{" "}
              <a
                className="text-primary font-medium hover:underline"
                href={`mailto:${CONTACT_EMAIL}`}
              >
                Email Maka Tech
              </a>
            </p>
            <a
              className="text-primary mt-6 inline-flex items-center gap-2 text-sm font-semibold"
              href="#apply-form"
            >
              Go to the application form
              <ArrowDown className="size-4" />
            </a>
          </Reveal>
          <div className="scroll-mt-24" id="apply-form">
            <Reveal delay="short">
              <ApplicationForm />
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
