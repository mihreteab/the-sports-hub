import EventItem from "../molecules/EventItem";
import type { EventItem as EventItemType } from "~/types";

const EventList = ({ events }: { events: EventItemType[] }) => {
  return (
    <div className="flex flex-col gap-2">
      {events.map((event) => (
        <EventItem
          key={event.id}
          type={event.type}
          showHomeTeam={event.showHomeTeam}
          showAwayTeam={event.showAwayTeam}
          timestamp={event.timestamp}
          primaryPlayer={event.primaryPlayer}
          secondaryPlayer={event.secondaryPlayer}
        />
      ))}
    </div>
  );
};

export default EventList;
