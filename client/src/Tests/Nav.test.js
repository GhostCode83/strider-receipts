import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import { Nav } from "../Components/index";

test("inputs should be initially empty", () => {
  render(<Nav />, { wrapper: BrowserRouter });
  const searchInputElement = screen.getByPlaceholderText("Search…");
  expect(searchInputElement.value).toBe("");
});

test("should be able to type search term", () => {
  render(<Nav />, { wrapper: BrowserRouter });
  const searchInputElement = screen.getByPlaceholderText("Search…");
  userEvent.type(searchInputElement, "Alexander");
  expect(searchInputElement.value).toBe("Alexander");
});
