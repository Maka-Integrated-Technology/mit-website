import { Badge } from "~/components/ui/badge";

const STATS = [
  { value: "16+", label: "Learning Disciplines" },
  { value: "8", label: "Talent Programs" },
  { value: "5", label: "Service Categories" },
  { value: "12+", label: "Audiences Served" },
];

export default function ImpactSection() {
  return (
    <section id="impact" className="bg-background py-24 sm:py-28">
      <div className="max-w-content mx-auto px-4 sm:px-6">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
          {/* Left: text */}
          <div className="flex flex-col gap-7">
            <div>
              <Badge variant="outline" className="mb-5 rounded-full px-4">
                Our Commitment
              </Badge>
              <h2 className="text-foreground text-3xl font-bold tracking-tight sm:text-4xl">
                Bridging the Technology{" "}
                <span className="text-primary">Skills Gap</span>
              </h2>
            </div>

            <p className="text-muted-foreground text-base leading-relaxed sm:text-lg">
              Maka Integrated Technology Limited is committed to bridging the
              technology skills gap by providing accessible learning
              opportunities, mentorship programs, internships, and practical
              industry experience that prepare individuals for successful
              careers in technology.
            </p>

            <p className="text-muted-foreground text-base leading-relaxed">
              We are passionate about creating opportunities, driving
              innovation, and empowering communities through technology. Our
              mission extends beyond solving today&apos;s challenges — we are
              building the technologies, products, and talent that will shape
              the future of industries, communities, and economies worldwide.
            </p>
          </div>

          {/* Right: stats */}
          <div className="grid grid-cols-2 gap-5">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="bg-card border-border rounded-3xl border p-8 text-center shadow-sm"
              >
                <p className="text-primary font-display text-4xl font-bold sm:text-5xl">
                  {stat.value}
                </p>
                <p className="text-muted-foreground mt-2 text-sm font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
