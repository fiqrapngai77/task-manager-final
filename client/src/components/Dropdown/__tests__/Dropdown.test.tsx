import { render, screen } from "@testing-library/react";
import { fn } from "storybook/internal/test";
import Dropdown from "../Dropdown";
import { mockOptions } from "../../../data/mockData";
describe("Dropdown", () => {
  test("Renders Dropdown", () => {
    render(<Dropdown options={mockOptions} handler={fn()} value="" />);
    expect(screen.getByTestId("dropdown-test-id")).toBeInTheDocument();
  });

  test("Dropdown has correct options", () => {
    render(<Dropdown options={mockOptions} handler={fn()} value="" />);
    expect(screen.getByTestId("dropdown-test-id")).toHaveTextContent("one");
    expect(screen.getByTestId("dropdown-test-id")).toHaveTextContent("two");
  });

  test("Dropdown has label when available", () => {
    render(
      <Dropdown options={mockOptions} label="numbers" handler={fn()} value="" />
    );
    expect(screen.getByTestId("dropdown-test-id")).toHaveTextContent("numbers");
  });
});
