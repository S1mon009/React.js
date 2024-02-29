import styles from "./leftSide.module.scss";

const LeftSide = ({ content }) => {
  return (
    <div>
      <h2>
        {content.firstPartH1}
        <span className={styles["main-color"]}>{content.secondPartH1}</span>
        {content.thirdPartH1}
      </h2>
      <p>{content.firstPartParagraph}</p>
      <p>{content.secondPartParagraph}</p>
    </div>
  );
};

export default LeftSide;
