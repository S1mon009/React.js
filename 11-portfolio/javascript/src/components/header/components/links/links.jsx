import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import Each from "../../../each/each";
import styles from "./links.module.scss";

const Links = ({ links, mode }) => {
  return (
    <div className={styles.links}>
      <ul className="d-flex">
        <Each
          data={links}
          render={(item, index) => {
            return (
              <li key={index}>
                <NavLink
                  to={item.href}
                  className={({ isActive }) => (isActive ? mode : undefined)}
                >
                  <Button>{item.text}</Button>
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
