import { useState } from "react";
import CardList from "./components/cardList";
import Logo from "./assets/logo-white.svg";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.min.css";
import "./App.css";

function App() {
  const [cards, setCards] = useState([
    {
      id: 0,
      image:
        "https://github.com/S1mon009/React.js/assets/105738321/4d5fe730-2822-44ff-b902-fd647e5c00f6",
      title: "01. To do app",
      description:
        "My To Do App was created using React.js and Sass, you can use it as you wish and it's free for personal or commercial use.",
      link: "My To Do App was created using React.js and Sass, you can use it as you wish and it's free for personal or commercial use.",
      isPinned: false,
    },
    {
      id: 1,
      image:
        "https://github.com/S1mon009/React.js/assets/105738321/77d524d1-4efb-4ebc-9bee-0b629d2c1e3a",
      title: "02. QR code generator",
      description:
        "My Generator was created using React.js and Sass, you can use it as you wish and it's free for personal or commercial use.",
      link: "https://github.com/S1mon009/React.js/tree/main/02-qr-code-generator",
      isPinned: false,
    },
    {
      id: 2,
      image:
        "https://github.com/S1mon009/React.js/assets/105738321/cc037bc8-9eff-4353-bc3a-78dcbdbc94df",
      title: "03. OTP verification form",
      description:
        "My OTP Verification was created using React.js and Sass, you can use it as you wish and it's free for personal or commercial use.",
      link: "https://github.com/S1mon009/React.js/tree/main/03-otp-verifacation-form",
      isPinned: false,
    },
    {
      id: 3,
      image:
        "https://github.com/S1mon009/React.js/assets/105738321/337eb2dc-4f53-49ed-b742-b3cf0935bc32",
      title: "04. Add tags",
      description:
        "My Add Tags was created using React.js and Sass, you can use it as you wish and it's free for personal or commercial use.",
      link: "https://github.com/S1mon009/React.js/tree/main/04-add-tags",
      isPinned: false,
    },
    {
      id: 4,
      image:
        "https://github.com/S1mon009/React.js/assets/105738321/cd24a6c5-ec93-42d1-ae27-105c4df8b980",
      title: "05. Ripple effect button",
      description:
        "My Button was created using React.js and Sass, you can use it as you wish and it's free for personal or commercial use.",
      link: "https://github.com/S1mon009/React.js/tree/main/05-ripple-effect-button",
      isPinned: false,
    },
    {
      id: 5,
      image:
        "https://github.com/S1mon009/React.js/assets/105738321/42acaf00-ec89-480d-a073-a8908b28a09e",
      title: "06. Popup",
      description:
        "My Popup was created using React.js and Sass, you can use it as you wish and it's free for personal or commercial use.",
      link: "https://github.com/S1mon009/React.js/tree/main/06-popup",
      isPinned: false,
    },
    {
      id: 6,
      image:
        "https://github.com/S1mon009/React.js/assets/105738321/9522abc5-b61f-4b41-bac0-2360dba3c799",
      title: "07. Accordion",
      description:
        "My Accordion was created using React.js, Bootstrap and Sass, you can use it as you wish and it's free for personal or commercial use.",
      link: "https://github.com/S1mon009/React.js/tree/main/07-accordion",
      isPinned: false,
    },
    {
      id: 7,
      image:
        "https://github.com/S1mon009/React.js/assets/105738321/f662c6ab-bce0-4a6a-89e6-0c3c0426ef76",
      title: "08. Login form",
      description:
        "My Login Form was created using React.js, Bootstrap, Formik, React Router and Sass, you can use it as you wish and it's free for personal or commercial use.",
      link: "https://github.com/S1mon009/React.js/tree/main/08-login-form",
      isPinned: false,
    },
  ]);
  function PinToTop(index) {
    const pinToTop = cards[index];
    const [...newCards] = cards;
    if (pinToTop.isPinned) {
      pinToTop.isPinned = false;
      newCards.splice(index, 1);
      newCards.splice(pinToTop.id, 0, pinToTop);
    } else {
      pinToTop.isPinned = true;
      newCards.splice(index, 1);
      newCards.unshift(pinToTop);
    }
    setCards(newCards);
  }
  return (
    <>
      <img src={Logo} alt="Logo" className="position-absolute" />
      <div className="cards-container">
        <CardList data={cards} onClick={PinToTop} />
      </div>
    </>
  );
}

export default App;
