import {
  Box,
  List,
  Divider,
  ToggleButton,
  ToggleButtonGroup,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import "./settings.scss";

const Settings = ({
  languageIndex,
  anchor,
  toggleDrawer,
  mode,
  changeMode,
  changeLanguage,
}) => {
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
          className="position-absolute top-0 end-0 close"
          onClick={toggleDrawer}
        >
          <CloseIcon />
        </IconButton>
        <List>{languageIndex === 0 ? "Settings" : "Ustawienia"}</List>
        <Divider />
        <List>
          <div>
            <span className="d-block setting-title">
              {languageIndex === 0 ? "MODE" : "MOTYW"}
            </span>
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
                {languageIndex === 0 ? "Light" : "Jasny"}
              </ToggleButton>
              <ToggleButton
                value="dark"
                onClick={changeMode[1]}
                className="w-50"
              >
                {languageIndex === 0 ? "Dark" : "Ciemny"}
              </ToggleButton>
            </ToggleButtonGroup>
          </div>
          <div>
            <span
              className="d-block setting-title"
              style={{ transform: "translateY(10px)" }}
            >
              {languageIndex === 0 ? "LANGUAGE" : "JĘZYK"}
            </span>
            <ToggleButtonGroup
              color="primary"
              value={languageIndex}
              exclusive
              aria-label="Platform"
              className="w-100"
              style={{ marginTop: "10px" }}
            >
              <ToggleButton
                value={0}
                onClick={changeLanguage[0]}
                className="w-50"
              >
                {languageIndex === 0 ? "English" : "Angielski"}
              </ToggleButton>
              <ToggleButton
                value={1}
                onClick={changeLanguage[1]}
                className="w-50"
              >
                {languageIndex === 0 ? "Polish" : "Polski"}
              </ToggleButton>
            </ToggleButtonGroup>
          </div>
        </List>
      </List>
    </Box>
  );
};

export default Settings;
