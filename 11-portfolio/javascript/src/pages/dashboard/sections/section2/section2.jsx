import { useSelector } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";
import { Box, Divider } from "@mui/material";
import LeftSide from "./sides/leftSide/leftSide";
import RightSide from "./sides/rightSide/rightSide";
import styles from "./section2.module.scss";

const Section2 = () => {
  const mode = useSelector(
    createSelector(
      (mode) => {
        return mode.mode.mode;
      },
      (content) => {
        return content;
      }
    )
  );
  const content = useSelector(
    createSelector(
      (mode) => {
        return mode;
      },
      (content) => {
        return content.content.dashboard.section2;
      }
    )
  );

  return (
    <Box>
      <section
        className={`d-flex justify-content-around flex-wrap ${
          styles["section-2"]
        } ${mode === "dark" ? styles.dark : styles.light}`}
      >
        <LeftSide content={content} />
        <RightSide />
      </section>
      <Divider style={{ background: "gray" }} />
    </Box>
  );
};

export default Section2;
