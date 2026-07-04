import {
  ArrowRight,
  BookOpen,
  Briefcase,
  Globe,
  Hash,
  Mail,
  Play,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router";
import { CONTACT_EMAIL } from "./marketing-data";
import Reveal from "../_components/reveal";
import { Button } from "~/components/ui/button";

const SOCIAL_LINKS = [
  { icon: Globe, label: "LinkedIn", href: "#" },
  { icon: Hash, label: "X (Twitter)", href: "#" },
  { icon: Play, label: "YouTube", href: "#" },
  { icon: Mail, label: "Email", href: `mailto:${CONTACT_EMAIL}` },
];

const FOOTER_GROUPS = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Impact", href: "/impact" },
      { label: "Contact", href: "/#contact" },
    ],
  },
  {
    title: "Capabilities",
    links: [
      { label: "Services", href: "/services" },
      { label: "Products", href: "/products" },
      { label: "Learning", href: "/learning" },
    ],
  },
];

const FOOTER_SIGNALS = [
  { icon: Briefcase, label: "Build" },
  { icon: Sparkles, label: "Launch" },
  { icon: BookOpen, label: "Grow" },
];

export default function CTASection() {
  return (
    <>
      <section
        id="contact"
        className="bg-background px-4 py-24 sm:px-6 sm:py-28"
      >
        <Reveal className="max-w-content border-primary/15 bg-muted/45 mx-auto overflow-hidden rounded-[2rem] border">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            <div className="border-border border-b p-8 sm:p-12 lg:border-r lg:border-b-0">
              <img
                src="/maka-logo.png"
                alt="Maka Integrated Technology Limited logo"
                className="mb-8 h-16 w-auto object-contain"
              />
              <h2 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
                Enough to get curious?
              </h2>
              <p className="text-muted-foreground mt-5 max-w-xl text-lg leading-relaxed">
                Tell us what you are trying to build, improve, teach, or launch.
                We will help you find the next useful step.
              </p>
              <Button asChild className="mt-8 rounded-full px-7">
                <a href={`mailto:${CONTACT_EMAIL}`}>
                  Contact Us
                  <ArrowRight className="size-4" />
                </a>
              </Button>
            </div>

            <div className="grid content-between gap-8 p-8 sm:p-12">
              <div className="grid gap-3">
                {[
                  "Share your project context.",
                  "We identify the most useful next step.",
                  "Then we shape a delivery or partnership path.",
                ].map((step, index) => (
                  <div
                    key={step}
                    className="bg-background border-border flex items-center gap-4 rounded-2xl border p-4"
                  >
                    <span className="text-primary text-xs font-bold">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="text-sm font-medium">{step}</p>
                  </div>
                ))}
              </div>

              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-primary flex items-center gap-2 text-sm font-semibold"
              >
                <Mail className="size-4 shrink-0" strokeWidth={1.5} />
                {CONTACT_EMAIL}
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      <footer className="bg-background border-t border-border px-4 pt-16 pb-8 sm:px-6">
        <div className="max-w-content mx-auto">
          <div className="border-primary/15 bg-muted/35 relative overflow-hidden rounded-[2rem] border p-6 sm:p-8 lg:p-10">
            <div className="pointer-events-none absolute top-0 right-0 h-72 w-72 translate-x-1/3 -translate-y-1/3 rounded-full bg-primary/10 blur-3xl" />
            <div className="relative grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
              <div>
                <div className="mb-6 flex items-center gap-2.5">
                  <img
                    src="/maka-logo.png"
                    alt="Maka Integrated Technology Limited logo"
                    className="h-10 w-auto object-contain"
                  />
                  <span className="text-lg font-bold">Maka</span>
                </div>
                <h2 className="max-w-xl text-3xl font-bold tracking-tight sm:text-4xl">
                  Technology, products, and talent systems for the next stage.
                </h2>
                <p className="text-muted-foreground mt-4 max-w-xl leading-relaxed">
                  Building Innovative Solutions. Empowering Future Talent.
                  Transforming Industries Through Technology.
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {FOOTER_SIGNALS.map((signal, index) => (
                    <span
                      key={signal.label}
                      className="animate-float bg-background border-border flex items-center gap-2 rounded-full border px-3.5 py-2 text-xs font-semibold"
                      style={{ animationDelay: `${index * 0.35}s` }}
                    >
                      <signal.icon
                        className="text-primary size-3.5"
                        strokeWidth={1.5}
                      />
                      {signal.label}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                {FOOTER_GROUPS.map((group) => (
                  <div
                    key={group.title}
                    className="bg-background border-border rounded-2xl border p-5"
                  >
                    <h4 className="text-muted-foreground mb-4 text-xs font-semibold tracking-wider uppercase">
                      {group.title}
                    </h4>
                    <nav className="flex flex-col gap-3">
                      {group.links.map((link) => (
                        <Link
                          key={link.href}
                          to={link.href}
                          className="hover:text-primary text-sm font-medium transition-colors"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </nav>
                  </div>
                ))}

                <div className="bg-background border-border rounded-2xl border p-5 sm:col-span-2">
                  <h4 className="text-muted-foreground mb-4 text-xs font-semibold tracking-wider uppercase">
                    Contact
                  </h4>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="text-primary flex items-center gap-2 text-sm font-semibold"
                  >
                    <Mail className="size-4 shrink-0" strokeWidth={1.5} />
                    {CONTACT_EMAIL}
                  </a>
                  <div className="mt-5 flex items-center gap-2">
                    {SOCIAL_LINKS.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        aria-label={link.label}
                        className="border-border hover:border-primary/30 hover:text-primary flex size-9 items-center justify-center rounded-xl border bg-muted/35 text-muted-foreground transition-colors"
                      >
                        <link.icon className="size-3.5" strokeWidth={1.5} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-muted-foreground mt-8 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs sm:flex-row">
            <p>
              &copy; {new Date().getFullYear()} Maka Integrated Technology
              Limited. All rights reserved.
            </p>
            <p>Building Innovative Solutions for a Connected World.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
