import SlideFromBottom from "../../../../../../components/framerMotion/slideFromBottom/slideFromBottom";
import styles from "./rightSide.module.scss";

const RightSide = ({ content }) => {
  return (
    <div className={styles["right-side"]}>
      <SlideFromBottom once={true}>
        <p className={styles.title}>
          {content.title.part1}
          <span className={styles["main-color"]}>{content.title.part2}</span>
          {content.title.part3}
        </p>
      </SlideFromBottom>
      <SlideFromBottom once={true}>
        <p className={styles.description}>{content.description}</p>
      </SlideFromBottom>
    </div>
  );
};

export default RightSide;
