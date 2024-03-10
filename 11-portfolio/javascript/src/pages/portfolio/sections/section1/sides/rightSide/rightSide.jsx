import styles from "./rightSide.module.scss";

const RightSide = ({ image }) => {
  return (
    <img
      src={image}
      alt="Portfolio image"
      className={styles["right-side-img"]}
    />
  );
};

export default RightSide;
