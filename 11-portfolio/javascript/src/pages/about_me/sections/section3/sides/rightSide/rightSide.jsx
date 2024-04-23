import { useState } from "react";
import { Tabs, Tab, Typography, Box, Paper, Chip } from "@mui/material";
import Each from "../../../../../../components/each/each";
import styles from "./rightSide.module.scss";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
function chechLevel(level) {
  const successValue = "success";
  const primaryValue = "primary";
  const defaultValue = "default";

  const levelMap = new Map([
    ["Advanced", successValue],
    ["Native", successValue],
    ["C1", successValue],
    ["C2", successValue],
    ["Intermediate", primaryValue],
    ["B1", primaryValue],
    ["B2", primaryValue],
    ["Beginner", defaultValue],
    ["A1", defaultValue],
    ["A2", defaultValue],
  ]);

  return String(levelMap.get(level));
}

const RightSide = ({ technologies, languages, advantages }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "clamp(15.625rem,53.125rem,62.5rem)" }}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          maxWidth: { xs: 320, sm: "100%" },
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Technologies" {...a11yProps(0)} />
          <Tab label="Languages" {...a11yProps(1)} />
          <Tab label="Advantages" {...a11yProps(2)} />
        </Tabs>
      </Box>

      <CustomTabPanel value={value} index={0}>
        <div className={`d-grid ${styles["list-group"]}`}>
          <Each
            data={technologies}
            render={(item, index) => {
              return (
                <Paper elevation={3} className="p-2 me-2 mt-2" key={index}>
                  <div className={styles.list}>
                    <img
                      src={item.icon}
                      alt={`icon-${item.name}`}
                      loading="lazy"
                      className={`me-2 ${styles.icon}`}
                    />
                    <span>{item.name}</span>
                  </div>
                  <Chip
                    label={item.level}
                    color={chechLevel(item.level)}
                    variant="filled"
                    className="mt-1"
                    size="small"
                  />
                </Paper>
              );
            }}
          />
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <div className={`d-grid ${styles["list-group"]}`}>
          <Each
            data={languages}
            render={(item, index) => {
              return (
                <Paper elevation={3} className="p-2 me-2 mt-2" key={index}>
                  <div className={styles.list}>
                    <span>{item.name}</span>
                  </div>
                  <Chip
                    label={item.level}
                    color={chechLevel(item.level)}
                    variant="filled"
                    className="mt-1"
                    size="small"
                  />
                </Paper>
              );
            }}
          />
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <div className={`d-grid ${styles["list-group"]}`}>
          <Each
            data={advantages}
            render={(item, index) => {
              return (
                <Paper elevation={3} className="p-2 me-2 mt-2" key={index}>
                  <div className={styles.list}>
                    <span>{item.name}</span>
                  </div>
                  {item.level}
                </Paper>
              );
            }}
          />
        </div>
      </CustomTabPanel>
    </Box>
  );
};

export default RightSide;
