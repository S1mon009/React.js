import { memo } from "react";
import { Box, Divider, Button, Tooltip, IconButton } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import styles from "./footer.module.scss";

const Footer = memo(() => {
  const mode = useSelector(
    createSelector(
      (mode) => {
        return mode.mode.mode;
      },
      (content) => {
        return content;
      }
    )
  );
  const links = useSelector(
    createSelector(
      (mode) => {
        return mode;
      },
      (content) => {
        return content.content.links;
      }
    )
  );
  const github = useSelector(
    createSelector(
      (mode) => {
        return mode;
      },
      (content) => {
        return content.content.github;
      }
    )
  );
  const publicsProfile = [
    { icon: <GitHubIcon />, name: "GitHub", href: github },
    { icon: <LinkedInIcon />, name: "LinkedIn" },
    { icon: <InstagramIcon />, name: "Instagram" },
  ];

  return (
    <footer>
      <Box className="d-flex justify-content-start flex-wrap">
        <div>
          <ul>
            {links.map((link, index) => {
              return (
                <li key={index}>
                  <NavLink
                    to={link.href}
                    className={({ isActive }) =>
                      isActive
                        ? mode === "dark"
                          ? styles.dark
                          : styles.light
                        : undefined
                    }
                  >
                    <Button className="w-100">{link.text}</Button>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
        <Divider
          orientation="vertical"
          flexItem
          style={{ background: "gray" }}
        />
        <div className={styles.publics}>
          <p className="fs-5 fw-medium">Publics</p>
          <div>
            {publicsProfile.map((publicProfile, index) => {
              return (
                <IconButton
                  aria-label={publicProfile.name}
                  color="primary"
                  size="large"
                  href={publicProfile?.href}
                  key={index}
                >
                  {publicProfile.icon}
                </IconButton>
              );
            })}
          </div>
          <div>
            <p className="fs-5 fw-medium">Powered by</p>
          </div>
        </div>
      </Box>
    </footer>
  );
});

export default Footer;
