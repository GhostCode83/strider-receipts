import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { Home } from "../Components/index";

describe("Home component", () => {
  it("should render the home screen", () => {
    const home = render(<Home>Content of Home Component</Home>, {
      wrapper: BrowserRouter,
    });
    expect(home).toBeDefined();
  });

  it("should show an image on the page", () => {
    render(<Home />, { wrapper: BrowserRouter });
    const img = screen.getByAltText("team using analytics tools");
    expect(img).toBeInTheDocument();
  });
});
