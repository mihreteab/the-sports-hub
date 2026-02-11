import type { Route } from "./+types/$";

/**
 * Catch-all: no route matched. Throw 404 so root ErrorBoundary shows 404 page.
 */
export function loader({}: Route.LoaderArgs) {
  throw new Response(null, { status: 404 });
}

export default function CatchAll() {
  return null;
}
