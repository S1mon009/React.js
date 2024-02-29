import { useState, memo } from "react";
import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";
import { modeActions } from "../../store/store";
import LeftMenu from "./components/leftMenu/leftMenu";
import Links from "./components/links/links";
import RightMenu from "./components/rightMenu/rightMenu";
import CustomDrawer from "./components/customDrawer/customDrawer";
import MobileLinks from "./components/mobileLinks/mobileLinks";
import Settings from "./components/settings/settings";
import styles from "./header.module.scss";

const Header = memo(() => {
  const [state, setState] = useState({
    left: false,
    right: false,
  });
  const dispatch = useDispatch();
  const { logo, links } = useSelector(
    createSelector(
      (mode) => {
        return mode;
      },
      (content) => {
        return content.content;
      }
    )
  );
  const mode = useSelector(
    createSelector(
      (mode) => {
        return mode.mode.mode;
      },
      (content) => {
        return content;
      }
    )
  );

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

  return (
    <>
      <header
        className={`position-fixed w-100 d-flex justify-content-between align-items-center p-3 ${
          mode === "dark" ? styles.dark : styles.light
        }`}
      >
        <LeftMenu toggleDrawer={toggleDrawer("left", true)} logo={logo} />
        <Links
          links={links}
          mode={mode === "dark" ? styles.dark : styles.light}
        />
        <RightMenu toggleDrawer={toggleDrawer("right", true)} mode={mode} />
        <CustomDrawer
          anchor={"left"}
          state={state}
          toggleDrawer={toggleDrawer("left", false)}
        >
          <MobileLinks
            links={links}
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
            anchor={"right"}
            toggleDrawer={toggleDrawer("right", false)}
            mode={mode}
            changeMode={[changeModeLight, changeModeDark]}
          />
        </CustomDrawer>
      </header>
      <Outlet />
    </>
  );
});

export default Header;
