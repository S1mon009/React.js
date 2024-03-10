import styles from "./leftSide.module.scss";

const LeftSide = ({ content }) => {
  return (
    <div className={styles["left-side"]}>
      <h1>
        {content.firstPartH1}
        <span className={styles["main-color"]}>{content.secondPartH1}</span>
        {content.thirdPartH1}
      </h1>
      <p className="fs-5">{content.firstPartParagraph}</p>
      <p className="fs-5">{content.secondPartParagraph}</p>
    </div>
  );
};

export default LeftSide;
