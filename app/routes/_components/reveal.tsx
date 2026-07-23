import { useEffect, useRef, useState } from "react";
import { cn } from "~/lib/utils/helpers";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: "none" | "short" | "medium";
};

const delayClass = {
  none: "delay-0",
  short: "delay-100",
  medium: "delay-200",
} as const;

export default function Reveal({
  children,
  className,
  delay = "none",
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(node);
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.14 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "motion-reduce:translate-y-0 motion-reduce:opacity-100",
        "transition-all duration-700 ease-out",
        delayClass[delay],
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
        className
      )}
    >
      {children}
    </div>
  );
}
