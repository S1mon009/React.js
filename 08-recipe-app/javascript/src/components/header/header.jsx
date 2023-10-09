import Logo from "../../images/logo-black.svg";
import "./header.scss";
const Header = (props) => {
  return (
    <header className="d-flex justify-content-between align-items-center w-100">
      <img src={Logo} alt="Logo" />
      {props.children}
    </header>
  );
};

export default Header;
