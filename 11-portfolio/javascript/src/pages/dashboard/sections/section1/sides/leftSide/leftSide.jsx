import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import styles from "./leftSide.module.scss";

const LeftSide = ({ content }) => {
  return (
    <div className={styles["left-side"]}>
      <h1>{content.firstH1}</h1>
      <h1 className={styles["main-color"]}>{content.secondH1}</h1>
      <h1>{content.thirdH1}</h1>
      <h3 className={styles["gray-main-color"]}>{content.firstH3}</h3>
      <Link to="about-me">
        <Button variant="contained" size="large" className="slide-into-view">
          See more
        </Button>
      </Link>
    </div>
  );
};

export default LeftSide;
