import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Stack, Button, Tooltip, IconButton } from "@mui/material";
import CustomModal from "../../../customModal/customModal";
import GitHubIcon from "@mui/icons-material/GitHub";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import SearchIcon from "@mui/icons-material/Search";
import SearchModalBox from "../../../searchModalBox/searchModalBox";
import "./rightMenu.scss";

const RightMenu = ({ toggleDrawer, mode }) => {
  const [openModal, setOpenModal] = useState(false);
  const github = useSelector((state) => state.content.github);

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
  }, []);

  return (
    <Stack direction="row" spacing={1}>
      <CustomModal open={openModal} setOpen={setOpenModal}>
        <SearchModalBox />
      </CustomModal>
      <Button
        startIcon={<SearchIcon />}
        aria-labelledby="app-search-label"
        className={`search ${mode}`}
        variant="filledTonal"
        color="primary"
        onClick={handleOpenModal}
      >
        Search
        <div className="ctrlK">Ctrl+k</div>
      </Button>
      <Tooltip title={"Search"} arrow>
        <IconButton
          aria-label="search"
          color="primary"
          className="search-icon"
          onClick={handleOpenModal}
        >
          <SearchIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title={"GitHub repository"} arrow>
        <IconButton aria-label="github" color="primary" href={github}>
          <GitHubIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title={"Toggle settings drawer"} placement="bottom-end" arrow>
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
