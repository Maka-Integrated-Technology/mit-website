import { Globe, ArrowRight, Layers, Package } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Badge } from "~/components/ui/badge";

const POSITIONS = [
  "Technology Solutions",
  "Product Innovation",
  "Digital Transformation",
  "Talent Development",
  "Technology Education",
];

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-4 py-24 text-center sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        <div className="bg-primary/10 absolute top-1/3 left-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[160px]" />
        <div className="bg-primary/5 absolute bottom-0 left-0 h-[450px] w-[450px] rounded-full blur-[130px]" />
        <div className="bg-primary/5 absolute top-0 right-0 h-[450px] w-[450px] rounded-full blur-[130px]" />
      </div>

      <div className="flex max-w-4xl flex-col items-center gap-8">
        <img
          src="/maka-logo.png"
          alt="Maka Integrated Technology Limited logo"
          className="h-20 w-auto object-contain sm:h-24"
        />

        <Badge variant="outline" className="gap-1.5 px-4 py-1.5 text-xs">
          <Globe className="size-3" />
          Global Technology · Innovation · Product Development
        </Badge>

        <div className="flex flex-col items-center gap-4">
          <h1 className="text-4xl leading-tight font-bold tracking-tight sm:text-5xl lg:text-6xl">
            <span className="text-foreground">Maka Integrated</span>{" "}
            <span className="text-primary">Technology</span>{" "}
            <span className="text-foreground">Limited</span>
          </h1>

          <p className="text-muted-foreground max-w-2xl text-base sm:text-lg">
            Building Innovative Solutions.{" "}
            <span className="text-foreground font-semibold">
              Empowering Future Talent.
            </span>{" "}
            Transforming Industries Through Technology.
          </p>
        </div>

        <p className="text-muted-foreground max-w-xl text-sm sm:text-base">
          A global technology company dedicated to creating transformative
          digital solutions that empower businesses, institutions, and
          individuals to thrive in an increasingly connected world.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg">
            <a href="#services">
              <Layers className="size-4" />
              Explore Services
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href="#products">
              <Package className="size-4" />
              View Products
            </a>
          </Button>
          <Button asChild size="lg" variant="ghost">
            <a href="#contact">
              Partner With Us
              <ArrowRight className="size-4" />
            </a>
          </Button>
        </div>

        <div className="flex flex-wrap justify-center gap-2 pt-2">
          {POSITIONS.map((label) => (
            <span
              key={label}
              className="bg-primary/10 text-primary rounded-full px-3 py-1 text-xs font-medium"
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
