import CloseButton from "./CloseButton";
import NavLinks from "./NavLinks";

const MobileDrawer = ({
  drawerOpen,
  setDrawerOpen,
}: {
  drawerOpen: boolean;
  setDrawerOpen: (open: boolean) => void;
}) => {
  return (
    <>
      {/* Mobile drawer overlay */}
      {drawerOpen && (
        <div
          role="presentation"
          className="lg:hidden fixed inset-0 z-50 transition-opacity"
          onClick={() => setDrawerOpen(false)}
          aria-hidden
        />
      )}

      {/* Mobile drawer panel (top right area: button is top right, drawer slides from right) */}
      <div
        className={`lg:hidden fixed top-0 right-0 z-50 h-full w-[min(18rem,85vw)] bg-white dark:bg-gray-950 border-l border-gray-200 dark:border-gray-800 shadow-xl transition-transform duration-200 ease-out ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-modal="true"
        aria-label="Navigation menu"
        hidden={!drawerOpen}
      >
        <div className="flex items-center justify-between h-14 px-4 border-b border-gray-200 dark:border-gray-800">
          <span className="font-semibold text-gray-900 dark:text-gray-100">
            Menu
          </span>
          <CloseButton setDrawerOpen={setDrawerOpen} />
        </div>
        <div className="p-4">
          <NavLinks
            className="flex flex-col gap-1"
            onNavigate={() => setDrawerOpen(false)}
          />
        </div>
      </div>
    </>
  );
};

export default MobileDrawer;
