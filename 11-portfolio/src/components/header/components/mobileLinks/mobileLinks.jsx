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
import "./mobileLinks.scss";

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
          className="position-absolute top-0 end-0 close"
          onClick={toggleDrawer}
        >
          <CloseIcon />
        </IconButton>
        <List>Links</List>
        <Divider />
        <List>
          <div className={`mobile-links`}>
            {links.map((link, index) => {
              return (
                <NavLink
                  to={link.href}
                  className={({ isActive }) =>
                    isActive ? `active ${mode}` : mode
                  }
                  key={index}
                >
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemText primary={link.text} />
                    </ListItemButton>
                  </ListItem>
                </NavLink>
              );
            })}
          </div>
        </List>
      </List>
    </Box>
  );
};

export default MobileLinks;
