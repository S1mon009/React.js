import {
  CircularProgress,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Box,
  Divider,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import { useParams, useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchProjects } from "../../../../../../util/http";
import styles from "./projects.module.scss";

const Projects = () => {
  const params = useParams();
  let [searchParams, setSearchParams] = useSearchParams();
  let content;
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["projects", params],
    queryFn: () => fetchProjects(),
    staleTime: 10000,
  });

  function createContent(content) {
    if (content.length === 0) {
      return "Nothing found";
    }
    return content.map((project, index) => {
      return (
        <Card
          sx={{ maxWidth: 345 }}
          key={index}
          className={styles.card}
          elevation={3}
        >
          <CardMedia
            component="img"
            alt={project.image}
            height="140"
            image={project.image}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              className={styles["card-title"]}
            >
              {project.title}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              className={styles["card-description"]}
            >
              {project.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="contained" startIcon={<GitHubIcon />}>
              GitHub
            </Button>
            <Button variant="outlined" startIcon={<LanguageIcon />}>
              Live demo
            </Button>
          </CardActions>
        </Card>
      );
    });
  }
  function sortContent(content) {}

  if (isLoading) {
    content = <CircularProgress />;
  }
  if (data) {
    if (!searchParams.get("search")) {
      content = createContent(data);
    } else if (searchParams.get("search")) {
      const filteredData = data.filter((e) =>
        e.title.toLowerCase().includes(searchParams.get("search"))
      );
      content = createContent(filteredData);
    }
  }
  return (
    <Box>
      <div className="d-flex flex-wrap gap-3 mb-4">{content}</div>
      <Divider style={{ background: "gray" }} />
    </Box>
  );
};

export default Projects;
