import { InputLabel, MenuItem, FormControl, Select } from "@mui/material";

const SelectMenu = ({
  selectName,
  selectValuesAndNames,
  defaultValue,
  minWidth,
  value,
  onChange,
}) => {
  return (
    <FormControl sx={{ minWidth: minWidth ? minWidth : 150 }}>
      <InputLabel id="repository-select-label">{selectName}</InputLabel>
      <Select
        labelId="repository-select-label"
        id="repository-select-label"
        value={value}
        label={selectName}
        defaultValue={defaultValue ? defaultValue : ""}
        className="me-3"
        onChange={onChange}
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
