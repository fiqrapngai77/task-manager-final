import { render, screen, waitFor } from "@testing-library/react";
import TaskCard from "../TaskCard";
import { mockTasksData } from "../../../data/mockData";
describe("TaskCard", () => {
  test("Renders TaskCard", () => {
    render(<TaskCard task={mockTasksData[0]} />);
    waitFor(() => {
      expect(screen.getByTestId("taskcard-test-id")).toBeInTheDocument();
    });
  });

  test("Renders TaskCard with correct data", () => {
    render(<TaskCard task={mockTasksData[0]} />);
    waitFor(() => {
      expect(screen.getByTestId("taskcard-test-id")).toBeInTheDocument();
      expect(screen.getByTestId("taskcard-test-id")).toHaveTextContent(
        "Task 1"
      );
    });
  });
});
