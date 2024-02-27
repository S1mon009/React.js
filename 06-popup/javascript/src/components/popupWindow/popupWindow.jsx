import "./popupWindow.scss";
import { AiOutlineClose } from "react-icons/ai";

const PopupWindow = (props) => {
  return (
    <div className={`popup-container ${props.show ? "active" : ""}`}>
      <div className="popup-overlay" onClick={props.onClick} />
      <div className="popup-window">
        <AiOutlineClose
          style={{
            position: "absolute",
            top: "10px",
            right: "0",
            transform: "translateX(-20px)",
            cursor: "pointer",
          }}
          size={30}
          onClick={props.onClick}
        />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum vel
        nostrum accusantium, vitae soluta at ipsam obcaecati odio nam maiores
        neque et amet incidunt expedita tempore! Dolorum vitae rerum ex!
      </div>
    </div>
  );
};

export default PopupWindow;
