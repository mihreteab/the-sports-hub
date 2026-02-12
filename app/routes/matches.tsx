import DesktopDateSelector from "~/components/organisms/DesktopDateSelector";
import MobileDateSelector from "~/components/organisms/MobileDateSelector";
import { META } from "~/constants";

export function meta() {
  return [
    { title: META.MATCHES.title },
    { name: "description", content: META.MATCHES.description },
  ];
}

export default function Matches() {
  return (
    <div>
      <div className="md:hidden">
        <MobileDateSelector />
      </div>
      <div className="hidden md:flex flex-col gap-4">
        <div className="font-semibold text-[20px] leading-[26px] tracking-normal">
          Matches
        </div>
        <DesktopDateSelector />
      </div>
    </div>
  );
}
