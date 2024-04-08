import { IconButton } from "@mui/material";
import Each from "../../../each/each";
import styles from "./publics.module.scss";

const Publics = ({ publicsProfile, poweredBy }) => {
  return (
    <div className={styles.publics}>
      <p className="fs-5 fw-medium">Publics</p>
      <div>
        <Each
          data={publicsProfile}
          render={(item, index) => {
            return (
              <IconButton
                aria-label={item.name}
                color="primary"
                size="large"
                href={item.href}
                key={index}
              >
                {item.icon}
              </IconButton>
            );
          }}
        />
      </div>
      <div className={styles["powered-by"]}>
        <p className="fs-5 fw-medium">Powered by</p>
        <div className="d-flex flex-wrap">
          <Each
            data={poweredBy}
            render={(item, index) => {
              return (
                <img
                  src={item.image}
                  loading="lazy"
                  alt={item.alt}
                  key={index}
                />
              );
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Publics;
