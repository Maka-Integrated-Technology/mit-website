import { Target, Eye } from "lucide-react";
import { Badge } from "~/components/ui/badge";

export default function MissionVisionSection() {
  return (
    <section className="py-20 sm:py-24">
      <div className="max-w-content mx-auto px-4 sm:px-6">
        <div className="mb-12 text-center">
          <Badge variant="outline" className="mb-4">
            Our Purpose
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Mission &amp; Vision
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-xl">
            The principles that guide everything we build and every partnership
            we forge.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="border-primary/20 bg-primary text-primary-foreground relative overflow-hidden rounded-2xl border p-8">
            <div className="pointer-events-none absolute top-0 right-0 h-64 w-64 translate-x-1/3 -translate-y-1/3 rounded-full bg-white/5 blur-2xl" />
            <div className="relative flex flex-col gap-5">
              <div className="flex size-12 items-center justify-center rounded-xl bg-white/15">
                <Target className="size-6" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="mb-3 text-2xl font-bold">Our Mission</h3>
                <p className="leading-relaxed opacity-90">
                  To deliver innovative, reliable, and scalable technology
                  solutions while empowering individuals and organizations
                  through digital transformation, technology education, product
                  innovation, and professional development.
                </p>
              </div>
            </div>
          </div>

          <div className="border-border bg-card relative overflow-hidden rounded-2xl border p-8">
            <div className="bg-primary/5 pointer-events-none absolute top-0 right-0 h-64 w-64 translate-x-1/3 -translate-y-1/3 rounded-full blur-2xl" />
            <div className="relative flex flex-col gap-5">
              <div className="bg-primary/10 flex size-12 items-center justify-center rounded-xl">
                <Eye className="text-primary size-6" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-foreground mb-3 text-2xl font-bold">
                  Our Vision
                </h3>
                <p className="text-muted-foreground leading-relaxed">
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
