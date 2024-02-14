import { useEffect } from "react";
import { useSelector } from "react-redux";
import LeftSide from "./sides/leftSide/leftSide";
import RightSide from "./sides/rightSide/rightSide";
import "./section1.scss";

const Section1 = () => {
  const content = useSelector((state) => state.content.dashboard.section1);

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
