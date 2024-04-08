import { NavLink } from "react-router-dom";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Each from "../../../each/each";
import styles from "./mobileLinks.module.scss";

const MobileLinks = ({ links, anchor, toggleDrawer, mode }) => {
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
        <List>Links</List>
        <Divider />
        <List>
          <div className={styles["mobile-links"]}>
            <Each
              data={links}
              render={(item, index) => {
                return (
                  <NavLink
                    to={item.href}
                    className={({ isActive }) =>
                      isActive
                        ? `${styles.active} ${
                            mode === "dark" ? styles.dark : styles.light
                          }`
                        : mode === "dark"
                        ? styles.dark
                        : styles.light
                    }
                    key={index}
                  >
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemText primary={item.text} />
                      </ListItemButton>
                    </ListItem>
                  </NavLink>
                );
              }}
            />
          </div>
        </List>
      </List>
    </Box>
  );
};

export default MobileLinks;
