import { Suspense, memo, lazy } from "react";
import CircularProgress from "@mui/material/CircularProgress";
const LeftSide = lazy(() => import("./leftSide/leftSide"));
const RightSide = lazy(() => import("./rightSide/rightSide"));
const Footer = lazy(() => import("../../components/footer/footer"));
import { Box, Divider } from "@mui/material";

const Contact = memo(() => {
  return (
    <Suspense fallback={<CircularProgress />}>
      <main>
        <Box>
          <div className="w-100 d-flex justify-content-around flex-wrap mb-4">
            <LeftSide />
            <RightSide />
          </div>{" "}
          <Divider style={{ background: "gray" }} />
        </Box>
        <Footer />
      </main>
    </Suspense>
  );
});

export default Contact;
