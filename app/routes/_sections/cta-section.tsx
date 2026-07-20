import { ArrowRight, Mail, Globe, Play, Hash } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Badge } from "~/components/ui/badge";

const BRAND_POSITIONS = [
  "Technology Solutions Company",
  "Product Development & Innovation Ecosystem",
  "Technology Education & Learning Company",
  "Talent Development Organization",
  "Innovation-Driven Technology Brand",
  "Global Technology Company",
  "Digital Transformation Partner",
  "Future-Focused Technology Brand",
];

const FOOTER_NAV = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Products", href: "#products" },
  { label: "Learning", href: "#learning" },
  { label: "Impact", href: "#impact" },
  { label: "Contact", href: "#contact" },
];

const SOCIAL_LINKS = [
  { icon: Globe, label: "LinkedIn", href: "https://linkedin.com/company/makatech" },
  { icon: Hash, label: "X (Twitter)", href: "#" },
  { icon: Play, label: "YouTube", href: "#" },
  { icon: Mail, label: "Email", href: "mailto:info@makatech.com" },
];

export default function CTASection() {
  return (
    <>
      <section id="contact" className="py-20 sm:py-24">
        <div className="max-w-content mx-auto px-4 sm:px-6">
          <div className="mb-12 text-center">
            <Badge variant="outline" className="mb-4">
              Brand Positioning
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Maka is More Than a{" "}
              <span className="text-primary">Technology Company</span>
            </h2>
            <p className="text-muted-foreground mx-auto mt-4 max-w-xl">
              We are a multidimensional technology organisation building
              solutions, products, and people that shape the future.
            </p>
          </div>

          <div className="mb-16 flex flex-wrap justify-center gap-3">
            {BRAND_POSITIONS.map((position) => (
              <span
                key={position}
                className="bg-primary/10 text-primary rounded-full px-4 py-2 text-sm font-medium"
              >
                {position}
              </span>
            ))}
          </div>

          <div className="bg-primary text-primary-foreground relative overflow-hidden rounded-3xl px-8 py-16 text-center sm:px-16">
            <div className="pointer-events-none absolute inset-0" aria-hidden>
              <div className="absolute top-0 left-1/4 h-72 w-72 rounded-full bg-white/5 blur-2xl" />
              <div className="absolute right-1/4 bottom-0 h-72 w-72 rounded-full bg-white/5 blur-2xl" />
            </div>

            <div className="relative flex flex-col items-center gap-6">
              <img
                src="/maka-logo.png"
                alt="Maka Integrated Technology Limited logo"
                className="h-16 w-auto object-contain opacity-90"
              />
              <h3 className="text-3xl font-bold sm:text-4xl">
                Let&apos;s Build the Future Together
              </h3>
              <p className="max-w-lg opacity-90 sm:text-lg">
                Whether you&apos;re a business seeking digital transformation, a
                talent looking to grow, or an innovator ready to partner — Maka
                Integrated Technology Limited is your technology growth partner.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Button
                  asChild
                  size="lg"
                  className="text-primary bg-white hover:bg-white/90"
                >
                  <a href="#services">
                    Explore Services
                    <ArrowRight className="size-4" />
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  <a href="mailto:info@makatech.com">
                    <Mail className="size-4" />
                    Get in Touch
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-border bg-card border-t">
        <div className="max-w-content mx-auto px-4 py-12 sm:px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <img
                  src="/maka-logo.png"
                  alt="Maka Integrated Technology Limited logo"
                  className="h-8 w-auto object-contain"
                />
                <span className="text-primary font-bold">Maka</span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Building Innovative Solutions. Empowering Future Talent.
                Transforming Industries Through Technology.
              </p>
              <div className="flex items-center gap-2">
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    aria-label={link.label}
                    className="bg-muted hover:bg-primary/10 hover:text-primary text-muted-foreground flex size-8 items-center justify-center rounded-lg transition-colors"
                  >
                    <link.icon className="size-4" strokeWidth={1.5} />
                  </a>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <h4 className="text-foreground text-sm font-semibold">
                Quick Links
              </h4>
              <nav className="flex flex-col gap-2">
                {FOOTER_NAV.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-muted-foreground hover:text-primary text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            <div className="flex flex-col gap-3">
              <h4 className="text-foreground text-sm font-semibold">Contact</h4>
              <div className="flex flex-col gap-2">
                <a
                  href="mailto:info@makatech.com"
                  className="text-muted-foreground hover:text-primary flex items-center gap-2 text-sm transition-colors"
                >
                  <Mail className="size-4 shrink-0" strokeWidth={1.5} />
                  info@makatech.com
                </a>
              </div>
              <div className="mt-2">
                <p className="text-muted-foreground text-xs leading-relaxed">
                  Maka Integrated Technology Limited — A global technology,
                  innovation, and product development company.
                </p>
              </div>
            </div>
          </div>

          <div className="border-border mt-10 flex flex-col items-center justify-between gap-3 border-t pt-6 sm:flex-row">
            <p className="text-muted-foreground text-xs">
              &copy; {new Date().getFullYear()} Maka Integrated Technology
              Limited. All rights reserved.
            </p>
            <p className="text-muted-foreground text-xs">
              Building Innovative Solutions for a Connected World.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
