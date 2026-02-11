import { useState } from "react";
import { APP_NAME } from "~/constants";
import NavLinks from "../molecules/NavLinks";
import MobileMenu from "../molecules/MobileMenu";
import MobileDrawer from "../molecules/MobileDrawer";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <header>
      <nav className="bg-primary sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            <span className="font-semibold text-lg text-primary-foreground">
              {APP_NAME}
            </span>

            {/* Desktop nav */}
            <div className="hidden md:block">
              <NavLinks className="flex gap-1" />
            </div>

            {/* Mobile: menu button top right */}
            <MobileMenu drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
          </div>
        </div>
      </nav>
      <MobileDrawer drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
    </header>
  );
};

export default Header;
