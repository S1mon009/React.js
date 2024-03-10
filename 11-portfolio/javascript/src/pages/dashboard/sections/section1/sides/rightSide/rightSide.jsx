import SplineCube from "../../../../../../components/splineObjects/cube/splineCube";
import styles from "./rightSide.module.scss";

const RightSide = ({ image }) => {
  return (
    <div className={styles["right-side"]}>
      <SplineCube image={image} />
    </div>
  );
};

export default RightSide;
