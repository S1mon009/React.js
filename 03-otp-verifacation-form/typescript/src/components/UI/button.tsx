import { FC } from "react";

interface buttonProps {
  className: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: (event: any) => void;
  content: string;
  icon?: JSX.Element;
}

const Button: FC<buttonProps> = (props) => {
  return (
    <button
      className={props.className}
      type={props?.type}
      onClick={props?.onClick}
    >
      {props.content} {props?.icon}
    </button>
  );
};

export default Button;
