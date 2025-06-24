export const deleteTaskApi = async (id: number) => {
  return fetch("/api/tasks/" + id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      if (data) return data;
    })
    .catch(console.error);
};
