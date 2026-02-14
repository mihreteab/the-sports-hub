import type { SportsDbEvent } from "~/types/sportsdb";
import ChevronIcon from "../atoms/ChevronIcon";
import Fixtures from "./Fixtures";

interface CompetetionSectionProps {
  league: string;
  events: SportsDbEvent[];
}

const CompetetionSection = ({ league, events }: CompetetionSectionProps) => {
  return (
    <div className="flex flex-col gap-2 p-4 rounded-[8px] bg-surface">
      <div className="flex justify-between items-center gap-2">
        <span className="text-[14px] leading-[20px] tracking-normal truncate">
          {league}
        </span>
        <button className="rotate-180 shrink-0" type="button">
          <ChevronIcon />
        </button>
      </div>
      <Fixtures events={events} />
    </div>
  );
};

export default CompetetionSection;
