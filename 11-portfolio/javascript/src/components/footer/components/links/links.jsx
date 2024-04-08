import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import Each from "../../../each/each";
import styles from "./links.module.scss";

const Links = ({ links, mode }) => {
  return (
    <div className={styles["links-container"]}>
      <ul>
        <Each
          data={links}
          render={(item, index) => {
            return (
              <li key={index}>
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    isActive
                      ? mode === "dark"
                        ? styles.dark
                        : styles.light
                      : undefined
                  }
                >
                  <Button className="w-100">{item.text}</Button>
                </NavLink>
              </li>
            );
          }}
        />
      </ul>
    </div>
  );
};

export default Links;
