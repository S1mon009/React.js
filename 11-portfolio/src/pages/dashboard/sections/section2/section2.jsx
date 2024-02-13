import { lazy } from "react";
import { useSelector } from "react-redux";
const Box = lazy(() => import("@mui/material/Box"));
const Divider = lazy(() => import("@mui/material/Divider"));
const LeftSide = lazy(() => import("./sides/leftSide/leftSide"));
const RightSide = lazy(() => import("./sides/rightSide/rightSide"));
import "./section2.scss";

const Section2 = () => {
  const mode = useSelector((state) => state.mode.mode);
  const languageIndex = +useSelector(
    (state) => state.language.currentLanguageIndex
  );
  const contentLeft = useSelector(
    (state) => state.language.pages.dashboard.section2.leftSide
  );

  return (
    <Box>
      <section
        className={`d-flex justify-content-around flex-wrap section-2 ${mode}`}
      >
        <LeftSide contentLeft={contentLeft} languageIndex={languageIndex} />
        <RightSide />
      </section>
      <Divider style={{ background: "gray" }} />
    </Box>
  );
};

export default Section2;
