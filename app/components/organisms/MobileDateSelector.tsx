import CalendarIcon from "../atoms/CalendarIcon";
import DateChip from "../molecules/DateChip";

const MobileDateSelector = () => {
  return (
    <div className="relative flex gap-2 py-4 justify-center items-center">
      <div className="flex gap-2 shrink-0">
        <DateChip date="THU 01 JUL" />
        <DateChip date="FRI 02 JUL" />
        <DateChip date="SAT 03 JUL" />
      </div>
      <div className="text-secondary shrink-0">
        <DateChip date="Today 04 JUL" />
      </div>
      <div className="flex gap-2 shrink-0">
        <DateChip date="MON 05 JUL" />
        <DateChip date="TUE 06 JUL" />
        <DateChip date="WED 07 JUL" />
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-linear-to-r from-background via-transparent to-background">
        <div className="absolute top-1/2 -translate-y-1/2 h-10 w-10 flex items-center justify-center bg-[#24252F] rounded-full right-2 p-2">
          <CalendarIcon />
        </div>
      </div>
    </div>
  );
};

export default MobileDateSelector;
