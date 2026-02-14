import type { EventItem as EventItemType, EventType } from "~/types";
import type { SportsDbEvent, SportsDbTimelineItem } from "~/types/sportsdb";
import EventDivider from "../molecules/EventDivider";
import EventList from "./EventList";

function formatKickOffTime(strTime: string | undefined): string {
  if (!strTime) return "Kick-off";
  // strTime can be "17:00:00" or "19:30:00" - extract HH:mm
  const match = strTime.match(/^(\d{1,2}:\d{2})/);
  return match ? `Kick-off: ${match[1]}` : "Kick-off";
}

function computeHalftimeScore(timeline: SportsDbTimelineItem[]): string {
  let home = 0;
  let away = 0;
  const sorted = [...timeline].sort(
    (a, b) => Number(a.intTime ?? 0) - Number(b.intTime ?? 0)
  );
  for (const item of sorted) {
    if (Number(item.intTime ?? 0) > 45) break;
    if (item.strTimeline?.toLowerCase() !== "goal") continue;
    if (item.strHome === "Yes") home += 1;
    else away += 1;
  }
  return `${home}-${away}`;
}

function mapTimelineToEventType(item: SportsDbTimelineItem): EventType {
  const t = item.strTimeline?.toLowerCase() ?? "";
  const detail = item.strTimelineDetail?.toLowerCase() ?? "";
  if (t === "card") {
    if (detail.includes("red")) return "red-card";
    return "yellow-card";
  }
  if (t === "subst") return "exchange";
  if (t === "goal") return "goal";
  if (t === "corner") return "corner";
  return "exchange";
}

function mapTimelineToEventItem(item: SportsDbTimelineItem): EventItemType {
  const time = item.intTime ?? "0";
  const isHome = item.strHome === "Yes";
  return {
    id: item.idTimeline,
    type: mapTimelineToEventType(item),
    showHomeTeam: isHome,
    showAwayTeam: !isHome,
    timestamp: `${time}'`,
    primaryPlayer: item.strPlayer ?? "",
    secondaryPlayer: item.strAssist ?? "",
  };
}

interface MatchDetailsTabProps {
  timeline: SportsDbTimelineItem[];
  event?: SportsDbEvent | null;
}

const MatchDetailsTab = ({ timeline, event }: MatchDetailsTabProps) => {
  const sorted = [...timeline].sort(
    (a, b) => Number(a.intTime ?? 0) - Number(b.intTime ?? 0)
  );
  const secondHalf = sorted.filter((t) => Number(t.intTime ?? 0) > 45);
  const firstHalf = sorted.filter((t) => Number(t.intTime ?? 0) <= 45);
  const secondHalfEvents = [...secondHalf]
    .reverse()
    .map(mapTimelineToEventItem);
  const firstHalfEvents = [...firstHalf].reverse().map(mapTimelineToEventItem);

  const kickOffText = formatKickOffTime(event?.strTime);
  const halftimeScore = computeHalftimeScore(timeline);
  const fulltimeScore =
    event?.intHomeScore != null && event?.intAwayScore != null
      ? `${event.intHomeScore}-${event.intAwayScore}`
      : "";

  return (
    <div className="px-4 md:p-0">
      <div className="flex flex-col gap-4 bg-surface rounded-[8px] p-4">
        {/* Header */}
        <div className="font-medium text-[14px] leading-[20px] tracking-normal">
          Events
        </div>

        {/* Details */}
        <div className="flex flex-col gap-4">
          {sorted.length > 0 ? (
            <>
              <EventDivider
                text={fulltimeScore ? `Fulltime ${fulltimeScore}` : "Fulltime"}
              />
              <EventList events={secondHalfEvents} />
              <EventDivider
                text={
                  halftimeScore ? `Halftime'  ${halftimeScore}` : "Halftime"
                }
              />
              <EventList events={firstHalfEvents} />
              <EventDivider text={kickOffText} />
            </>
          ) : (
            <div className="text-foreground-muted text-[14px] py-4">
              No events for this match.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MatchDetailsTab;
