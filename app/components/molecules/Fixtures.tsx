import type { SportsDbEvent } from "~/types/sportsdb";
import Fixture from "./Fixture";

interface FixturesProps {
  events: SportsDbEvent[];
}

const Fixtures = ({ events }: FixturesProps) => {
  return (
    <div className="flex flex-col">
      {events.map((event) => (
        <Fixture key={event.idEvent} event={event} />
      ))}
    </div>
  );
};

export default Fixtures;
