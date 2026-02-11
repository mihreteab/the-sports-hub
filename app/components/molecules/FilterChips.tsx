import FootballIcon from "../atoms/FootballIcon";
import UkFlagIcon from "../atoms/UkFlagIcon";
import WorldIcon from "../atoms/WorldIcon";
import YearDropdown from "./YearDropdown";
import LeagueDropdown from "./LeagueDropdown";

const FilterChips = () => {
  return (
    <div className="flex items-center gap-2 md:gap-4 h-8 md:h-10">
      <div className="flex items-center gap-2 md:flex-row-reverse">
        <button className="flex-1 flex items-center justify-center p-1 md:p-2 rounded-full bg-onSurface/15 h-6 w-6 md:h-10 md:w-10">
          <FootballIcon className="w-4 h-4 md:w-6 md:h-6" />
        </button>
        <button className="flex-1 flex items-center justify-center p-1 md:p-2 rounded-full bg-onSurface/15 h-6 w-6 md:h-10 md:w-10">
          <WorldIcon className="w-4 h-4 md:w-6 md:h-6" />
        </button>
      </div>
      <button className="flex-1 flex items-center justify-center p-1 md:p-2 rounded-full bg-onSurface/15 h-6 w-6 md:h-10 md:w-10">
        <UkFlagIcon className="w-4 h-4 md:w-6 md:h-6" />
      </button>

      {/* Year selector dropdown */}
      <div className="hidden md:block">
        <LeagueDropdown />
      </div>
      <YearDropdown />
      <button className="hidden md:flex flex-1 items-center justify-center p-1 md:p-2 rounded-full bg-onSurface/15 h-6 w-6 md:h-10 md:w-10">
        <UkFlagIcon className="w-4 h-4 md:w-6 md:h-6" />
      </button>
    </div>
  );
};

export default FilterChips;
