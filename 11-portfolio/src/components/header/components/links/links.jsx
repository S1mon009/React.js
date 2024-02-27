import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import styles from "./links.module.scss";

const Links = ({ links, mode }) => {
  return (
    <div className={styles.links}>
      <ul className="d-flex">
        {links.map((link, index) => {
          return (
            <li key={index}>
              <NavLink
                to={link.href}
                className={({ isActive }) => (isActive ? mode : undefined)}
              >
                <Button>{link.text}</Button>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Links;
