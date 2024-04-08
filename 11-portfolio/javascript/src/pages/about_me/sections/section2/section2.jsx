import { useSelector } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";
import { Divider, Box } from "@mui/material";
import CardList from "./components/cardList";

const Section2 = () => {
  const { educations, courses, works } = useSelector(
    createSelector(
      (mode) => {
        return mode;
      },
      (content) => {
        return content.content.aboutMe.section2;
      }
    )
  );

  return (
    <Box>
      <section className="d-flex justify-content-around flex-wrap gap-3 mt-5 mb-3">
        <CardList category="Education" data={educations} />
        <CardList category="Courses" data={courses} />
        <CardList category="Work" data={works} />
      </section>
      <Divider style={{ background: "gray" }} />
    </Box>
  );
};

export default Section2;
