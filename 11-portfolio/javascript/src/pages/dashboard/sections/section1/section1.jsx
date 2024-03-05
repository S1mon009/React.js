import { useSelector } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";
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
        return content.content.dashboard.section1;
      }
    )
  );
  const image = useSelector(
    createSelector(
      (mode) => {
        return mode;
      },
      (content) => {
        return content.content.dashboard.section1.image;
      }
    )
  );

  return (
    <section
      className={`position-relative d-flex justify-content-around align-items-center flex-wrap-reverse ${styles["section-1"]}`}
    >
      <LeftSide content={content} />
      <RightSide image={image} />
    </section>
  );
};

export default Section1;
