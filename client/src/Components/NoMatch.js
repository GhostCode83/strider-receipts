import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
export const NoMatch = () => {
  return (
    <Typography sx={{ fontSize: 28 }} variant="body">
      Nothing to see here. Return to the <Link to={"/"}>Home Screen</Link>.
    </Typography>
  );
};
