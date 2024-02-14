import { Button } from "@mui/material";
import { blue, grey } from "@mui/material/colors";
import "./leftSide.scss";

const LeftSide = ({ content }) => {
  return (
    <div className="left-side">
      <h1>{content.firstH1}</h1>
      <h1 style={{ color: blue[500], fontWeight: 800 }}>{content.secondH1}</h1>
      <h1>{content.thirdH1}</h1>
      <h3 style={{ color: grey[500] }}>{content.firstH3}</h3>
      <Button variant="contained" size="large" className="slide-into-view">
        See more
      </Button>
    </div>
  );
};

export default LeftSide;
