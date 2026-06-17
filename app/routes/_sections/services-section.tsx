import {
  Code2,
  Wifi,
  BarChart2,
  Briefcase,
  GraduationCap,
  Check,
} from "lucide-react";
import { Badge } from "~/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import type { LucideIcon } from "lucide-react";

type ServiceCategory = {
  icon: LucideIcon;
  title: string;
  items: string[];
};

const SERVICES: ServiceCategory[] = [
  {
    icon: Code2,
    title: "Technology Solutions",
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
    items: [
      "ICT Consulting",
      "Network Infrastructure Solutions",
      "Telecommunications Solutions",
      "Internet Connectivity Services",
      "Communication Technology Services",
      "Technology Support and Maintenance",
      "Communication Equipment Installation",
      "Wireless and Satellite Communication Solutions",
    ],
  },
  {
    icon: BarChart2,
    title: "Data & Business Intelligence",
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
    items: [
      "ICT Project Management",
      "Technology Advisory Services",
      "Business Systems Consulting",
      "Digital Strategy Development",
      "Technology Implementation Support",
      "Organizational Digital Transformation",
    ],
  },
  {
    icon: GraduationCap,
    title: "Training & Capacity Building",
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
    <section id="services" className="py-20 sm:py-24">
      <div className="max-w-content mx-auto px-4 sm:px-6">
        <div className="mb-12 text-center">
          <Badge variant="outline" className="mb-4">
            What We Offer
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-xl">
            End-to-end technology services designed to accelerate your digital
            journey, from strategy through execution.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <Card key={service.title} className="flex flex-col">
              <CardHeader className="pb-3">
                <div className="bg-primary/10 mb-3 flex size-11 items-center justify-center rounded-xl">
                  <service.icon
                    className="text-primary size-5"
                    strokeWidth={1.5}
                  />
                </div>
                <CardTitle className="text-base leading-snug">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="flex flex-col gap-2">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
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
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
