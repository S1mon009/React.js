import { useEffect } from "react";
import { Button } from "@mui/material";
import { blue, grey } from "@mui/material/colors";
import styles from "./leftSide.module.scss";

const LeftSide = ({ content }) => {
  useEffect(() => {
    const button = document.querySelector(".slide-into-view");
    const element = document.querySelector(".section-2");

    function scrollTo() {
      element.scrollIntoView();
    }

    button.addEventListener("click", scrollTo);

    return () => button.removeEventListener("click", scrollTo);
  }, []);

  return (
    <div className={styles["left-side"]}>
      <h1>{content.firstH1}</h1>
      <h1 style={{ color: blue[500], fontWeight: 800 }}>{content.secondH1}</h1>
      <h1>{content.thirdH1}</h1>
      <h3 style={{ color: grey[500] }}>{content.firstH3}</h3>
      <Button variant="contained" size="large" className="slide-into-view">
        See more
      </Button>
    </div>
  );
};

export default LeftSide;
