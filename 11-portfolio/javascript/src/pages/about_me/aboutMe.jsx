import { Suspense, memo, lazy } from "react";
import CircularProgress from "@mui/material/CircularProgress";
const Section1 = lazy(() => import("./sections/section1/section1"));
const Section2 = lazy(() => import("./sections/section2/section2"));
const Section3 = lazy(() => import("./sections/section3/section3"));
const Footer = lazy(() => import("../../components/footer/footer"));

const AboutMe = memo(() => {
  return (
    <Suspense
      fallback={
        <CircularProgress className="position-absolute top-50 start-50 translate-middle" />
      }
    >
      <main>
        <Section1 />
        <Section2 />
        <Section3 />
        <Footer />
      </main>
    </Suspense>
  );
});

export default AboutMe;
