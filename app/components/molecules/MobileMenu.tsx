import MenuIcon from "~/components/atoms/MenuIcon";

const MobileMenu = ({
  drawerOpen,
  setDrawerOpen,
}: {
  drawerOpen: boolean;
  setDrawerOpen: (open: boolean) => void;
}) => {
  return (
    <button
      type="button"
      aria-label="Open menu"
      aria-expanded={drawerOpen}
      onClick={() => setDrawerOpen(true)}
      className="lg:hidden p-2 rounded-md dark:hover:bg-black/15"
    >
      <MenuIcon />
    </button>
  );
};

export default MobileMenu;
