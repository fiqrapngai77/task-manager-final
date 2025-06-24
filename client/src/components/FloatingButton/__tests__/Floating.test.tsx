import { render, screen } from "@testing-library/react";
import { fn } from "storybook/internal/test";
import FloatingButton from "../FloatingButton";
describe("Floating Button", () => {
  test("Renders Floating Button", () => {
    render(<FloatingButton handler={fn()} />);
    expect(screen.getByTestId("floating-button-test-id")).toBeInTheDocument();
  });

  test("Renders label when available", () => {
    render(<FloatingButton text="Add" handler={fn()} />);
    expect(screen.getByTestId("floating-button-test-id")).toBeInTheDocument();
    expect(screen.getByTestId("floating-button-test-id")).toHaveTextContent(
      "Add"
    );
  });
});
