import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListItem,
  IconButton,
} from "@mui/material";
import TripOriginIcon from "@mui/icons-material/TripOrigin";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import Each from "../../each/each";

const CreateList = ({ data }) => {
  return (
    <List sx={{ width: "97%", maxWidth: 360, bgcolor: "background.paper" }}>
      <Each
        data={data}
        render={(item, index) => {
          return (
            <ListItem
              key={item.id}
              secondaryAction={
                <>
                  <IconButton
                    color="primary"
                    edge="end"
                    aria-label="github"
                    className="me-1"
                    href={item.github}
                  >
                    <GitHubIcon />
                  </IconButton>
                  <IconButton
                    color="primary"
                    edge="end"
                    aria-label="live demo"
                    href={item.livedemo}
                  >
                    <LanguageIcon />
                  </IconButton>
                </>
              }
              disablePadding
            >
              <ListItemButton role={undefined} dense className="p-3">
                <ListItemIcon>
                  <TripOriginIcon />
                </ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
          );
        }}
      />
    </List>
  );
};

export default CreateList;
