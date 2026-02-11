import { NavLink } from "react-router";
import { ROUTES } from "~/constants";

const navLinks = [
  { to: ROUTES.LIVE, label: "Live" },
  { to: ROUTES.MATCHES, label: "Matches" },
  { to: ROUTES.STANDINGS, label: "Standings" },
  { to: ROUTES.TEAMS, label: "Teams" },
  { to: ROUTES.COMPARISON, label: "Comparison" },
  { to: ROUTES.STATISTICS, label: "Statistics" },
  { to: ROUTES.VENUES, label: "Venues" },
];

const NavLinks = ({
  onNavigate,
  className = "",
}: {
  onNavigate?: () => void;
  className?: string;
}) => {
  return (
    <ul className={className}>
      {navLinks.map(({ to, label }) => (
        <li key={to}>
          <NavLink
            to={to}
            end={to === ROUTES.LIVE}
            onClick={onNavigate}
            className={({ isActive }) =>
              `block p-2 font-normal text-[18px] leading-[150%] tracking-normal transition-colors h-[43px] ${
                isActive ? "text-secondary border-b-2" : ""
              }`
            }
          >
            {label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
