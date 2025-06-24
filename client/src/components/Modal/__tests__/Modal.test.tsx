import { render, screen, waitFor } from "@testing-library/react";
import { fn } from "storybook/internal/test";
import Modal from "../Modal";
describe("Modal", () => {
  test("Renders Modal", () => {
    render(<Modal isOpen={true} onClose={fn()} />);

    waitFor(() => {
      expect(screen.getByTestId("modal-test-id")).toBeInTheDocument();
    });
  });

  test("Modal should not render on false", () => {
    render(<Modal isOpen={false} onClose={fn()} />);
    waitFor(() => {
      expect(screen.queryByTestId("modal-test-id")).not.toBeInTheDocument();
    });
  });
});
