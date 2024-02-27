import styles from "./devCard.module.scss";

const DevCard = ({ devCard }) => {
  return (
    <div className={styles["dev-img"]}>
      <a href="https://app.daily.dev/s1mon009">
        <img loading="lazy" src={devCard.src} alt={devCard.alt} />
      </a>
    </div>
  );
};

export default DevCard;
