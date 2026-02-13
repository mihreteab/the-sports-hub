import { useState } from "react";
import NavLinks from "../molecules/NavLinks";
import MobileMenu from "../molecules/MobileMenu";
import MobileDrawer from "../molecules/MobileDrawer";
import LogoMobile from "../atoms/LogoMobile";
import LogoDesktop from "../atoms/LogoDesktop";
import FilterChips from "../molecules/FilterChips";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <header className="font-poppins">
      <nav className="sticky top-0 z-40 h-14 md:h-15 flex">
        <div className="px-4 h-full bg-primary w-full">
          <div className="flex items-center justify-between h-full">
            <div className="md:hidden">
              <LogoMobile />
            </div>

            <div className="hidden md:block">
              <LogoDesktop />
            </div>
            <div className="hidden lg:block">
              <NavLinks className="flex gap-1" />
            </div>
            <div className="flex items-center gap-2 md:gap-4">
              <FilterChips />
              <MobileMenu
                drawerOpen={drawerOpen}
                setDrawerOpen={setDrawerOpen}
              />
            </div>
          </div>
        </div>
      </nav>
      <MobileDrawer drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
    </header>
  );
};

export default Header;
