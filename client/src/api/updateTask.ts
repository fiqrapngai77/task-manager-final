import type { Task } from "../types/Task";

export const updateTaskApi = async (task: Task) => {
  return fetch("/api/tasks/" + task.id, {
    method: "PUT",
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
