import "./card.scss";

const Card = (props) => {
  return (
    <div className="card" style={{ inset: props?.inset, marginRight: "20px" }}>
      {props.children}
    </div>
  );
};

export default Card;
