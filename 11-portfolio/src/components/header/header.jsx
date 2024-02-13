import { lazy, useState } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { modeActions, languageActions } from "../../store/store";
const LeftMenu = lazy(() => import("./components/leftMenu/leftMenu"));
const Links = lazy(() => import("./components/links/links"));
const RightMenu = lazy(() => import("./components/rightMenu/rightMenu"));
const CustomDrawer = lazy(() =>
  import("./components/customDrawer/customDrawer")
);
import MobileLinks from "./components/mobileLinks/mobileLinks";
import Settings from "./components/settings/settings";
import "./header.scss";

const Header = () => {
  const [state, setState] = useState({
    left: false,
    right: false,
  });
  const dispatch = useDispatch();
  const languageIndex = +useSelector(
    (state) => state.language.currentLanguageIndex
  );
  const links = useSelector((state) => state.language.links);
  const mode = useSelector((state) => state.mode.mode);
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const changeModeLight = () => {
    dispatch(modeActions.setMode("light"));
  };
  const changeModeDark = () => {
    dispatch(modeActions.setMode("dark"));
  };
  const changeLanguageEnglish = () => {
    dispatch(languageActions.setLanguage(0));
  };
  const changeLanguagePolish = () => {
    dispatch(languageActions.setLanguage(1));
  };

  return (
    <>
      <header
        className={`position-fixed w-100 d-flex justify-content-between align-items-center p-3 ${mode}`}
      >
        <LeftMenu
          languageIndex={languageIndex}
          toggleDrawer={toggleDrawer("left", true)}
        />
        <Links links={links} languageIndex={languageIndex} mode={mode} />
        <RightMenu
          languageIndex={languageIndex}
          toggleDrawer={toggleDrawer("right", true)}
          mode={mode}
        />
        <CustomDrawer
          anchor={"left"}
          state={state}
          toggleDrawer={toggleDrawer("left", false)}
        >
          <MobileLinks
            links={links}
            languageIndex={languageIndex}
            anchor={"left"}
            toggleDrawer={toggleDrawer("left", false)}
            mode={mode}
          />
        </CustomDrawer>
        <CustomDrawer
          anchor={"right"}
          state={state}
          toggleDrawer={toggleDrawer("right", false)}
        >
          <Settings
            languageIndex={languageIndex}
            anchor={"right"}
            toggleDrawer={toggleDrawer("right", false)}
            mode={mode}
            changeMode={[changeModeLight, changeModeDark]}
            changeLanguage={[changeLanguageEnglish, changeLanguagePolish]}
          />
        </CustomDrawer>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
