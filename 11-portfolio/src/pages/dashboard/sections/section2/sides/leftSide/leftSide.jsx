import { useSelector } from "react-redux";
import SlideFromBottom from "../../../../../../components/framerMotion/slideFromBottom/slideFromBottom";

const LeftSide = ({ content }) => {
  const startYear = useSelector((state) => state.content.startYear);

  return (
    <div className="left-side">
      <SlideFromBottom once={true}>
        <p className="title">
          {content.title.part1}
          <span className="main-color">{content.title.part2}</span>
          {content.title.part3}
        </p>
      </SlideFromBottom>
      <SlideFromBottom once={true}>
        <p className="description">{content.description}</p>
      </SlideFromBottom>
      <div className="d-flex feautures">
        <SlideFromBottom once={true}>
          <div>
            <p className="main-color">52+</p>
            <span>Projects</span>
          </div>
        </SlideFromBottom>
        <SlideFromBottom once={true}>
          <div>
            <p className="main-color">
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
