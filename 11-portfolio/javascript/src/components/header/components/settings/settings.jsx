import {
  Box,
  List,
  Divider,
  ToggleButton,
  ToggleButtonGroup,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import styles from "./settings.module.scss";

const Settings = ({ anchor, toggleDrawer, mode, changeMode }) => {
  return (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      className="p-2"
    >
      <List className="w-100">
        <IconButton
          aria-label="close"
          color="primary"
          className={`position-absolute top-0 end-0 ${styles.close}`}
          onClick={toggleDrawer}
        >
          <CloseIcon />
        </IconButton>
        <List>Settings</List>
        <Divider />
        <List>
          <div>
            <span className={`d-block ${styles["setting-title"]}`}>MODE</span>
            <ToggleButtonGroup
              color="primary"
              value={mode}
              exclusive
              aria-label="Platform"
              className="w-100"
            >
              <ToggleButton
                value="light"
                onClick={changeMode[0]}
                className="w-50"
              >
                Light
              </ToggleButton>
              <ToggleButton
                value="dark"
                onClick={changeMode[1]}
                className="w-50"
              >
                Dark
              </ToggleButton>
            </ToggleButtonGroup>
          </div>
        </List>
      </List>
    </Box>
  );
};

export default Settings;
