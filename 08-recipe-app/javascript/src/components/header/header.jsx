import LogoBlack from "../../images/logo-black.svg";
import LogoWhite from "../../images/logo-white.svg";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./header.scss";

const Header = (props) => {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <header className="d-flex justify-content-between align-items-center w-100">
      <div>
        <Link to="/">
          <img
            src={theme === "" ? LogoBlack : LogoWhite}
            alt="Logo"
            className="d-inline-block header-image"
          />
        </Link>
        <span className="fs-5 fw-semibold app-name">Recipe app</span>
      </div>
      {props.children}
    </header>
  );
};

export default Header;
