import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Switch } from "~/components/ui/switch";
import { cn } from "~/lib/utils/helpers";

export function NavbarThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && theme === "dark";

  return (
    <div
      className="flex items-center gap-2"
      title={isDark ? "Dark theme" : "Light theme"}
    >
      <Sun
        aria-hidden
        className={cn(
          "size-4 shrink-0 transition-opacity",
          isDark ? "text-muted-foreground/50" : "text-foreground"
        )}
      />
      <Switch
        aria-label={
          mounted
            ? isDark
              ? "Switch to light theme"
              : "Switch to dark theme"
            : "Toggle theme"
        }
        checked={mounted ? isDark : true}
        onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
        disabled={!mounted}
        size="sm"
      />
      <Moon
        aria-hidden
        className={cn(
          "size-4 shrink-0 transition-opacity",
          isDark ? "text-foreground" : "text-muted-foreground/50"
        )}
      />
    </div>
  );
}
