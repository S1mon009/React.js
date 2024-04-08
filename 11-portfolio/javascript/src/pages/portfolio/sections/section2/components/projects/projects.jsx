import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Box,
  Divider,
  Skeleton,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import Each from "../../../../../../components/each/each";
import Show from "../../../../../../components/show/show";
import styles from "./projects.module.scss";

const Projects = ({ data, isLoading, isError, error }) => {
  return (
    <Box>
      <div className={`d-grid mb-4 ${styles.cards}`}>
        <Show if={isError}>
          <p>Error: {error}</p>
        </Show>
        <Show if={isLoading}>
          <Each
            data={Array.from(new Array(4))}
            render={(_, index) => {
              return (
                <Box sx={{ maxWidth: 345 }} key={index}>
                  <Skeleton variant="rectangular" height={118} />
                  <Box sx={{ pt: 0.5 }}>
                    <Skeleton />
                    <Skeleton width="60%" />
                  </Box>
                </Box>
              );
            }}
          />
        </Show>
        <Show if={data && data.length > 0}>
          <Each
            data={data}
            render={(item, _) => {
              return (
                <Card
                  sx={{ maxWidth: 345 }}
                  key={item.id}
                  className={styles.card}
                  elevation={3}
                >
                  <CardMedia
                    component="img"
                    alt={item.image}
                    height="140"
                    image={item.image}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      className={styles["card-title"]}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      className={styles["card-description"]}
                    >
                      {item.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      variant="contained"
                      startIcon={<GitHubIcon />}
                      href={item.github}
                    >
                      GitHub
                    </Button>
                    <Button
                      variant="outlined"
                      startIcon={<LanguageIcon />}
                      href={item.livedemo}
                    >
                      Live demo
                    </Button>
                  </CardActions>
                </Card>
              );
            }}
          />
        </Show>
        <Show if={data && data.length === 0}>
          <p>Nothing found</p>
        </Show>
      </div>
      <Divider style={{ background: "gray" }} />
    </Box>
  );
};

export default Projects;
