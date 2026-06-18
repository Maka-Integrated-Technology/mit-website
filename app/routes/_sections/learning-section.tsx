import {
  Briefcase,
  GraduationCap,
  Heart,
  Users,
  TrendingUp,
  Building2,
  Star,
  Award,
  BookOpen,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type TalentProgram = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const LEARNING_AREAS = [
  "Product Management",
  "Project Management",
  "Software Development",
  "UI/UX Design",
  "Data Analytics",
  "Cybersecurity",
  "Artificial Intelligence",
  "Digital Marketing",
  "Business Analysis",
  "Technology Entrepreneurship",
  "Mobile Development",
  "Virtual Assistance",
  "Frontend Development",
  "Backend Development",
  "Video Editing",
  "Social Media",
];

const TALENT_PROGRAMS: TalentProgram[] = [
  {
    icon: Briefcase,
    title: "Internship Programs",
    description: "Hands-on industry experience",
  },
  {
    icon: GraduationCap,
    title: "Graduate Trainee Programs",
    description: "Structured career entry pathways",
  },
  {
    icon: Heart,
    title: "Volunteer Opportunities",
    description: "Give back while you grow",
  },
  {
    icon: Users,
    title: "Tech Mentorship Programs",
    description: "Guidance from industry experts",
  },
  {
    icon: TrendingUp,
    title: "Career Development Programs",
    description: "Accelerate your professional growth",
  },
  {
    icon: Building2,
    title: "Industry Experience Programs",
    description: "Real-world project exposure",
  },
  {
    icon: Star,
    title: "Professional Coaching",
    description: "One-on-one performance coaching",
  },
  {
    icon: Award,
    title: "Leadership Development",
    description: "Building tomorrow's tech leaders",
  },
];

export default function LearningSection() {
  return (
    <section id="learning" className="bg-brand-dark py-24 sm:py-28">
      <div className="max-w-content mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-14 text-center">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/8 px-5 py-1.5 text-xs text-white/70">
            <BookOpen className="size-3.5" />
            Grow With Us
          </span>
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Maka Learning Platform
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/65">
            Our technology education and talent development initiative
            empowering individuals with in-demand digital skills through
            learning, mentorship, practical projects, career guidance, and
            industry exposure.
          </p>
        </div>

        {/* Training areas */}
        <div className="bg-brand-dark-lighter mb-16 overflow-hidden rounded-3xl border border-white/10 p-8">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex size-9 items-center justify-center rounded-xl bg-white/10">
              <BookOpen className="size-4 text-white/70" strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Training Areas</p>
              <p className="text-xs text-white/45">
                {LEARNING_AREAS.length} in-demand technology disciplines
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {LEARNING_AREAS.map((area) => (
              <span
                key={area}
                className="hover:border-primary/50 hover:bg-primary/15 rounded-full border border-white/15 bg-white/8 px-4 py-1.5 text-sm text-white/80 transition-colors hover:text-white"
              >
                {area}
              </span>
            ))}
          </div>
        </div>

        {/* Talent programs */}
        <div>
          <p className="mb-8 text-center text-sm font-semibold tracking-wider text-white/50 uppercase">
            Internship, Mentorship &amp; Talent Development
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {TALENT_PROGRAMS.map((program) => (
              <div
                key={program.title}
                className="group flex flex-col gap-3.5 rounded-3xl border border-white/10 bg-white/5 p-6 transition-all duration-200 hover:border-white/20 hover:bg-white/8"
              >
                <div className="group-hover:bg-primary/20 flex size-10 items-center justify-center rounded-xl bg-white/10 transition-colors">
                  <program.icon
                    className="group-hover:text-primary size-5 text-white/70 transition-colors"
                    strokeWidth={1.5}
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">
                    {program.title}
                  </p>
                  <p className="mt-1 text-xs text-white/50">
                    {program.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
