import logo from "./logo-black.svg";
import AccordionContainer from "./components/accordionContainer/accordionContainer";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";

function App() {
  return (
    <>
      <img src={logo} alt="Logo" className="position-absolute" />
      <AccordionContainer />
    </>
  );
}

export default App;
