import React from "react";
import { Button } from "@mui/material";

export const StyledButton = ({ children, onClick, type, disabled }) => {
  return (
    <Button
      onClick={onClick}
      type={type}
      disabled={disabled}
      variant="contained"
    >
      {children}
    </Button>
  );
};
