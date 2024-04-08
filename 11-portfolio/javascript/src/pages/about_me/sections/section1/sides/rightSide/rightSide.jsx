import { Button } from "@mui/material";
import CV from "../../../../../../assets/CV.pdf";
import styles from "./rightSide.module.scss";

const RightSide = ({ content }) => {
  return (
    <div className={styles["right-side"]}>
      <h1>
        {content.firstPartH1}
        <span className={styles["main-color"]}>{content.secondPartH1}</span>
      </h1>
      <p className="fs-5">{content.firstPartParagraph}</p>
      <p className="fs-5">{content.secondPartParagraph}</p>
      <Button variant="contained" href={content.CV} download="CV">
        Download my CV
      </Button>
    </div>
  );
};

export default RightSide;
