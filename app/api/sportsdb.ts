/**
 * The Sports DB API client
 * @see https://www.thesportsdb.com/documentation
 */

import type {
  SportsDbEvent,
  SportsDbEventDetailResponse,
  SportsDbLeagueEventsResponse,
  SportsDbTimelineResponse,
} from "~/types/sportsdb";

function getBaseUrl(): string {
  // Server (loaders): use process.env from .env
  if (typeof process !== "undefined" && process.env.SPORTS_DB_BASE_URL) {
    return process.env.SPORTS_DB_BASE_URL;
  }
  // Client/build fallback: Vite only exposes VITE_* to import.meta.env
  return import.meta.env.VITE_SPORTS_DB_BASE_URL ?? "";
}

const TIMELINE_BASE_URL = "https://www.thesportsdb.com/api/v1/json/123";

function buildUrl(
  endpoint: string,
  params?: Record<string, string | number>,
  baseOverride?: string
) {
  const base = baseOverride ?? getBaseUrl();
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
  params?: Record<string, string | number>,
  baseOverride?: string
): Promise<T> {
  const url = buildUrl(endpoint, params, baseOverride);
  const res = await fetch(url);
  if (!res.ok) {
    throw new Response(`Sports DB API error: ${res.statusText}`, {
      status: res.status,
    });
  }
  return res.json();
}

// ─── Events ───────────────────────────────────────────────────────────────

/** Event details by ID (teams, score, date, status, badges) */
export async function getEventById(
  eventId: string
): Promise<SportsDbEvent | null> {
  const data = await fetchApi<SportsDbEventDetailResponse>(
    "lookupevent.php",
    { id: eventId },
    TIMELINE_BASE_URL
  );
  const events = data.events ?? [];
  return events[0] ?? null;
}

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

/** Event timeline (goals, cards, substitutions, etc.) for a match */
export async function getEventTimeline(eventId: string) {
  const data = await fetchApi<SportsDbTimelineResponse>(
    "lookuptimeline.php",
    { id: eventId },
    TIMELINE_BASE_URL
  );
  return data.timeline ?? [];
}
