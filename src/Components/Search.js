import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useReceipts, useReceiptsUpdate } from "../Context/ReceiptsContext";
import { useNavigate, useLocation } from "react-router-dom";
import { Search, SearchIconWrapper, StyledInputBase } from "../style/index";

export const SearchInput = () => {
  const [error, setError] = useState(false);
  const location = useLocation();
  const filterReceipts = useReceiptsUpdate();
  const receipts = useReceipts();
  const navigate = useNavigate();

  const handleChange = (e) => {
    if (location !== "/") {
      navigate("/");
    }
    if (typeof filterReceipts === "function") {
      filterReceipts(e);
    }
  };

  useEffect(() => {
    if (receipts && !receipts.length) {
      setError(true);
    } else {
      setError(false);
    }
  }, [receipts]);

  return (
    <>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
          onChange={(e) => handleChange(e)}
        />
      </Search>
      {error && <Typography>No matches to search term</Typography>}
    </>
  );
};
