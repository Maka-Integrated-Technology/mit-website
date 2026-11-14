import { useEffect, useState } from "react";
import { BREAKPOINT_1024 } from "~/lib/utils/constants";

export function useIsMobile(breakpoint: number = BREAKPOINT_1024) {
  // Start with the desktop value so server-rendered (prerendered) HTML and the
  // first client render match; the effect below syncs the real width.
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${breakpoint}px)`);
    const onChange = () => setIsMobile(window.innerWidth < breakpoint);
    onChange();
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, [breakpoint]);

  return isMobile;
}
