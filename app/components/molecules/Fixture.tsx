import { Link } from "react-router";
import ArsenalLogo from "../atoms/ArsenalLogo";
import CheckIcon from "../atoms/CheckIcon";
import OptionIcon from "../atoms/OptionIcon";
import ValenciaLogo from "../atoms/ValenciaLogo";

interface FixtureProps {
  id: string;
}

const Fixture = ({ id }: FixtureProps) => {
  return (
    <Link
      to={`/matches/${id}`}
      className="flex py-2 cursor-pointer hover:opacity-90 transition-opacity"
    >
      <div className="flex-1 flex items-center border-l-3 border-danger bg-secondary-fade-left">
        <div className="flex items-center justify-center w-14 h-15 text-danger text-[12px] leading-[16px] tracking-normal">
          FT
        </div>
        <div className="grow flex flex-col p-2 gap-2">
          <div className="flex items-center gap-2 text-[12px] leading-[16px] tracking-normal">
            <ArsenalLogo />
            <span>Arsenal</span>
            <div className="flex items-center gap-0.5 bg-background-muted rounded-full p-1 text-secondary text-[8px] ">
              <CheckIcon /> <span>AGG</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-[12px] leading-[16px] tracking-normal">
            <ValenciaLogo />
            <span>Valencia</span>
          </div>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="flex gap-4">
          <div className="py-1 flex flex-col items-center">
            <div className="text-foreground-static">[2]</div>
            <div className="text-foreground-static">[1]</div>
          </div>
          <div className="py-1 flex flex-col items-center">
            <div>1</div>
            <div>2</div>
          </div>
        </div>
        <div className="pl-2 flex items-center justify-center">
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
            aria-label="Options"
          >
            <OptionIcon />
          </button>
        </div>
      </div>
    </Link>
  );
};

export default Fixture;
