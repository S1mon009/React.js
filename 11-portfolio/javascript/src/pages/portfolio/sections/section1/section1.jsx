import { useSelector } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";
import LeftSide from "./sides/leftSide/leftSide";
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
  return (
    <section className={`d-flex ${styles["section-1"]}`}>
      <LeftSide content={content} />
    </section>
  );
};

export default Section1;
