import "./accordion.scss";

const Accordion = (props) => {
  return (
    <div
      className="accordion w-100"
      onClick={() => props.onClick(props.accordionIndex)}
      key={props.accordionIndex}
    >
      <div className="accordion-header d-flex align-items-center">
        <span
          className="icon"
          style={{
            transform: `${
              props.activeIndex === props.accordionIndex
                ? "rotate(45deg)"
                : "rotate(0deg)"
            }`,
          }}
        >
          <i className="bi bi-plus-lg"></i>
        </span>
        <h3 className="fs-3 fw-semibold">{props.accordion.title}</h3>
      </div>
      {props.activeIndex === props.accordionIndex ? (
        <div className="accordion-content">{props.accordion.content}</div>
      ) : null}
    </div>
  );
};

export default Accordion;
