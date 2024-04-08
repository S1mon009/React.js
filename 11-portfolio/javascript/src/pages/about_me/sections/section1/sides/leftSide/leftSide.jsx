import styles from "./leftSide.module.scss";

const LeftSide = ({ image }) => {
  return (
    <img
      src={image}
      loading="lazy"
      alt="About me image"
      className={styles["left-side"]}
    />
  );
};

export default LeftSide;
