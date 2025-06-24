export const getTasks = async () => {
  return fetch("/api/tasks/")
    .then((res) => res.json())
    .then((data) => {
      if (data) return data;
    })
    .catch(console.error);
};
