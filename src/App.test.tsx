import React from "react";
import { render, screen } from "@testing-library/react";
import MainApp from ".";

test("renders learn react link", () => {
  const view = render(<MainApp />);
  expect(view).toBeInTheDocument();
});
