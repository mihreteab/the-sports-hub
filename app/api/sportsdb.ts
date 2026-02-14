/**
 * The Sports DB API client
 * @see https://www.thesportsdb.com/documentation
 */

import type {
  SportsDbEvent,
  SportsDbLeagueEventsResponse,
} from "~/types/sportsdb";

function getBaseUrl(): string {
  // Server (loaders): use process.env from .env
  if (typeof process !== "undefined" && process.env.SPORTS_DB_BASE_URL) {
    return process.env.SPORTS_DB_BASE_URL;
  }
  // Client/build fallback: Vite only exposes VITE_* to import.meta.env
  return import.meta.env.VITE_SPORTS_DB_BASE_URL ?? "";
}

function buildUrl(endpoint: string, params?: Record<string, string | number>) {
  const base = getBaseUrl();
  if (!base) {
    throw new Response(
      "Sports DB base URL not configured (set SPORTS_DB_BASE_URL in .env)",
      {
        status: 500,
      }
    );
  }
  const url = new URL(`${base}/${endpoint}`);
  if (params) {
    Object.entries(params).forEach(([k, v]) =>
      url.searchParams.set(k, String(v))
    );
  }
  return url.toString();
}

async function fetchApi<T>(
  endpoint: string,
  params?: Record<string, string | number>
): Promise<T> {
  const url = buildUrl(endpoint, params);
  const res = await fetch(url);
  if (!res.ok) {
    throw new Response(`Sports DB API error: ${res.statusText}`, {
      status: res.status,
    });
  }
  return res.json();
}

// ─── Events ───────────────────────────────────────────────────────────────

/** Next upcoming events for a league */
export async function getLeagueNextEvents(
  leagueId: number | string = 4328
): Promise<SportsDbEvent[]> {
  const data = await fetchApi<SportsDbLeagueEventsResponse>(
    "eventsnextleague.php",
    { id: leagueId }
  );
  return data.events ?? [];
}
