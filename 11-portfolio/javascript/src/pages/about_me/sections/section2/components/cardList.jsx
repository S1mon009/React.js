import { Paper, Divider, Box } from "@mui/material";
import TripOriginIcon from "@mui/icons-material/TripOrigin";
import Each from "../../../../../components/each/each";
import Show from "../../../../../components/show/show";
import SlideFromBottom from "../../../../../components/framerMotion/slideFromBottom/slideFromBottom";
import styles from "./styles.module.scss";

const CardList = ({ category, data }) => {
  return (
    <Box className={styles.list}>
      <SlideFromBottom once={true}>
        {" "}
        <h3>{category}</h3>
      </SlideFromBottom>
      <Each
        data={data}
        render={(item, index) => {
          return (
            <SlideFromBottom once={true}>
              {" "}
              <div className="d-flex mb-3 w-100" key={index}>
                <div>
                  <TripOriginIcon color="primary" className="me-2" />
                  <Divider
                    orientation="vertical"
                    style={{
                      background: "grey",
                      width: 4,
                      height: "calc(100% - 1.5625rem)",
                      transform: "translateX(0.625rem)",
                    }}
                  />
                </div>
                <Paper elevation={3} className="p-3 w-100">
                  <Show if={category === "Education"}>
                    <span className="fw-bold">{item.name}</span>{" "}
                    <span>{item.description}</span>
                    <br></br>
                    <span>{item.date}</span>
                  </Show>
                  <Show if={category != "Education"}>
                    <span className="fw-bold">{item.name}</span>{" "}
                    <span>{item.date}</span>
                    <br></br>
                    <span>{item.description}</span>
                  </Show>
                </Paper>
              </div>
            </SlideFromBottom>
          );
        }}
      />
    </Box>
  );
};

export default CardList;
