import LogoBlue from "../../../../assets/logo-blue.svg";
import { Link } from "react-router-dom";
import { Stack, Tooltip, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import styles from "./leftMenu.module.scss";

const LeftMenu = ({ toggleDrawer }) => {
  return (
    <Stack direction="row" spacing={1}>
      <div className={styles.menu}>
        <Tooltip title="Menu" placement="bottom-start" arrow>
          <IconButton
            aria-label="Links"
            color="primary"
            // className={styles.menu}
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
        </Tooltip>
      </div>
      <Link to="/">
        <img src={LogoBlue} alt="Logo" />
      </Link>
    </Stack>
  );
};

export default LeftMenu;
