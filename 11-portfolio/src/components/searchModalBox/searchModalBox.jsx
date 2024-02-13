import { lazy } from "react";
import { Box, List, Divider, TextField } from "@mui/material";

const SearchModalBox = ({ languageIndex }) => {
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
          label={
            languageIndex === 0 ? "Search for projects" : "Szukaj projektów"
          }
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
