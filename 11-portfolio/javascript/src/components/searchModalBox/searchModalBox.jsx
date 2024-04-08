import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Box, List, Divider, TextField, Skeleton } from "@mui/material";
import { searchProjects } from "../../util/http";
import CreateList from "./components/create-list";
import Each from "../each/each";
import Show from "../show/show";

const SearchModalBox = () => {
  const [value, setValue] = useState("");

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["search projects", value],
    queryFn: () => searchProjects(value),
    staleTime: 10000,
  });

  function onChange(event) {
    setValue(event.target.value);
  }

  return (
    <>
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
            value={value}
            onChange={onChange}
          />
        </List>
        <Divider />
      </Box>
      <Show if={isLoading && value != ""}>
        <Each
          data={Array.from(new Array(2))}
          render={(_, index) => {
            return (
              <Skeleton
                variant="rounded"
                width={"97%"}
                height={60}
                key={index}
                className="mt-2"
              />
            );
          }}
        />
      </Show>
      <Show if={isError && value != ""}>
        <p>Error: {error}</p>
      </Show>
      <Show if={data && value != ""}>
        <CreateList data={data} />
      </Show>
    </>
  );
};

export default SearchModalBox;
