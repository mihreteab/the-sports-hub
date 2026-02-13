import BallIcon from "../atoms/BallIcon";
import CornerIcon from "../atoms/CornerIcon";
import ExchangeIcon from "../atoms/ExchangeIcon";
import OffThePostIcon from "../atoms/OffThePostIcon";
import InjredIcon from "../atoms/InjredIcon";
import type { EventItem as EventItemType } from "~/types";

type EventItemProps = Pick<
  EventItemType,
  | "showHomeTeam"
  | "showAwayTeam"
  | "type"
  | "timestamp"
  | "primaryPlayer"
  | "secondaryPlayer"
>;

const EventItem = ({
  showHomeTeam,
  showAwayTeam,
  type,
  timestamp = "89'",
  primaryPlayer = "Ekitike",
  secondaryPlayer = "Sallah",
}: EventItemProps) => {
  const icon = () => {
    switch (type) {
      case "goal":
        return <BallIcon />;
      case "exchange":
        return <ExchangeIcon />;
      case "corner":
        return <CornerIcon />;
      case "yellow-card":
        return <div className="w-3 h-3 bg-[#E7D93F]"></div>;
      case "red-card":
        return <div className="w-3 h-3 bg-[#EE5E52]"></div>;
      case "offthepost":
        return <OffThePostIcon />;
      case "enjured":
        return <InjredIcon />;
    }
  };
  return (
    <div className="flex items-center gap-1">
      {/* home team */}
      <div className="flex-1">
        {showHomeTeam && (
          <div className="flex items-center gap-1 justify-end">
            <div className="flex-1 flex gap-2.5 items-center justify-end">
              <div>
                <div className="text-[12px] leading-[16px] tracking-normal">
                  {primaryPlayer}
                </div>
                <div className="text-[12px] leading-[16px] tracking-normal text-foreground-subtle-static">
                  {secondaryPlayer}
                </div>
              </div>
              <div>{icon()}</div>
            </div>
            <div className="w-4 h-px bg-background-muted"></div>
          </div>
        )}
      </div>
      {/* timestamp badge */}
      <div className="w-[48px] flex items-center justify-center bg-background-muted rounded-full px-2 py-0.5 text-[11px] leading-[15px] tracking-normal">
        {timestamp}
      </div>
      {/* away team */}
      <div className="flex-1">
        {showAwayTeam && (
          <div className="flex gap-1 items-center">
            <div className="w-4 h-px bg-background-muted"></div>
            <div className="flex-1 flex gap-2.5 items-center">
              <div>{icon()}</div>
              <div>
                <div className="text-[12px] leading-[16px] tracking-normal">
                  {primaryPlayer}
                </div>
                <div className="text-[12px] leading-[16px] tracking-normal text-foreground-subtle-static">
                  {secondaryPlayer}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventItem;
