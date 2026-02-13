export type EventType =
  | "goal"
  | "yellow-card"
  | "red-card"
  | "offthepost"
  | "exchange"
  | "corner"
  | "enjured";

export type EventItem = {
  id: string | number;
  type: EventType;
  showHomeTeam: boolean;
  showAwayTeam: boolean;
  timestamp?: string;
  primaryPlayer?: string;
  secondaryPlayer?: string;
};
