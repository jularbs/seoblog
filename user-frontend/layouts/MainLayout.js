import TopBar from "../components/TopBar";
import MainMenuThree from "../components/MainMenuThree";
import MainMenu from "../components/MainMenu/newindex";
import MobileMenu from "../components/aarhcomponents/MobileMenu/MobileMenu";
import MobileNav from "../components/aarhcomponents/MobileNav/MobileNav";
const MainLayout = ({ children }) => {
  return (
    <>
      <div className="theme-4">
        <TopBar />
        <MobileMenu />
        {/* <MobileNav /> */}
        {/* <MainMenu /> */}
        {children}
      </div>
    </>
  );
};

export default MainLayout;
