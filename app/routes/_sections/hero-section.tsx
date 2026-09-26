import {
  ArrowRight,
  ChevronDown,
  Globe,
  GraduationCap,
  Layers,
  Package,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router";
import { CONTACT_HREF } from "./marketing-data";
import { Button } from "~/components/ui/button";

const POSITION_CHIPS = [
  "Technology Solutions",
  "Product Innovation",
  "Digital Transformation",
  "Talent Development",
  "Technology Education",
];

const FLOATING_SIGNALS = [
  {
    icon: Layers,
    label: "Digital Systems",
    className: "left-4 top-28 hidden lg:flex",
  },
  {
    icon: GraduationCap,
    label: "Future Talent",
    className: "right-8 top-36 hidden lg:flex",
  },
  {
    icon: Sparkles,
    label: "Product Labs",
    className: "bottom-28 left-12 hidden xl:flex",
  },
];

export default function HeroSection() {
  return (
    <section className="bg-background relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-28 text-center sm:px-6 sm:py-32">
      <div className="absolute inset-0 bg-[linear-gradient(color-mix(in_oklch,var(--primary)_7%,transparent)_1px,transparent_1px),linear-gradient(90deg,color-mix(in_oklch,var(--primary)_7%,transparent)_1px,transparent_1px)] bg-[size:82px_82px]" />
      <div className="absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(circle_at_50%_0%,color-mix(in_oklch,var(--primary)_22%,transparent),transparent_62%)]" />
      <div className="from-muted/70 absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t to-transparent" />
      <div className="hero-orbit border-primary/12 absolute top-1/2 left-1/2 size-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full border" />
      <div className="hero-orbit-reverse border-primary/8 absolute top-1/2 left-1/2 size-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full border" />

      {FLOATING_SIGNALS.map((signal) => (
        <div
          key={signal.label}
          className={`${signal.className} animate-float bg-card/85 border-primary/15 text-muted-foreground absolute z-10 items-center gap-2 rounded-full border px-4 py-2 text-xs font-medium backdrop-blur-md`}
        >
          <signal.icon className="text-primary size-4" strokeWidth={1.5} />
          {signal.label}
        </div>
      ))}

      <div className="relative z-10 flex max-w-5xl flex-col items-center gap-8">
        <img
          src="/maka-logo-transparent.png"
          alt="Maka Integrated Technology Limited logo"
          className="hero-logo h-36 w-auto object-contain opacity-95 sm:h-48 lg:h-56"
        />

        <span className="border-primary/20 bg-primary/6 text-primary inline-flex items-center gap-2 rounded-full border px-5 py-1.5 text-xs font-semibold backdrop-blur-sm">
          <Globe className="size-3.5" />
          Global Technology · Innovation · Product Development
        </span>

        <div className="flex flex-col items-center gap-2">
          <h1 className="text-foreground font-display text-5xl leading-[1.1] font-bold sm:text-6xl lg:text-7xl">
            Building the Future
          </h1>
          <h1 className="font-display text-primary text-5xl leading-[1.1] font-bold sm:text-6xl lg:text-7xl">
            of Technology
          </h1>
        </div>

        <p className="text-muted-foreground text-base font-medium tracking-wide sm:text-lg">
          Maka Integrated Technology Limited
        </p>

        <p className="text-muted-foreground max-w-3xl text-base leading-relaxed sm:text-lg">
          We design and deliver digital products, enterprise technology
          solutions, and learning ecosystems for organizations and people
          preparing for what comes next.
        </p>

        <div className="grid w-full max-w-3xl gap-3 sm:grid-cols-3">
          {[
            "Build smarter digital operations.",
            "Launch product ecosystems with purpose.",
            "Grow practical technology talent.",
          ].map((text) => (
            <div
              key={text}
              className="bg-card/80 border-primary/12 text-muted-foreground flex min-h-28 items-center justify-center rounded-2xl border p-4 text-center text-sm leading-relaxed backdrop-blur-sm"
            >
              {text}
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg" className="rounded-full px-8">
            <Link to="/services">
              Explore Services
              <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full px-8"
          >
            <Link to="/products">
              <Package className="size-4" />
              View Products
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="ghost"
            className="rounded-full px-8"
          >
            <Link to={CONTACT_HREF}>
              <Layers className="size-4" />
              Partner With Us
            </Link>
          </Button>
        </div>

        <div className="flex flex-wrap justify-center gap-2 pt-2">
          {POSITION_CHIPS.map((chip) => (
            <span
              key={chip}
              className="bg-card/75 border-primary/12 text-muted-foreground rounded-full border px-3.5 py-1 text-xs backdrop-blur-sm"
            >
              {chip}
            </span>
          ))}
        </div>
      </div>

      <div className="text-muted-foreground absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="size-5" />
      </div>
    </section>
  );
}
