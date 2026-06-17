import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "~/lib/utils/helpers";

const inputVariants = cva(
  "flex w-full bg-transparent text-sm outline-none font-medium transition-all duration-200 selection:bg-primary selection:text-primary-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-foreground placeholder:text-input-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:right-0 [&::-webkit-calendar-picker-indicator]:cursor-pointer"
);

const inputWrapperVariants = cva(
  "flex items-center gap-2 rounded-xl border px-4 py-3 transition-colors border-border bg-input-background focus-within:border-primary focus-within:outline focus-within:outline-primary has-[[aria-invalid=true]]:border-destructive has-[[aria-invalid=true]]:focus-within:border-destructive has-[[aria-invalid=true]]:focus-within:outline-destructive"
);

export interface InputProps
  extends Omit<React.ComponentProps<"input">, "color">,
    VariantProps<typeof inputWrapperVariants> {
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  inputWrapperClassName?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      startAdornment,
      endAdornment,
      inputWrapperClassName,
      onFocus,
      onBlur,
      ...props
    },
    ref
  ) => {
    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      onBlur?.(e);
    };

    return (
      <div className={cn(inputWrapperVariants(), inputWrapperClassName)}>
        {startAdornment}
        <div className="relative h-[1.2rem] w-full">
          <input
            data-slot="input"
            id={props.name}
            ref={ref}
            className={cn(inputVariants(), className)}
            onFocus={handleFocus}
            onBlur={handleBlur}
            {...props}
          />
        </div>
        {endAdornment}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
