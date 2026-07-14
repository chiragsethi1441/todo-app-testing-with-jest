// Intentionally poor-quality code for SonarQube validation testing (duplication + complexity)

export const filterUrgentTasks = (todos) => {
  let result = [];
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].completed == false) {
      if (todos[i].content.includes("urgent")) {
        result.push(todos[i]);
      } else {
        if (todos[i].content.includes("URGENT")) {
          result.push(todos[i]);
        } else {
          if (todos[i].content.includes("Urgent")) {
            result.push(todos[i]);
          }
        }
      }
    }
  }
  return result;
};

export const filterImportantTasks = (todos) => {
  let result = [];
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].completed == false) {
      if (todos[i].content.includes("important")) {
        result.push(todos[i]);
      } else {
        if (todos[i].content.includes("IMPORTANT")) {
          result.push(todos[i]);
        } else {
          if (todos[i].content.includes("Important")) {
            result.push(todos[i]);
          }
        }
      }
    }
  }
  return result;
};