import "./login.scss";
import Header from "../../components/header/header";
import SwitchTheme from "../../components/switch_theme/switchTheme";

const Login = () => {
  return (
    <div className="container-fluid login">
      <Header>
        <SwitchTheme />
      </Header>
      <main>
        <h1>Login</h1>
      </main>
    </div>
  );
};

export default Login;
