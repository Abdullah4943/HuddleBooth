import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { Divider } from "@mui/material";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  border: "1px solid #d9d9d9;",
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));
const SearchBar = (props: any) => {
  return (
    <Search
      sx={{
        width: "20rem !important",
        marginTop: "2rem",
        marginLeft: "1rem !important",
        backgroundColor: "#f6f6f6",
        borderRadius: 5,
        outline: "1px solid grey",
      }}
    >
      <SearchIconWrapper>
        <SearchIcon sx={{ color: "black", fontSize: "20px" }} />
        <Divider
          orientation="vertical"
          variant="middle"
          flexItem
          sx={{ mx: 1 }}
        ></Divider>
      </SearchIconWrapper>

      <StyledInputBase
        sx={{ fontSize: "14px", width: "20rem !important", mx: 1 }}
        placeholder="Search here"
        inputProps={{ "aria-label": "search" }}
        onChange={(e) => {
          props.setSearchInput(e.target.value);
        }}
      />
    </Search>
  );
};

export default SearchBar;
