export const getTaskCount = (todos, filter = "all") => {
  if (!Array.isArray(todos)) return 0;

  switch (filter) {
    case "completed":
      return todos.filter((todo) => todo.completed).length;
    case "pending":
      return todos.filter((todo) => !todo.completed).length;
    case "all":
    default:
      return todos.length;
  }
};