import { useSelector } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";
import Menu from "./components/menu/menu";
import Projects from "./components/projects/projects";

import styles from "./section2.module.scss";

const Section2 = () => {
  const content = useSelector(
    createSelector(
      (mode) => {
        return mode;
      },
      (content) => {
        return content.content.portfolio.section2;
      }
    )
  );

  return (
    <section className={styles["section-2"]}>
      <Menu content={content} />
      <Projects />
    </section>
  );
};

export default Section2;
