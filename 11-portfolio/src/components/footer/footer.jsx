import { memo } from "react";
import { Box, Divider } from "@mui/material";
import { useSelector } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import Links from "./components/links/links";
import Publics from "./components/publics/publics";
import ContactInfo from "./components/contactInfo/contactInfo";
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
  const poweredBy = useSelector(
    createSelector(
      (mode) => {
        return mode;
      },
      (content) => {
        return content.content.footer.poweredBy;
      }
    )
  );
  const publicsProfile = [
    { icon: <GitHubIcon />, name: "GitHub", href: github },
    { icon: <LinkedInIcon />, name: "LinkedIn" },
    { icon: <InstagramIcon />, name: "Instagram" },
  ];
  const logo = useSelector(
    createSelector(
      (mode) => {
        return mode;
      },
      (content) => {
        return content.content.logo;
      }
    )
  );
  const contactInfo = useSelector(
    createSelector(
      (mode) => {
        return mode;
      },
      (content) => {
        return content.content.footer.contactInfo;
      }
    )
  );

  return (
    <footer>
      <Box className="d-flex column-gap-5 row-gap-4 justify-content-start flex-wrap">
        <Links links={links} mode={mode} />
        <Divider
          orientation="vertical"
          flexItem
          style={{ background: "gray" }}
          className={styles.divider}
        />
        <Publics publicsProfile={publicsProfile} poweredBy={poweredBy} />
        <Divider
          orientation="vertical"
          flexItem
          style={{ background: "gray" }}
          className={styles.divider}
        />
        <ContactInfo logo={logo} contactInfo={contactInfo} />
      </Box>
    </footer>
  );
});

export default Footer;
