import type { EventItem as EventItemType } from "~/types";
import EventDivider from "../molecules/EventDivider";
import EventList from "./EventList";

const MatchDetailsTab = () => {
  const events: EventItemType[] = [
    {
      id: 1,
      type: "yellow-card",
      showHomeTeam: true,
      showAwayTeam: false,
      timestamp: "89'",
      primaryPlayer: "Ekitike",
      secondaryPlayer: "Sallah",
    },
    {
      id: 2,
      type: "goal",
      showHomeTeam: false,
      showAwayTeam: true,
      timestamp: "89'",
      primaryPlayer: "Sallah",
      secondaryPlayer: "Ekitike",
    },
  ];
  const halftimeEvents: EventItemType[] = [
    {
      id: 1,
      type: "red-card",
      showHomeTeam: false,
      showAwayTeam: true,
      timestamp: "45'",
      primaryPlayer: "Sallah",
      secondaryPlayer: "Ekitike",
    },
    {
      id: 2,
      type: "exchange",
      showHomeTeam: true,
      showAwayTeam: false,
      timestamp: "45'",
      primaryPlayer: "Ekitike",
      secondaryPlayer: "Sallah",
    },
    {
      id: 3,
      type: "offthepost",
      showHomeTeam: false,
      showAwayTeam: true,
      timestamp: "45'",
      primaryPlayer: "Sallah",
      secondaryPlayer: "Ekitike",
    },
    {
      id: 4,
      type: "corner",
      showHomeTeam: true,
      showAwayTeam: false,
      timestamp: "45'",
      primaryPlayer: "Ekitike",
      secondaryPlayer: "Sallah",
    },
    {
      id: 5,
      type: "goal",
      showHomeTeam: false,
      showAwayTeam: true,
      timestamp: "45'",
      primaryPlayer: "Sallah",
      secondaryPlayer: "Ekitike",
    },
  ];

  return (
    <div className="px-4 md:p-0">
      <div className="flex flex-col gap-4 bg-surface rounded-[8px] p-4">
        {/* Header */}
        <div className="font-medium text-[14px] leading-[20px] tracking-normal">
          Events
        </div>

        {/* Details */}
        <div className="flex flex-col gap-4">
          {/* Event Divider */}
          <EventDivider text="Fulltime" score="2 - 1" />
          {/* Event List */}
          <EventList events={events} />
          <EventDivider text="Halftime" score="2 - 1" />
          <EventList events={halftimeEvents} />
          <EventDivider text="Kick-off" /> {/* Kick-off */}
        </div>
      </div>
    </div>
  );
};

export default MatchDetailsTab;
