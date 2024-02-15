import { useEffect } from "react";
import { useSelector } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";
import LeftSide from "./sides/leftSide/leftSide";
import RightSide from "./sides/rightSide/rightSide";
import "./section1.scss";

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

  useEffect(() => {
    const button = document.querySelector(".slide-into-view");
    const element = document.querySelector(".section-2");

    function scrollTo() {
      element.scrollIntoView();
    }

    button.addEventListener("click", scrollTo);

    return () => button.removeEventListener("click", scrollTo);
  }, []);

  return (
    <section className="position-relative d-flex justify-content-around align-items-center flex-wrap-reverse section-1">
      <LeftSide content={content} />
      <RightSide />
    </section>
  );
};

export default Section1;
