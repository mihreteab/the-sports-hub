import ChevronDownIcon from "../atoms/ChevronDownIcon";

const LeagueDropdown = () => {
  return (
    <div className="relative">
      <select
        name="league"
        id="league"
        className="rounded-full bg-onSurface/15 py-1 px-2 appearance-none outline-none md:h-10 md:py-2 md:px-4 md:pr-6 w-10 lg:w-auto"
        defaultValue="Premier League"
      >
        <option value="1">Premier League</option>
        <option value="2">La Liga</option>
        <option value="3">Bundesliga</option>
        <option value="4">Serie A</option>
        <option value="5">Ligue 1</option>
        <option value="6">Eredivisie</option>
        <option value="7">Scottish Premiership</option>
        <option value="8">Scottish Championship</option>
        <option value="9">Scottish League One</option>
        <option value="10">Scottish League Two</option>
        <option value="11">Scottish League Three</option>
        <option value="12">Scottish League Four</option>
      </select>
      <span className="hidden lg:flex absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
        <ChevronDownIcon />
      </span>
    </div>
  );
};

export default LeagueDropdown;
