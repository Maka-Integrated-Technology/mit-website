import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";

import { cn } from "~/lib/utils/helpers";

const badgeVariants = cva(
  "group/badge inline-flex w-fit shrink-0 items-center justify-center gap-2 overflow-hidden rounded-sm border border-transparent px-3 py-1.5 text-xs font-medium whitespace-nowrap transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3!",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground [a]:hover:bg-primary/80",
        secondary:
          "bg-secondary text-secondary-foreground [a]:hover:bg-secondary/80",
        destructive:
          "bg-destructive/10 text-destructive focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:focus-visible:ring-destructive/40 [a]:hover:bg-destructive/20",
        outline:
          "border-border text-foreground [a]:hover:bg-muted [a]:hover:text-muted-foreground",
        ghost:
          "hover:bg-muted hover:text-muted-foreground dark:hover:bg-muted/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      color: {
        green: "bg-green-500 text-white border-green-600",
        gray: "bg-gray-500 text-white border-gray-600",
      },
    },
    compoundVariants: [
      {
        variant: "outline",
        color: "green",
        class:
          "border-green-600 bg-transparent text-green-700 dark:border-green-500 dark:text-green-400 [a]:hover:bg-green-500/10 [a]:hover:text-green-800 dark:[a]:hover:bg-green-500/15 dark:[a]:hover:text-green-300",
      },
      {
        variant: "outline",
        color: "gray",
        class:
          "border-gray-500 bg-transparent text-gray-700 dark:border-gray-500 dark:text-gray-300 [a]:hover:bg-gray-500/10 [a]:hover:text-gray-900 dark:[a]:hover:bg-gray-500/15 dark:[a]:hover:text-gray-100",
      },
    ],
    defaultVariants: {
      variant: "default",
    },
  }
);

function Badge({
  className,
  variant = "default",
  asChild = false,
  color,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Root : "span";

  return (
    <Comp
      data-slot="badge"
      data-variant={variant}
      className={cn(badgeVariants({ variant, color }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
