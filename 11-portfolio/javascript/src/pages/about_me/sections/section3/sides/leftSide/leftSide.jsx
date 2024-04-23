import SlideFromBottom from "../../../../../../components/framerMotion/slideFromBottom/slideFromBottom";
import styles from "./leftSide.module.scss";

const LeftSide = ({ knowledge }) => {
  return (
    <div className={`me-2 ${styles["left-side"]}`}>
      <SlideFromBottom once={true}>
        <h1>Knowledge</h1>
      </SlideFromBottom>
      <SlideFromBottom once={true}>
        <span className={styles["gray-main-color"]}>{knowledge}</span>
      </SlideFromBottom>
    </div>
  );
};

export default LeftSide;
