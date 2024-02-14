import { lazy, Suspense, memo } from "react";
import CircularProgress from "@mui/material/CircularProgress";

const Section1 = lazy(() => import("./sections/section1/section1"));
const Section2 = lazy(() => import("./sections/section2/section2"));
import "./dashboard.scss";

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
      </Suspense>
    </main>
  );
});

export default Dashboard;
