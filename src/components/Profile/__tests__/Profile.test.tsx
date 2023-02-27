import { render } from "@testing-library/react";
import { Status } from "../Status";
import { create } from "react-test-renderer";

test("render profile status", () => {
  const view = render(<Status text={""} updateStatus={() => {}} />);
//   const root = component.root;
//   const span = root.findByType("span");
//   console.log(view);
  expect(view).toHaveAttribute("text", "");
});

// test("status no active mode", () => {
//   const component = create(<Status text={""} updateStatus={() => {}} />);
//   const root = component.root;
//   const span = root.findByType("span");
//   expect(span).not.toBeNull();
// });
