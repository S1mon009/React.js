import { useSelector } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";
import { Box, Divider } from "@mui/material";
import LeftSide from "./sides/leftSide/leftSide";
import RightSide from "./sides/rightSide/rightSide";

const Section3 = () => {
  const { knowledge, technologies, languages, advantages } = useSelector(
    createSelector(
      (mode) => {
        return mode;
      },
      (content) => {
        return content.content.aboutMe.section3;
      }
    )
  );
  return (
    <Box>
      <section className="d-flex justify-content-around flex-wrap gap-2 mt-5 mb-5">
        <LeftSide knowledge={knowledge} />
        <RightSide
          technologies={technologies}
          languages={languages}
          advantages={advantages}
        />
      </section>
      <Divider style={{ background: "gray" }} />
    </Box>
  );
};

export default Section3;
