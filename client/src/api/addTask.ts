import type { Task } from "../types/Task";

export const addTaskApi = async (task: Omit<Task, "id">) => {
  return fetch("/api/tasks/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data) return data;
    })
    .catch(console.error);
};
