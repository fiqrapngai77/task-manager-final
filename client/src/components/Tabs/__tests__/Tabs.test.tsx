import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Tabs from "../Tabs";
describe("Tabs", () => {
  test("Renders Tabs", () => {
    render(<Tabs />);
    waitFor(() => {
      expect(screen.getByTestId("tabs-test-id")).toBeInTheDocument();
    });
  });

  test("Clicking on completed tab showing the completed list", () => {
    render(<Tabs />);
    waitFor(() => {
      expect(screen.getByTestId("tabs-test-id")).toBeInTheDocument();
      const completedTab = screen.getByText("Completed");
      fireEvent.click(completedTab);
    });

    waitFor(() => {
      expect(screen.getByTestId("complete-tab-test-id")).toBeInTheDocument();
    });
  });

  test("Clicking on inProgress tab showing the inProgress list", () => {
    render(<Tabs />);
    waitFor(() => {
      expect(screen.getByTestId("tabs-test-id")).toBeInTheDocument();
      const inProgressTab = screen.getByText("In-Progress");
      fireEvent.click(inProgressTab);
    });

    waitFor(() => {
      expect(screen.getByTestId("in-progress-tab-test-id")).toBeInTheDocument();
    });
  });
});
