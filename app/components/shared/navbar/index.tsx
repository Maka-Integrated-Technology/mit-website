import { useState } from "react";
import { Link, NavLink } from "react-router";
import { Menu, X } from "lucide-react";
import Logo from "../logo";
import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils/helpers";
import { useIsMobile } from "~/hooks/use-mobile";
import { CONTACT_HREF, NAV_LINKS } from "~/routes/_sections/marketing-data";

export default function MainNavbar() {
  const isMobile = useIsMobile(768);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav className="bg-background/90 border-border fixed top-0 right-0 left-0 z-40 border-b backdrop-blur-md">
        <div className="max-w-content mx-auto flex h-[72px] items-center gap-6 px-4 sm:px-6">
          <Logo size="sm" />

          {!isMobile && (
            <div className="border-border/70 bg-muted/35 ml-8 flex items-center gap-1 rounded-full border p-1 lg:ml-14">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.href}
                  to={link.href}
                  className={({ isActive }) =>
                    cn(
                      "rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors",
                      isActive
                        ? "bg-background text-primary"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    )
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          )}

          <div className="ml-auto flex items-center gap-2">
            {!isMobile && (
              <Button asChild size="sm" className="rounded-full px-5">
                <Link to={CONTACT_HREF}>Contact Us</Link>
              </Button>
            )}
            {isMobile && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileOpen((open) => !open)}
                aria-label="Toggle menu"
              >
                {mobileOpen ? (
                  <X className="size-5" />
                ) : (
                  <Menu className="size-5" />
                )}
              </Button>
            )}
          </div>
        </div>

        {isMobile && mobileOpen && (
          <div className="bg-background border-border border-t px-4 pb-5">
            <div className="mt-3 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.href}
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      "rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
                      isActive
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    )
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="border-border mt-3 border-t pt-3">
                <Button asChild size="sm" className="w-full rounded-full px-5">
                  <Link to={CONTACT_HREF} onClick={() => setMobileOpen(false)}>
                    Contact Us
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
      <div className="h-[72px]" />
    </>
  );
}
