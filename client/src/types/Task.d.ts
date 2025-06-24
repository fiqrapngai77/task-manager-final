import type { Severity, Status } from "../constants/Task.enum";

export type Task = {
  id: number | null;
  title: string;
  description: string;
  updated_at: string;
  status: Status;
  severity: Severity;
};
