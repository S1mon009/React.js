import Logo from "../../images/logo-white.svg";
import { Link } from "react-router-dom";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="w-100">
      <div className="row">
        <div className="col">
          <Link to="/">
            <img src={Logo} alt="Logo" className="d-inline-block" />
          </Link>
          <span className="fs-2 fw-semibold app-name">Recipe app</span>
        </div>
        <div className="col">
          <span className="d-block fs-3">Links:</span>
          <ul>
            <li className="fs-5">
              <Link to="/">Recipe app</Link>
            </li>
            <li className="fs-5">
              <Link to="/login">Login</Link>
            </li>
            <li className="fs-5">
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </div>
        <div className="col">
          <span className="d-block fs-3">Contact:</span>
          <ul>
            <li className="fs-5">Phone: +000000000</li>
            <li className="fs-5">Email: your.email@gmail.com</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
