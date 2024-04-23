import styles from "./leftSide.module.scss";

const LeftSide = ({ knowledge }) => {
  return (
    <div className={`me-2 ${styles["left-side"]}`}>
      <h1>Knowledge</h1>
      <span className={styles["gray-main-color"]}>{knowledge}</span>
    </div>
  );
};

export default LeftSide;
