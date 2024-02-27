import { Paper } from "@mui/material";
import SlideFromBottom from "../../../../../../components/framerMotion/slideFromBottom/slideFromBottom";
import styles from "./leftSide.module.scss";

const LeftSide = ({ content }) => {
  return (
    <div className={styles["left-side"]}>
      {content.mostUsedTechnologies.map((technology, index) => {
        return (
          <SlideFromBottom once={true} key={index}>
            <Paper
              elevation={3}
              className={`d-flex justify-content-center align-items-center ${styles["technology-card"]}`}
            >
              <img loading="lazy" src={technology.icon} alt={technology.name} />
            </Paper>
          </SlideFromBottom>
        );
      })}
    </div>
  );
};

export default LeftSide;
