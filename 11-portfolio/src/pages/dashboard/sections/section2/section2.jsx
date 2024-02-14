import { useSelector } from "react-redux";
import { Box, Divider } from "@mui/material";
import LeftSide from "./sides/leftSide/leftSide";
import RightSide from "./sides/rightSide/rightSide";
import "./section2.scss";

const Section2 = () => {
  const mode = useSelector((state) => state.mode.mode);
  const content = useSelector((state) => state.content.dashboard.section2);

  return (
    <Box>
      <section
        className={`d-flex justify-content-around flex-wrap section-2 ${mode}`}
      >
        <LeftSide content={content} />
        <RightSide />
      </section>
      <Divider style={{ background: "gray" }} />
    </Box>
  );
};

export default Section2;
