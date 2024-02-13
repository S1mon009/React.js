import { lazy } from "react";
const SlideFromBottom = lazy(() =>
  import(
    "../../../../../../components/framerMotion/slideFromBottom/slideFromBottom"
  )
);

const LeftSide = ({ contentLeft, languageIndex }) => {
  const startYear = 2021;

  return (
    <div className="left-side">
      <SlideFromBottom once={true}>
        <p className="title">
          {contentLeft.paragraph1.part1[languageIndex]}
          <span className="main-color">
            {contentLeft.paragraph1.part2[languageIndex]}
          </span>
          {contentLeft.paragraph1.part3[languageIndex]}
        </p>
      </SlideFromBottom>
      <SlideFromBottom once={true}>
        <p className="description">
          {contentLeft.paragraph2.part1[languageIndex]}
          <span className="main-color">
            {contentLeft.paragraph2.part2[languageIndex]}
          </span>
          {contentLeft.paragraph2.part3[languageIndex]}
        </p>
      </SlideFromBottom>

      <div className="d-flex feautures">
        <SlideFromBottom once={true}>
          <div>
            <p className="main-color">52+</p>
            <span>{contentLeft.paragraph3.part1[languageIndex]}</span>
          </div>
        </SlideFromBottom>
        <SlideFromBottom once={true}>
          <div>
            <p className="main-color">
              {new Date().getFullYear() - startYear}+
            </p>
            <span>{contentLeft.paragraph3.part2[languageIndex]}</span>
          </div>
        </SlideFromBottom>
      </div>
    </div>
  );
};

export default LeftSide;
