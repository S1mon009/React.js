import { useState } from "react";
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

const Projects = ({ search, sort, repository }) => {
  const params = useParams();
  const [conditions, setConditions] = useState([search, sort, repository]);
  let content;
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["projects", params],
    queryFn: () => fetchProjects(),
    staleTime: 10000,
  });

  function createContent(data, search, repository, sort) {
    let temporaryContent;

    temporaryContent = filterContent(data, search, repository);

    if (temporaryContent.length === 0) {
      return "Nothing found";
    }

    temporaryContent = sortContent(data, sort);

    return temporaryContent.map((project, index) => {
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
  function sortContent(data, sort) {
    if (sort === "A-Z") {
      data.sort((a, b) => {
        if (a.title < b.title) {
          return -1;
        }
        if (a.title > b.title) {
          return 1;
        }
        return 0;
      });
    }
    if (sort === "Z-A") {
      data.sort((a, b) => a.title - b.title);
      return data;
    }
    return data;
  }
  function filterContent(data, search, repository) {
    if (search || repository) {
      data = data.filter((e) => {
        if (search) {
          return e.title.toLowerCase().includes(search);
        }
        if (repository) {
          return e.repository === repository;
        }
        if (search && repository) {
          return (
            e.title.toLowerCase().includes(search) &&
            e.repository === repository
          );
        }
      });
      return data;
    }
    return data;
  }

  if (isLoading) {
    content = <CircularProgress />;
  }
  if (isError || error) {
    content = "Error";
  }
  if (data) {
    content = createContent(data, search, repository, sort);
  }
  return (
    <Box>
      <div className={`d-grid mb-4 ${styles.cards}`}>{content}</div>
      <Divider style={{ background: "gray" }} />
    </Box>
  );
};

export default Projects;
