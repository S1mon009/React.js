import { useSelector } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";
import { Box, Divider } from "@mui/material";
import LeftSide from "./sides/leftSide/leftSide";
import RightSide from "./sides/rightSide/rightSide";
import styles from "./section3.module.scss";

const Section3 = () => {
  const content = useSelector(
    createSelector(
      (mode) => {
        return mode;
      },
      (content) => {
        return content.content.dashboard.section3;
      }
    )
  );

  return (
    <Box>
      <section
        className={`d-flex justify-content-around flex-wrap-reverse ${styles["section-3"]}`}
      >
        <LeftSide content={content} />
        <RightSide content={content} />
      </section>
      <Divider style={{ background: "gray" }} />
    </Box>
  );
};

export default Section3;
