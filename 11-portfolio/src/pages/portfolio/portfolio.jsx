import { Suspense, memo } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import "./portfolio.scss";

const Portfolio = memo(() => {
  return (
    <Suspense fallback={<CircularProgress />}>
      <main>
        <h1>Portfolio</h1>
      </main>
    </Suspense>
  );
});

export default Portfolio;
