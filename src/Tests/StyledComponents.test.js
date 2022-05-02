import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { StyledButton, StyledCard } from "../style/StyledComponents/index";

test("StyledButton calls onClick prop when clicked", () => {
  const handleClick = jest.fn();
  render(<StyledButton onClick={handleClick}>Click Me</StyledButton>);
  fireEvent.click(screen.getByText(/click me/i));
  expect(handleClick).toHaveBeenCalledTimes(1);
});

test("StyledCard calls onClick prop when clicked", () => {
  const handleClick = jest.fn();
  render(<StyledCard onClick={handleClick}>Click Me</StyledCard>);
  fireEvent.click(screen.getByText(/click me/i));
  expect(handleClick).toHaveBeenCalledTimes(1);
});
