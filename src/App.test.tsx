import React from "react";
import { render } from "@testing-library/react";
import { MainApp } from "./MainApp";

test("renders react app", () => {
  const div = document.createElement("div");
  div.id = "root";
  const { baseElement } = render(<MainApp />);
  expect(baseElement).toBeInTheDocument();
});
