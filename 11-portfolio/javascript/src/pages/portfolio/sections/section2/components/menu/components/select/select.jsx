import { InputLabel, MenuItem, FormControl, Select } from "@mui/material";

const SelectMenu = ({ selectName, selectValuesAndNames }) => {
  return (
    <FormControl sx={{ minWidth: 200 }}>
      <InputLabel id="repository-select-label">{selectName}</InputLabel>
      <Select
        labelId="repository-select-label"
        id="repository-select-label"
        // value={age}
        label="Repository"
        // onChange={handleChange}
      >
        {selectValuesAndNames.map((selectValueAndName, index) => {
          return (
            <MenuItem value={selectValueAndName.value} key={index}>
              {selectValueAndName.name}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default SelectMenu;
