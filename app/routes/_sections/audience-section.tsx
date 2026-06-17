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

export default function AudienceSection() {
  return (
    <section className="bg-muted/50 py-24 sm:py-28">
      <div className="max-w-content mx-auto px-4 sm:px-6">
        <div className="mb-14 text-center">
          <Badge variant="outline" className="mb-5 rounded-full px-4">
            Who We Serve
          </Badge>
          <h2 className="text-foreground text-3xl font-bold tracking-tight sm:text-4xl">
            Our <span className="text-primary">Target Audience</span>
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-xl text-base">
            Our solutions, products, and programs serve a diverse global
            community of organisations and individuals across every sector.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {AUDIENCES.map((audience) => (
            <div
              key={audience.label}
              className="bg-card border-border group flex items-center gap-3.5 rounded-2xl border p-5 transition-all duration-200 hover:shadow-sm"
            >
              <div className="bg-primary/10 group-hover:bg-primary/15 flex size-10 shrink-0 items-center justify-center rounded-xl transition-colors">
                <audience.icon
                  className="text-primary size-4"
                  strokeWidth={1.5}
                />
              </div>
              <span className="text-foreground text-sm leading-tight font-medium">
                {audience.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
