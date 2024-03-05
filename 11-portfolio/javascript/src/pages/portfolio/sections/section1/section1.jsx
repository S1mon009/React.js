import { useSelector } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";
import { Box, Divider } from "@mui/material";
import LeftSide from "./sides/leftSide/leftSide";
import RightSide from "./sides/rightSide/rightSide";
import styles from "./section1.module.scss";

const Section1 = () => {
  const content = useSelector(
    createSelector(
      (mode) => {
        return mode;
      },
      (content) => {
        return content.content.portfolio.section1;
      }
    )
  );
  const image = useSelector(
    createSelector(
      (mode) => {
        return mode;
      },
      (content) => {
        return content.content.portfolio.section1.image;
      }
    )
  );

  return (
    <Box>
      <section
        className={`d-flex justify-content-around flex-wrap align-items-center gap-3 ${styles["section-1"]}`}
      >
        <LeftSide content={content} />
        <RightSide image={image} />
      </section>
      <Divider style={{ background: "gray" }} />
    </Box>
  );
};

export default Section1;
