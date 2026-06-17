import { Link } from "react-router";
import {
  Layers,
  Zap,
  Palette,
  Route,
  Database,
  Package,
  ArrowRight,
} from "lucide-react";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";

const FEATURES = [
  {
    icon: Zap,
    title: "Vite + React 19",
    description:
      "Blazing-fast dev server and HMR with the latest React features.",
  },
  {
    icon: Route,
    title: "React Router v7",
    description:
      "File-based routing via rr-next-routes with app-router style conventions.",
  },
  {
    icon: Palette,
    title: "Tailwind CSS v4 + shadcn",
    description:
      "Utility-first styling with Radix UI primitives and a full component library.",
  },
  {
    icon: Database,
    title: "TanStack Query",
    description:
      "Async state management with caching, deduplication, and devtools.",
  },
  {
    icon: Package,
    title: "Axios + Retry",
    description:
      "HTTP client with automatic retry on network errors and a generic error handler.",
  },
  {
    icon: Layers,
    title: "TypeScript Strict",
    description:
      "Full strict mode with path aliases, type generation, and Vite client types.",
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative flex min-h-[420px] flex-col items-center justify-center overflow-hidden px-4 py-20 text-center sm:py-28">
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          aria-hidden
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-primary/8 blur-[120px]" />
        </div>

        <div className="flex flex-col items-center gap-6 max-w-2xl">
          <Badge variant="outline" className="gap-1.5">
            <Layers className="size-3.5" />
            Vite · React Router · TypeScript
          </Badge>

          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Start building{" "}
            <span className="text-primary">faster.</span>
          </h1>

          <p className="text-muted-foreground max-w-lg text-lg">
            A production-ready starter with routing, data fetching, theming,
            and a full UI component library — wired up and ready to go.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg">
              <Link to="/browse">
                <ArrowRight className="size-5" />
                Explore example
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a
                href="https://reactrouter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                React Router docs
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Feature grid */}
      <section className="mx-auto w-full max-w-content px-4 pb-20 sm:px-6">
        <h2 className="mb-6 text-lg font-semibold">What&apos;s included</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <Card key={f.title}>
              <CardHeader>
                <div className="mb-1 flex size-9 items-center justify-center rounded-lg bg-primary/10">
                  <f.icon className="size-5 text-primary" strokeWidth={1.5} />
                </div>
                <CardTitle>{f.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">{f.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
