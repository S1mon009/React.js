import { useState, useEffect } from "react";
import { Stack, Button, Tooltip, IconButton } from "@mui/material";
import CustomModal from "../../../customModal/customModal";
import GitHubIcon from "@mui/icons-material/GitHub";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import SearchIcon from "@mui/icons-material/Search";
import SearchModalBox from "../../../searchModalBox/searchModalBox";
import "./rightMenu.scss";

const RightMenu = ({ languageIndex, toggleDrawer, mode }) => {
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "Control") {
        document.addEventListener("keydown", (event) => {
          if (event.key === "k") {
            setOpenModal(true);
          }
        });
      }
    };
    document.addEventListener("keydown", handleKeyPress);

    return () => document.removeEventListener("keypress", handleKeyPress);
  });

  return (
    <Stack direction="row" spacing={1}>
      <CustomModal open={openModal} setOpen={setOpenModal}>
        <SearchModalBox languageIndex={languageIndex} />
      </CustomModal>
      <Button
        startIcon={<SearchIcon />}
        aria-labelledby="app-search-label"
        className={`search ${mode}`}
        variant="filledTonal"
        color="primary"
        onClick={handleOpenModal}
      >
        {languageIndex === 0 ? "Search..." : "Szukaj..."}
        <div className="ctrlK">Ctrl+k</div>
      </Button>
      <Tooltip title={languageIndex === 0 ? "Search" : "Szukaj"} arrow>
        <IconButton
          aria-label="search"
          color="primary"
          className="search-icon"
          onClick={handleOpenModal}
        >
          <SearchIcon />
        </IconButton>
      </Tooltip>
      <Tooltip
        title={
          languageIndex === 0 ? "GitHub repository" : "Repozytorium GitHub"
        }
        arrow
      >
        <IconButton
          aria-label="github"
          color="primary"
          href="https://github.com/S1mon009"
        >
          <GitHubIcon />
        </IconButton>
      </Tooltip>
      <Tooltip
        title={languageIndex === 0 ? "Toggle settings drawer" : "Menu ustawień"}
        placement="bottom-end"
        arrow
      >
        <IconButton
          aria-label="settings"
          color="primary"
          onClick={toggleDrawer}
        >
          <SettingsOutlinedIcon />
        </IconButton>
      </Tooltip>
    </Stack>
  );
};

export default RightMenu;
