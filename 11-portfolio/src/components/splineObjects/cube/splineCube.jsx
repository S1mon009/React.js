import { lazy, Suspense } from "react";
import { CircularProgress } from "@mui/material";
const Spline = lazy(() => import("@splinetool/react-spline"));

const SplineCube = () => {
  return (
    <div>
      <Suspense fallback={<CircularProgress />}>
        <Spline
          scene="https://prod.spline.design/XFvUA1JiKwHfUbyP/scene.splinecode"
          style={{
            height: "600px",
            width: "clamp(400px,600px,650px)",
          }}
        />
      </Suspense>
    </div>
  );
};

export default SplineCube;
