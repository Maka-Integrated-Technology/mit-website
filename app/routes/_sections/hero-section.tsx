import { ArrowRight, ChevronDown, Globe, Layers, Package } from "lucide-react";
import { Button } from "~/components/ui/button";

const POSITION_CHIPS = [
  "Technology Solutions",
  "Product Innovation",
  "Digital Transformation",
  "Talent Development",
  "Technology Education",
];

export default function HeroSection() {
  return (
    <section className="bg-brand-dark relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-28 text-center sm:py-32">
      {/* Glow orbs */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute top-1/4 left-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[160px]" />
        <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-primary/10 blur-[130px]" />
        <div className="absolute top-0 left-0 h-[350px] w-[350px] rounded-full bg-primary/8 blur-[120px]" />
      </div>

      <div className="relative z-10 flex max-w-5xl flex-col items-center gap-8">
        {/* Logo */}
        <img
          src="/maka-logo.png"
          alt="Maka Integrated Technology Limited logo"
          className="h-16 w-auto object-contain opacity-95 sm:h-20"
        />

        {/* Badge */}
        <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-1.5 text-xs text-white/80 backdrop-blur-sm">
          <Globe className="size-3.5" />
          Global Technology · Innovation · Product Development
        </span>

        {/* Main heading — display font */}
        <div className="flex flex-col items-center gap-2">
          <h1 className="font-display text-5xl leading-[1.1] font-bold text-white sm:text-6xl lg:text-7xl">
            Building the Future
          </h1>
          <h1 className="font-display text-5xl leading-[1.1] font-bold text-primary sm:text-6xl lg:text-7xl">
            of Technology
          </h1>
        </div>

        {/* Company name */}
        <p className="text-base font-medium tracking-wide text-white/50 sm:text-lg">
          Maka Integrated Technology Limited
        </p>

        {/* Tagline */}
        <p className="max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
          Building Innovative Solutions.{" "}
          <span className="font-semibold text-white/90">
            Empowering Future Talent.
          </span>{" "}
          Transforming Industries Through Technology.
        </p>

        {/* Pill CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button
            asChild
            size="lg"
            className="rounded-full bg-primary px-8 text-white hover:bg-primary/90"
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
            <a href="#products">
              <Package className="size-4" />
              View Products
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="ghost"
            className="rounded-full px-8 text-white/70 hover:bg-white/8 hover:text-white"
          >
            <a href="#contact">
              <Layers className="size-4" />
              Partner With Us
            </a>
          </Button>
        </div>

        {/* Position chips */}
        <div className="flex flex-wrap justify-center gap-2 pt-2">
          {POSITION_CHIPS.map((chip) => (
            <span
              key={chip}
              className="rounded-full border border-white/15 bg-white/8 px-3.5 py-1 text-xs text-white/60 backdrop-blur-sm"
            >
              {chip}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="size-5 text-white/30" />
      </div>
    </section>
  );
}
