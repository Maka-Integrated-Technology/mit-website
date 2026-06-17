import { cn } from "~/lib/utils/helpers";

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn(
        "dark:bg-card animate-pulse rounded-md bg-zinc-100",
        className
      )}
      {...props}
    />
  );
}

export { Skeleton };
