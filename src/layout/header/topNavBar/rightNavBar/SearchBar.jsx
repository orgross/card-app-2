import React from "react";
import { useTheme } from "../../../../providers/ThemeProvider";
import { useSearchParams } from "react-router-dom";
import { Box, FormControl, IconButton, InputAdornment, OutlinedInput } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  const { isDark } = useTheme();
  const { searchParams, setSearch } = useSearchParams();

  const handleChange = ({ target }) => {
    setSearch({ q: target.value });
  };
  
  const query = searchParams && searchParams.get("q");
  
  return (
    <Box display="inline-flex">
      <FormControl>
        <OutlinedInput
          sx={{ backgroundColor: isDark ? "#333333" : "#e3f2fd" }}
          placeholder="Search"
          size="small"
          value={query || ""}
          onChange={handleChange}
          endAdornment={
            <InputAdornment position="end">
              <IconButton edge="end">
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    </Box>
  );
};

export default SearchBar;
