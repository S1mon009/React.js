import { Suspense, memo } from "react";
import CircularProgress from "@mui/material/CircularProgress";

const Contact = memo(() => {
  return (
    <Suspense fallback={<CircularProgress />}>
      <main>
        <h1>contact</h1>
      </main>
    </Suspense>
  );
});

export default Contact;
