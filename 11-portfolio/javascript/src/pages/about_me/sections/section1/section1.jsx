import { Box, Divider } from "@mui/material";
import { useSelector } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";
import LeftSide from "./sides/leftSide/leftSide";
import RightSide from "./sides/rightSide/rightSide";

const Section1 = () => {
  const content = useSelector(
    createSelector(
      (mode) => {
        return mode;
      },
      (content) => {
        return content.content.aboutMe.section1;
      }
    )
  );
  const image = useSelector(
    createSelector(
      (mode) => {
        return mode;
      },
      (content) => {
        return content.content.aboutMe.section1.image;
      }
    )
  );
  return (
    <Box>
      <section className="d-flex justify-content-around flex-wrap-reverse align-items-center gap-3">
        <LeftSide image={image} />
        <RightSide content={content} />
      </section>
      <Divider style={{ background: "gray" }} />
    </Box>
  );
};

export default Section1;
