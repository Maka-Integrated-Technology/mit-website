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
import { Badge } from "~/components/ui/badge";
import { Card, CardContent } from "~/components/ui/card";
import type { LucideIcon } from "lucide-react";

type TalentProgram = {
  icon: LucideIcon;
  title: string;
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
  { icon: Briefcase, title: "Internship Programs" },
  { icon: GraduationCap, title: "Graduate Trainee Programs" },
  { icon: Heart, title: "Volunteer Opportunities" },
  { icon: Users, title: "Tech Mentorship Programs" },
  { icon: TrendingUp, title: "Career Development Programs" },
  { icon: Building2, title: "Industry Experience Programs" },
  { icon: Star, title: "Professional Coaching" },
  { icon: Award, title: "Leadership Development Programs" },
];

export default function LearningSection() {
  return (
    <section id="learning" className="py-20 sm:py-24">
      <div className="max-w-content mx-auto px-4 sm:px-6">
        <div className="mb-12 text-center">
          <Badge variant="outline" className="mb-4">
            Grow With Us
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Maka <span className="text-primary">Learning Platform</span>
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-xl">
            Our technology education and talent development initiative created
            to empower individuals with in-demand digital skills through
            learning, mentorship, practical projects, career guidance, and
            industry exposure.
          </p>
        </div>

        <div className="mb-16">
          <div className="bg-card border-border overflow-hidden rounded-2xl border">
            <div className="border-border flex items-center gap-3 border-b px-6 py-4">
              <div className="bg-primary/10 flex size-9 items-center justify-center rounded-lg">
                <BookOpen className="text-primary size-4" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-foreground font-semibold">
                  Training Areas
                </h3>
                <p className="text-muted-foreground text-xs">
                  {LEARNING_AREAS.length} in-demand technology disciplines
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2.5 p-6">
              {LEARNING_AREAS.map((area) => (
                <span
                  key={area}
                  className="bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-medium"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="mb-6 text-center">
            <h3 className="text-foreground text-xl font-bold">
              Internship, Mentorship &amp; Talent Development
            </h3>
            <p className="text-muted-foreground mx-auto mt-2 max-w-xl text-sm">
              At Maka, we believe that technology growth begins with people. Our
              talent development initiatives help aspiring professionals gain
              practical experience, develop industry-relevant skills, and build
              successful careers in technology.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {TALENT_PROGRAMS.map((program) => (
              <Card key={program.title} className="text-center">
                <CardContent className="flex flex-col items-center gap-3 p-5">
                  <div className="bg-primary/10 flex size-10 items-center justify-center rounded-xl">
                    <program.icon
                      className="text-primary size-5"
                      strokeWidth={1.5}
                    />
                  </div>
                  <p className="text-foreground text-sm leading-tight font-medium">
                    {program.title}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
