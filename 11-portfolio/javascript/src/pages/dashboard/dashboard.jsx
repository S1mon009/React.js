import { memo, lazy, Suspense } from "react";
import { CircularProgress } from "@mui/material";
const Section1 = lazy(() => import("./sections/section1/section1"));
const Section2 = lazy(() => import("./sections/section2/section2"));
const Section3 = lazy(() => import("./sections/section3/section3"));
const Footer = lazy(() => import("../../components/footer/footer"));

const Dashboard = memo(() => {
  return (
    <main>
      <Suspense
        fallback={
          <CircularProgress className="position-absolute top-50 start-50 translate-middle" />
        }
      >
        <Section1 />
        <Section2 />
        <Section3 />
        <Footer />
      </Suspense>
    </main>
  );
});

export default Dashboard;
