import type { RouteConfig } from "@react-router/dev/routes";
import { nextRoutes, appRouterStyle } from "rr-next-routes/react-router";

export default nextRoutes({
  ...appRouterStyle,
  folderName: "./routes",
}) satisfies RouteConfig;
