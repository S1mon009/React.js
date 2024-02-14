import "./card.scss";
import { FC } from "react";

interface cardProps {
  style?: object;
  children: React.ReactNode;
}

const Card: FC<cardProps> = (props) => {
  return (
    <div className="card" style={props?.style}>
      {props.children}
    </div>
  );
};

export default Card;
