import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import "./links.scss";

const Links = ({ links, languageIndex, mode }) => {
  return (
    <div className="links">
      <ul className="d-flex">
        {links[languageIndex].map((link, index) => {
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
