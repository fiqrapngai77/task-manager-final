import { Severity, Status } from "../constants/Task.enum";
import type { TDropdown } from "../types/Dropdown";
import type { Task } from "../types/Task.d";

export const mockTasksData: Task[] = [
  {
    id: 1,
    title: "Task 1",
    description: "This is task number 1",
    updated_at: new Date().toString(),
    status: Status.inProgress,
    severity: Severity.minor,
  },
  {
    id: 2,
    title: "Task 2",
    description: "This is task number 2",
    updated_at: new Date().toString(),
    status: Status.completed,
    severity: Severity.major,
  },
  {
    id: 3,
    title: "Task 3",
    description: "This is task number 3",
    updated_at: new Date().toString(),
    status: Status.completed,
    severity: Severity.minor,
  },
];

export const mockOptions: TDropdown[] = [
  { text: "one", value: "1" },
  { text: "two", value: "2" },
];
