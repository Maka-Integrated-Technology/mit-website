import { cn } from "~/lib/utils/helpers";

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn(
        "dark:bg-card bg-zinc-100 animate-pulse rounded-md",
        className
      )}
      {...props}
    />
  );
}

export { Skeleton };
