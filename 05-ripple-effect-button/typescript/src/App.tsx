import Logo from "./logo-white.svg";
import Button from "./components/button/button";
import "./App.css";

function App() {
  return (
    <>
      <img src={Logo} alt="Logo" className="logo" />
      <Button />
    </>
  );
}

export default App;
