import { IconButton } from "@mui/material";
import styles from "./publics.module.scss";

const Publics = ({ publicsProfile, poweredBy }) => {
  return (
    <div className={styles.publics}>
      <p className="fs-5 fw-medium">Publics</p>
      <div>
        {publicsProfile.map((publicProfile, index) => {
          return (
            <IconButton
              aria-label={publicProfile.name}
              color="primary"
              size="large"
              href={publicProfile?.href}
              key={index}
            >
              {publicProfile.icon}
            </IconButton>
          );
        })}
      </div>
      <div className={styles["powered-by"]}>
        <p className="fs-5 fw-medium">Powered by</p>
        <div className="d-flex flex-wrap">
          {poweredBy.map((powered, index) => {
            return <img src={powered.image} alt={powered.alt} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Publics;
