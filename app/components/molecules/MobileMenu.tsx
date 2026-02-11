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
      className="md:hidden p-2 rounded-md text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
    >
      <MenuIcon />
    </button>
  );
};

export default MobileMenu;
