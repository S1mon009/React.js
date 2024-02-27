const Button = (props) => {
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
