import LogoBlue from "../../../../assets/logo-blue.svg";
import { Link } from "react-router-dom";
import { Stack, Tooltip, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const LeftMenu = ({ toggleDrawer }) => {
  return (
    <Stack direction="row" spacing={1}>
      <Tooltip title={"Menu"} placement="bottom-start" arrow>
        <IconButton
          aria-label="Links"
          color="primary"
          className="menu"
          onClick={toggleDrawer}
        >
          <MenuIcon />
        </IconButton>
      </Tooltip>
      <Link to="/">
        <img src={LogoBlue} alt="Logo" />
      </Link>
    </Stack>
  );
};

export default LeftMenu;
