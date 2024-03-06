import { Suspense, memo, lazy, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { CircularProgress } from "@mui/material";
const Section1 = lazy(() => import("./sections/section1/section1"));
const Section2 = lazy(() => import("./sections/section2/section2"));
const Footer = lazy(() => import("../../components/footer/footer"));
import "./portfolio.scss";

const Portfolio = memo(() => {
  let [params, setParams] = useSearchParams();

  useEffect(() => {
    const searchParam = params.get("search");

    if (searchParam) {
      params.delete("search");

      setParams(params);
    }
  }, []);

  return (
    <Suspense fallback={<CircularProgress />}>
      <main>
        <Section1 />
        <Section2 />
        <Footer />
      </main>
    </Suspense>
  );
});

export default Portfolio;
