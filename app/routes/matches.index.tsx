import CompetetionSection from "~/components/molecules/CompetetionSection";
import Tab from "~/components/molecules/Tab";
import DesktopDateSelector from "~/components/organisms/DesktopDateSelector";
import MobileDateSelector from "~/components/organisms/MobileDateSelector";
import { META } from "~/constants";

export function meta() {
  return [
    { title: META.MATCHES.title },
    { name: "description", content: META.MATCHES.description },
  ];
}

export default function MatchesIndex() {
  return (
    <div className="md:flex md:flex-col gap-4">
      <div className="md:hidden">
        <MobileDateSelector />
      </div>
      <div className="hidden md:flex flex-col gap-4">
        <div className="font-semibold text-[20px] leading-[26px] tracking-normal">
          Matches
        </div>
        <DesktopDateSelector />
      </div>
      <div className="flex flex-col gap-4 p-4 md:p-0">
        <Tab />
        <CompetetionSection />
        <CompetetionSection />
      </div>
    </div>
  );
}
