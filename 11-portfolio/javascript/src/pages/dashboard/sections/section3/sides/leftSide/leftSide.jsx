import { Paper } from "@mui/material";
import SlideFromBottom from "../../../../../../components/framerMotion/slideFromBottom/slideFromBottom";
import Each from "../../../../../../components/each/each";
import styles from "./leftSide.module.scss";

const LeftSide = ({ content }) => {
  return (
    <div className={styles["left-side"]}>
      <Each
        data={content.mostUsedTechnologies}
        render={(item, index) => {
          return (
            <SlideFromBottom once key={index}>
              <Paper
                elevation={3}
                className={`d-flex justify-content-center align-items-center ${styles["technology-card"]}`}
              >
                <img loading="lazy" src={item.icon} alt={item.name} />
              </Paper>
            </SlideFromBottom>
          );
        }}
      />
    </div>
  );
};

export default LeftSide;
