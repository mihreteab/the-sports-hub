import ChevronDownIcon from "../atoms/ChevronDownIcon";

const YearDropdown = () => {
  const currentYear = new Date().getFullYear();
  const yearOptions = Array.from({ length: 6 }, (_, i) => currentYear - i);

  return (
    <div className="relative">
      <select className="rounded-full bg-onSurface/15 py-1 pl-4 pr-8 appearance-none md:h-10 outline-none">
        {yearOptions.map((year) => (
          <option key={year} value={year}>
            {`2024/25`}
          </option>
        ))}
      </select>
      <span className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
        <ChevronDownIcon />
      </span>
    </div>
  );
};

export default YearDropdown;
