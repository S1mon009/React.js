import { FC } from "react";
import "./button.scss";

interface buttonProps {
  onClick: React.MouseEventHandler;
}

const Button: FC<buttonProps> = (props) => {
  return <button onClick={props.onClick}>Click me!</button>;
};

export default Button;
