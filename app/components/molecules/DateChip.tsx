const DateChip = ({ date }: { date: string }) => {
  const [dayOfWeek, day, month] = date.split(" ");
  return (
    <div className="shrink-0 flex flex-col items-center justify-center py-1 px-2 h-[39px]">
      <div className="text-[12px] leading-4 tracking-normal">{dayOfWeek}</div>
      <div className="text-[10px] leading-[15px] tracking-normal">
        {day} {month}
      </div>
    </div>
  );
};

export default DateChip;
