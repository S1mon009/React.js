import { lazy, useEffect, useState } from "react";
const SlideFromBottom = lazy(() =>
  import(
    "../../../../../../components/framerMotion/slideFromBottom/slideFromBottom"
  )
);
const Paper = lazy(() => import("@mui/material/Paper"));
const MonitorIcon = lazy(() => import("@mui/icons-material/Monitor"));
const StorageIcon = lazy(() => import("@mui/icons-material/Storage"));
const DashboardIcon = lazy(() => import("@mui/icons-material/Dashboard"));
const ArrowForwardIcon = lazy(() => import("@mui/icons-material/ArrowForward"));
import { Link } from "react-router-dom";

const RightSide = () => {
  const [content, setContent] = useState();
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
  useEffect(() => {
    const temporaryContent = categories.map((category, index) => {
      return (
        <SlideFromBottom
          once={true}
          className="framer-motion-paper"
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
              <div className="cursoir-pointer">
                <ArrowForwardIcon color="primary" fontSize="large" />
              </div>
            </Link>
          </Paper>
        </SlideFromBottom>
      );
    });
    setContent(temporaryContent);
  }, []);

  return <div className="right-side">{content}</div>;
};

export default RightSide;
