import React from "react";
import { render } from "@testing-library/react";
import NavBar from "./NavBar";

test("Navbar component", () => {
  const { container } = render(<NavBar />);
  expect(container.firstChild).toHaveClass("navbar-container");
});
