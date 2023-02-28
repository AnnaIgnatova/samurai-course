import { fireEvent, render } from "@testing-library/react";
import { Status } from "../Status";
import { create } from "react-test-renderer";

test("profile status text", () => {
  const component = create(
    <Status text={"new text"} updateStatus={() => {}} />
  );
  const root = component.root;
  const span = root.findByType("span");
  expect(span._fiber.stateNode.props.children).toBe("new text");
});

test("status no active mode", () => {
  const component = create(<Status text={""} updateStatus={() => {}} />);
  const root = component.root;
  const span = root.findByType("span");
  expect(span).not.toBeNull();
});
