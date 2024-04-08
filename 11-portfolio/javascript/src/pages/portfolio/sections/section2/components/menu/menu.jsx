import { Box, Paper } from "@mui/material";
import Search from "./components/search/search";
import SelectMenu from "./components/select/select";

const Menu = ({
  content,
  handleSearch,
  sortValue,
  handleSort,
  repositoryValue,
  handleRepository,
}) => {
  return (
    <Box className="mb-4">
      <Paper elevation={3} className="d-flex flex-wrap p-3 gap-2">
        <Search handleSearch={handleSearch} />
        <SelectMenu
          selectName={content.repositorySelectLabelName}
          selectValuesAndNames={content.repositorySelectLabelValuesAndNames}
          value={repositoryValue}
          onChange={handleRepository}
        />
        <SelectMenu
          selectName={content.sortSelectLabelName}
          selectValuesAndNames={content.sortSelectLabelValuesAndNames}
          defaultValue={content.sortSelectLabelValuesAndNames[0].value}
          minWidth={100}
          value={sortValue}
          onChange={handleSort}
        />
      </Paper>
    </Box>
  );
};

export default Menu;
