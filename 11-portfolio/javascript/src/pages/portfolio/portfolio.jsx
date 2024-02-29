import { Suspense, memo, lazy } from "react";
import { CircularProgress } from "@mui/material";
const Section1 = lazy(() => import("./sections/section1/section1"));
// const Section2 = lazy(() => import("./sections/section2/section2"));
import "./portfolio.scss";

const Portfolio = memo(() => {
  return (
    <Suspense fallback={<CircularProgress />}>
      <main>
        <Section1 />
        {/* <Section2 /> */}
      </main>
    </Suspense>
  );
});

export default Portfolio;