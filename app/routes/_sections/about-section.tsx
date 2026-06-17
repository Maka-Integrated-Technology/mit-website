import {
  Code2,
  Wifi,
  Database,
  Briefcase,
  GraduationCap,
  PackageOpen,
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
    <section id="about" className="bg-muted/40 py-20 sm:py-24">
      <div className="max-w-content mx-auto px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-6">
            <div>
              <Badge variant="outline" className="mb-4">
                About Us
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Building Transformative{" "}
                <span className="text-primary">Digital Solutions</span>
              </h2>
            </div>

            <p className="text-muted-foreground text-base leading-relaxed">
              Maka Integrated Technology Limited is a global technology,
              innovation, and product development company dedicated to creating
              transformative digital solutions that empower businesses,
              institutions, and individuals to thrive in an increasingly
              connected world.
            </p>

            <p className="text-muted-foreground text-base leading-relaxed">
              By combining technology, creativity, and strategic thinking, we
              develop scalable solutions that drive efficiency, productivity,
              growth, and sustainable impact across industries.
            </p>

            <p className="text-muted-foreground text-base leading-relaxed">
              Beyond delivering technology services, we are committed to
              building a thriving innovation ecosystem through digital product
              development, technology education, internship programs, mentorship
              initiatives, volunteer opportunities, and talent development
              platforms.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-foreground text-lg font-semibold">
              Our Areas of Expertise
            </h3>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-2">
              {SPECIALTIES.map((spec) => (
                <div
                  key={spec.label}
                  className="bg-card border-border flex items-center gap-3 rounded-xl border p-4"
                >
                  <div className="bg-primary/10 flex size-9 shrink-0 items-center justify-center rounded-lg">
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
