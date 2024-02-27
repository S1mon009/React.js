import Logo from "./logo-black.svg";
import Form from "./components/form/form";
import "./App.css";
function App() {
  return (
    <>
      <img src={Logo} alt="Logo" className="logo" />
      <Form />
    </>
  );
}

export default App;
