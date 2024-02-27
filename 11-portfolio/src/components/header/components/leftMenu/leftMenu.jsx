import { Link } from "react-router-dom";
import { Stack, Tooltip, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import styles from "./leftMenu.module.scss";

const LeftMenu = ({ toggleDrawer, logo }) => {
  return (
    <Stack direction="row" spacing={1}>
      <div className={styles.menu}>
        <Tooltip title="Menu" placement="bottom-start" arrow>
          <IconButton aria-label="Links" color="primary" onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
        </Tooltip>
      </div>
      <Link to="/">
        <img loading="lazy" src={logo} alt="Logo" />
      </Link>
    </Stack>
  );
};

export default LeftMenu;
