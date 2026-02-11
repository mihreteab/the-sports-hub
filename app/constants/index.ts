/**
 * App name used in meta titles and UI.
 */
export const APP_NAME = "StatScore";

/**
 * Centralized route paths. Use these instead of string literals for navigation,
 * redirects, and route comparisons.
 */
export const ROUTES = {
  LIVE: "/",
  MATCHES: "/matches",
  STANDINGS: "/standings",
  TEAMS: "/teams",
  COMPARISON: "/comparison",
  STATISTICS: "/statistics",
  VENUES: "/venues",
} as const;

export type RoutePath = (typeof ROUTES)[keyof typeof ROUTES];

/**
 * Meta (title, description) per route for use in route meta() exports.
 * Keeps document titles and descriptions in one place.
 */
export const META = {
  LIVE: {
    title: `Live | ${APP_NAME}`,
    description: "Live scores and updates",
  },
  MATCHES: {
    title: `Matches | ${APP_NAME}`,
    description: "Matches and fixtures",
  },
  STANDINGS: {
    title: `Standings | ${APP_NAME}`,
    description: "League standings",
  },
  TEAMS: {
    title: `Teams | ${APP_NAME}`,
    description: "Teams",
  },
  COMPARISON: {
    title: `Comparison | ${APP_NAME}`,
    description: "Compare teams or players",
  },
  STATISTICS: {
    title: `Statistics | ${APP_NAME}`,
    description: "Statistics",
  },
  VENUES: {
    title: `Venues | ${APP_NAME}`,
    description: "Venues and stadiums",
  },
} as const;

/**
 * API base URL and endpoint paths. Extend as you add backend integration.
 * Set VITE_API_BASE in .env for production API URL.
 */
const API_BASE = import.meta.env?.VITE_API_BASE ?? "";

export const API = {
  BASE: API_BASE,
  // Add endpoints as you implement features, e.g.:
  // MATCHES: `${API_BASE}/api/matches`,
  // STANDINGS: `${API_BASE}/api/standings`,
  // TEAMS: `${API_BASE}/api/teams`,
} as const;
