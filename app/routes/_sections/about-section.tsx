import {
  Code2,
  Wifi,
  Database,
  Briefcase,
  PackageOpen,
  GraduationCap,
  Users,
  Lightbulb,
} from "lucide-react";
import { Badge } from "~/components/ui/badge";
import type { LucideIcon } from "lucide-react";

type Specialty = {
  icon: LucideIcon;
  label: string;
};

const SPECIALTIES: Specialty[] = [
  { icon: Code2, label: "Software Development" },
  { icon: Wifi, label: "ICT & Telecommunications" },
  { icon: Database, label: "Data Analytics" },
  { icon: Briefcase, label: "Digital Transformation" },
  { icon: PackageOpen, label: "Product Innovation" },
  { icon: GraduationCap, label: "Technology Education" },
  { icon: Users, label: "Talent Development" },
  { icon: Lightbulb, label: "Business Technology Consulting" },
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-background py-24 sm:py-28">
      <div className="max-w-content mx-auto px-4 sm:px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Left: text */}
          <div className="flex flex-col gap-7">
            <div>
              <Badge variant="outline" className="mb-5 rounded-full px-4">
                About Us
              </Badge>
              <h2 className="text-foreground text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Transformative Digital Solutions{" "}
                <span className="text-primary">for a Connected World</span>
              </h2>
            </div>

            <p className="text-muted-foreground text-base leading-relaxed sm:text-lg">
              Maka Integrated Technology Limited is a global technology,
              innovation, and product development company dedicated to creating
              transformative digital solutions that empower businesses,
              institutions, and individuals to thrive in an increasingly
              connected world.
            </p>

            <p className="text-muted-foreground text-base leading-relaxed">
              By combining technology, creativity, and strategic thinking, we
              develop scalable solutions that drive efficiency, productivity,
              growth, and sustainable impact across industries — from software
              development and ICT services to digital product innovation and
              talent development.
            </p>

            <p className="text-muted-foreground text-base leading-relaxed">
              Beyond technology services, we are committed to building a
              thriving innovation ecosystem through product development,
              education, internship programs, mentorship initiatives, and talent
              development platforms.
            </p>
          </div>

          {/* Right: specialty cards */}
          <div className="flex flex-col gap-4">
            <p className="text-foreground text-sm font-semibold tracking-wider uppercase">
              Areas of Expertise
            </p>
            <div className="grid grid-cols-2 gap-3">
              {SPECIALTIES.map((spec) => (
                <div
                  key={spec.label}
                  className="bg-card border-border hover:border-primary/30 group flex items-center gap-3 rounded-2xl border p-4 transition-all duration-200 hover:shadow-sm"
                >
                  <div className="bg-primary/10 group-hover:bg-primary/15 flex size-9 shrink-0 items-center justify-center rounded-xl transition-colors">
                    <spec.icon
                      className="text-primary size-4"
                      strokeWidth={1.5}
                    />
                  </div>
                  <span className="text-foreground text-sm leading-tight font-medium">
                    {spec.label}
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
