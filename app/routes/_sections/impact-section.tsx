import {
  Rocket,
  Building2,
  Globe,
  Landmark,
  Heart,
  GraduationCap,
  Users,
  TrendingUp,
  Lightbulb,
  Briefcase,
  BookOpen,
  Network,
} from "lucide-react";
import { Badge } from "~/components/ui/badge";
import type { LucideIcon } from "lucide-react";

type Audience = {
  icon: LucideIcon;
  label: string;
};

const AUDIENCES: Audience[] = [
  { icon: Rocket, label: "Startups & Founders" },
  { icon: Building2, label: "Small & Medium Enterprises" },
  { icon: Briefcase, label: "Corporate Organizations" },
  { icon: BookOpen, label: "Educational Institutions" },
  { icon: Landmark, label: "Government Agencies" },
  { icon: Heart, label: "Non-Governmental Organizations" },
  { icon: Globe, label: "Healthcare Providers" },
  { icon: Network, label: "International Organizations" },
  { icon: Lightbulb, label: "Technology Professionals" },
  { icon: GraduationCap, label: "Students & Graduates" },
  { icon: TrendingUp, label: "Investors & Innovation Partners" },
  { icon: Users, label: "Global Business Communities" },
];

export default function ImpactSection() {
  return (
    <section id="impact" className="bg-muted/40 py-20 sm:py-24">
      <div className="max-w-content mx-auto px-4 sm:px-6">
        <div className="grid gap-16 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <div>
              <Badge variant="outline" className="mb-4">
                Our Commitment
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Social <span className="text-primary">Impact</span>
              </h2>
            </div>

            <p className="text-muted-foreground text-base leading-relaxed">
              Maka Integrated Technology Limited is committed to bridging the
              technology skills gap by providing accessible learning
              opportunities, mentorship programs, internships, and practical
              industry experience that prepare individuals for successful
              careers in technology.
            </p>

            <p className="text-muted-foreground text-base leading-relaxed">
              We are passionate about creating opportunities, driving
              innovation, and empowering communities through technology. Our
              mission extends beyond solving today&apos;s challenges — we are
              building the technologies, products, and talent that will shape
              the future of industries, communities, and economies worldwide.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              {[
                { value: "16+", label: "Learning Disciplines" },
                { value: "8", label: "Talent Programs" },
                { value: "5", label: "Service Categories" },
                { value: "12+", label: "Audiences Served" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-card border-border rounded-xl border p-4 text-center"
                >
                  <p className="text-primary text-2xl font-bold">
                    {stat.value}
                  </p>
                  <p className="text-muted-foreground mt-1 text-xs">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div>
              <Badge variant="outline" className="mb-4">
                Who We Serve
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Target <span className="text-primary">Audience</span>
              </h2>
              <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
                Our solutions, products, and programs serve a diverse global
                community of organisations and individuals.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {AUDIENCES.map((audience) => (
                <div
                  key={audience.label}
                  className="bg-card border-border flex items-center gap-2.5 rounded-xl border p-3"
                >
                  <div className="bg-primary/10 flex size-8 shrink-0 items-center justify-center rounded-lg">
                    <audience.icon
                      className="text-primary size-3.5"
                      strokeWidth={1.5}
                    />
                  </div>
                  <span className="text-foreground text-xs leading-tight font-medium">
                    {audience.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
