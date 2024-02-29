import { Link } from "react-router-dom";
import SlideFromBottom from "../../../../../../components/framerMotion/slideFromBottom/slideFromBottom";
import { Paper } from "@mui/material";
import MonitorIcon from "@mui/icons-material/Monitor";
import StorageIcon from "@mui/icons-material/Storage";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import styles from "./rightSide.module.scss";

const RightSide = () => {
  const categories = [
    {
      title: "Front-end",
      icon: <MonitorIcon color="primary" fontSize="large" />,
    },
    {
      title: "Back-end",
      icon: <StorageIcon color="primary" fontSize="large" />,
    },
    {
      title: "Fullstack",
      icon: <DashboardIcon color="primary" fontSize="large" />,
    },
  ];

  function setLocalActiveTypeDev(value) {
    localStorage.setItem("dev", value);
  }

  return (
    <div className={styles["right-side"]}>
      {categories.map((category, index) => {
        return (
          <SlideFromBottom
            once={true}
            className={styles["framer-motion-paper"]}
            key={`${Date.now()}-${index}`}
          >
            <Paper
              className="d-flex justify-content-between align-items-center p-4 paper"
              elevation={3}
              key={index}
            >
              <div>
                {category.icon}
                <span>{category.title}</span>
              </div>
              <Link
                to="portfolio"
                onClick={setLocalActiveTypeDev.bind(null, category.title)}
              >
                <div className={styles["cursoir-pointer"]}>
                  <ArrowForwardIcon color="primary" fontSize="large" />
                </div>
              </Link>
            </Paper>
          </SlideFromBottom>
        );
      })}
    </div>
  );
};

export default RightSide;
