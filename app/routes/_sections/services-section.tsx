import {
  Code2,
  Wifi,
  BarChart2,
  Briefcase,
  GraduationCap,
  Check,
} from "lucide-react";
import { Badge } from "~/components/ui/badge";
import type { LucideIcon } from "lucide-react";

type ServiceCategory = {
  icon: LucideIcon;
  title: string;
  items: string[];
  accent: string;
};

const SERVICES: ServiceCategory[] = [
  {
    icon: Code2,
    title: "Technology Solutions",
    accent: "from-primary to-primary/60",
    items: [
      "Software Development",
      "Web Application Development",
      "Mobile Application Development",
      "Custom Enterprise Solutions",
      "System Integration",
      "Business Process Automation",
      "Digital Transformation Services",
      "Cloud-Based Solutions",
    ],
  },
  {
    icon: Wifi,
    title: "ICT & Telecommunications Services",
    accent: "from-primary/90 to-primary/50",
    items: [
      "ICT Consulting",
      "Network Infrastructure Solutions",
      "Telecommunications Solutions",
      "Internet Connectivity Services",
      "Communication Technology Services",
      "Technology Support and Maintenance",
      "Communication Equipment Installation",
      "Wireless & Satellite Communication Solutions",
    ],
  },
  {
    icon: BarChart2,
    title: "Data & Business Intelligence",
    accent: "from-primary/80 to-primary/40",
    items: [
      "Data Analytics",
      "Data Warehousing",
      "Business Intelligence Solutions",
      "Reporting and Dashboard Development",
      "Data Management Services",
      "Performance Monitoring Systems",
    ],
  },
  {
    icon: Briefcase,
    title: "Project Management & Technology Consulting",
    accent: "from-primary to-primary/70",
    items: [
      "ICT Project Management",
      "Technology Advisory Services",
      "Business Systems Consulting",
      "Digital Strategy Development",
      "Technology Implementation Support",
      "Organisational Digital Transformation",
    ],
  },
  {
    icon: GraduationCap,
    title: "Training & Capacity Building",
    accent: "from-primary/90 to-primary/55",
    items: [
      "Technology Training Programs",
      "Corporate ICT Training",
      "Professional Development Workshops",
      "Digital Skills Development Programs",
      "Technical Certification Preparation",
      "Technology Awareness Programs",
    ],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-muted/50 py-24 sm:py-28">
      <div className="max-w-content mx-auto px-4 sm:px-6">
        <div className="mb-14 text-center">
          <Badge variant="outline" className="mb-5 rounded-full px-4">
            What We Offer
          </Badge>
          <h2 className="text-foreground text-3xl font-bold tracking-tight sm:text-4xl">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-xl text-base">
            End-to-end technology services designed to accelerate your digital
            journey — from strategy and consulting through to delivery and
            growth.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="bg-card border-border group flex flex-col overflow-hidden rounded-3xl border shadow-sm transition-all duration-300 hover:shadow-md"
            >
              {/* Gradient top bar */}
              <div
                className={`h-1.5 bg-gradient-to-r ${service.accent} w-full`}
              />

              <div className="flex flex-1 flex-col gap-5 p-7">
                <div className="bg-primary/10 flex size-11 items-center justify-center rounded-2xl">
                  <service.icon
                    className="text-primary size-5"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="text-foreground leading-snug font-semibold">
                  {service.title}
                </h3>
                <ul className="flex flex-1 flex-col gap-2">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <Check
                        className="text-primary mt-0.5 size-3.5 shrink-0"
                        strokeWidth={2.5}
                      />
                      <span className="text-muted-foreground text-sm">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
