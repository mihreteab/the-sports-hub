import { Link } from "react-router";
import type { SportsDbEvent } from "~/types/sportsdb";
import CheckIcon from "../atoms/CheckIcon";
import OptionIcon from "../atoms/OptionIcon";

interface FixtureProps {
  event: SportsDbEvent;
}

function formatStatus(status: string): string {
  if (status === "Match Finished") return "FT";
  if (status === "Match Postponed") return "PP";
  if (status === "Not Started") return "NS";
  if (status === "Halftime") return "HT";
  return status;
}

function TeamBadge({ src, alt }: { src?: string; alt: string }) {
  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        className="w-6 h-6 object-contain shrink-0"
        loading="lazy"
      />
    );
  }
  return (
    <div
      className="w-6 h-6 rounded-full bg-background-muted flex-shrink-0"
      aria-hidden
    />
  );
}

const Fixture = ({ event }: FixtureProps) => {
  const hasScores = event.intHomeScore != null && event.intAwayScore != null;
  const isLive = event.strStatus?.toLowerCase().includes("live");
  const isFinished = event.strStatus === "Match Finished";

  return (
    <Link
      to={`/matches/${event.idEvent}`}
      className="flex py-2 cursor-pointer hover:opacity-90 transition-opacity"
    >
      <div
        className={`flex-1 flex items-center border-l-3 ${
          isFinished ? "border-danger " : "border-base"
        } ${isLive ? "bg-secondary-fade-left" : ""}`}
      >
        <div
          className={`flex items-center justify-center w-14 h-15 text-[12px] leading-[16px] tracking-normal ${
            isFinished ? "text-danger" : "text-foreground-muted"
          }`}
        >
          {formatStatus(event.strStatus || "")}
        </div>
        <div className="grow flex flex-col p-2 gap-2">
          <div className="flex items-center gap-2 text-[12px] leading-[16px] tracking-normal">
            <TeamBadge src={event.strHomeTeamBadge} alt={event.strHomeTeam} />
            <span className="truncate">{event.strHomeTeam}</span>
            {isLive ? (
              <div className="flex items-center gap-0.5 bg-background-muted rounded-full p-1 text-secondary text-[8px]">
                <CheckIcon /> <span>LIVE</span>
              </div>
            ) : null}
          </div>
          <div className="flex items-center gap-2 text-[12px] leading-[16px] tracking-normal">
            <TeamBadge src={event.strAwayTeamBadge} alt={event.strAwayTeam} />
            <span className="truncate">{event.strAwayTeam}</span>
          </div>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="flex gap-4">
          {hasScores ? (
            <>
              <div className="py-1 flex flex-col items-center">
                <div className="text-foreground-static">
                  {event.intHomeScore}
                </div>
                <div className="text-foreground-static">
                  {event.intAwayScore}
                </div>
              </div>
              <div className="py-1 flex flex-col items-center">
                <div>{event.intHomeScore}</div>
                <div>{event.intAwayScore}</div>
              </div>
            </>
          ) : (
            <div className="py-1 flex flex-col items-center justify-center text-foreground-muted text-[12px]">
              vs
            </div>
          )}
        </div>
        <div className="pl-2 flex items-center justify-center">
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
            aria-label="Options"
          >
            <OptionIcon />
          </button>
        </div>
      </div>
    </Link>
  );
};

export default Fixture;
