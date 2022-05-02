import React from "react";
import { AppBar, Box, Toolbar } from "@mui/material";
import { SearchInput, MenuButton } from "./index";

export const Nav = () => {
  return (
    <Box sx={{ flexGrow: 1, position: "fixed", zIndex: "1", width: "100%" }}>
      <AppBar>
        <Toolbar>
          <MenuButton />
          <SearchInput />
        </Toolbar>
      </AppBar>
    </Box>
  );
};
