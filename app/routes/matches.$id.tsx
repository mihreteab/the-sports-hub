import { useState } from "react";
import { Link } from "react-router";
import { getEventById, getEventTimeline } from "~/api/sportsdb";
import ArrowIcon from "~/components/atoms/ArrowIcon";
import { ROUTES } from "~/constants";
import MatchDetailsTab from "~/components/organisms/MatchDetailsTab";
import type { SportsDbTimelineItem } from "~/types/sportsdb";
import type { Route } from "./+types/matches.$id";

type MatchDetailTab =
  | "Details"
  | "Odds"
  | "Lineups"
  | "Events"
  | "Stats"
  | "Standings";

export function meta({ params }: { params: { id?: string } }) {
  return [
    { title: `Match ${params.id ?? ""} | The Sports Hub` },
    { name: "description", content: "Match detail" },
  ];
}

export async function loader({ params }: Route.LoaderArgs) {
  const eventId = params.id;
  const [event, timeline] = eventId
    ? await Promise.all([getEventById(eventId), getEventTimeline(eventId)])
    : [null, []];
  return { event, timeline };
}

const TABS: MatchDetailTab[] = [
  "Details",
  "Odds",
  "Lineups",
  "Events",
  "Stats",
  "Standings",
];

function formatMatchDate(dateStr: string): string {
  if (!dateStr) return "";
  const d = new Date(dateStr + "Z");
  const day = d.getUTCDate();
  const month = d.toLocaleString("en-GB", { month: "short" }).toUpperCase();
  return `${day} ${month}`;
}

function formatMatchStatus(status: string): string {
  if (status === "Match Finished") return "Finished";
  if (status === "Not Started") return "Not Started";
  if (status === "Match Postponed") return "Postponed";
  if (status === "Halftime") return "Halftime";
  if (/live|in play/i.test(status)) return "Live";
  return status || "—";
}

function TeamBadge({
  src,
  alt,
  size = 45,
}: {
  src?: string;
  alt: string;
  size?: number;
}) {
  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        width={size}
        height={size}
        className="object-contain"
        loading="lazy"
      />
    );
  }
  return (
    <div
      className="rounded-full bg-background-muted shrink-0"
      style={{ width: size, height: size }}
      aria-hidden
    />
  );
}

type CardCounts = { yellow: number; red: number };

function countCardsByTeam(timeline: SportsDbTimelineItem[]): {
  home: CardCounts;
  away: CardCounts;
} {
  const home: CardCounts = { yellow: 0, red: 0 };
  const away: CardCounts = { yellow: 0, red: 0 };
  const t = (item: SportsDbTimelineItem) =>
    item.strTimeline?.toLowerCase() ?? "";
  const d = (item: SportsDbTimelineItem) =>
    item.strTimelineDetail?.toLowerCase() ?? "";
  for (const item of timeline) {
    if (t(item) !== "card") continue;
    const isRed = d(item).includes("red");
    const isHome = item.strHome === "Yes";
    if (isHome) {
      if (isRed) home.red += 1;
      else home.yellow += 1;
    } else {
      if (isRed) away.red += 1;
      else away.yellow += 1;
    }
  }
  return { home, away };
}

export default function MatchDetail({ loaderData }: Route.ComponentProps) {
  const { event, timeline } = loaderData;
  const [activeTab, setActiveTab] = useState<MatchDetailTab>("Details");

  const isFinished = event?.strStatus === "Match Finished";
  const cards = countCardsByTeam(timeline);

  const homeScore = event?.intHomeScore ?? "—";
  const awayScore = event?.intAwayScore ?? "—";
  const scoreText =
    homeScore !== "—" && awayScore !== "—" ? `${homeScore}-${awayScore}` : "—";

  return (
    <div className="flex flex-col gap-4 md:p-4 md:container">
      <div className="flex flex-col gap-4 pt-2 bg-surface">
        <div className="flex gap-4 py-2 px-4">
          <Link to={ROUTES.MATCHES} aria-label="Back to matches">
            <ArrowIcon />
          </Link>
          <div className="text-[14px] leading-[20px] tracking-normal">
            {event?.strLeague ?? "—"}
          </div>
        </div>
        <div className="flex">
          <div className="relative flex-1 flex flex-col items-center">
            <div className="relative">
              <TeamBadge
                src={event?.strHomeTeamBadge}
                alt={event?.strHomeTeam ?? "Home"}
                size={45}
              />
            </div>
            <div className="text-[14px] leading-[20px] tracking-normal">
              {event?.strHomeTeam ?? "—"}
            </div>
            {isFinished && (cards.home.yellow > 0 || cards.home.red > 0) && (
              <div className="absolute top-0 right-[calc(50%-32px)] flex items-center gap-0.5">
                {cards.home.yellow > 0 && (
                  <div className="h-3 w-2.5 bg-yellow-500 text-black text-[10px] leading-[15px] tracking-normal flex items-center justify-center min-w-[14px] rounded">
                    {cards.home.yellow}
                  </div>
                )}
                {cards.home.red > 0 && (
                  <div className="h-3 w-2.5 bg-danger text-white text-[10px] leading-[15px] tracking-normal flex items-center justify-center min-w-[14px] rounded">
                    {cards.home.red}
                  </div>
                )}
              </div>
            )}
          </div>
          <div className="flex flex-col items-center gap-[2px] px-2">
            <div className="text-[11px] leading-[15px] tracking-normal">
              {event?.dateEvent ? formatMatchDate(event.dateEvent) : "—"}
            </div>
            <div className="font-semibold text-[22px] leading-[28px] tracking-normal">
              {scoreText}
            </div>
            <div className="bg-danger text-white text-[10px] leading-[15px] tracking-normal px-1 rounded-[4px]">
              {event?.strStatus ? formatMatchStatus(event.strStatus) : "—"}
            </div>
          </div>
          <div className="relative flex-1 flex flex-col items-center">
            <div className="relative">
              <TeamBadge
                src={event?.strAwayTeamBadge}
                alt={event?.strAwayTeam ?? "Away"}
                size={45}
              />
            </div>
            <div className="text-[14px] leading-[20px] tracking-normal">
              {event?.strAwayTeam ?? "—"}
            </div>
            {isFinished && (cards.away.yellow > 0 || cards.away.red > 0) && (
              <div className="absolute top-0 left-[calc(50%-32px)] flex items-center gap-0.5">
                {cards.away.yellow > 0 && (
                  <div className="h-3 w-2.5 bg-yellow-500 text-black text-[10px] leading-[15px] tracking-normal flex items-center justify-center min-w-[14px] rounded">
                    {cards.away.yellow}
                  </div>
                )}
                {cards.away.red > 0 && (
                  <div className="h-3 w-2.5 bg-danger text-white text-[10px] leading-[15px] tracking-normal flex items-center justify-center min-w-[14px] rounded">
                    {cards.away.red}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-center p-4 border-b border-b-base gap-1 md:gap-4 text-foreground-muted">
          {TABS.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`py-2 px-2 leading-5 text-[14px] tracking-normal border-b-2 transition-colors ${
                activeTab === tab
                  ? "border-b-secondary text-primary-foreground"
                  : "border-b-transparent hover:text-foreground-muted"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      {/* Match Details */}
      <div>
        {activeTab === "Details" && (
          <MatchDetailsTab timeline={timeline} event={event} />
        )}
        {activeTab === "Odds" && (
          <div className="space-y-4">
            <div className="text-foreground-muted text-[14px]">
              Odds content — coming soon.
            </div>
          </div>
        )}
        {activeTab === "Lineups" && (
          <div className="space-y-4">
            <div className="text-foreground-muted text-[14px]">
              Lineups content — coming soon.
            </div>
          </div>
        )}
        {activeTab === "Events" && (
          <div className="text-foreground-muted text-[14px]">
            Events content — coming soon.
          </div>
        )}
        {activeTab === "Stats" && (
          <div className="text-foreground-muted text-[14px]">
            Stats content — coming soon.
          </div>
        )}
        {activeTab === "Standings" && (
          <div className="text-foreground-muted text-[14px]">
            Standings content — coming soon.
          </div>
        )}
      </div>
    </div>
  );
}
