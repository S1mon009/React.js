import { Box, List, Divider, TextField } from "@mui/material";

const SearchModalBox = () => {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <List>
        <TextField
          id="outlined-search"
          label={"Search for projects"}
          type="search"
          size="small"
          style={{ width: "95%" }}
        />
      </List>
      <Divider />
      <List></List>
    </Box>
  );
};

export default SearchModalBox;
