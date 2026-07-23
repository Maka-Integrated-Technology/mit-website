import { Link } from "react-router";
import { cn } from "~/lib/utils/helpers";

const logoSizes = {
  sm: { img: "h-7 w-auto", text: "text-base" },
  default: { img: "h-8 w-auto", text: "text-lg" },
  lg: { img: "h-10 w-auto", text: "text-xl" },
} as const;

type LogoSize = keyof typeof logoSizes;

interface Props {
  containerClassName?: string;
  size?: LogoSize;
  disabled?: boolean;
  iconOnly?: boolean;
  label?: string;
}

function LogoContent({
  size,
  iconOnly,
  label,
}: {
  size: LogoSize;
  iconOnly?: boolean;
  label: string;
}) {
  const s = logoSizes[size];
  return (
    <div className="flex items-center gap-2">
      <img
        src="/maka-logo-transparent.png"
        alt="Maka Integrated Technology Limited logo"
        className={cn(s.img, "object-contain")}
      />
      {!iconOnly && (
        <span className={cn("font-bold tracking-tight", s.text)}>
          <span className="text-primary">{label}</span>
        </span>
      )}
    </div>
  );
}

export default function Logo({
  containerClassName,
  size = "default",
  disabled = false,
  iconOnly = false,
  label = "Maka",
}: Props) {
  const containerClass = cn("flex w-fit items-center", containerClassName);

  if (disabled) {
    return (
      <div className={containerClass} aria-label={label}>
        <LogoContent size={size} iconOnly={iconOnly} label={label} />
      </div>
    );
  }

  return (
    <Link
      to="/"
      className={containerClass}
      aria-label="Maka Integrated Technology Limited — Go to homepage"
    >
      <LogoContent size={size} iconOnly={iconOnly} label={label} />
    </Link>
  );
}
