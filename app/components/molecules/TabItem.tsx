const TabItem = ({
  selected,
  icon,
  label,
  count,
  handleClick,
}: {
  selected: boolean;
  icon: React.ReactNode;
  label: string;
  count: number;
  handleClick: () => void;
}) => {
  return (
    <div className="flex items-center gap-4 text-foreground-muted">
      <button
        className={`flex gap-2 items-center border border-background-muted ${selected ? "bg-secondary" : "bg-background"} rounded-[8px] py-2 px-3`}
        onClick={handleClick}
      >
        <div
          className={`flex items-center gap-2 h-5 font-medium text-[14px] leading-[20px] tracking-normal ${selected && "text-surface"}`}
        >
          {icon}
          <span>{label}</span>
        </div>
        <span
          className={`bg-background rounded-full w-4 h-4 flex items-center justify-center font-semibold text-[12px] leading-[16px] tracking-normal ${selected && "text-secondary"}`}
        >
          {count}
        </span>
      </button>
    </div>
  );
};

export default TabItem;
