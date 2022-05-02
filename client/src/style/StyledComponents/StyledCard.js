import React from "react";
import { Card } from "@mui/material";

export const StyledCard = ({ children, onClick }) => {
  return (
    <Card
      onClick={onClick}
      sx={{ boxShadow: 4, margin: "14px 7px 0 7px", padding: 3 }}
    >
      {children}
    </Card>
  );
};
