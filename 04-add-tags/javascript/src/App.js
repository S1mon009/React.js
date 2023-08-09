import Logo from "./logo-black.svg";
import TagsBox from "./components/tags_box/tagsBox";
import "./App.css";

function App() {
  return (
    <>
      <img src={Logo} alt="Logo" />
      <TagsBox />
    </>
  );
}

export default App;
