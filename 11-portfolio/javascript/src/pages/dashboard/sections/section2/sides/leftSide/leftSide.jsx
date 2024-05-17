import { useSelector } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";
import SlideFromBottom from "../../../../../../components/framerMotion/slideFromBottom/slideFromBottom";
import styles from "./leftSide.module.scss";

const LeftSide = ({ content }) => {
  const startYear = useSelector(
    createSelector(
      (mode) => {
        return mode;
      },
      (content) => {
        return content.content.startYear;
      }
    )
  );

  return (
    <div className={styles["left-side"]}>
      <SlideFromBottom once>
        <p className={styles.title}>
          {content.title.part1}
          <span className={styles["main-color"]}>{content.title.part2}</span>
          {content.title.part3}
        </p>
      </SlideFromBottom>
      <SlideFromBottom once>
        <p className={styles.description}>{content.description}</p>
      </SlideFromBottom>
      <div className={`d-flex ${styles.feautures}`}>
        <SlideFromBottom once>
          <div>
            <p className={styles["main-color"]}>52+</p>
            <span>Projects</span>
          </div>
        </SlideFromBottom>
        <SlideFromBottom once>
          <div>
            <p className={styles["main-color"]}>
              {new Date().getFullYear() - startYear}+
            </p>
            <span>Years of experience</span>
          </div>
        </SlideFromBottom>
      </div>
    </div>
  );
};

export default LeftSide;
