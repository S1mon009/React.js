import { Fragment } from "react";
import { SwipeableDrawer } from "@mui/material";

const CustomDrawer = ({ anchor, state, toggleDrawer, children }) => {
  return (
    <div className="position-absolute">
      <Fragment key={anchor}>
        <SwipeableDrawer
          anchor={anchor}
          open={state[anchor]}
          onClose={toggleDrawer}
          onOpen={toggleDrawer}
        >
          {children}
        </SwipeableDrawer>
      </Fragment>
    </div>
  );
};

export default CustomDrawer;
