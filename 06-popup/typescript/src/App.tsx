import Logo from "./logo-white.svg";
import "./App.css";
import Button from "./components/button/button";
import PopupWindow from "./components/popupWindow/popupWindow";
import { useState } from "react";

function App() {
  const [showPopup, setShowPopup] = useState<boolean>(false);

  return (
    <>
      <img src={Logo} alt="Logo" />
      <Button onClick={() => setShowPopup(true)} />
      <PopupWindow onClick={() => setShowPopup(false)} show={showPopup} />
    </>
  );
}

export default App;
