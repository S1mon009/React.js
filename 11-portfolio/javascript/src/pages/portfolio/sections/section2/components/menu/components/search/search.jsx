import { useSearchParams, useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";

const Search = () => {
  const navigate = useNavigate();
  let [searchParams, setSearchParams] = useSearchParams();

  function handleChange(event) {
    setSearchParams({ search: event.target.value });
    navigate(`/portfolio?search=${encodeURIComponent(event.target.value)}`);
  }
  return (
    <TextField
      id="outlined-basic"
      label="Search"
      variant="outlined"
      className="me-3"
      onChange={handleChange}
    />
  );
};

export default Search;
