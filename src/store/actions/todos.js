export const addTodo = (text) => ({
  type: "ADD_TODO",
  payload: { text },
});

export const removeTodo = (id, text) => ({
  type: "REMOVE_TODO",
  payload: {
    id,
    text,
  },
});
