import ChevronIcon from "../atoms/ChevronIcon";
import Fixtures from "./Fixtures";

const CompetetionSection = () => {
  return (
    <div className="flex flex-col gap-2 p-4 rounded-[8px] bg-surface">
      <div className="flex justify-between">
        <div className="text-[14px] leading-[20px] tracking-normal">
          UEFA Champions League
        </div>
        <button className="rotate-180">
          <ChevronIcon />
        </button>
      </div>
      <Fixtures />
    </div>
  );
};

export default CompetetionSection;
