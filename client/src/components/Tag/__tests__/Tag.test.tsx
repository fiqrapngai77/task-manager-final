import { render, screen } from "@testing-library/react";
import Tag from "../Tag";

describe("Tags", () => {
  test("Renders Tag", () => {
    render(<Tag text="Urgent" />);
    expect(screen.getByTestId("tag-test-id")).toBeInTheDocument();
  });

  test("Tag has correct text", () => {
    render(<Tag text="Urgent" />);
    expect(screen.getByTestId("tag-test-id")).toHaveTextContent("Urgent");
  });
});
