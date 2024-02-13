import { useEffect, lazy } from "react";
const Button = lazy(() => import("@mui/material/Button"));
import { useSelector } from "react-redux";
const SplineCube = lazy(() =>
  import("../../../../components/splineObjects/cube/splineCube")
);
import { TypeAnimation } from "react-type-animation";
import { blue, grey } from "@mui/material/colors";
import "./section1.scss";

const Section1 = () => {
  const languageIndex = +useSelector(
    (state) => state.language.currentLanguageIndex
  );
  const content = useSelector(
    (state) => state.language.pages.dashboard.section1.leftSide
  );

  useEffect(() => {
    const button = document.querySelector(".slide-into-view");
    const element = document.querySelector(".section-2");

    function scrollTo() {
      element.scrollIntoView();
    }

    button.addEventListener("click", scrollTo);

    return () => button.removeEventListener("click", scrollTo);
  });

  return (
    <section className="position-relative d-flex justify-content-around align-items-center flex-wrap-reverse section-1">
      <div className="left-side">
        <h1>{content.mainTitle.firstH1[languageIndex]}</h1>
        <h1 style={{ color: blue[500], fontWeight: 800 }}>
          Front-end
          {/* <TypeAnimation
            sequence={content.mainTitle.secondH1}
            speed={20}
            repeat={Infinity}
            style={{ fontSize: "1.5em", color: blue[500], fontWeight: 800 }}
          /> */}
        </h1>
        <h1>{content.mainTitle.thirdH1[languageIndex]}</h1>
        <h3 style={{ color: grey[500] }}>
          {content.mainTitle.fourthH1[languageIndex]}
        </h3>
        <Button variant="contained" size="large" className="slide-into-view">
          {content.mainTitle.button[languageIndex]}
        </Button>
      </div>
      <div className="right-side">
        <SplineCube />
      </div>
    </section>
  );
};

export default Section1;
