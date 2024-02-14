import { Suspense, memo } from "react";
import CircularProgress from "@mui/material/CircularProgress";

const AboutMe = memo(() => {
  return (
    <Suspense fallback={<CircularProgress />}>
      <main>
        <h1>About me</h1>
      </main>
    </Suspense>
  );
});

export default AboutMe;
