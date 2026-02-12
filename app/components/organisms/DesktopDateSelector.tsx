import CalendarIconLarge from "../atoms/CalendarIconLarge";
import ChevronIcon from "../atoms/ChevronIcon";

const DesktopDateSelector = () => {
  return (
    <div className="bg-surface rounded-[8px] py-2 px-4 flex gap-6 justify-between items-center">
      <button className="p-[7px] h-[34px] w-[34px] flex items-center justify-center">
        <ChevronIcon />
      </button>
      <button className="flex-1 flex items-center justify-center h-10">
        <div className="p-2 flex gap-[10px] items-center justify-center">
          <CalendarIconLarge />
          <span className="font-semibold text-[14px] leading-[20px] tracking-normal">
            Today
          </span>
        </div>
      </button>
      <button className="p-[7px] h-[34px] w-[34px] flex items-center justify-center rotate-180">
        <ChevronIcon />
      </button>
    </div>
  );
};

export default DesktopDateSelector;
