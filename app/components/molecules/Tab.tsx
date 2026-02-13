import LiveIcon from "../atoms/LiveIcon";
import TabItem from "./TabItem";
import FavoriteIcon from "../atoms/FavoriteIcon";
import { useState } from "react";

const Tab = () => {
  const [selected, setSelected] = useState("All");
  const tabs = [
    {
      label: "All",
      count: 6,
      value: "All",
    },
    {
      icon: <LiveIcon />,
      label: "Live",
      count: 4,
      value: "Live",
    },
    {
      icon: <FavoriteIcon />,
      label: "Favorite",
      count: 2,
      value: "Favorite",
    },
  ];
  return (
    <div className="flex gap-4 p-4 md:p-0">
      {tabs.map(({ icon, label, count, value }) => (
        <TabItem
          key={value}
          selected={selected === value}
          icon={icon}
          label={label}
          count={count}
          handleClick={() => setSelected(value)}
        />
      ))}
    </div>
  );
};

export default Tab;
