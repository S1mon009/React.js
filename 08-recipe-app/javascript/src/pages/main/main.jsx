import Header from "../../components/header/header";
import SwitchTheme from "../../components/switch_theme/switchTheme";
import { Link } from "react-router-dom";
import "./main.scss";

const Main = () => {
  return (
    <Header>
      <div className="d-flex align-items-center buttons-header">
        <div>
          <Link to="/login">
            <button className="btn btn-outline-warning">Login</button>
          </Link>
          <Link to="/register">
            <button className="btn btn-warning">Join us</button>
          </Link>
        </div>
        <SwitchTheme />
      </div>
    </Header>
  );
};
export default Main;
