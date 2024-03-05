import { Box, Paper } from "@mui/material";
import Search from "./components/search/search";
import SelectMenu from "./components/select/select";

const Menu = ({ content }) => {
  return (
    <Box className="mb-4">
      <Paper elevation={3} className="p-3">
        <Search />
        <SelectMenu
          selectName={content.repositorySelectLabelName}
          selectValuesAndNames={content.repositorySelectLabelValuesAndNames}
        />
      </Paper>
    </Box>
  );
};

export default Menu;
