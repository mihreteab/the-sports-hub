import { useState } from "react";
import ArrowIcon from "~/components/atoms/ArrowIcon";
import ArsenalLogo from "~/components/atoms/ArsenalLogo";
import MatchDetailsTab from "~/components/organisms/MatchDetailsTab";

type MatchDetailTab =
  | "Details"
  | "Odds"
  | "Lineups"
  | "Events"
  | "Stats"
  | "Standings";

export function meta({ params }: { params: { id?: string } }) {
  return [
    { title: `Match ${params.id ?? ""} | The Sports Hub` },
    { name: "description", content: "Match detail" },
  ];
}

const TABS: MatchDetailTab[] = [
  "Details",
  "Odds",
  "Lineups",
  "Events",
  "Stats",
  "Standings",
];

export default function MatchDetail() {
  // const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState<MatchDetailTab>("Details");

  return (
    <div className="flex flex-col gap-4 md:p-4 md:container">
      <div className="flex flex-col gap-4 pt-2 bg-surface">
        <div className="flex gap-4 py-2 px-4">
          <button>
            <ArrowIcon />
          </button>
          <div className="text-[14px] leading-[20px] tracking-normal">
            English Premier league
          </div>
        </div>
        <div className="flex">
          <div className="relative flex-1 flex flex-col items-center">
            <div>
              <ArsenalLogo width={45} height={45} />
            </div>
            <div className="text-[14px] leading-[20px] tracking-normal">
              Arsenal
            </div>
            <div className="absolute top-0 right-[calc(50%-32px)]">
              <div className="h-3 w-2.5 bg-danger text-[10px] leading-[15px] tracking-normal flex items-center justify-center">
                2
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-[2px] px-2">
            <div className="text-[11px] leading-[15px] tracking-normal">
              11 AUG
            </div>
            <div className="font-semibold text-[22px] leading-[28px] tracking-normal">
              2-1
            </div>
            <div className="bg-danger text-white text-[10px] leading-[15px] tracking-normal px-1 rounded-[4px]">
              Finished
            </div>
          </div>
          <div className="relative flex-1 flex flex-col items-center">
            <div>
              <ArsenalLogo width={45} height={45} />
            </div>
            <div className="text-[14px] leading-[20px] tracking-normal">
              Arsenal
            </div>
            <div className="absolute top-0 left-[calc(50%-32px)]">
              <div className="h-3 w-2.5 bg-danger text-[10px] leading-[15px] tracking-normal flex items-center justify-center">
                2
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center p-4 border-b border-b-base gap-1 md:gap-4 text-foreground-muted">
          {TABS.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`py-2 px-2 leading-5 text-[14px] tracking-normal border-b-2 transition-colors ${
                activeTab === tab
                  ? "border-b-secondary text-primary-foreground"
                  : "border-b-transparent hover:text-foreground-muted"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      {/* Match Details */}
      <div>
        {activeTab === "Details" && <MatchDetailsTab />}
        {activeTab === "Odds" && (
          <div className="space-y-4">
            <div className="text-foreground-muted text-[14px]">
              Odds content — coming soon.
            </div>
          </div>
        )}
        {activeTab === "Lineups" && (
          <div className="space-y-4">
            <div className="text-foreground-muted text-[14px]">
              Lineups content — coming soon.
            </div>
          </div>
        )}
        {activeTab === "Events" && (
          <div className="text-foreground-muted text-[14px]">
            Events content — coming soon.
          </div>
        )}
        {activeTab === "Stats" && (
          <div className="text-foreground-muted text-[14px]">
            Stats content — coming soon.
          </div>
        )}
        {activeTab === "Standings" && (
          <div className="text-foreground-muted text-[14px]">
            Standings content — coming soon.
          </div>
        )}
      </div>
    </div>
  );
}
