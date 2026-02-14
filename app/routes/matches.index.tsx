import { getLeagueNextEvents } from "~/api/sportsdb";
import CompetetionSection from "~/components/molecules/CompetetionSection";
import Tab from "~/components/molecules/Tab";
import DesktopDateSelector from "~/components/organisms/DesktopDateSelector";
import MobileDateSelector from "~/components/organisms/MobileDateSelector";
import { META } from "~/constants";
import type { SportsDbEvent } from "~/types/sportsdb";
import type { Route } from "./+types/matches.index";

const DEFAULT_LEAGUE_ID = 4328;

export function meta() {
  return [
    { title: META.MATCHES.title },
    { name: "description", content: META.MATCHES.description },
  ];
}

export async function loader({}: Route.LoaderArgs) {
  const leagueId = import.meta.env.VITE_SPORTS_DB_DEFAULT_LEAGUE_ID
    ? Number(import.meta.env.VITE_SPORTS_DB_DEFAULT_LEAGUE_ID)
    : DEFAULT_LEAGUE_ID;
  const events = await getLeagueNextEvents(leagueId);
  return { events };
}

function groupEventsByLeague(events: SportsDbEvent[]) {
  const grouped = new Map<string, SportsDbEvent[]>();
  for (const event of events) {
    const league = event.strLeague || "Other";
    if (!grouped.has(league)) {
      grouped.set(league, []);
    }
    grouped.get(league)!.push(event);
  }
  return Array.from(grouped.entries()).map(([league, leagueEvents]) => ({
    league,
    badge: leagueEvents[0]?.strLeagueBadge,
    events: leagueEvents,
  }));
}

export default function MatchesIndex({ loaderData }: Route.ComponentProps) {
  const { events } = loaderData;
  const leagueSections = groupEventsByLeague(events);

  return (
    <div className="md:flex md:flex-col gap-4">
      <div className="md:hidden">
        <MobileDateSelector />
      </div>
      <div className="hidden md:flex flex-col gap-4">
        <div className="font-semibold text-[20px] leading-[26px] tracking-normal">
          Matches
        </div>
        <DesktopDateSelector />
      </div>
      <div className="flex flex-col gap-4 p-4 md:p-0">
        <Tab />
        {leagueSections.length > 0 ? (
          leagueSections.map(({ league, events: leagueEvents }) => (
            <CompetetionSection
              key={league}
              league={league}
              events={leagueEvents}
            />
          ))
        ) : (
          <div className="p-4 text-foreground-muted text-[14px]">
            No matches scheduled.
          </div>
        )}
      </div>
    </div>
  );
}
