import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("routes/layout.tsx", [
    index("routes/live.tsx"),
    route("matches", "routes/matches.tsx", [
      index("routes/matches.index.tsx"),
      route(":id", "routes/matches.$id.tsx"),
    ]),
    route("standings", "routes/standings.tsx"),
    route("teams", "routes/teams.tsx"),
    route("comparison", "routes/comparison.tsx"),
    route("statistics", "routes/statistics.tsx"),
    route("venues", "routes/venues.tsx"),
    route("*", "routes/$.tsx"),
  ]),
] satisfies RouteConfig;
