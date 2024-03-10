import { InputLabel, MenuItem, FormControl, Select } from "@mui/material";

const SelectMenu = ({
  selectName,
  selectValuesAndNames,
  defaultValue,
  minWidth,
}) => {
  return (
    <FormControl sx={{ minWidth: minWidth ? minWidth : 150 }}>
      <InputLabel id="repository-select-label">{selectName}</InputLabel>
      <Select
        labelId="repository-select-label"
        id="repository-select-label"
        // value={age}
        label={selectName}
        defaultValue={defaultValue ? defaultValue : ""}
        className="me-3"
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
