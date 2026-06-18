import { ArrowRight, Mail, Globe, Play, Hash } from "lucide-react";
import { Button } from "~/components/ui/button";

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
  { icon: Globe, label: "LinkedIn", href: "#" },
  { icon: Hash, label: "X (Twitter)", href: "#" },
  { icon: Play, label: "YouTube", href: "#" },
  { icon: Mail, label: "Email", href: "mailto:info@makatech.com" },
];

export default function CTASection() {
  return (
    <>
      {/* Brand positioning + main CTA */}
      <section id="contact" className="bg-brand-dark py-24 sm:py-28">
        <div className="max-w-content mx-auto px-4 sm:px-6">
          {/* Brand positions */}
          <div className="mb-16 flex flex-col items-center gap-6">
            <p className="text-xs font-semibold tracking-widest text-white/40 uppercase">
              Maka is Positioned As
            </p>
            <div className="flex flex-wrap justify-center gap-2.5">
              {BRAND_POSITIONS.map((position) => (
                <span
                  key={position}
                  className="rounded-full border border-white/15 bg-white/8 px-4 py-1.5 text-sm text-white/70"
                >
                  {position}
                </span>
              ))}
            </div>
          </div>

          {/* Hero CTA panel */}
          <div className="bg-brand-dark-lighter relative overflow-hidden rounded-3xl border border-white/10 px-8 py-16 text-center sm:px-16">
            <div className="pointer-events-none absolute inset-0" aria-hidden>
              <div className="bg-primary/20 absolute top-0 left-1/4 h-80 w-80 rounded-full blur-3xl" />
              <div className="bg-primary/15 absolute right-1/4 bottom-0 h-80 w-80 rounded-full blur-3xl" />
            </div>

            <div className="relative flex flex-col items-center gap-7">
              <img
                src="/maka-logo.png"
                alt="Maka Integrated Technology Limited logo"
                className="h-16 w-auto object-contain opacity-90"
              />

              <div>
                <h2 className="font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                  Let&apos;s Build the Future Together
                </h2>
                <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-white/65 sm:text-lg">
                  Whether you&apos;re a business seeking digital transformation,
                  a talent looking to grow, or an innovator ready to partner —
                  Maka Integrated Technology Limited is your growth partner.
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-3">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90 rounded-full px-8 text-white"
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
                  className="rounded-full border-white/25 px-8 text-white hover:bg-white/10 hover:text-white"
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

      {/* Footer */}
      <footer className="bg-brand-dark border-t border-white/10 pt-14 pb-8">
        <div className="max-w-content mx-auto px-4 sm:px-6">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {/* Brand col */}
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-2.5">
                <img
                  src="/maka-logo.png"
                  alt="Maka Integrated Technology Limited logo"
                  className="h-8 w-auto object-contain"
                />
                <span className="text-base font-bold text-white">Maka</span>
              </div>
              <p className="text-sm leading-relaxed text-white/50">
                Building Innovative Solutions. Empowering Future Talent.
                Transforming Industries Through Technology.
              </p>
              <div className="flex items-center gap-2">
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    aria-label={link.label}
                    className="hover:bg-primary/20 hover:text-primary flex size-8 items-center justify-center rounded-lg bg-white/8 text-white/50 transition-colors"
                  >
                    <link.icon className="size-3.5" strokeWidth={1.5} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick links */}
            <div className="flex flex-col gap-3">
              <h4 className="text-xs font-semibold tracking-wider text-white/40 uppercase">
                Quick Links
              </h4>
              <nav className="flex flex-col gap-2">
                {FOOTER_NAV.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="hover:text-primary text-sm text-white/55 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Contact */}
            <div className="flex flex-col gap-3">
              <h4 className="text-xs font-semibold tracking-wider text-white/40 uppercase">
                Contact
              </h4>
              <a
                href="mailto:info@makatech.com"
                className="hover:text-primary flex items-center gap-2 text-sm text-white/55 transition-colors"
              >
                <Mail className="size-4 shrink-0" strokeWidth={1.5} />
                info@makatech.com
              </a>
              <p className="mt-1 text-xs leading-relaxed text-white/35">
                Maka Integrated Technology Limited — A global technology,
                innovation, and product development company.
              </p>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/8 pt-6 sm:flex-row">
            <p className="text-xs text-white/30">
              &copy; {new Date().getFullYear()} Maka Integrated Technology
              Limited. All rights reserved.
            </p>
            <p className="text-xs text-white/25">
              Building Innovative Solutions for a Connected World.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
