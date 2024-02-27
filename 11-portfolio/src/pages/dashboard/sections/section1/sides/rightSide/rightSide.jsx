import SplineCube from "../../../../../../components/splineObjects/cube/splineCube";
import styles from "./rightSide.module.scss";

const RightSide = () => {
  return (
    <div className={styles["right-side"]}>
      <SplineCube />
    </div>
  );
};

export default RightSide;
