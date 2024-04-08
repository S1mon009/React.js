import styles from "./rightSide.module.scss";

const RightSide = ({ content }) => {
  return (
    <div className={styles["right-side"]}>
      <h1>
        {content.firstPartH1}
        <span className={styles["main-color"]}>{content.secondPartH1}</span>
      </h1>
      <p className="fs-5">{content.firstPartParagraph}</p>
      <p className="fs-5">{content.secondPartParagraph}</p>
    </div>
  );
};

export default RightSide;
