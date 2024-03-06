import { Box, Paper } from "@mui/material";
import Search from "./components/search/search";
import SelectMenu from "./components/select/select";

const Menu = ({ content, handleSearch }) => {
  return (
    <Box className="mb-4">
      <Paper elevation={3} className="p-3">
        <Search handleSearch={handleSearch} />
        <SelectMenu
          selectName={content.repositorySelectLabelName}
          selectValuesAndNames={content.repositorySelectLabelValuesAndNames}
        />
        <SelectMenu
          selectName={content.sortSelectLabelName}
          selectValuesAndNames={content.sortSelectLabelValuesAndNames}
          defaultValue={content.sortSelectLabelValuesAndNames[0].value}
          minWidth={100}
        />
      </Paper>
    </Box>
  );
};

export default Menu;
