/**
 * The Sports DB API types
 * @see https://www.thesportsdb.com/api.php
 */

export interface SportsDbEvent {
  idEvent: string;
  strEvent: string;
  strHomeTeam: string;
  strAwayTeam: string;
  intHomeScore: string | null;
  intAwayScore: string | null;
  strStatus: string;
  strLeague: string;
  strLeagueBadge?: string;
  strHomeTeamBadge?: string;
  strAwayTeamBadge?: string;
  dateEvent: string;
  strTime: string;
  strVenue?: string;
  strPostponed?: string;
}

export interface SportsDbLeagueEventsResponse {
  events: SportsDbEvent[] | null;
}

export interface SportsDbEventDetailResponse {
  events: SportsDbEvent[] | null;
}

export interface SportsDbLeagueTableRow {
  [key: string]: string | number | undefined;
}

export interface SportsDbLeagueTableResponse {
  table: SportsDbLeagueTableRow[] | null;
}

export interface SportsDbLeagueDetailResponse {
  leagues: unknown[] | null;
}

export interface SportsDbTeamDetailResponse {
  teams: unknown[] | null;
}
