import { render, screen } from "@testing-library/react";
import Button from "../Button";
import { fn } from "storybook/internal/test";

describe("Buttons", () => {
  test("Renders Button", () => {
    render(<Button text="Click Me" handler={fn()} />);
    expect(screen.getByTestId("button-test-id")).toBeInTheDocument();
  });

  test("Button has correct text", () => {
    render(<Button text="Click Me" handler={fn()} />);
    expect(screen.getByTestId("button-test-id")).toHaveTextContent("Click Me");
  });
});
