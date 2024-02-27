import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import styles from "./links.module.scss";

const Links = ({ links, mode }) => {
  return (
    <div className={styles["links-container"]}>
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
  );
};

export default Links;
