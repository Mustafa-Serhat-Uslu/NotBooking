import MobileMenu from "./components/MobileMenu/MobileMenu";
import LargeScreenMenu from "./components/LargeScreenMenu/LargeScreenMenu";
import LogoLink from "./components/LogoLink";

function Header() {
  return (
    <header className="bg-[#013B94]">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <LogoLink />

        <LargeScreenMenu />

        <MobileMenu />
      </nav>
    </header>
  );
}

export default Header;
