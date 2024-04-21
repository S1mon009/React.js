<<<<<<< HEAD
import { useSelector } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";
import { Box } from "@mui/material";
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
      <section className="d-flex justify-content-between mt-5">
        <LeftSide knowledge={knowledge} />
        <RightSide
          technologies={technologies}
          languages={languages}
          advantages={advantages}
        />
      </section>
    </Box>
  );
};
=======
const Section3 = () => {};
>>>>>>> 38f68f46f99276bb9c68f36e575dc20a3749edd2

export default Section3;
