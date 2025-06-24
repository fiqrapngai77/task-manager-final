import { render, screen } from "@testing-library/react";
import { fn } from "storybook/internal/test";
import Input from "../Input";
describe("Input", () => {
  test("Renders Input", () => {
    render(<Input label="Name" value="" handler={fn()} />);
    expect(screen.getByTestId("input-test-id")).toBeInTheDocument();
  });

  test("Renders label", () => {
    render(<Input label="Name" value="" handler={fn()} />);
    expect(screen.getByTestId("input-test-id")).toBeInTheDocument();
    expect(screen.getByTestId("input-test-id")).toHaveTextContent("Name");
  });
});
