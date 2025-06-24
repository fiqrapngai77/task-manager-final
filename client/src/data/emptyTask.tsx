import { Severity, Status } from "../constants/Task.enum";

export const emptyTask = {
  id: 0,
  title: "",
  description: "",
  status: Status.inProgress,
  severity: Severity.minor,
  updated_at: new Date().toString(),
};
