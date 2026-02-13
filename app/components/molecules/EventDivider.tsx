const EventDivider = ({ text, score }: { text: string; score?: string }) => {
  return (
    <div className="flex items-center gap-2.5">
      <div className="h-px w-full bg-base"></div>
      <div className="flex flex-1 gap-2.5 items-center justify-center text-[12px] leading-[16px] tracking-normal text-foreground-subtle">
        <div className="text-nowrap">{text}</div>
        {score && <div className="flex-1 text-nowrap">{score}</div>}
      </div>
      <div className="h-px w-full bg-base"></div>
    </div>
  );
};

export default EventDivider;
