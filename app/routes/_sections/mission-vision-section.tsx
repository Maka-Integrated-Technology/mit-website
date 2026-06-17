import { Target, Eye } from "lucide-react";
import { Badge } from "~/components/ui/badge";

export default function MissionVisionSection() {
  return (
    <section className="bg-muted/50 py-24 sm:py-28">
      <div className="max-w-content mx-auto px-4 sm:px-6">
        <div className="mb-14 text-center">
          <Badge variant="outline" className="mb-5 rounded-full px-4">
            Our Purpose
          </Badge>
          <h2 className="text-foreground text-3xl font-bold tracking-tight sm:text-4xl">
            Mission &amp; Vision
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-xl text-base">
            The guiding principles behind every solution we build and every
            partnership we forge.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Mission */}
          <div className="bg-brand-dark relative overflow-hidden rounded-3xl p-10">
            <div className="pointer-events-none absolute top-0 right-0 h-72 w-72 translate-x-1/3 -translate-y-1/3 rounded-full bg-primary/25 blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 left-0 h-48 w-48 -translate-x-1/3 translate-y-1/3 rounded-full bg-primary/15 blur-2xl" />

            <div className="relative flex flex-col gap-6">
              <div className="flex size-14 items-center justify-center rounded-2xl bg-white/15">
                <Target className="size-7 text-white" strokeWidth={1.5} />
              </div>
              <div>
                <p className="mb-1 text-xs font-semibold tracking-widest text-white/50 uppercase">
                  Mission
                </p>
                <h3 className="font-display mb-4 text-2xl font-bold text-white sm:text-3xl">
                  Our Mission
                </h3>
                <p className="text-base leading-relaxed text-white/75">
                  To deliver innovative, reliable, and scalable technology
                  solutions while empowering individuals and organizations
                  through digital transformation, technology education, product
                  innovation, and professional development.
                </p>
              </div>
            </div>
          </div>

          {/* Vision */}
          <div className="bg-card border-border relative overflow-hidden rounded-3xl border p-10 shadow-sm">
            <div className="pointer-events-none absolute top-0 right-0 h-72 w-72 translate-x-1/3 -translate-y-1/3 rounded-full bg-primary/6 blur-3xl" />

            <div className="relative flex flex-col gap-6">
              <div className="bg-primary/10 flex size-14 items-center justify-center rounded-2xl">
                <Eye className="text-primary size-7" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-muted-foreground mb-1 text-xs font-semibold tracking-widest uppercase">
                  Vision
                </p>
                <h3 className="font-display text-foreground mb-4 text-2xl font-bold sm:text-3xl">
                  Our Vision
                </h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  To become a globally recognized technology, innovation, and
                  product development company that builds transformative digital
                  solutions, develops world-class technology talent, and creates
                  lasting impact across industries and communities worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
